import React, { useState } from 'react';
import { InteractiveDiagramType } from '../types/academy';
import { useAcademy } from '../context/AcademyContext';

export const InteractiveDiagramWidget: React.FC<{
  type: InteractiveDiagramType;
}> = ({ type }) => {
  const { lang } = useAcademy();

  if (type === 'none') return null;

  switch (type) {
    case 'ipo-cycle':
      return <IpoCycleDiagram lang={lang} />;
    case 'binary-ascii':
      return <BinaryAsciiDiagram lang={lang} />;
    case 'motherboard-map':
      return <MotherboardMapDiagram lang={lang} />;
    case 'cpu-pipeline':
      return <CpuPipelineDiagram lang={lang} />;
    case 'os-layers':
      return <OsLayersDiagram lang={lang} />;
    case 'ip-subnet':
      return <IpSubnetDiagram lang={lang} />;
    case 'dns-flow':
      return <DnsFlowDiagram lang={lang} />;
    case 'network-topology':
      return <TopologyDiagram lang={lang} />;
    case 'logic-gates':
      return <LogicGatesDiagram lang={lang} />;
    default:
      return null;
  }
};

const IpoCycleDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [step, setStep] = useState(0);
  const stages = [
    {
      title: lang === 'ar' ? '1. الإدخال (Input)' : '1. Input',
      detail:
        lang === 'ar'
          ? 'تُلتقط الإشارات من لوحة المفاتيح أو المستشعر وتُحوّل إلى بتات ثنائية (0 و 1).'
          : 'Raw user actions or sensor signals are converted into binary 0s and 1s.',
      sample: 'Key "A" → 01000001',
    },
    {
      title: lang === 'ar' ? '2. المعالجة (Process)' : '2. Processing',
      detail:
        lang === 'ar'
          ? 'يجلب المعالج التعليمات من الذاكرة وينفذ العمليات الحسابية والمنطقية في ALU.'
          : 'The CPU fetches instructions from RAM and executes math or logic inside the ALU.',
      sample: 'ALU: 65 + 32 = 97',
    },
    {
      title: lang === 'ar' ? '3. التخزين (Storage)' : '3. Storage',
      detail:
        lang === 'ar'
          ? 'تُحفظ النتائج النشطة في RAM بينما تُخزن الملفات الدائمة على SSD/HDD.'
          : 'Active results stay in fast RAM while permanent files save to SSD or HDD.',
      sample: 'RAM: 0x04A2 · SSD: /doc.txt',
    },
    {
      title: lang === 'ar' ? '4. الإخراج (Output)' : '4. Output',
      detail:
        lang === 'ar'
          ? 'تُترجم البيانات المعالجة إلى صورة على الشاشة أو صوت أو طباعة.'
          : 'Processed results render visually on your monitor or play through audio.',
      sample: 'Display Pixel Buffer Ready',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {stages.map((st, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setStep(idx)}
            className={`p-3 rounded-xl border text-start transition-colors ${
              step === idx
                ? 'bg-cyan-500/15 border-cyan-400 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-semibold">{st.title}</div>
          </button>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-sm text-slate-200 leading-relaxed">{stages[step].detail}</p>
        <code className="px-3 py-1.5 rounded-lg bg-[#050A17] border border-cyan-500/30 text-cyan-300 text-xs font-mono shrink-0">
          {stages[step].sample}
        </code>
      </div>
    </div>
  );
};

const BinaryAsciiDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [bits, setBits] = useState<number[]>([0, 1, 0, 0, 1, 1, 1, 0]); // 'N' = 78
  const decimal = bits.reduce((acc, b, idx) => acc + b * Math.pow(2, 7 - idx), 0);
  const char = decimal >= 32 && decimal <= 126 ? String.fromCharCode(decimal) : '·';

  const toggleBit = (index: number) => {
    setBits((prev) => prev.map((b, i) => (i === index ? (b === 1 ? 0 : 1) : b)));
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400">
        {lang === 'ar'
          ? 'انقر على أي بت (0 أو 1) لتغيير القيمة الثنائية ومشاهدة التحويل الفوري للبايت:'
          : 'Click any bit below to flip between 0 and 1 and observe the live Byte conversion:'}
      </p>
      <div className="grid grid-cols-8 gap-2">
        {bits.map((bit, i) => {
          const weight = Math.pow(2, 7 - i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggleBit(i)}
              className={`py-2.5 rounded-xl border text-center transition-colors ${
                bit === 1
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="text-lg font-mono font-bold tabular-nums">{bit}</div>
              <div className="text-[10px] font-mono text-slate-500">{weight}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[11px] text-slate-400">
            {lang === 'ar' ? 'النظام الثنائي' : 'Binary (8-bit)'}
          </div>
          <div className="text-sm font-mono text-cyan-300 mt-1">{bits.join('')}</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[11px] text-slate-400">
            {lang === 'ar' ? 'القيمة العشرية' : 'Decimal Value'}
          </div>
          <div className="text-sm font-mono text-white mt-1 tabular-nums">{decimal}</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[11px] text-slate-400">
            {lang === 'ar' ? 'رمز ASCII' : 'ASCII Character'}
          </div>
          <div className="text-sm font-mono text-emerald-300 mt-1">"{char}"</div>
        </div>
      </div>
    </div>
  );
};

const MotherboardMapDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [zone, setZone] = useState<'cpu' | 'ram' | 'pcie' | 'm2' | 'vrm' | 'io'>('cpu');
  const zones = {
    cpu: {
      name: lang === 'ar' ? 'مقبس المعالج (CPU Socket)' : 'CPU Socket (LGA)',
      desc:
        lang === 'ar'
          ? 'يحتضن المعالج المركزي ويوفر آلاف نقاط التلامس الكهربائية مع الذاكرة و PCIe.'
          : 'Houses the processor and connects thousands of electrical pins to RAM and PCIe lanes.',
    },
    vrm: {
      name: lang === 'ar' ? 'دوائر الطاقة (VRM)' : 'VRM Power Delivery',
      desc:
        lang === 'ar'
          ? 'تخفض جهد 12V إلى نحو 1.2V نقي وثابت لتغذية أنوية المعالج بأمان.'
          : 'Steps 12V power down cleanly to ~1.2V for stable high-current CPU operation.',
    },
    ram: {
      name: lang === 'ar' ? 'فتحات الذاكرة (DDR5 DIMM)' : 'DDR5 DIMM Slots',
      desc:
        lang === 'ar'
          ? 'تستقبل شرائح الذاكرة العشوائية وتتيح عمل القناتين المزدوجتين Dual-Channel.'
          : 'Holds volatile system memory sticks operating in dual-channel bandwidth mode.',
    },
    pcie: {
      name: lang === 'ar' ? 'فتحة PCIe x16 المقواة' : 'Reinforced PCIe x16 Slot',
      desc:
        lang === 'ar'
          ? 'المنفذ فائق السرعة لتركيب بطاقة الرسوميات المنفصلة GPU.'
          : 'High-bandwidth 16-lane expansion slot hosting discrete graphics cards.',
    },
    m2: {
      name: lang === 'ar' ? 'فتحة M.2 NVMe' : 'M.2 NVMe Slot',
      desc:
        lang === 'ar'
          ? 'تصل قرص التخزين NVMe SSD مباشرة بمسارات PCIe x4 لتحقيق سرعات فائقة.'
          : 'Connects compact M.2 2280 solid-state drives directly to PCIe x4 lanes.',
    },
    io: {
      name: lang === 'ar' ? 'منافذ الواجهة الخلفية (Rear I/O)' : 'Rear I/O Panel',
      desc:
        lang === 'ar'
          ? 'تضم منافذ USB-C و Ethernet RJ-45 والصوت والاتصال باللوحة الخلفية للصندوق.'
          : 'Provides external USB-C, RJ-45 Ethernet, Wi-Fi antennas, and audio jacks.',
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="p-4 rounded-xl bg-[#050A17] border border-slate-800 grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setZone('io')}
          className={`p-3 rounded-lg border text-xs font-medium transition-colors ${
            zone === 'io' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          Rear I/O
        </button>
        <button
          type="button"
          onClick={() => setZone('vrm')}
          className={`p-3 rounded-lg border text-xs font-medium transition-colors ${
            zone === 'vrm' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          VRM
        </button>
        <button
          type="button"
          onClick={() => setZone('ram')}
          className={`row-span-2 p-3 rounded-lg border text-xs font-medium transition-colors ${
            zone === 'ram' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          DDR5 DIMM
        </button>
        <button
          type="button"
          onClick={() => setZone('cpu')}
          className={`col-span-2 p-4 rounded-lg border text-xs font-semibold transition-colors ${
            zone === 'cpu' ? 'bg-blue-600/30 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          CPU Socket
        </button>
        <button
          type="button"
          onClick={() => setZone('m2')}
          className={`col-span-3 py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
            zone === 'm2' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          M.2 NVMe Slot
        </button>
        <button
          type="button"
          onClick={() => setZone('pcie')}
          className={`col-span-3 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-colors ${
            zone === 'pcie' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          PCIe 5.0 x16 (GPU)
        </button>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
        <div className="text-sm font-bold text-cyan-300">{zones[zone].name}</div>
        <p className="text-sm text-slate-300 leading-relaxed">{zones[zone].desc}</p>
      </div>
    </div>
  );
};

const CpuPipelineDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [phase, setPhase] = useState<'fetch' | 'decode' | 'execute'>('fetch');
  const map = {
    fetch: {
      title: lang === 'ar' ? 'الجلب (Fetch)' : 'Fetch',
      reg: 'PC = 0x104 → IR = ADD R1, R2',
      desc:
        lang === 'ar'
          ? 'يقرأ عداد البرنامج التعليمة التالية من الذاكرة المخبئية L1 أو RAM.'
          : 'Program Counter fetches the next binary instruction from L1 cache / RAM.',
    },
    decode: {
      title: lang === 'ar' ? 'فك التشفير (Decode)' : 'Decode',
      reg: 'Opcode: ADD · Src: R1(14), R2(28)',
      desc:
        lang === 'ar'
          ? 'تحلل وحدة التحكم التعليمة وتجهز المعاملات من المسجلات.'
          : 'Control Unit decodes the opcode and routes operand values from registers.',
    },
    execute: {
      title: lang === 'ar' ? 'التنفيذ (Execute)' : 'Execute',
      reg: 'ALU Result: R1 ← 42',
      desc:
        lang === 'ar'
          ? 'تحسب وحدة الحساب والمنطق النتيجة وتكتبها في المسجل خلال جزء من النانو ثانية.'
          : 'ALU computes the result and writes it back to the destination register.',
    },
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {(['fetch', 'decode', 'execute'] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setPhase(k)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${
              phase === k
                ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            {map[k].title}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
        <code className="block text-xs font-mono text-cyan-300">{map[phase].reg}</code>
        <p className="text-sm text-slate-200">{map[phase].desc}</p>
      </div>
    </div>
  );
};

const OsLayersDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [layer, setLayer] = useState(0);
  const layers = [
    {
      name: lang === 'ar' ? '1. المستخدم والتطبيقات (User Space)' : '1. Applications & User Interface',
      desc:
        lang === 'ar'
          ? 'المتصفح ومحرر الأكواد والألعاب؛ تطلب الخدمات من نظام التشغيل عبر واجهات API.'
          : 'Browsers, code editors, and apps requesting resources via OS system calls.',
    },
    {
      name: lang === 'ar' ? '2. نواة نظام التشغيل (OS Kernel)' : '2. Operating System Kernel',
      desc:
        lang === 'ar'
          ? 'تدير وقت المعالج والذاكرة العشوائية والصلاحيات وتمنع تداخل التطبيقات.'
          : 'Schedules CPU cores, protects virtual memory, and manages files and permissions.',
    },
    {
      name: lang === 'ar' ? '3. تعريفات الأجهزة (Device Drivers)' : '3. Device Drivers',
      desc:
        lang === 'ar'
          ? 'تترجم أوامر النواة العامة إلى إشارات دقيقة تناسب كل بطاقة أو قرص.'
          : 'Translate generic kernel commands into vendor-specific hardware signals.',
    },
    {
      name: lang === 'ar' ? '4. العتاد الفيزيائي (Physical Hardware)' : '4. Physical Hardware (CPU, RAM, GPU, SSD)',
      desc:
        lang === 'ar'
          ? 'الدوائر والرقائق المادية التي تنفذ العمل الحقيقي.'
          : 'Physical silicon chips, memory modules, and storage drives executing work.',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="space-y-2">
        {layers.map((l, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLayer(i)}
            className={`w-full text-start px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors ${
              layer === i
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div className="text-sm font-bold text-white mb-1.5">{layers[layer].name}</div>
        <p className="text-sm text-slate-300 leading-relaxed">{layers[layer].desc}</p>
      </div>
    </div>
  );
};

const IpSubnetDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [hostOctet, setHostOctet] = useState(45);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-slate-300">
          {lang === 'ar' ? 'حرّك رقم الجهاز داخل الشبكة (Host ID):' : 'Adjust Host Octet (1–254):'}
        </span>
        <input
          type="range"
          min={1}
          max={254}
          value={hostOctet}
          onChange={(e) => setHostOctet(Number(e.target.value))}
          className="w-48 accent-cyan-400"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 text-center font-mono">
        {[192, 168, 1, hostOctet].map((octet, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl border ${
              idx < 3
                ? 'bg-blue-950/50 border-blue-500/40 text-blue-200'
                : 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
            }`}
          >
            <div className="text-lg font-bold tabular-nums">{octet}</div>
            <div className="text-[10px] mt-1 opacity-80">
              {octet.toString(2).padStart(8, '0')}
            </div>
            <div className="text-[10px] mt-1 text-slate-400">
              {idx < 3 ? (lang === 'ar' ? 'الشبكة' : 'Network') : lang === 'ar' ? 'الجهاز' : 'Host'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DnsFlowDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      label: lang === 'ar' ? '1. المتصفح' : '1. Browser',
      msg: 'GET ncacademy.edu → Cache miss',
    },
    {
      label: lang === 'ar' ? '2. محلل DNS' : '2. DNS Resolver',
      msg: 'Querying Root & .edu TLD Servers',
    },
    {
      label: lang === 'ar' ? '3. الخادم الموثوق' : '3. Authoritative NS',
      msg: 'Returns A Record: 172.67.182.10',
    },
    {
      label: lang === 'ar' ? '4. اتصال HTTPS' : '4. Connect via IP',
      msg: 'TLS Handshake → Page Loaded!',
    },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {steps.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setStep(i)}
            className={`p-2.5 rounded-lg border text-xs font-medium transition-colors ${
              step === i
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-semibold'
                : 'bg-slate-900 border-slate-800 text-slate-300'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-cyan-300">
        {steps[step].msg}
      </div>
    </div>
  );
};

const TopologyDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [topo, setTopo] = useState<'star' | 'mesh' | 'bus'>('star');
  const info = {
    star:
      lang === 'ar'
        ? 'الطوبولوجيا النجمية: كل جهاز يتصل بالمبدل المركزي. تعطل كابل واحد لا يؤثر على البقية.'
        : 'Star Topology: Every node connects to a central Switch. One broken link only affects one device.',
    mesh:
      lang === 'ar'
        ? 'الطوبولوجيا المتداخلة: مسارات متعددة بين العقد تمنع انقطاع الشبكة حتى لو تعطل أكثر من مسار.'
        : 'Mesh Topology: Multiple redundant paths reroute traffic automatically around link failures.',
    bus:
      lang === 'ar'
        ? 'الطوبولوجيا الخطية: جميع الأجهزة تشترك في كابل رئيسي واحد، وانقطاعه يوقف الشبكة.'
        : 'Bus Topology: All nodes share one backbone cable—a break halts network communication.',
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['star', 'mesh', 'bus'] as const).map((tKey) => (
          <button
            key={tKey}
            type="button"
            onClick={() => setTopo(tKey)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase border transition-colors ${
              topo === tKey
                ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300'
            }`}
          >
            {tKey}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
        {info[topo]}
      </div>
    </div>
  );
};

const LogicGatesDiagram: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const [a, setA] = useState<0 | 1>(1);
  const [b, setB] = useState<0 | 1>(0);
  const [gate, setGate] = useState<'AND' | 'OR' | 'XOR' | 'NOT'>('AND');

  const out =
    gate === 'AND'
      ? a & b
      : gate === 'OR'
      ? a | b
      : gate === 'XOR'
      ? a ^ b
      : a === 1
      ? 0
      : 1;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {(['AND', 'OR', 'XOR', 'NOT'] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGate(g)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-colors ${
              gate === g
                ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 items-center text-center">
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setA((v) => (v === 1 ? 0 : 1))}
            className={`w-full py-2.5 rounded-xl border font-mono text-sm font-bold ${
              a === 1 ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            Input A = {a}
          </button>
          {gate !== 'NOT' && (
            <button
              type="button"
              onClick={() => setB((v) => (v === 1 ? 0 : 1))}
              className={`w-full py-2.5 rounded-xl border font-mono text-sm font-bold ${
                b === 1 ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              Input B = {b}
            </button>
          )}
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 font-mono text-sm font-bold text-white">
          {gate}
        </div>

        <div
          className={`p-4 rounded-xl border font-mono text-sm font-bold ${
            out === 1
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
              : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}
        >
          {lang === 'ar' ? 'المخرج' : 'Output'} = {out}
        </div>
      </div>
    </div>
  );
};
