import { PCComponentSpec } from '../types/academy';

export const PC_COMPONENTS: PCComponentSpec[] = [
  {
    id: 'case',
    order: 1,
    name: { en: 'ATX Mid-Tower PC Case', ar: 'صندوق الحاسوب ATX' },
    shortName: { en: 'PC Case', ar: 'صندوق الحاسوب' },
    role: {
      en: 'Structural chassis, airflow channeling, and EMI shielding',
      ar: 'الهيكل الحاضن للمكونات وتوجيه تدفق الهواء والحماية',
    },
    description: {
      en: 'The PC case houses and protects all internal hardware, aligns motherboard standoffs, routes power cables, and directs cool intake air across hot silicon components.',
      ar: 'صندوق الحاسوب هو الهيكل المعدني والزجاجي الذي يضم كافة المكونات الداخلية ويحميها، ويوفر مسارات دقيقة لتمرير الكابلات وتدفق الهواء البارد لتبريد القطع.',
    },
    specs: [
      { label: { en: 'Form Factor', ar: 'المعيار الحجمي' }, value: 'ATX / mATX' },
      { label: { en: 'Side Panel', ar: 'اللوح الجانبي' }, value: '4mm Tempered Glass' },
      { label: { en: 'Front Panel', ar: 'الواجهة الأمامية' }, value: 'Perforated Airflow Mesh' },
      { label: { en: 'PCIe Slots', ar: 'فتحات التوسعة' }, value: '7 Horizontal Slots' },
    ],
    relatedLessonId: 'computer-system-unit',
    accentHex: '#38BDF8',
  },
  {
    id: 'psu',
    order: 2,
    name: { en: '850W Modular Power Supply (PSU)', ar: 'وحدة تزويد الطاقة 850W PSU' },
    shortName: { en: 'PSU', ar: 'مزود الطاقة PSU' },
    role: {
      en: 'Converts wall AC power into regulated +12V, +5V, and +3.3V DC rails',
      ar: 'تحويل التيار المتردد إلى تيار مستمر منظم (+12V و +5V و +3.3V)',
    },
    description: {
      en: 'The Power Supply Unit transforms alternating current (AC) from your electrical outlet into clean, stable direct current (DC) needed by the motherboard, CPU, GPU, and storage drives.',
      ar: 'تقوم وحدة تزويد الطاقة بتحويل الكهرباء المنزلية المترددة (AC) إلى تيار مستمر مستقر ونقي (DC) بجهود متعددة لتغذية اللوحة الأم والمعالج وبطاقة الرسوميات.',
    },
    specs: [
      { label: { en: 'Wattage', ar: 'القدرة الكهربائية' }, value: '850W Continuous' },
      { label: { en: 'Efficiency', ar: 'كفاءة الطاقة' }, value: '80+ Gold (90%)' },
      { label: { en: 'Cabling', ar: 'الكابلات' }, value: 'Fully Modular' },
      { label: { en: 'Primary Rails', ar: 'خطوط الجهد' }, value: '+12V / +5V / +3.3V' },
    ],
    relatedLessonId: 'power-supply-unit',
    accentHex: '#F59E0B',
  },
  {
    id: 'motherboard',
    order: 3,
    name: { en: 'ATX Z790 Motherboard', ar: 'اللوحة الأم ATX' },
    shortName: { en: 'Motherboard', ar: 'اللوحة الأم' },
    role: {
      en: 'Central printed circuit board interconnecting CPU, RAM, GPU, storage & I/O',
      ar: 'لوحة الدوائر الرئيسية التي تربط المعالج والذاكرة والبطاقات والمنافذ',
    },
    description: {
      en: 'The motherboard acts as the nervous system of the computer. Its multi-layer copper traces carry power from the VRM and high-speed data signals across PCIe lanes, DDR5 channels, and chipset buses.',
      ar: 'تعمل اللوحة الأم كالجهاز العصبي للحاسوب؛ حيث تنقل مساراتها النحاسية الدقيقة الطاقة الكهربائية وإشارات البيانات فائقة السرعة بين المعالج والذاكرة والبطاقات.',
    },
    specs: [
      { label: { en: 'Socket', ar: 'مقبس المعالج' }, value: 'LGA 1700' },
      { label: { en: 'Memory Support', ar: 'دعم الذاكرة' }, value: '4x DDR5 DIMM' },
      { label: { en: 'Expansion', ar: 'التوسعة' }, value: 'PCIe 5.0 x16' },
      { label: { en: 'Power Delivery', ar: 'دوائر الطاقة' }, value: '16+1 Phase VRM' },
    ],
    relatedLessonId: 'motherboard',
    accentHex: '#06B6D4',
  },
  {
    id: 'cpu',
    order: 4,
    name: { en: 'Multi-Core Desktop CPU', ar: 'وحدة المعالجة المركزية CPU' },
    shortName: { en: 'CPU', ar: 'المعالج CPU' },
    role: {
      en: 'Executes program instructions via Fetch-Decode-Execute cycles',
      ar: 'تنفيذ التعليمات البرمجية والعمليات الحسابية والمنطقية',
    },
    description: {
      en: 'Often called the brain of the computer, the Central Processing Unit contains billions of microscopic transistors arranged into execution cores, caches, and a control unit to process software instructions.',
      ar: 'يُلقب المعالج بعقل الحاسوب، ويضم مليارات الترانزستورات الدقيقة موزعة على أنوية معالجة وذاكرة مخبئية سريعة لتنفيذ كافة تعليمات البرامج ونظام التشغيل.',
    },
    specs: [
      { label: { en: 'Cores / Threads', ar: 'الأنوية / المسارات' }, value: '16 Cores / 24 Threads' },
      { label: { en: 'Boost Clock', ar: 'التردد الأقصى' }, value: '5.4 GHz' },
      { label: { en: 'L3 Cache', ar: 'الذاكرة المخبئية' }, value: '30 MB Smart Cache' },
      { label: { en: 'Lithography', ar: 'دقة التصنيع' }, value: '4nm FinFET' },
    ],
    relatedLessonId: 'cpu',
    accentHex: '#22D3EE',
  },
  {
    id: 'ram',
    order: 5,
    name: { en: 'DDR5 Dual-Channel RAM (32GB)', ar: 'الذاكرة العشوائية DDR5 RAM' },
    shortName: { en: 'RAM', ar: 'الذاكرة RAM' },
    role: {
      en: 'High-speed volatile working memory for active OS and running apps',
      ar: 'ذاكرة عمل فائقة السرعة لتخزين بيانات البرامج النشطة مؤقتاً',
    },
    description: {
      en: 'Random Access Memory stores active applications and data currently in use so the CPU can read and write at nanosecond speeds. Data in RAM clears when power is turned off.',
      ar: 'تحفظ الذاكرة العشوائية بيانات البرامج قيد التشغيل حالياً ليتمكن المعالج من الوصول إليها خلال أجزاء من النانو ثانية، وتفرغ محتوياتها عند إيقاف التشغيل.',
    },
    specs: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '32 GB (2 x 16 GB)' },
      { label: { en: 'Speed', ar: 'السرعة' }, value: '6000 MT/s DDR5' },
      { label: { en: 'Configuration', ar: 'القنوات' }, value: 'Dual-Channel' },
      { label: { en: 'Volatility', ar: 'الطبيعة' }, value: 'Volatile Memory' },
    ],
    relatedLessonId: 'ram-and-rom',
    accentHex: '#0EA5E9',
  },
  {
    id: 'ssd',
    order: 6,
    name: { en: 'M.2 NVMe PCIe 4.0 SSD (1TB)', ar: 'قرص الحالة الصلبة NVMe SSD' },
    shortName: { en: 'SSD', ar: 'التخزين SSD' },
    role: {
      en: 'Ultra-fast non-volatile flash storage for OS boot and applications',
      ar: 'تخزين دائم فائق السرعة لنظام التشغيل والبرامج والملفات',
    },
    description: {
      en: 'An M.2 NVMe Solid State Drive uses NAND flash memory with zero moving parts, connecting directly to PCIe lanes on the motherboard for multi-gigabyte-per-second read and write performance.',
      ar: 'يعتمد قرص NVMe SSD على شرائح الذاكرة الوميضية NAND دون أجزاء ميكانيكية متحركة، ويتصل مباشرة بمسارات PCIe لتحقيق سرعات قراءة وكتابة تصل لآلاف الميجابايت في الثانية.',
    },
    specs: [
      { label: { en: 'Form Factor', ar: 'الحجم' }, value: 'M.2 2280' },
      { label: { en: 'Interface', ar: 'الواجهة' }, value: 'PCIe 4.0 x4 NVMe' },
      { label: { en: 'Seq. Read', ar: 'سرعة القراءة' }, value: '7,200 MB/s' },
      { label: { en: 'Capacity', ar: 'السعة' }, value: '1 TB NAND Flash' },
    ],
    relatedLessonId: 'ssd-and-hdd',
    accentHex: '#3B82F6',
  },
  {
    id: 'cooler',
    order: 7,
    name: { en: 'Tower Heatpipe CPU Cooler', ar: 'مبرد المعالج الهوائي' },
    shortName: { en: 'CPU Cooler', ar: 'مبرد المعالج' },
    role: {
      en: 'Draws thermal energy from the CPU IHS through copper pipes and fins',
      ar: 'تشتيت الحرارة المنبعثة من المعالج عبر الأنابيب النحاسية والزعانف',
    },
    description: {
      en: 'Because processors generate intense heat in a tiny area, a copper cold plate and phase-change heatpipes transfer heat upward into aluminum fins where a PWM fan exhausts it away.',
      ar: 'نظراً للحرارة العالية التي يولدها المعالج، تنقل الأنابيب النحاسية الحرارة من سطح المعالج إلى زعانف الألمنيوم حيث تقوم المروحة بطردها خارج الصندوق.',
    },
    specs: [
      { label: { en: 'Heatpipes', ar: 'الأنابيب الحرارية' }, value: '4x Direct Copper' },
      { label: { en: 'Fan Size', ar: 'حجم المروحة' }, value: '120mm PWM' },
      { label: { en: 'TDP Rating', ar: 'قدرة التبريد' }, value: '220W TDP' },
      { label: { en: 'Noise Level', ar: 'مستوى الضجيج' }, value: '24 dBA' },
    ],
    relatedLessonId: 'cooling-systems',
    accentHex: '#14B8A6',
  },
  {
    id: 'gpu',
    order: 8,
    name: { en: 'Triple-Fan Graphics Card (GPU)', ar: 'بطاقة الرسوميات GPU' },
    shortName: { en: 'GPU', ar: 'كرت الشاشة GPU' },
    role: {
      en: 'Parallel processor rendering 3D graphics, video, and AI workloads',
      ar: 'معالجة الرسوميات ثلاثية الأبعاد والفيديو والعمليات المتوازية',
    },
    description: {
      en: 'The Graphics Processing Unit contains thousands of specialized parallel cores designed to compute millions of pixels, 3D geometry, shaders, and neural matrix operations simultaneously.',
      ar: 'تحتوي بطاقة الرسوميات على آلاف الأنوية المتوازية المصممة لحساب ملايين البكسلات والمجسمات ثلاثية الأبعاد ومعالجة الفيديو والذكاء الاصطناعي في آنٍ واحد.',
    },
    specs: [
      { label: { en: 'VRAM', ar: 'ذاكرة الفيديو' }, value: '16 GB GDDR6X' },
      { label: { en: 'Interface', ar: 'المنفذ' }, value: 'PCIe 4.0 x16' },
      { label: { en: 'Cooling', ar: 'التبريد' }, value: 'Triple Axial Fans' },
      { label: { en: 'Outputs', ar: 'المخارج' }, value: '3x DP 1.4 / 1x HDMI 2.1' },
    ],
    relatedLessonId: 'gpu',
    accentHex: '#2563EB',
  },
  {
    id: 'hdd',
    order: 9,
    name: { en: '3.5" SATA Hard Disk Drive (4TB)', ar: 'القرص الصلب الميكانيكي HDD' },
    shortName: { en: 'HDD', ar: 'القرص الصلب HDD' },
    role: {
      en: 'High-capacity magnetic platter storage for archives, media, and backups',
      ar: 'تخزين مغناطيسي عالي السعة للأرشيف والوسائط والنسخ الاحتياطي',
    },
    description: {
      en: 'A Hard Disk Drive stores terabytes of data on spinning magnetic platters read by a precision actuator arm. While slower than SSDs, HDDs deliver unbeatable cost per terabyte for mass archives.',
      ar: 'يخزن القرص الصلب الميكانيكي البيانات على أقراص مغناطيسية دوارة تُقرأ عبر ذراع ورأس قراءة دقيق؛ ويتميز بسعات ضخمة وتكلفة اقتصادية لحفظ الملفات الكبيرة.',
    },
    specs: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '4 TB Magnetic' },
      { label: { en: 'Spindle Speed', ar: 'سرعة الدوران' }, value: '7,200 RPM' },
      { label: { en: 'Interface', ar: 'الواجهة' }, value: 'SATA III (6 Gbps)' },
      { label: { en: 'Form Factor', ar: 'الحجم' }, value: '3.5-inch Bay' },
    ],
    relatedLessonId: 'ssd-and-hdd',
    accentHex: '#6366F1',
  },
  {
    id: 'fans',
    order: 10,
    name: { en: '120mm Chassis Cooling Fans (3x)', ar: 'مراوح التبريد الهيكلية (3x)' },
    shortName: { en: 'Cooling Fans', ar: 'مراوح التبريد' },
    role: {
      en: 'Maintains continuous front-to-back intake and exhaust airflow',
      ar: 'توفير تيار هواء مستمر من الأمام للخلف لطرد الهواء الساخن',
    },
    description: {
      en: 'Front intake fans draw cool ambient air across the motherboard, GPU, and storage bays, while the rear exhaust fan expels heated air out of the case to prevent thermal throttling.',
      ar: 'تسحب المراوح الأمامية الهواء البارد إلى داخل الصندوق، بينما تقوم المروحة الخلفية بطرد الهواء الساخن للحفاظ على درجات حرارة مستقرة ومنع انخفاض الأداء.',
    },
    specs: [
      { label: { en: 'Configuration', ar: 'التوزيع' }, value: '2x Intake / 1x Exhaust' },
      { label: { en: 'Diameter', ar: 'القطر' }, value: '120 mm PWM' },
      { label: { en: 'Airflow', ar: 'تدفق الهواء' }, value: '62 CFM per fan' },
      { label: { en: 'Bearing', ar: 'نوع المحور' }, value: 'Fluid Dynamic Bearing' },
    ],
    relatedLessonId: 'cooling-systems',
    accentHex: '#06B6D4',
  },
];
