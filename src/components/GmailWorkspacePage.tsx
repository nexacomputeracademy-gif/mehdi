import React, { useCallback, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import {
  AlertTriangle,
  Archive,
  Check,
  Inbox,
  LogOut,
  Mail,
  MailOpen,
  PenSquare,
  RefreshCw,
  Search,
  Send,
  Star,
  Tag,
  Trash2,
  X,
} from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { PC_COMPONENTS } from '../data/pcComponents';
import {
  createEmailDraft,
  GmailLabel,
  listLabels,
  listMessages,
  modifyMessageLabels,
  ParsedEmail,
  sendEmail,
  trashMessage,
} from '../services/gmailApi';
import {
  clearCachedToken,
  getAccessToken,
  googleSignIn,
  initAuth,
  logout,
} from '../services/gmailAuth';

type PendingMutation =
  | {
      type: 'send';
      title: string;
      description: string;
      to: string;
      subject: string;
      body: string;
    }
  | {
      type: 'draft';
      title: string;
      description: string;
      to: string;
      subject: string;
      body: string;
    }
  | {
      type: 'trash';
      title: string;
      description: string;
      messageId: string;
    }
  | {
      type: 'archive';
      title: string;
      description: string;
      messageId: string;
    }
  | {
      type: 'toggleRead';
      title: string;
      description: string;
      messageId: string;
      currentlyUnread: boolean;
    }
  | {
      type: 'toggleStar';
      title: string;
      description: string;
      messageId: string;
      currentlyStarred: boolean;
    };

const SYSTEM_LABELS = [
  { id: 'INBOX', en: 'Inbox', ar: 'البريد الوارد', icon: Inbox },
  { id: 'STARRED', en: 'Starred', ar: 'المميزة بنجمة', icon: Star },
  { id: 'SENT', en: 'Sent', ar: 'المرسلة', icon: Send },
  { id: 'DRAFT', en: 'Drafts', ar: 'المسودات', icon: PenSquare },
  { id: 'TRASH', en: 'Trash', ar: 'المهملات', icon: Trash2 },
];

export const GmailWorkspacePage: React.FC<{
  prefillSubject?: string;
  prefillBody?: string;
}> = ({ prefillSubject, prefillBody }) => {
  const { lang } = useAcademy();

  const [needsAuth, setNeedsAuth] = useState<boolean>(() => !getAccessToken());
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => getAccessToken());
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [activeLabel, setActiveLabel] = useState<string>('INBOX');
  const [customLabels, setCustomLabels] = useState<GmailLabel[]>([]);
  const [messages, setMessages] = useState<ParsedEmail[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<ParsedEmail | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [noticeMsg, setNoticeMsg] = useState<string | null>(null);

  const [composing, setComposing] = useState<boolean>(
    Boolean(prefillSubject || prefillBody)
  );
  const [toField, setToField] = useState('');
  const [subjectField, setSubjectField] = useState(prefillSubject || '');
  const [bodyField, setBodyField] = useState(prefillBody || '');

  const [pendingAction, setPendingAction] = useState<PendingMutation | null>(null);
  const [executingMutation, setExecutingMutation] = useState(false);

  useEffect(() => {
    if (prefillSubject || prefillBody) {
      setComposing(true);
      if (prefillSubject) setSubjectField(prefillSubject);
      if (prefillBody) setBodyField(prefillBody);
    }
  }, [prefillSubject, prefillBody]);

  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, accessToken) => {
        setUser(authedUser);
        setToken(accessToken);
        setNeedsAuth(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
      }
    );
    return () => unsubscribe();
  }, []);

  const loadMailbox = useCallback(
    async (tok: string, labelId: string, q: string) => {
      setLoading(true);
      setErrorMsg(null);
      try {
        const [labelsRes, msgsRes] = await Promise.all([
          listLabels(tok),
          listMessages(tok, {
            labelId: q.trim() ? undefined : labelId,
            query: q.trim() || undefined,
            maxResults: 15,
          }),
        ]);
        setCustomLabels(
          labelsRes.filter((l) => l.type === 'user').slice(0, 8)
        );
        setMessages(msgsRes);
        setSelectedMsg((prev) =>
          prev ? msgsRes.find((m) => m.id === prev.id) ?? msgsRes[0] ?? null : msgsRes[0] ?? null
        );
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to load Gmail';
        if (msg === 'AUTH_EXPIRED') {
          clearCachedToken();
          setToken(null);
          setNeedsAuth(true);
        } else {
          setErrorMsg(msg);
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (token && !needsAuth) {
      loadMailbox(token, activeLabel, searchQuery);
    }
  }, [token, needsAuth, activeLabel, loadMailbox]);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setErrorMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setNeedsAuth(false);
      }
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : lang === 'ar'
          ? 'تعذر تسجيل الدخول عبر Google.'
          : 'Google sign-in could not be completed.'
      );
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setMessages([]);
    setSelectedMsg(null);
    setNeedsAuth(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      loadMailbox(token, activeLabel, searchQuery);
    }
  };

  const insertBuildSpecTemplate = () => {
    const specLines = PC_COMPONENTS.map(
      (c, i) =>
        `${i + 1}. ${c.name[lang]} — ${c.specs.map((s) => `${s.label[lang]}: ${s.value}`).join(' | ')}`
    ).join('\n');

    setSubjectField(
      lang === 'ar'
        ? 'مواصفات تجميعة الحاسوب — مختبر NC 3D'
        : 'PC Build Specification Sheet — NC Computer Academy'
    );
    setBodyField(
      (lang === 'ar'
        ? 'تفاصيل مكونات الحاسوب العشرة من مختبر NC Computer Academy:\n\n'
        : 'Complete 10-component hardware specification from NC Computer Academy 3D Lab:\n\n') +
        specLines
    );
  };

  const executeConfirmedAction = async () => {
    if (!pendingAction || !token) return;
    setExecutingMutation(true);
    setErrorMsg(null);
    setNoticeMsg(null);

    try {
      if (pendingAction.type === 'send') {
        await sendEmail(token, {
          to: pendingAction.to,
          subject: pendingAction.subject,
          body: pendingAction.body,
        });
        setComposing(false);
        setToField('');
        setSubjectField('');
        setBodyField('');
        setNoticeMsg(
          lang === 'ar' ? 'تم إرسال الرسالة بنجاح عبر Gmail.' : 'Email sent via Gmail.'
        );
        await loadMailbox(token, activeLabel, searchQuery);
      } else if (pendingAction.type === 'draft') {
        await createEmailDraft(token, {
          to: pendingAction.to,
          subject: pendingAction.subject,
          body: pendingAction.body,
        });
        setComposing(false);
        setNoticeMsg(
          lang === 'ar' ? 'تم حفظ المسودة في Gmail.' : 'Draft saved to Gmail.'
        );
        await loadMailbox(token, activeLabel, searchQuery);
      } else if (pendingAction.type === 'trash') {
        await trashMessage(token, pendingAction.messageId);
        setNoticeMsg(
          lang === 'ar' ? 'تم نقل الرسالة إلى المهملات.' : 'Message moved to Trash.'
        );
        setSelectedMsg(null);
        await loadMailbox(token, activeLabel, searchQuery);
      } else if (pendingAction.type === 'archive') {
        await modifyMessageLabels(token, pendingAction.messageId, [], ['INBOX']);
        setNoticeMsg(
          lang === 'ar' ? 'تمت أرشفة الرسالة.' : 'Message archived from Inbox.'
        );
        await loadMailbox(token, activeLabel, searchQuery);
      } else if (pendingAction.type === 'toggleRead') {
        await modifyMessageLabels(
          token,
          pendingAction.messageId,
          pendingAction.currentlyUnread ? [] : ['UNREAD'],
          pendingAction.currentlyUnread ? ['UNREAD'] : []
        );
        await loadMailbox(token, activeLabel, searchQuery);
      } else if (pendingAction.type === 'toggleStar') {
        await modifyMessageLabels(
          token,
          pendingAction.messageId,
          pendingAction.currentlyStarred ? [] : ['STARRED'],
          pendingAction.currentlyStarred ? ['STARRED'] : []
        );
        await loadMailbox(token, activeLabel, searchQuery);
      }
      setPendingAction(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Operation failed';
      if (msg === 'AUTH_EXPIRED') {
        clearCachedToken();
        setToken(null);
        setNeedsAuth(true);
        setPendingAction(null);
      } else {
        setErrorMsg(msg);
      }
    } finally {
      setExecutingMutation(false);
    }
  };

  if (needsAuth || !token) {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="glass-surface rounded-2xl p-8 sm:p-10 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
            <Mail className="w-7 h-7 text-cyan-400" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'ar'
                ? 'مركز بريد Gmail التعليمي'
                : 'NC Academy Gmail Workspace'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'اربط حسابك في Gmail لقراءة رسائلك، البحث في البريد الوارد، ومشاركة ملخصات الدروس أو مواصفات تجميعة الحاسوب ثلاثية الأبعاد مباشرة بإذنك.'
                : 'Connect your Gmail account to read your inbox, search threads, manage labels, and share NC Academy lesson notes or 3D PC spec sheets directly with your permission.'}
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-200 max-w-md mx-auto">
              {errorMsg}
            </div>
          )}

          {/* Official Google Sign-In Button Style */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              disabled={isLoggingIn}
              onClick={handleLogin}
              className="gsi-material-button inline-flex items-center gap-3 px-5 py-2.5 rounded-md bg-white hover:bg-slate-100 text-[#1f1f1f] font-medium text-sm border border-[#747775] shadow-sm transition-colors disabled:opacity-60"
            >
              <div className="gsi-material-button-icon w-5 h-5 shrink-0">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  style={{ display: 'block' }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
              </div>
              <span className="gsi-material-button-contents">
                {isLoggingIn
                  ? lang === 'ar'
                    ? 'جارٍ تسجيل الدخول...'
                    : 'Signing in...'
                  : 'Sign in with Google'}
              </span>
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white">
            {lang === 'ar' ? 'بريد Gmail' : 'Gmail Workspace'}
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {user?.email || 'Connected Google Account'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ar' ? 'ابحث في رسائل Gmail...' : 'Search Gmail...'
              }
              className="ps-9 pe-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs text-white w-56"
            />
          </form>

          <button
            type="button"
            onClick={() => loadMailbox(token, activeLabel, searchQuery)}
            disabled={loading}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
            aria-label="Refresh Inbox"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => setComposing(true)}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <PenSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'رسالة جديدة' : 'Compose'}</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/50 text-slate-300 hover:text-rose-300 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'خروج' : 'Sign Out'}</span>
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
          <span>{errorMsg}</span>
          <button type="button" onClick={() => setErrorMsg(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {noticeMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 flex items-center justify-between">
          <span>{noticeMsg}</span>
          <button type="button" onClick={() => setNoticeMsg(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main 3-Column Gmail Layout */}
      <div className="grid lg:grid-cols-12 gap-5 items-start">
        {/* Labels Sidebar */}
        <aside className="lg:col-span-2 glass-surface-subtle rounded-2xl p-3 space-y-1">
          {SYSTEM_LABELS.map((lbl) => {
            const Icon = lbl.icon;
            const active = activeLabel === lbl.id && !searchQuery.trim();
            return (
              <button
                key={lbl.id}
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveLabel(lbl.id);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{lang === 'ar' ? lbl.ar : lbl.en}</span>
              </button>
            );
          })}

          {customLabels.length > 0 && (
            <div className="pt-3 mt-2 border-t border-slate-800 space-y-1">
              <div className="px-2 text-[10px] text-slate-500 font-semibold">
                {lang === 'ar' ? 'التصنيفات' : 'Labels'}
              </div>
              {customLabels.map((cl) => (
                <button
                  key={cl.id}
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveLabel(cl.id);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    activeLabel === cl.id
                      ? 'bg-cyan-500/15 text-cyan-300'
                      : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  <Tag className="w-3 h-3 shrink-0" />
                  <span className="truncate">{cl.name}</span>
                </button>
              ))}
            </div>
          )}
        </aside>

        {/* Message List */}
        <section className="lg:col-span-4 glass-surface-subtle rounded-2xl overflow-hidden divide-y divide-slate-800/80 max-h-[620px] overflow-y-auto">
          {loading && messages.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              {lang === 'ar' ? 'جارٍ تحميل الرسائل...' : 'Loading messages...'}
            </div>
          ) : messages.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              {lang === 'ar' ? 'لا توجد رسائل في هذا المجلد.' : 'No messages found.'}
            </div>
          ) : (
            messages.map((m) => {
              const isSel = selectedMsg?.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMsg(m)}
                  className={`w-full text-start p-4 transition-colors space-y-1 ${
                    isSel ? 'bg-cyan-500/10' : 'hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span
                      className={`truncate ${
                        m.isUnread
                          ? 'font-bold text-white'
                          : 'font-medium text-slate-400'
                      }`}
                    >
                      {m.from.replace(/<[^>]+>/g, '').trim()}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {m.isUnread && (
                        <span className="text-[10px] font-semibold text-cyan-400">
                          {lang === 'ar' ? 'جديد' : 'Unread'}
                        </span>
                      )}
                      {m.isStarred && (
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`text-xs truncate ${
                      m.isUnread ? 'font-bold text-cyan-200' : 'text-slate-200'
                    }`}
                  >
                    {m.subject}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {m.snippet}
                  </p>
                </button>
              );
            })
          )}
        </section>

        {/* Message Detail or Compose Pane */}
        <section className="lg:col-span-6 glass-surface rounded-2xl p-6 min-h-[420px]">
          {composing ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-base font-bold text-white">
                  {lang === 'ar' ? 'إنشاء رسالة جديدة' : 'New Message'}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={insertBuildSpecTemplate}
                    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] text-cyan-300 font-medium"
                  >
                    {lang === 'ar'
                      ? 'إدراج مواصفات مختبر 3D'
                      : 'Insert 3D PC Spec Sheet'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setComposing(false)}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    {lang === 'ar' ? 'إلى' : 'To'}
                  </label>
                  <input
                    type="email"
                    value={toField}
                    onChange={(e) => setToField(e.target.value)}
                    placeholder="recipient@example.com"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    {lang === 'ar' ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={subjectField}
                    onChange={(e) => setSubjectField(e.target.value)}
                    placeholder={
                      lang === 'ar' ? 'موضوع الرسالة...' : 'Email subject...'
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    {lang === 'ar' ? 'المحتوى' : 'Message'}
                  </label>
                  <textarea
                    rows={9}
                    value={bodyField}
                    onChange={(e) => setBodyField(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'اكتب رسالتك هنا...'
                        : 'Write your message...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white leading-relaxed"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    disabled={!toField.trim() || !subjectField.trim()}
                    onClick={() =>
                      setPendingAction({
                        type: 'send',
                        title:
                          lang === 'ar'
                            ? 'تأكيد إرسال البريد الإلكتروني'
                            : 'Confirm Sending Email',
                        description:
                          lang === 'ar'
                            ? `هل تريد إرسال هذه الرسالة إلى (${toField}) بعنوان "${subjectField}"؟`
                            : `Send this email to "${toField}" with subject "${subjectField}"?`,
                        to: toField.trim(),
                        subject: subjectField.trim(),
                        body: bodyField,
                      })
                    }
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'إرسال' : 'Send Email'}</span>
                  </button>

                  <button
                    type="button"
                    disabled={!subjectField.trim() && !bodyField.trim()}
                    onClick={() =>
                      setPendingAction({
                        type: 'draft',
                        title:
                          lang === 'ar'
                            ? 'تأكيد حفظ المسودة'
                            : 'Confirm Saving Draft',
                        description:
                          lang === 'ar'
                            ? `هل تريد حفظ هذه الرسالة كمسودة في حساب Gmail الخاص بك؟`
                            : `Save this message as a draft in your Gmail account?`,
                        to: toField.trim(),
                        subject: subjectField.trim() || '(No Subject)',
                        body: bodyField,
                      })
                    }
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-medium transition-colors"
                  >
                    {lang === 'ar' ? 'حفظ كمسودة' : 'Save Draft'}
                  </button>
                </div>
              </div>
            </div>
          ) : selectedMsg ? (
            <div className="space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="space-y-1.5">
                  <h2 className="text-lg font-bold text-white leading-snug">
                    {selectedMsg.subject}
                  </h2>
                  <div className="text-xs text-slate-300">
                    {selectedMsg.from}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {selectedMsg.date}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    title={selectedMsg.isStarred ? 'Unstar' : 'Star'}
                    onClick={() =>
                      setPendingAction({
                        type: 'toggleStar',
                        title:
                          lang === 'ar'
                            ? 'تحديث تمييز الرسالة'
                            : 'Update Starred Status',
                        description:
                          lang === 'ar'
                            ? `هل تريد ${selectedMsg.isStarred ? 'إزالة النجمة من' : 'تمييز'} الرسالة "${selectedMsg.subject}"؟`
                            : `${selectedMsg.isStarred ? 'Remove star from' : 'Star'} message "${selectedMsg.subject}"?`,
                        messageId: selectedMsg.id,
                        currentlyStarred: selectedMsg.isStarred,
                      })
                    }
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-slate-300"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        selectedMsg.isStarred
                          ? 'text-amber-400 fill-amber-400'
                          : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    title={selectedMsg.isUnread ? 'Mark Read' : 'Mark Unread'}
                    onClick={() =>
                      setPendingAction({
                        type: 'toggleRead',
                        title:
                          lang === 'ar'
                            ? 'تغيير حالة القراءة'
                            : 'Update Read Status',
                        description:
                          lang === 'ar'
                            ? `تعيين الرسالة "${selectedMsg.subject}" كـ ${selectedMsg.isUnread ? 'مقروءة' : 'غير مقروءة'}؟`
                            : `Mark "${selectedMsg.subject}" as ${selectedMsg.isUnread ? 'read' : 'unread'}?`,
                        messageId: selectedMsg.id,
                        currentlyUnread: selectedMsg.isUnread,
                      })
                    }
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-slate-300"
                  >
                    <MailOpen className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    title="Archive"
                    onClick={() =>
                      setPendingAction({
                        type: 'archive',
                        title:
                          lang === 'ar'
                            ? 'تأكيد أرشفة الرسالة'
                            : 'Confirm Archive Message',
                        description:
                          lang === 'ar'
                            ? `إزالة الرسالة "${selectedMsg.subject}" من البريد الوارد وأرشفتها؟`
                            : `Archive "${selectedMsg.subject}" and remove it from your Inbox?`,
                        messageId: selectedMsg.id,
                      })
                    }
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-slate-300"
                  >
                    <Archive className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    title="Move to Trash"
                    onClick={() =>
                      setPendingAction({
                        type: 'trash',
                        title:
                          lang === 'ar'
                            ? 'تأكيد النقل إلى المهملات'
                            : 'Confirm Move to Trash',
                        description:
                          lang === 'ar'
                            ? `هل أنت متأكد من نقل الرسالة "${selectedMsg.subject}" إلى سلة المهملات؟`
                            : `Are you sure you want to move "${selectedMsg.subject}" to Trash?`,
                        messageId: selectedMsg.id,
                      })
                    }
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/60 text-rose-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[420px] overflow-y-auto">
                {selectedMsg.bodyText}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-sm text-slate-400 py-20">
              {lang === 'ar'
                ? 'اختر رسالة من القائمة لقراءتها أو اضغط "رسالة جديدة".'
                : 'Select an email to read or click Compose to write a new message.'}
            </div>
          )}
        </section>
      </div>

      {/* Mandatory User Confirmation Modal for Mutating / Destructive Gmail Actions */}
      {pendingAction && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-md w-full glass-surface rounded-2xl p-6 space-y-5 border border-cyan-500/35 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white">
                  {pendingAction.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pendingAction.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                disabled={executingMutation}
                onClick={() => setPendingAction(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200"
              >
                {lang === 'ar' ? 'إلغاء' : 'Cancel'}
              </button>
              <button
                type="button"
                disabled={executingMutation}
                onClick={executeConfirmedAction}
                className={`px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 ${
                  pendingAction.type === 'trash'
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>
                  {executingMutation
                    ? lang === 'ar'
                      ? 'جارٍ التنفيذ...'
                      : 'Processing...'
                    : lang === 'ar'
                    ? 'تأكيد'
                    : 'Confirm'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
