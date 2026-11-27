export interface GmailLabel {
  id: string;
  name: string;
  type?: string;
  messagesUnread?: number;
}

export interface GmailHeader {
  name: string;
  value: string;
}

export interface GmailMessagePart {
  mimeType?: string;
  body?: { data?: string; size?: number };
  parts?: GmailMessagePart[];
}

export interface GmailMessage {
  id: string;
  threadId: string;
  labelIds?: string[];
  snippet: string;
  internalDate?: string;
  payload?: {
    mimeType?: string;
    headers?: GmailHeader[];
    body?: { data?: string };
    parts?: GmailMessagePart[];
  };
}

export interface ParsedEmail {
  id: string;
  threadId: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  snippet: string;
  bodyText: string;
  isUnread: boolean;
  isStarred: boolean;
  labelIds: string[];
}

const GMAIL_BASE = 'https://gmail.googleapis.com/gmail/v1/users/me';

function decodeBase64UrlUtf8(data?: string): string {
  if (!data) return '';
  try {
    const base64 = data.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return '';
  }
}

function encodeBase64UrlUtf8(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function encodeMimeHeaderUtf8(value: string): string {
  // Encode non-ASCII subjects cleanly via RFC 2047 UTF-8 Base64
  if (/^[\x20-\x7E]*$/.test(value)) return value;
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `=?UTF-8?B?${btoa(binary)}?=`;
}

function stripHtmlToReadableText(html: string): string {
  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return (doc.body.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
  } catch {
    return html.replace(/<[^>]+>/g, ' ').trim();
  }
}

function extractBodyText(payload?: GmailMessage['payload']): string {
  if (!payload) return '';

  const findPart = (
    parts: GmailMessagePart[] | undefined,
    mime: string
  ): string | null => {
    if (!parts) return null;
    for (const part of parts) {
      if (part.mimeType === mime && part.body?.data) {
        return decodeBase64UrlUtf8(part.body.data);
      }
      if (part.parts) {
        const nested = findPart(part.parts, mime);
        if (nested) return nested;
      }
    }
    return null;
  };

  if (payload.mimeType === 'text/plain' && payload.body?.data) {
    return decodeBase64UrlUtf8(payload.body.data);
  }

  const plain = findPart(payload.parts, 'text/plain');
  if (plain) return plain;

  if (payload.mimeType === 'text/html' && payload.body?.data) {
    return stripHtmlToReadableText(decodeBase64UrlUtf8(payload.body.data));
  }

  const html = findPart(payload.parts, 'text/html');
  if (html) return stripHtmlToReadableText(html);

  return '';
}

export function parseGmailMessage(msg: GmailMessage): ParsedEmail {
  const headers = msg.payload?.headers || [];
  const getHeader = (name: string) =>
    headers.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value || '';

  const labelIds = msg.labelIds || [];
  const rawBody = extractBodyText(msg.payload);

  return {
    id: msg.id,
    threadId: msg.threadId,
    subject: getHeader('Subject') || '(No Subject)',
    from: getHeader('From') || 'Unknown Sender',
    to: getHeader('To') || '',
    date: getHeader('Date') || '',
    snippet: msg.snippet || '',
    bodyText: rawBody || msg.snippet || '',
    isUnread: labelIds.includes('UNREAD'),
    isStarred: labelIds.includes('STARRED'),
    labelIds,
  };
}

async function gmailFetch<T>(
  path: string,
  token: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${GMAIL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });

  if (res.status === 401) {
    throw new Error('AUTH_EXPIRED');
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gmail API error (${res.status}): ${text}`);
  }

  if (res.status === 204) {
    return {} as T;
  }

  return (await res.json()) as T;
}

export async function listLabels(token: string): Promise<GmailLabel[]> {
  const data = await gmailFetch<{ labels?: GmailLabel[] }>('/labels', token);
  return data.labels || [];
}

export async function listMessages(
  token: string,
  options: { labelId?: string; query?: string; maxResults?: number } = {}
): Promise<ParsedEmail[]> {
  const params = new URLSearchParams();
  params.set('maxResults', String(options.maxResults ?? 15));
  if (options.labelId) params.set('labelIds', options.labelId);
  if (options.query) params.set('q', options.query);

  const listData = await gmailFetch<{ messages?: { id: string }[] }>(
    `/messages?${params.toString()}`,
    token
  );

  const ids = listData.messages || [];
  if (ids.length === 0) return [];

  const detailed = await Promise.all(
    ids.map((m) =>
      gmailFetch<GmailMessage>(`/messages/${m.id}?format=full`, token)
    )
  );

  return detailed.map(parseGmailMessage);
}

export async function sendEmail(
  token: string,
  params: { to: string; subject: string; body: string }
): Promise<{ id: string }> {
  const rawMime = [
    `To: ${params.to}`,
    `Subject: ${encodeMimeHeaderUtf8(params.subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    '',
    params.body,
  ].join('\r\n');

  const raw = encodeBase64UrlUtf8(rawMime);
  return gmailFetch<{ id: string }>('/messages/send', token, {
    method: 'POST',
    body: JSON.stringify({ raw }),
  });
}

export async function createEmailDraft(
  token: string,
  params: { to: string; subject: string; body: string }
): Promise<{ id: string }> {
  const rawMime = [
    `To: ${params.to}`,
    `Subject: ${encodeMimeHeaderUtf8(params.subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    '',
    params.body,
  ].join('\r\n');

  const raw = encodeBase64UrlUtf8(rawMime);
  return gmailFetch<{ id: string }>('/drafts', token, {
    method: 'POST',
    body: JSON.stringify({ message: { raw } }),
  });
}

export async function modifyMessageLabels(
  token: string,
  messageId: string,
  addLabelIds: string[],
  removeLabelIds: string[]
): Promise<GmailMessage> {
  return gmailFetch<GmailMessage>(`/messages/${messageId}/modify`, token, {
    method: 'POST',
    body: JSON.stringify({ addLabelIds, removeLabelIds }),
  });
}

export async function trashMessage(
  token: string,
  messageId: string
): Promise<GmailMessage> {
  return gmailFetch<GmailMessage>(`/messages/${messageId}/trash`, token, {
    method: 'POST',
  });
}
