import * as THREE from 'three';

export function detectSoftwareWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

export function createMotherboardTexture(maxAnisotropy: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Matte dark navy/charcoal PCB base
  ctx.fillStyle = '#091120';
  ctx.fillRect(0, 0, 1024, 1024);

  // Subtle fiberglass weave grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 1024; i += 16) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 1024);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(1024, i);
    ctx.stroke();
  }

  // Copper/Cyan PCB traces between CPU socket area and DIMM/PCIe zones
  const traceColors = ['rgba(14, 165, 233, 0.42)', 'rgba(34, 211, 238, 0.28)', 'rgba(148, 163, 184, 0.22)'];
  for (let i = 0; i < 42; i++) {
    ctx.strokeStyle = traceColors[i % traceColors.length];
    ctx.lineWidth = 2;
    const yStart = 220 + i * 11;
    ctx.beginPath();
    ctx.moveTo(280, yStart);
    ctx.lineTo(440 + (i % 5) * 14, yStart);
    ctx.lineTo(490 + (i % 5) * 14, yStart + 45);
    ctx.lineTo(760, yStart + 45);
    ctx.stroke();
  }

  // Vertical PCIe signal buses
  for (let i = 0; i < 22; i++) {
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.32)';
    ctx.lineWidth = 2;
    const x = 260 + i * 16;
    ctx.beginPath();
    ctx.moveTo(x, 420);
    ctx.lineTo(x, 700);
    ctx.lineTo(x + 35, 735);
    ctx.lineTo(x + 35, 920);
    ctx.stroke();
  }

  // Solder pads & mounting holes
  const mounts = [
    [55, 55], [512, 55], [965, 55],
    [55, 512], [512, 512], [965, 512],
    [55, 965], [512, 965], [965, 965],
  ];
  for (const [mx, my] of mounts) {
    ctx.fillStyle = '#CBD5E1';
    ctx.beginPath();
    ctx.arc(mx, my, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#050A17';
    ctx.beginPath();
    ctx.arc(mx, my, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  // Silkscreen branding
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 34px monospace';
  ctx.fillText('NC-Z790 ACADEMY PRO', 70, 930);
  ctx.fillStyle = 'rgba(226, 232, 240, 0.55)';
  ctx.font = '20px monospace';
  ctx.fillText('PCIe 5.0 READY // DDR5 DUAL CHANNEL', 70, 965);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createCpuLabelTexture(maxAnisotropy: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 512, 512);
  grad.addColorStop(0, '#CBD5E1');
  grad.addColorStop(0.5, '#94A3B8');
  grad.addColorStop(1, '#CBD5E1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Brushed nickel lines
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  for (let i = 0; i < 512; i += 3) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(512, i);
    ctx.stroke();
  }

  ctx.strokeStyle = '#0F172A';
  ctx.lineWidth = 6;
  ctx.strokeRect(36, 36, 440, 440);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 46px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('NC-CORE', 256, 200);
  ctx.font = 'bold 38px monospace';
  ctx.fillText('9000X', 256, 255);
  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 26px monospace';
  ctx.fillText('16C / 24T · 5.4GHz', 256, 315);
  ctx.fillStyle = '#334155';
  ctx.font = '20px monospace';
  ctx.fillText('NC COMPUTER ACADEMY', 256, 375);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createDriveLabelTexture(
  title: string,
  subtitle: string,
  accent: string,
  maxAnisotropy: number
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, 512, 256);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 18, 256);

  ctx.fillStyle = '#F8FAFC';
  ctx.font = 'bold 40px monospace';
  ctx.fillText(title, 42, 108);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '24px monospace';
  ctx.fillText(subtitle, 42, 158);

  ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, 492, 236);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 240);
  grad.addColorStop(0, 'rgba(2, 6, 23, 0.72)');
  grad.addColorStop(0.55, 'rgba(2, 6, 23, 0.32)');
  grad.addColorStop(1, 'rgba(2, 6, 23, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
