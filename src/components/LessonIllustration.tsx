import React from 'react';
import { LessonData } from '../types/academy';

export const LessonIllustration: React.FC<{
  illustrationKey: LessonData['illustrationKey'];
  title: string;
}> = ({ illustrationKey, title }) => {
  return (
    <div className="w-full rounded-xl bg-[#050A17] border border-cyan-500/20 p-5 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 640 220"
        className="w-full max-w-[620px] h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <linearGradient id="ncGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
          </linearGradient>
          <pattern id="ncGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="220" rx="12" fill="url(#ncGrid)" />

        {(illustrationKey === 'cpu' || illustrationKey === 'cycle') && (
          <g>
            <rect x="65" y="45" width="130" height="130" rx="10" fill="#0B1326" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="130" y="106" textAnchor="middle" fill="#E2E8F0" fontSize="13" fontFamily="monospace">RAM / CACHE</text>
            <text x="130" y="128" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace">0x00A4</text>

            <path d="M 205 110 L 255 110" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="5 3" />
            <polygon points="255,104 268,110 255,116" fill="#06B6D4" />

            <rect x="275" y="32" width="156" height="156" rx="14" fill="#0F1C3A" stroke="url(#ncGlow)" strokeWidth="2" />
            <rect x="295" y="52" width="116" height="44" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
            <text x="353" y="79" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontFamily="monospace">CONTROL UNIT</text>
            <rect x="295" y="112" width="116" height="54" rx="6" fill="#082F49" stroke="#22D3EE" strokeWidth="1.2" />
            <text x="353" y="144" textAnchor="middle" fill="#67E8F9" fontSize="13" fontFamily="monospace">ALU + REGISTERS</text>

            <path d="M 440 110 L 490 110" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="5 3" />
            <polygon points="490,104 503,110 490,116" fill="#06B6D4" />

            <rect x="510" y="65" width="80" height="90" rx="10" fill="#0B1326" stroke="#60A5FA" strokeWidth="1.5" />
            <text x="550" y="114" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="monospace">OUTPUT</text>
          </g>
        )}

        {(illustrationKey === 'motherboard' || illustrationKey === 'slots' || illustrationKey === 'ports') && (
          <g>
            <rect x="120" y="20" width="400" height="180" rx="12" fill="#0B1326" stroke="#38BDF8" strokeWidth="1.5" />
            <rect x="140" y="38" width="42" height="95" rx="4" fill="#1E293B" stroke="#64748B" />
            <text x="161" y="90" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace" transform="rotate(-90 161 90)">REAR I/O</text>
            <rect x="215" y="42" width="90" height="84" rx="8" fill="#0F172A" stroke="#22D3EE" strokeWidth="1.8" />
            <text x="260" y="88" textAnchor="middle" fill="#67E8F9" fontSize="12" fontFamily="monospace">LGA SOCKET</text>
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={335 + i * 16} y="38" width="8" height="90" rx="2" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
            ))}
            <text x="364" y="142" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">DDR5 DIMM</text>
            <rect x="195" y="154" width="180" height="14" rx="3" fill="#1E293B" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="285" y="185" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">PCIe 5.0 x16 EXPANSION</text>
            <rect x="425" y="130" width="70" height="48" rx="6" fill="#0F172A" stroke="#64748B" />
            <text x="460" y="158" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontFamily="monospace">CHIPSET</text>
          </g>
        )}

        {(illustrationKey === 'network') && (
          <g>
            <circle cx="110" cy="110" r="34" fill="#0B1326" stroke="#38BDF8" strokeWidth="1.6" />
            <text x="110" y="114" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="monospace">CLIENT</text>
            <line x1="145" y1="110" x2="235" y2="110" stroke="#06B6D4" strokeWidth="2" />
            <rect x="235" y="75" width="110" height="70" rx="10" fill="#0F1C3A" stroke="#22D3EE" strokeWidth="1.8" />
            <text x="290" y="114" textAnchor="middle" fill="#67E8F9" fontSize="12" fontFamily="monospace">SWITCH / ROUTER</text>
            <line x1="345" y1="110" x2="445" y2="110" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 3" />
            <rect x="445" y="65" width="125" height="90" rx="12" fill="#0B1326" stroke="#60A5FA" strokeWidth="1.6" />
            <text x="507" y="106" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="monospace">DNS / HTTPS</text>
            <text x="507" y="126" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">TCP/IP SERVER</text>
          </g>
        )}

        {(illustrationKey === 'os' || illustrationKey === 'hardware-software') && (
          <g>
            <rect x="140" y="25" width="360" height="36" rx="8" fill="#0F1C3A" stroke="#38BDF8" />
            <text x="320" y="48" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="monospace">USER APPLICATIONS</text>
            <rect x="140" y="72" width="360" height="36" rx="8" fill="#0C2444" stroke="#22D3EE" />
            <text x="320" y="95" textAnchor="middle" fill="#67E8F9" fontSize="12" fontFamily="monospace">OPERATING SYSTEM KERNEL</text>
            <rect x="140" y="119" width="360" height="36" rx="8" fill="#0B1933" stroke="#3B82F6" />
            <text x="320" y="142" textAnchor="middle" fill="#93C5FD" fontSize="12" fontFamily="monospace">DEVICE DRIVERS & FIRMWARE</text>
            <rect x="140" y="166" width="360" height="36" rx="8" fill="#091124" stroke="#64748B" />
            <text x="320" y="189" textAnchor="middle" fill="#CBD5E1" fontSize="12" fontFamily="monospace">PHYSICAL SILICON HARDWARE</text>
          </g>
        )}

        {(illustrationKey === 'code' || illustrationKey === 'data') && (
          <g>
            <rect x="85" y="34" width="470" height="152" rx="12" fill="#0B1326" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="110" cy="54" r="5" fill="#38BDF8" />
            <circle cx="128" cy="54" r="5" fill="#3B82F6" />
            <circle cx="146" cy="54" r="5" fill="#64748B" />
            <text x="112" y="95" fill="#22D3EE" fontSize="13" fontFamily="monospace">function executeLogic(a, b) {'{'}</text>
            <text x="136" y="122" fill="#E2E8F0" fontSize="13" fontFamily="monospace">const state = (a &amp;&amp; !b) ? 0b01001110 : 0b00000000;</text>
            <text x="136" y="148" fill="#93C5FD" fontSize="13" fontFamily="monospace">return state;</text>
            <text x="112" y="172" fill="#22D3EE" fontSize="13" fontFamily="monospace">{'}'}</text>
          </g>
        )}

        {['computer', 'history', 'generations', 'types', 'system-unit', 'memory', 'gpu', 'storage', 'psu', 'cooling', 'io'].includes(illustrationKey) && (
          <g>
            <rect x="110" y="34" width="180" height="152" rx="12" fill="#0B1326" stroke="#38BDF8" strokeWidth="1.6" />
            <text x="200" y="102" textAnchor="middle" fill="#67E8F9" fontSize="14" fontFamily="monospace">SYSTEM UNIT</text>
            <text x="200" y="126" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">{illustrationKey.toUpperCase()}</text>
            <path d="M 300 110 L 355 110" stroke="#06B6D4" strokeWidth="2.5" />
            <rect x="365" y="46" width="165" height="128" rx="12" fill="#0F1C3A" stroke="#3B82F6" strokeWidth="1.6" />
            <text x="447" y="102" textAnchor="middle" fill="#E2E8F0" fontSize="13" fontFamily="monospace">BUS + I/O</text>
            <text x="447" y="124" textAnchor="middle" fill="#60A5FA" fontSize="11" fontFamily="monospace">NC ARCHITECTURE</text>
          </g>
        )}
      </svg>
    </div>
  );
};
