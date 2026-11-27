import { LessonData } from '../types/academy';

export const LESSONS_HARDWARE: LessonData[] = [
  {
    id: 'motherboard',
    categoryId: 'hardware',
    order: 1,
    title: { en: 'Motherboard', ar: 'اللوحة الأم' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'The Motherboard is the main multi-layer printed circuit board (PCB) inside a computer that physically mounts and electrically interconnects the CPU, RAM, GPU, storage, and I/O ports.',
      ar: 'اللوحة الأم هي لوحة الدوائر المطبوعة الرئيسية متعددة الطبقات التي تثبّت عليها المكونات الأساسية وتصل بين المعالج والذاكرة وكرت الشاشة والتخزين والمنافذ.',
    },
    detailedExplanation: {
      en: 'Think of the motherboard as a bustling city grid: microscopic copper pathways called traces carry power from the Voltage Regulator Module (VRM) and high-speed data packets between slots. A central Chipset coordinates communication between USB ports, NVMe SSDs, SATA drives, and network adapters, while a small CMOS coin battery keeps the system clock and UEFI settings alive.',
      ar: 'تشبه اللوحة الأم شبكة طرق ذكية؛ فمساراتها النحاسية الدقيقة تنقل الطاقة من دوائر تنظيم الجهد (VRM) وحزم البيانات السريعة بين المنافذ. وتتولى شريحة الطقم (Chipset) تنسيق الاتصال مع منافذ USB وأقراص التخزين والشبكة، بينما تحفظ بطارية CMOS الصغيرة التوقيت وإعدادات UEFI.',
    },
    howItWorks: {
      en: 'Power enters via the 24-pin ATX and 8-pin EPS connectors → VRMs step 12V down to ~1.2V for the CPU → high-speed PCIe and DDR5 traces route signals with exact impedance matching so bits arrive synchronized.',
      ar: 'تدخل الطاقة عبر موصل 24-pin و 8-pin ← تخفض دوائر VRM الجهد إلى نحو 1.2 فولت للمعالج ← تنقل مسارات PCIe و DDR5 الإشارات بدقة زمنية متزامنة.',
    },
    mainFunctions: [
      { en: 'Hosts CPU socket, DIMM memory slots, and PCIe expansion slots', ar: 'احتضان مقبس المعالج وفتحات الذاكرة RAM وفتحات التوسعة PCIe' },
      { en: 'Regulates clean multi-phase voltage to the processor (VRM)', ar: 'تنظيم الجهد الكهربائي بدقة لتغذية المعالج (VRM)' },
      { en: 'Routes high-speed data buses and rear I/O connectivity', ar: 'توجيه نواقل البيانات السريعة ومنافذ الإدخال والإخراج الخلفية' },
    ],
    realWorldExamples: [
      { en: 'ATX Gaming & Creator Motherboards with PCIe 5.0 and integrated Wi-Fi 7', ar: 'لوحات ATX الحديثة المزودة بمنافذ PCIe 5.0 وشبكة لاسلكية مدمجة' },
      { en: 'Compact Mini-ITX boards powering small form-factor systems', ar: 'لوحات Mini-ITX المدمجة للحواسيب صغيرة الحجم' },
    ],
    illustrationKey: 'motherboard',
    interactiveDiagram: 'motherboard-map',
    linked3DComponent: 'motherboard',
    vocabulary: [
      { termEn: 'PCB', termAr: 'لوحة الدوائر المطبوعة', meaningEn: 'Fiberglass and copper layered board carrying traces', meaningAr: 'ألواح من الألياف الزجاجية والنحاس تحمل المسارات الكهربائية' },
      { termEn: 'VRM', termAr: 'وحدة تنظيم الجهد', meaningEn: 'Voltage Regulator Module supplying clean power to CPU', meaningAr: 'دوائر إلكترونية تغذي المعالج بجهد ثابت ودقيق' },
      { termEn: 'Chipset', termAr: 'مجموعة الشرائح', meaningEn: 'Controller managing data flow across USB, SATA, and PCIe lanes', meaningAr: 'المتحكم الذي ينسق تدفق البيانات بين المنافذ واللوحة' },
    ],
    summary: {
      en: 'The motherboard unites power delivery, high-speed signal buses, and expansion interfaces into one central backbone.',
      ar: 'تجمع اللوحة الأم بين توزيع الطاقة ونقل البيانات وفتحات التوسعة في عمود فقري واحد للحاسوب.',
    },
    quiz: [
      {
        question: { en: 'Which motherboard component converts 12V power down to the low voltage required by the CPU?', ar: 'أي جزء في اللوحة الأم يخفض جهد 12 فولت إلى الجهد الدقيق اللازم للمعالج؟' },
        options: [
          { en: 'CMOS Battery', ar: 'بطارية CMOS' },
          { en: 'VRM (Voltage Regulator Module)', ar: 'وحدة تنظيم الجهد (VRM)' },
          { en: 'Audio Jack', ar: 'منفذ الصوت' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The VRM surrounds the CPU socket and steps 12V DC down cleanly to ~1.1–1.35V.',
          ar: 'تحيط دوائر VRM بمقبس المعالج وتوفر له جهداً مستقراً ومنخفضاً.',
        },
      },
      {
        question: { en: 'What does the round silver CMOS battery on a motherboard preserve?', ar: 'ماذا تحفظ بطارية CMOS الفضية الدائرية على اللوحة الأم؟' },
        options: [
          { en: 'System clock and BIOS/UEFI configuration when unplugged', ar: 'الساعة الداخلية وإعدادات BIOS/UEFI عند فصل الكهرباء' },
          { en: 'Graphics card textures', ar: 'رسوميات بطاقة الشاشة' },
          { en: 'Installed video games', ar: 'الألعاب المثبتة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The CR2032 CMOS cell powers the real-time clock and firmware settings.',
          ar: 'تغذي البطارية ساعة النظام وإعدادات اللوحة عند إيقاف التشغيل.',
        },
      },
      {
        question: { en: 'What are the copper lines etched across a motherboard called?', ar: 'ماذا تُسمى الخطوط النحاسية الدقيقة المحفورة على اللوحة الأم؟' },
        options: [
          { en: 'Traces', ar: 'المسارات (Traces)' },
          { en: 'Pixels', ar: 'البكسلات' },
          { en: 'Sectors', ar: 'القطاعات' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Copper traces serve as the electrical wires inside a multi-layer PCB.',
          ar: 'تعمل المسارات النحاسية كأسلاك دقيقة داخل طبقات اللوحة.',
        },
      },
    ],
  },
  {
    id: 'cpu',
    categoryId: 'hardware',
    order: 2,
    title: { en: 'CPU (Central Processing Unit)', ar: 'وحدة المعالجة المركزية CPU' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'The CPU is the primary processor of a computer—the electronic "brain" that fetches, decodes, and executes software instructions using billions of microscopic transistors.',
      ar: 'وحدة المعالجة المركزية هي العقل الإلكتروني الرئيسي للحاسوب، وتتولى جلب وفك تشفير وتنفيذ تعليمات البرامج عبر مليارات الترانزستورات الدقيقة.',
    },
    detailedExplanation: {
      en: 'Inside a modern CPU sit multiple independent processing Cores, each containing an Arithmetic Logic Unit (ALU) for math/logic, a Control Unit (CU) to direct traffic, ultra-fast Registers, and layered L1/L2/L3 Cache memory. Multi-core CPUs can run many threads in parallel—keeping your browser, music, and compiler responsive simultaneously.',
      ar: 'يحتوي المعالج الحديث على عدة أنوية مستقلة، تضم كل نواة وحدة حساب ومنطق (ALU) للعمليات الرياضية، ووحدة تحكم (CU) لتوجيه الأوامر، ومسجلات فائقة السرعة، وذاكرة مخبئية L1/L2/L3. يتيح تعدد الأنوية تنفيذ عدة مهام متزامنة بسلاسة تامة.',
    },
    howItWorks: {
      en: 'The Control Unit fetches an instruction from L1 cache or RAM → decodes the binary operation → sends numbers into the ALU → writes the result back to a register in a fraction of a nanosecond.',
      ar: 'تجلب وحدة التحكم التعليمة من الذاكرة المخبئية أو RAM ← تفك تشفيرها ← تمرر الأرقام إلى وحدة ALU ← تعيد حفظ النتيجة في المسجل خلال جزء من النانو ثانية.',
    },
    mainFunctions: [
      { en: 'ALU performs addition, subtraction, multiplication, and boolean logic', ar: 'تنفذ وحدة ALU العمليات الحسابية والمقارنات المنطقية' },
      { en: 'Control Unit orchestrates instruction flow across all subsystems', ar: 'تنسق وحدة التحكم تسلسل الأوامر وتدفق البيانات' },
      { en: 'L1/L2/L3 Cache keeps frequently used data inches from execution units', ar: 'تحفظ الذاكرة المخبئية البيانات المتكررة لتقليل وقت الانتظار' },
    ],
    realWorldExamples: [
      { en: 'Compiling source code, compressing ZIP archives, and running OS scheduling', ar: 'ترجمة الأكواد البرمجية وضغط الملفات وإدارة عمليات نظام التشغيل' },
      { en: 'Desktop CPUs like 16-core workstations installed in LGA sockets', ar: 'معالجات سطح المكتب متعددة الأنوية المثبتة على مقابس LGA' },
    ],
    illustrationKey: 'cpu',
    interactiveDiagram: 'cpu-pipeline',
    linked3DComponent: 'cpu',
    vocabulary: [
      { termEn: 'ALU', termAr: 'وحدة الحساب والمنطق', meaningEn: 'Executes arithmetic and bitwise logical operations', meaningAr: 'الدائرة المسؤولة عن الجمع والطرح والمقارنات المنطقية' },
      { termEn: 'CPU Core', termAr: 'نواة المعالج', meaningEn: 'Independent processing unit inside a multi-core CPU', meaningAr: 'وحدة تنفيذ مستقلة داخل المعالج متعدد الأنوية' },
      { termEn: 'L1 / L2 / L3 Cache', termAr: 'الذاكرة المخبئية', meaningEn: 'Ultra-fast SRAM built directly inside the CPU die', meaningAr: 'ذاكرة سريعة جداً مدمجة داخل رقاقة المعالج' },
    ],
    summary: {
      en: 'The CPU combines Control Units, ALUs, Registers, and Cache across multiple cores to execute software instructions at gigahertz speeds.',
      ar: 'يجمع المعالج بين وحدة التحكم ووحدة الحساب والذاكرة المخبئية عبر أنوية متعددة لتنفيذ الأوامر بسرعة الجيجاهرتز.',
    },
    quiz: [
      {
        question: { en: 'Which unit inside the CPU performs mathematical calculations and logic comparisons?', ar: 'أي وحدة داخل المعالج تقوم بالعمليات الحسابية والمقارنات المنطقية؟' },
        options: [
          { en: 'ALU (Arithmetic Logic Unit)', ar: 'وحدة الحساب والمنطق (ALU)' },
          { en: 'SATA Controller', ar: 'متحكم SATA' },
          { en: 'Heatsink Fin', ar: 'زعانف التبريد' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The ALU handles all arithmetic and boolean operations.',
          ar: 'تتولى وحدة ALU جميع العمليات الحسابية والمنطقية.',
        },
      },
      {
        question: { en: 'Why does a CPU have L1, L2, and L3 Cache?', ar: 'لماذا يحتوي المعالج على ذاكرة مخبئية L1 و L2 و L3؟' },
        options: [
          { en: 'To store movies permanently', ar: 'لتخزين الأفلام بشكل دائم' },
          { en: 'To keep frequent data close to cores so they don’t wait on slower RAM', ar: 'لتزويد الأنوية بالبيانات المتكررة فوراً دون انتظار الذاكرة العشوائية' },
          { en: 'To cool down the motherboard', ar: 'لتبريد اللوحة الأم' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'On-die SRAM cache is many times faster than external DDR5 RAM.',
          ar: 'الذاكرة المخبئية أسرع بأضعاف من الذاكرة العشوائية الخارجية.',
        },
      },
      {
        question: { en: 'What is the metal lid on top of a modern desktop CPU called?', ar: 'ماذا يُسمى الغطاء المعدني أعلى المعالج المكتبي الحديث؟' },
        options: [
          { en: 'Integrated Heat Spreader (IHS)', ar: 'مشتت الحرارة المدمج (IHS)' },
          { en: 'Optical Lens', ar: 'عدسة بصرية' },
          { en: 'PCIe Bracket', ar: 'حامل PCIe' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The IHS protects the silicon die and spreads heat evenly to the CPU cooler.',
          ar: 'يحمي الغطاء المعدني شريحة السيليكون وينقل حرارتها إلى المبرد.',
        },
      },
    ],
  },
  {
    id: 'ram-and-rom',
    categoryId: 'hardware',
    order: 3,
    title: { en: 'RAM and ROM', ar: 'الذاكرة العشوائية RAM وذاكرة القراءة ROM' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'RAM is fast, volatile working memory for running apps and data; ROM is non-volatile permanent memory storing essential startup firmware.',
      ar: 'RAM هي ذاكرة عمل سريعة ومؤقتة للبرامج النشطة، بينما ROM هي ذاكرة دائمة للقراءة فقط تحفظ برمجيات الإقلاع الأساسية.',
    },
    detailedExplanation: {
      en: 'When you open ten browser tabs and a code editor, they live inside RAM (Random Access Memory). Because RAM uses electrical charges in capacitors (DRAM), everything inside it disappears the instant power is lost. By contrast, ROM (Read-Only Memory / EEPROM flash) keeps its contents permanently—holding the UEFI/BIOS code required to wake up your hardware every time you press Power.',
      ar: 'عند فتح عدة تطبيقات وتبويبات متصفح، تُحمّل بياناتها داخل الذاكرة العشوائية RAM التي تتيح وصولاً مباشراً وسريعاً، لكنها تفقد محتواها فور انقطاع الكهرباء. في المقابل، تحتفظ ذاكرة ROM ببياناتها بشكل دائم، وتخزن برنامج UEFI/BIOS اللازم لبدء تشغيل الحاسوب.',
    },
    howItWorks: {
      en: 'In Dual-Channel RAM, two matching DDR5 sticks connect along separate 64-bit pathways to double memory bandwidth for the CPU.',
      ar: 'في نظام القناتين (Dual-Channel)، تعمل شريحتا ذاكرة DDR5 عبر مسارين متوازيين لمضاعفة سرعة نقل البيانات نحو المعالج.',
    },
    mainFunctions: [
      { en: 'RAM: Instant read/write workspace for the OS and active apps', ar: 'RAM: مساحة قراءة وكتابة سريعة للنظام والبرامج المفتوحة' },
      { en: 'ROM: Permanent boot instructions (POST & UEFI firmware)', ar: 'ROM: حفظ تعليمات الإقلاع الأولية وفحص العتاد' },
    ],
    realWorldExamples: [
      { en: '32 GB DDR5 RAM modules plugged into motherboard DIMM slots', ar: 'وحدات ذاكرة 32 جيجابايت DDR5 المثبتة على اللوحة الأم' },
      { en: 'BIOS/UEFI firmware chip soldered onto every motherboard', ar: 'شريحة BIOS/UEFI المثبتة على كل لوحة أم' },
    ],
    illustrationKey: 'memory',
    interactiveDiagram: 'none',
    linked3DComponent: 'ram',
    vocabulary: [
      { termEn: 'Volatile Memory', termAr: 'ذاكرة متطايرة', meaningEn: 'Memory that loses stored data when power is removed (RAM)', meaningAr: 'ذاكرة تفقد بياناتها عند انقطاع التيار الكهربائي مثل RAM' },
      { termEn: 'Non-Volatile', termAr: 'غير متطايرة', meaningEn: 'Memory that retains data without power (ROM, SSD)', meaningAr: 'ذاكرة تحفظ البيانات حتى بدون كهرباء مثل ROM و SSD' },
      { termEn: 'DDR5', termAr: 'DDR5', meaningEn: 'Double Data Rate 5th generation system memory', meaningAr: 'الجيل الخامس من الذاكرة العشوائية مزدوجة النقل' },
    ],
    summary: {
      en: 'RAM gives running software lightning-fast temporary memory, while ROM permanently stores startup firmware.',
      ar: 'توفر RAM ذاكرة عمل مؤقتة فائقة السرعة، بينما تحفظ ROM تعليمات الإقلاع الدائمة.',
    },
    quiz: [
      {
        question: { en: 'What happens to data stored in RAM when the computer shuts down?', ar: 'ماذا يحدث للبيانات الموجودة في RAM عند إيقاف تشغيل الحاسوب؟' },
        options: [
          { en: 'It is erased because RAM is volatile', ar: 'تُمحى لأن RAM ذاكرة متطايرة' },
          { en: 'It stays inside RAM forever', ar: 'تبقى محفوظة فيها للأبد' },
          { en: 'It turns into ROM', ar: 'تتحول إلى ذاكرة ROM' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'DRAM requires continuous power refresh; shutting down clears it.',
          ar: 'تعتمد RAM على الكهرباء المستمرة وتفرغ عند إغلاق الجهاز.',
        },
      },
      {
        question: { en: 'Which memory stores the computer’s startup BIOS/UEFI firmware?', ar: 'أي ذاكرة تحفظ برمجية الإقلاع BIOS/UEFI؟' },
        options: [
          { en: 'ROM', ar: 'ROM' },
          { en: 'L1 Cache', ar: 'الذاكرة المخبئية' },
          { en: 'VRAM', ar: 'ذاكرة كرت الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Non-volatile ROM preserves startup firmware even when unplugged.',
          ar: 'تحفظ ذاكرة ROM برمجية الإقلاع بشكل دائم.',
        },
      },
      {
        question: { en: 'What is the benefit of installing two matching RAM sticks in Dual-Channel mode?', ar: 'ما فائدة تركيب شريحتي RAM متطابقتين في وضع Dual-Channel؟' },
        options: [
          { en: 'Doubles memory bandwidth between RAM and CPU', ar: 'مضاعفة عرض النطاق وسرعة نقل البيانات مع المعالج' },
          { en: 'Doubles hard drive space', ar: 'مضاعفة مساحة القرص الصلب' },
          { en: 'Reduces monitor brightness', ar: 'تقليل سطوع الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Dual-channel lets the memory controller read both modules in parallel.',
          ar: 'يتيح نظام القناتين القراءة والكتابة على الشريحتين بالتوازي.',
        },
      },
    ],
  },
  {
    id: 'gpu',
    categoryId: 'hardware',
    order: 4,
    title: { en: 'GPU (Graphics Processing Unit)', ar: 'بطاقة الرسوميات GPU' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'A GPU is a massively parallel processor engineered to render 2D/3D graphics, accelerate video, and compute large-scale matrix math for AI and scientific workloads.',
      ar: 'وحدة معالجة الرسوميات هي معالج متوازي ضخم مصمم لعرض الرسوميات ثنائية وثلاثية الأبعاد ومعالجة الفيديو وحسابات الذكاء الاصطناعي.',
    },
    detailedExplanation: {
      en: 'While a CPU has 8 to 24 powerful, complex cores built for sequential logic, a modern GPU packs thousands of smaller, streamlined cores. Computing a 4K frame at 60 FPS requires shading millions of pixels simultaneously—a task tailor-made for parallel GPU architecture backed by dedicated high-bandwidth VRAM (GDDR6X).',
      ar: 'بينما يمتلك المعالج المركزي بضع عشرات من الأنوية القوية للمهام المتسلسلة، تضم بطاقة الرسوميات آلاف الأنوية المتخصصة للعمل بالتوازي. رسم ملايين البكسلات في الثانية أو تدريب الشبكات العصبية يتطلب معالجة آلاف الحسابات في اللحظة نفسها بدعم من ذاكرة VRAM فائقة السرعة.',
    },
    howItWorks: {
      en: 'The CPU prepares scene geometry and sends draw calls over the PCIe x16 slot → GPU vertex shaders position 3D triangles → rasterizer & fragment shaders calculate lighting/textures into VRAM → DisplayPort/HDMI sends frames to the monitor.',
      ar: 'يرسل المعالج بيانات المشهد عبر منفذ PCIe x16 ← تحسب المظللات مواقع المثلثات والإضاءة وتخزن الصورة في ذاكرة VRAM ← تُرسل الإطارات عبر HDMI أو DisplayPort إلى الشاشة.',
    },
    mainFunctions: [
      { en: 'Real-time 3D rendering, shaders, and ray tracing', ar: 'تصيير المشاهد ثلاثية الأبعاد وتتبع الأشعة في الوقت الفعلي' },
      { en: 'Hardware video encoding/decoding (4K/8K streaming & editing)', ar: 'تشفير وفك تشفير الفيديو عالي الدقة بسرعة العتاد' },
      { en: 'Parallel matrix computing for AI, ML, and physics', ar: 'الحوسبة المتوازية للذكاء الاصطناعي والمحاكاة الفيزيائية' },
    ],
    realWorldExamples: [
      { en: 'Interactive Three.js 3D PC Lab rendered smoothly by your browser’s GPU pipeline', ar: 'تشغيل مختبر 3D التفاعلي في هذه المنصة بسلاسة عبر بطاقة الرسوميات' },
      { en: 'Training deep learning neural networks and rendering 3D animations', ar: 'تدريب نماذج الذكاء الاصطناعي وإنتاج أفلام الرسوم المتحركة' },
    ],
    illustrationKey: 'gpu',
    interactiveDiagram: 'none',
    linked3DComponent: 'gpu',
    vocabulary: [
      { termEn: 'VRAM', termAr: 'ذاكرة الفيديو', meaningEn: 'High-speed memory dedicated to storing textures and frame buffers', meaningAr: 'ذاكرة سريعة مخصصة لحفظ الإطارات والخامات على كرت الشاشة' },
      { termEn: 'Parallel Processing', termAr: 'المعالجة المتوازية', meaningEn: 'Running thousands of similar calculations simultaneously', meaningAr: 'تنفيذ آلاف العمليات الحسابية المتشابهة في نفس اللحظة' },
      { termEn: 'PCIe x16', termAr: 'منفذ PCIe x16', meaningEn: 'High-bandwidth motherboard slot used by discrete GPUs', meaningAr: 'منفذ اللوحة الأم عالي السرعة المخصص لبطاقة الرسوميات' },
    ],
    summary: {
      en: 'GPUs harness thousands of parallel cores and ultra-fast VRAM to power 3D graphics, video production, and AI.',
      ar: 'تعتمد بطاقة الرسوميات على آلاف الأنوية المتوازية وذاكرة VRAM لتشغيل الرسوميات ثلاثية الأبعاد والفيديو والذكاء الاصطناعي.',
    },
    quiz: [
      {
        question: { en: 'What is the fundamental architectural difference between a CPU and a GPU?', ar: 'ما الفرق المعماري الجوهري بين CPU و GPU؟' },
        options: [
          { en: 'GPUs have thousands of cores optimized for parallel tasks; CPUs have fewer cores optimized for sequential tasks', ar: 'تمتلك GPU آلاف الأنوية للمعالجة المتوازية بينما يركز CPU على أنوية أقل للمهام المتسلسلة' },
          { en: 'GPUs cannot do any math', ar: 'لا تستطيع GPU إجراء أي حسابات' },
          { en: 'CPUs plug into HDMI ports', ar: 'يتصل CPU بمنفذ HDMI' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'GPUs trade single-thread complexity for massive parallel throughput.',
          ar: 'تضحي GPU بتعقيد النواة الواحدة مقابل آلاف الأنوية المتوازية.',
        },
      },
      {
        question: { en: 'What does VRAM store?', ar: 'ماذا تخزن ذاكرة VRAM على بطاقة الرسوميات؟' },
        options: [
          { en: '3D textures, shaders, and frame buffers', ar: 'الخامات ثلاثية الأبعاد ومخازن الإطارات' },
          { en: 'BIOS passwords', ar: 'كلمات مرور BIOS' },
          { en: 'Printer ink levels', ar: 'مستوى حبر الطابعة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'VRAM holds graphical assets right beside the GPU cores.',
          ar: 'تحفظ VRAM بيانات الرسوميات بجوار أنوية المعالجة الرسومية مباشرة.',
        },
      },
      {
        question: { en: 'Which motherboard slot accepts a dedicated graphics card?', ar: 'ما المنفذ الذي تُركّب فيه بطاقة الرسوميات المنفصلة على اللوحة الأم؟' },
        options: [
          { en: 'PCIe x16 Slot', ar: 'منفذ PCIe x16' },
          { en: 'RJ-45 Ethernet Port', ar: 'منفذ الشبكة RJ-45' },
          { en: '3.5mm Audio Jack', ar: 'منفذ الصوت' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'PCIe x16 provides 16 high-speed lanes for massive GPU data transfer.',
          ar: 'يوفر منفذ PCIe x16 ستة عشر مساراً فائق السرعة لبيانات الرسوميات.',
        },
      },
    ],
  },
  {
    id: 'ssd-and-hdd',
    categoryId: 'hardware',
    order: 5,
    title: { en: 'SSD and HDD', ar: 'وحدات التخزين SSD و HDD' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'SSDs (Solid State Drives) store data electronically on high-speed NAND flash chips with no moving parts, while HDDs (Hard Disk Drives) use spinning magnetic platters and a mechanical arm.',
      ar: 'تخزن أقراص SSD البيانات إلكترونياً على شرائح فلاش سريعة دون أجزاء متحركة، بينما تعتمد أقراص HDD على أسطوانات مغناطيسية دوارة وذراع قراءة ميكانيكي.',
    },
    detailedExplanation: {
      en: 'Both SSDs and HDDs are non-volatile storage, meaning your operating system, projects, and photos remain safe after shutting down. Modern M.2 NVMe SSDs reach speeds over 7,000 MB/s—making systems boot in seconds—while 3.5-inch HDDs spin at 5,400–7,200 RPM (~150 MB/s) to offer massive multi-terabyte capacity at low cost.',
      ar: 'كلاهما تخزين دائم لا يفقد البيانات عند إيقاف التشغيل. تصل سرعة أقراص NVMe SSD الحديثة إلى أكثر من 7000 ميجابايت/ثانية مما يجعل الإقلاع وفتح البرامج فورياً، بينما توفر أقراص HDD الميكانيكية سعات تخزين ضخمة بتكلفة اقتصادية لحفظ الأرشيف والنسخ الاحتياطية.',
    },
    howItWorks: {
      en: 'SSDs trap electrons inside floating-gate/charge-trap NAND transistors accessed purely via voltage; HDDs magnetize microscopic regions on spinning aluminum/glass platters beneath a flying read/write head.',
      ar: 'تحفظ أقراص SSD البيانات كشحنات إلكترونية داخل خلايا NAND دون حركة، بينما تغير أقراص HDD القطبية المغناطيسية على أسطوانات دوارة عبر رأس يطفو فوقها.',
    },
    mainFunctions: [
      { en: 'SSD: OS boot drive, software, games, and active workspaces', ar: 'SSD: قرص النظام والبرامج والألعاب والملفات النشطة' },
      { en: 'HDD: High-capacity media libraries, archives, and backups', ar: 'HDD: الأرشيف الضخم ومكتبات الفيديو والنسخ الاحتياطية' },
    ],
    realWorldExamples: [
      { en: 'Hybrid PC build: 1TB NVMe SSD for Windows/Linux + 4TB HDD for media storage', ar: 'تجميعة هجينة: قرص 1TB NVMe SSD للنظام مع قرص 4TB HDD للأرشيف' },
    ],
    illustrationKey: 'storage',
    interactiveDiagram: 'none',
    linked3DComponent: 'ssd',
    vocabulary: [
      { termEn: 'NVMe', termAr: 'بروتوكول NVMe', meaningEn: 'Non-Volatile Memory Express protocol over PCIe lanes', meaningAr: 'بروتوكول تخزين فائق السرعة يعمل مباشرة عبر مسارات PCIe' },
      { termEn: 'NAND Flash', termAr: 'ذاكرة NAND', meaningEn: 'Solid-state non-volatile memory technology used in SSDs', meaningAr: 'تقنية شرائح الذاكرة الدائمة المستخدمة في أقراص SSD' },
      { termEn: 'RPM', termAr: 'دورة في الدقيقة', meaningEn: 'Revolutions Per Minute measuring HDD platter rotation speed', meaningAr: 'مقياس سرعة دوران الأسطوانات في القرص الصلب الميكانيكي' },
    ],
    summary: {
      en: 'SSDs deliver blistering electronic speeds for your OS and apps; HDDs deliver economical bulk storage.',
      ar: 'تمنح أقراص SSD سرعة فائقة للنظام والبرامج، بينما توفر HDD سعة كبيرة بتكلفة منخفضة.',
    },
    quiz: [
      {
        question: { en: 'Why are SSDs far more shock-resistant and faster than HDDs?', ar: 'لماذا تعد أقراص SSD أسرع وأكثر تحملاً للصدمات من HDD؟' },
        options: [
          { en: 'SSDs use electronic flash chips with zero moving parts', ar: 'لأن SSD تعتمد على شرائح إلكترونية دون أجزاء ميكانيكية متحركة' },
          { en: 'SSDs spin at 50,000 RPM', ar: 'لأنها تدور بسرعة 50 ألف دورة' },
          { en: 'SSDs are made of glass platters', ar: 'لأنها مصنوعة من أسطوانات زجاجية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'No mechanical arm needs to seek across spinning platters in an SSD.',
          ar: 'لا تحتاج أقراص SSD إلى تحريك ذراع ميكانيكي للوصول إلى البيانات.',
        },
      },
      {
        question: { en: 'Which storage interface offers the highest throughput on modern PCs?', ar: 'أي واجهة تخزين توفر السرعة الأعلى في الحواسيب الحديثة؟' },
        options: [
          { en: 'M.2 NVMe PCIe', ar: 'M.2 NVMe عبر PCIe' },
          { en: 'Floppy Ribbon', ar: 'كابل الأقراص المرنة' },
          { en: 'USB 1.1', ar: 'منفذ USB 1.1' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'NVMe over PCIe bypasses legacy SATA bottlenecks.',
          ar: 'يتصل NVMe مباشرة بمسارات PCIe متجاوزاً حدود سرعة SATA.',
        },
      },
      {
        question: { en: 'When is a 3.5-inch HDD still a smart choice?', ar: 'متى يظل القرص الصلب الميكانيكي HDD خياراً مناسباً؟' },
        options: [
          { en: 'For storing multi-terabyte backups and cold archives at low cost', ar: 'لحفظ النسخ الاحتياطية والأرشيفات الضخمة بتكلفة منخفضة' },
          { en: 'To replace system RAM', ar: 'ليحل محل الذاكرة العشوائية' },
          { en: 'To power the monitor', ar: 'لتشغيل الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'HDDs remain the cheapest way to store many terabytes of archival data.',
          ar: 'توفر أقراص HDD أقل تكلفة لكل تيرابايت في التخزين الأرشيفي.',
        },
      },
    ],
  },
  {
    id: 'power-supply-unit',
    categoryId: 'hardware',
    order: 6,
    title: { en: 'Power Supply Unit (PSU)', ar: 'وحدة تزويد الطاقة PSU' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'The PSU converts high-voltage alternating current (AC) from wall outlets into tightly regulated low-voltage direct current (DC) rails (+12V, +5V, +3.3V) for internal PC parts.',
      ar: 'وحدة تزويد الطاقة (PSU) تحول التيار المتردد عالي الجهد من مقبس الجدار إلى تيار مستمر منظم بجهود منخفضة (+12V، +5V، +3.3V) لتغذية مكونات الحاسوب.',
    },
    detailedExplanation: {
      en: 'Wall power arrives at 110V–240V AC, which would instantly destroy delicate 1-volt silicon chips. The PSU rectifies, filters, and steps down voltage safely while protecting against surges, short circuits, and overheating. Modular PSUs let builders plug in only the cables they need for cleaner airflow.',
      ar: 'تصل كهرباء المنزل بتيار متردد 110-240 فولت، وهو ما قد يتلف الرقائق الإلكترونية فوراً. يقوم مزود الطاقة بتقويم التيار وتنقيته وخفضه بأمان، مع حماية ضد ارتفاع الجهد والقصر الكهربائي. وتتيح المزودات المعيارية (Modular) توصيل الكابلات المطلوبة فقط.',
    },
    howItWorks: {
      en: 'AC Input → Bridge Rectifier & PFC → High-Frequency Switching Transformer → DC Output Filters (+12V powers CPU/GPU motors; +5V/+3.3V power USB, SSDs, and logic chips).',
      ar: 'يدخل التيار المتردد ← يمر بمقوّم ومحول تردد عالٍ ← يخرج تيار مستمر نقي (+12V للمعالج وكرت الشاشة والمراوح، و+5V و+3.3V للوحات والأقراص).',
    },
    mainFunctions: [
      { en: 'AC-to-DC power conversion and voltage regulation', ar: 'تحويل التيار المتردد إلى مستمر وتنظيم الجهد' },
      { en: 'Over-voltage, over-current, and short-circuit protection (OVP/OCP/SCP)', ar: 'الحماية من زيادة الجهد والتيار والقصر الكهربائي' },
      { en: 'High-efficiency delivery rated by 80 Plus tiers (Bronze, Gold, Platinum)', ar: 'توفير كفاءة عالية مصنفة بشهادات 80 Plus لتقليل الحرارة والهدر' },
    ],
    realWorldExamples: [
      { en: '850W 80+ Gold Modular PSU powering a high-end workstation', ar: 'مزود طاقة 850 واط بكفاءة 80+ Gold معياري لتشغيل محطة عمل' },
    ],
    illustrationKey: 'psu',
    interactiveDiagram: 'none',
    linked3DComponent: 'psu',
    vocabulary: [
      { termEn: 'AC vs DC', termAr: 'التيار المتردد والمستمر', meaningEn: 'Alternating Current (wall) converted to Direct Current (PC internals)', meaningAr: 'تحويل تيار الشبكة المتردد إلى تيار مستمر ثابت للمكونات' },
      { termEn: '80 Plus Rating', termAr: 'تصنيف 80 Plus', meaningEn: 'Certification guaranteeing at least 80% energy efficiency under load', meaningAr: 'شهادة كفاءة تضمن استغلال 80% فأكثر من الطاقة المسحوبة' },
      { termEn: 'Modular Cables', termAr: 'الكابلات المعيارية', meaningEn: 'Detachable PSU power cables reducing case clutter', meaningAr: 'كابلات قابلة للفصل لتقليل الفوضى وتحسين التهوية' },
    ],
    summary: {
      en: 'A reliable PSU delivers clean, protected DC power across +12V, +5V, and +3.3V rails to keep every component stable.',
      ar: 'يضمن مزود الطاقة وصول تيار مستمر نقي ومحمي بجهود مستقرة لجميع أجزاء الحاسوب.',
    },
    quiz: [
      {
        question: { en: 'What electrical conversion does a PC PSU perform?', ar: 'ما التحويل الكهربائي الذي يقوم به مزود الطاقة؟' },
        options: [
          { en: 'AC (Alternating Current) to DC (Direct Current)', ar: 'من التيار المتردد (AC) إلى التيار المستمر (DC)' },
          { en: 'DC to Wi-Fi waves', ar: 'من المستمر إلى موجات واي فاي' },
          { en: 'Light to sound', ar: 'من الضوء إلى الصوت' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'PC electronics require regulated DC power converted from wall AC power.',
          ar: 'تعمل الدوائر الإلكترونية بالتيار المستمر المنظم المحول من تيار الجدار المتردد.',
        },
      },
      {
        question: { en: 'Which voltage rail delivers most of the power for modern CPUs and GPUs?', ar: 'أي خط جهد يزود المعالج وكرت الشاشة بمعظم الطاقة؟' },
        options: [
          { en: '+12V rail', ar: 'خط +12 فولت' },
          { en: '+1V rail', ar: 'خط +1 فولت' },
          { en: '220V rail', ar: 'خط 220 فولت' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The +12V rail carries the high wattage needed by CPU VRMs and GPUs.',
          ar: 'يحمل خط +12V القدرة العالية اللازمة للمعالج وبطاقة الرسوميات.',
        },
      },
      {
        question: { en: 'What does an "80+ Gold" PSU rating signify?', ar: 'على ماذا يدل تصنيف "80+ Gold" في مزودات الطاقة؟' },
        options: [
          { en: 'High energy conversion efficiency (~90%) with less wasted heat', ar: 'كفاءة عالية في تحويل الطاقة (~90%) مع حرارة مهدرة أقل' },
          { en: 'It is made of solid gold', ar: 'أنه مصنوع من الذهب الخالص' },
          { en: 'It doubles CPU clock speed', ar: 'أنه يضاعف سرعة المعالج' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Higher efficiency wastes less electricity as heat inside the PSU.',
          ar: 'الكفاءة الأعلى تعني فقداناً أقل للطاقة على شكل حرارة.',
        },
      },
    ],
  },
  {
    id: 'cooling-systems',
    categoryId: 'hardware',
    order: 7,
    title: { en: 'Cooling Systems', ar: 'أنظمة التبريد' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Cooling systems remove waste heat from silicon chips and the PC chassis using thermal paste, heatsinks, copper heatpipes, airflow fans, or closed-loop liquid coolers.',
      ar: 'تعمل أنظمة التبريد على إزالة الحرارة الناتجة عن الشرائح الإلكترونية عبر المعجون الحراري والمشتتات والأنابيب النحاسية ومراوح الهواء أو التبريد السائل.',
    },
    detailedExplanation: {
      en: 'When processors exceed safe temperature limits (~95–100°C), they automatically slow down—a defense called thermal throttling. Thermal paste fills microscopic air gaps between the CPU lid and cooler base. Copper heatpipes draw heat into dense aluminum fins, where fans push cool air through and exhaust hot air out the back.',
      ar: 'عندما تتجاوز حرارة المعالج الحد الآمن، يخفض سرعته تلقائياً لحماية نفسه (الاختناق الحراري). يملأ المعجون الحراري الفراغات المجهرية بين المعالج وقاعدة المبرد، وتنقل الأنابيب النحاسية الحرارة إلى زعانف الألمنيوم حيث تطردها المراوح للخارج.',
    },
    howItWorks: {
      en: 'Conduction (CPU IHS → thermal paste → copper cold plate) → Phase-change heatpipe transport → Convection (aluminum fins → fan airflow → rear case exhaust).',
      ar: 'التوصيل (المعالج ← المعجون ← القاعدة النحاسية) ← النقل بالأنابيب الحرارية ← الحمل الحراري (الزعانف ← المراوح ← خارج الصندوق).',
    },
    mainFunctions: [
      { en: 'Prevents thermal throttling and preserves peak boost clocks', ar: 'منع الاختناق الحراري والحفاظ على أقصى تردد للأداء' },
      { en: 'Extends lifespan of VRMs, SSDs, and capacitors', ar: 'إطالة العمر الافتراضي للمكونات والمكثفات' },
      { en: 'Balances quiet acoustics with steady positive case airflow', ar: 'توازن الهدوء الصوتي مع تدفق هواء إيجابي مستمر' },
    ],
    realWorldExamples: [
      { en: 'Tower Air Coolers with 4–6 copper heatpipes and 120mm PWM fans', ar: 'المبردات الهوائية البرجية المزودة بأنابيب نحاسية ومراوح PWM' },
      { en: 'All-in-One (AIO) liquid coolers pumping coolant to a radiator', ar: 'مبردات السائل المغلقة (AIO) التي تضخ السائل إلى المبرد الحراري' },
    ],
    illustrationKey: 'cooling',
    interactiveDiagram: 'none',
    linked3DComponent: 'cooler',
    vocabulary: [
      { termEn: 'Thermal Throttling', termAr: 'الاختناق الحراري', meaningEn: 'Automatic clock speed reduction to prevent overheating', meaningAr: 'خفض سرعة المعالج تلقائياً لحمايته من السخونة الزائدة' },
      { termEn: 'Thermal Paste', termAr: 'المعجون الحراري', meaningEn: 'Thermally conductive compound eliminating microscopic air gaps', meaningAr: 'مادة موصلة للحرارة تسد الفراغات المجهرية بين المعالج والمبرد' },
      { termEn: 'PWM Fan', termAr: 'مروحة PWM', meaningEn: '4-pin fan whose RPM adjusts dynamically with temperature', meaningAr: 'مروحة ذكية تتغير سرعتها تلقائياً حسب درجة الحرارة' },
    ],
    summary: {
      en: 'Effective cooling combines thermal paste, copper/aluminum heatsinks, and directional airflow fans to prevent thermal throttling.',
      ar: 'يجمع التبريد الفعال بين المعجون الحراري والمشتتات وتدفق الهواء المنظم لمنع ارتفاع الحرارة.',
    },
    quiz: [
      {
        question: { en: 'What is the purpose of applying thermal paste between the CPU and cooler?', ar: 'ما الغرض من وضع المعجون الحراري بين المعالج والمبرد؟' },
        options: [
          { en: 'Fill microscopic air pockets to improve heat conduction', ar: 'ملء الفراغات المجهرية لتحسين التوصيل الحراري' },
          { en: 'Glue the CPU permanently', ar: 'لصق المعالج للأبد' },
          { en: 'Conduct electricity into the fan blades', ar: 'توصيل الكهرباء لشفرات المروحة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Air is a poor heat conductor; thermal paste bridges metal surfaces seamlessly.',
          ar: 'الهواء رديء التوصيل للحرارة، لذا يضمن المعجون اتصالاً حرارياً مباشراً.',
        },
      },
      {
        question: { en: 'What happens during "thermal throttling"?', ar: 'ماذا يحدث أثناء ظاهرة "الاختناق الحراري"؟' },
        options: [
          { en: 'The CPU slows down to reduce heat and prevent damage', ar: 'يخفض المعالج سرعته تلقائياً لتقليل الحرارة وحماية نفسه' },
          { en: 'The monitor changes resolution', ar: 'تتغير دقة الشاشة' },
          { en: 'RAM doubles in size', ar: 'يتضاعف حجم الذاكرة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Thermal throttling protects silicon from permanent thermal damage.',
          ar: 'يحمي الاختناق الحراري المعالج من التلف عند ارتفاع حرارته.',
        },
      },
      {
        question: { en: 'What is the standard airflow direction inside a tower PC case?', ar: 'ما الاتجاه القياسي لتدفق الهواء داخل صندوق الحاسوب؟' },
        options: [
          { en: 'Cool air intake from front/bottom, hot exhaust out rear/top', ar: 'دخول الهواء البارد من الأمام/الأسفل وخروج الساخن من الخلف/الأعلى' },
          { en: 'All fans blowing inward with no exhaust', ar: 'كل المراوح تدفع الهواء للداخل فقط' },
          { en: 'Sealed airtight with no fans', ar: 'إغلاق الصندوق تماماً بلا مراوح' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Warm air rises naturally, making front-to-back and bottom-to-top ideal.',
          ar: 'يرتفع الهواء الساخن للأعلى، مما يجعل مسار الأمام إلى الخلف والأعلى هو الأمثل.',
        },
      },
    ],
  },
  {
    id: 'input-and-output-devices',
    categoryId: 'hardware',
    order: 8,
    title: { en: 'Input and Output Devices', ar: 'أجهزة الإدخال والإخراج' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Input devices convert human actions or physical signals into digital data for the computer; Output devices translate digital results back into visuals, sound, or physical prints.',
      ar: 'تحوّل أجهزة الإدخال أفعال المستخدم والإشارات الفيزيائية إلى بيانات رقمية، بينما تترجم أجهزة الإخراج النتائج الرقمية إلى صورة أو صوت أو مطبوعات.',
    },
    detailedExplanation: {
      en: 'Peripherals connect people to silicon. Keyboards, mice, microphones, scanners, and webcams feed input into the system. Monitors, speakers, headphones, and printers deliver output. Some modern hardware—such as touchscreens and VR headsets—serve as both Input and Output (I/O) devices simultaneously.',
      ar: 'تربط الملحقات الإنسان بالحاسوب؛ فأجهزة الإدخال مثل لوحة المفاتيح والفأرة والميكروفون والماسح الضوئي تغذي النظام بالبيانات، وأجهزة الإخراج مثل الشاشة والسماعات والطابعة تعرض النتائج. وهناك أجهزة مزدوجة (إدخال وإخراج معاً) مثل شاشات اللمس.',
    },
    howItWorks: {
      en: 'Pressing a key closes a switch scanned by a keyboard controller → sends a USB HID packet → OS maps keycode to a character → GPU renders the glyph on your monitor.',
      ar: 'الضغط على مفتاح يرسل رمزاً عبر USB إلى نظام التشغيل ← يترجمه النظام إلى حرف ← ترسمه بطاقة الرسوميات على الشاشة.',
    },
    mainFunctions: [
      { en: 'Input: Keyboard, Mouse, Microphone, Webcam, Barcode Scanner', ar: 'الإدخال: لوحة المفاتيح، الفأرة، الميكروفون، الكاميرا، الماسح الضوئي' },
      { en: 'Output: Monitor (OLED/IPS), Speakers, Laser/Inkjet Printer, Projector', ar: 'الإخراج: الشاشة، السماعات، الطابعة، جهاز العرض' },
      { en: 'Dual I/O: Touchscreen display, Network card, USB Flash Drive', ar: 'إدخال وإخراج معاً: شاشة اللمس، بطاقة الشبكة، ذاكرة USB' },
    ],
    realWorldExamples: [
      { en: 'A digital tablet stylus capturing pressure levels (Input) directly on a 4K drawing screen (Output)', ar: 'لوح رسم رقمي يلتقط ضغط القلم (إدخال) ويعرض الرسم فوراً على الشاشة (إخراج)' },
    ],
    illustrationKey: 'io',
    interactiveDiagram: 'ipo-cycle',
    vocabulary: [
      { termEn: 'Peripheral', termAr: 'ملحق طرفي', meaningEn: 'External hardware connected to the system unit', meaningAr: 'جهاز خارجي يتصل بوحدة النظام مثل الشاشة أو الطابعة' },
      { termEn: 'Dual I/O Device', termAr: 'جهاز إدخال وإخراج', meaningEn: 'Hardware performing both input and output (e.g., touchscreen)', meaningAr: 'جهاز يؤدي وظيفتي الإدخال والإخراج معاً مثل شاشة اللمس' },
    ],
    summary: {
      en: 'Input and output devices bridge human perception and digital processing.',
      ar: 'تشكل أجهزة الإدخال والإخراج الجسر التفاعلي بين الإنسان والمعالجة الرقمية.',
    },
    quiz: [
      {
        question: { en: 'Which device functions as BOTH an input and an output device?', ar: 'أي جهاز يعمل كجهاز إدخال وإخراج في الوقت نفسه؟' },
        options: [
          { en: 'Touchscreen Monitor', ar: 'شاشة اللمس' },
          { en: 'Standard Mouse', ar: 'الفأرة التقليدية' },
          { en: 'Microphone', ar: 'الميكروفون' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'A touchscreen displays visual output while sensing finger touch coordinates as input.',
          ar: 'تعرض شاشة اللمس الصورة (إخراج) وتستقبل اللمس (إدخال) في آنٍ واحد.',
        },
      },
      {
        question: { en: 'A laser printer belongs to which category?', ar: 'إلى أي فئة تنتمي طابعة الليزر؟' },
        options: [
          { en: 'Output Device', ar: 'جهاز إخراج' },
          { en: 'CPU Register', ar: 'مسجل معالج' },
          { en: 'Volatile Memory', ar: 'ذاكرة متطايرة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Printers output digital documents onto physical paper.',
          ar: 'تخرج الطابعة المستندات الرقمية على الورق.',
        },
      },
      {
        question: { en: 'What type of device is a webcam?', ar: 'ما تصنيف كاميرا الويب؟' },
        options: [
          { en: 'Input Device', ar: 'جهاز إدخال' },
          { en: 'Storage Unit', ar: 'وحدة تخزين' },
          { en: 'Power Unit', ar: 'وحدة طاقة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'A webcam captures light/video and sends digital frames into the computer.',
          ar: 'تلتقط كاميرا الويب الفيديو وترسله كمدخلات إلى الحاسوب.',
        },
      },
    ],
  },
  {
    id: 'computer-ports',
    categoryId: 'hardware',
    order: 9,
    title: { en: 'Computer Ports', ar: 'منافذ الحاسوب' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Computer ports are standardized physical sockets on the motherboard rear I/O or case front panel used to attach peripherals, displays, power, and network cables.',
      ar: 'منافذ الحاسوب هي مقابس فيزيائية قياسية على اللوحة الأم أو واجهة الصندوق لتوصيل الملحقات والشاشات والشبكات.',
    },
    detailedExplanation: {
      en: 'Different cables carry vastly different signals: USB-A and reversible USB-C handle peripherals, fast external SSDs, and even DisplayPort video + Power Delivery (USB4/Thunderbolt). HDMI and DisplayPort carry uncompressed digital video and audio to monitors, while RJ-45 Ethernet delivers low-latency wired networking.',
      ar: 'تنقل الكابلات المختلفة إشارات متنوعة: توفر منافذ USB-A و USB-C اتصالاً بالملحقات والأقراص السريعة والشحن ونقل الفيديو، وتنقل منافذ HDMI و DisplayPort الصوت والصورة عالية الدقة للشاشات، بينما يوفر منفذ RJ-45 اتصال شبكة سلكي مستقر.',
    },
    howItWorks: {
      en: 'Each port maps to a dedicated motherboard controller (USB Host Controller, Ethernet PHY, Audio Codec, or GPU Display Engine) with pinouts enforcing voltage and data-lane rules.',
      ar: 'يرتبط كل منفذ بمتحكم مخصص على اللوحة الأم أو بطاقة الرسوميات مع ترتيب دبابيس قياسي يضمن سلامة الطاقة ونقل البيانات.',
    },
    mainFunctions: [
      { en: 'USB-C / USB4: Reversible high-speed data (up to 40 Gbps), video & power', ar: 'USB-C / USB4: نقل بيانات فائق السرعة وفيديو وطاقة' },
      { en: 'DisplayPort / HDMI: High-refresh-rate 4K/8K display connections', ar: 'DisplayPort / HDMI: توصيل الشاشات بدقة عالية ومعدل تحديث سريع' },
      { en: 'RJ-45 Ethernet: Reliable gigabit/multi-gigabit wired LAN', ar: 'RJ-45: اتصال شبكة سلكية مستقر وعالي السرعة' },
    ],
    realWorldExamples: [
      { en: 'Connecting a 144Hz monitor via DisplayPort 1.4 directly to the GPU', ar: 'توصيل شاشة 144Hz عبر منفذ DisplayPort مباشرة ببطاقة الرسوميات' },
      { en: 'Transferring 50 GB of video over a 20 Gbps USB-C external NVMe enclosure', ar: 'نقل 50 جيجابايت من الفيديو خلال ثوانٍ عبر منفذ USB-C السريع' },
    ],
    illustrationKey: 'ports',
    interactiveDiagram: 'motherboard-map',
    vocabulary: [
      { termEn: 'USB-C', termAr: 'منفذ USB-C', meaningEn: 'Reversible 24-pin connector supporting data, display, and charging', meaningAr: 'موصل حديث قابل للعكس يدعم البيانات والشاشة والشحن' },
      { termEn: 'DisplayPort / HDMI', termAr: 'منافذ العرض', meaningEn: 'Digital video and audio interface standards for monitors/TVs', meaningAr: 'منافذ رقمية لنقل الصورة والصوت للشاشات' },
      { termEn: 'RJ-45', termAr: 'منفذ الشبكة RJ-45', meaningEn: '8-pin modular jack for wired Ethernet cables', meaningAr: 'مقبس الشبكة السلكية Ethernet ذو 8 دبابيس' },
    ],
    summary: {
      en: 'Standardized ports like USB-C, DisplayPort, HDMI, and RJ-45 let computers communicate reliably with external hardware.',
      ar: 'تسمح المنافذ القياسية مثل USB-C و DisplayPort و HDMI و RJ-45 بالاتصال الموثوق مع كافة الملحقات.',
    },
    quiz: [
      {
        question: { en: 'Which cable port is used for wired Ethernet networking?', ar: 'أي منفذ يُستخدم لتوصيل كابل الشبكة السلكية Ethernet؟' },
        options: [
          { en: 'RJ-45', ar: 'RJ-45' },
          { en: 'HDMI', ar: 'HDMI' },
          { en: '3.5mm TRS', ar: 'منفذ 3.5 ملم' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'RJ-45 connectors terminate twisted-pair Ethernet network cables.',
          ar: 'مقبس RJ-45 هو المنفذ القياسي لكابلات الشبكة السلكية.',
        },
      },
      {
        question: { en: 'Where should you plug your monitor cable when your PC has a dedicated GPU?', ar: 'أين يجب توصيل كابل الشاشة عند وجود بطاقة رسوميات منفصلة في الحاسوب؟' },
        options: [
          { en: 'Directly into the GPU’s rear DisplayPort/HDMI ports', ar: 'مباشرة في منافذ بطاقة الرسوميات الخلفية' },
          { en: 'Into a USB mouse port', ar: 'في منفذ الفأرة' },
          { en: 'Into the PSU AC socket', ar: 'في مقبس الكهرباء بمزود الطاقة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Plugging into the motherboard instead of the GPU bypasses your discrete graphics card.',
          ar: 'التوصيل باللوحة الأم يتجاوز بطاقة الرسوميات القوية؛ لذا يجب التوصيل بها مباشرة.',
        },
      },
      {
        question: { en: 'Which USB connector is reversible so it plugs in either side up?', ar: 'أي منفذ USB يتميز بتصميم متماثل يمكن تركيبه من أي جهة؟' },
        options: [
          { en: 'USB-C', ar: 'USB-C' },
          { en: 'USB-A', ar: 'USB-A' },
          { en: 'PS/2', ar: 'PS/2' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'USB Type-C features a symmetrical reversible connector.',
          ar: 'يتميز منفذ USB-C بتصميم متماثل سهل التوصيل من الجهتين.',
        },
      },
    ],
  },
  {
    id: 'expansion-slots',
    categoryId: 'hardware',
    order: 10,
    title: { en: 'Expansion Slots', ar: 'فتحات التوسعة' },
    readMinutes: 5,
    level: 'intermediate',
    definition: {
      en: 'Expansion slots are internal motherboard connectors—principally PCIe (Peripheral Component Interconnect Express) and M.2—that let users add or upgrade graphics, storage, networking, and capture cards.',
      ar: 'فتحات التوسعة هي مقابس داخلية على اللوحة الأم—أبرزها PCIe و M.2—تتيح إضافة أو ترقية بطاقات الرسوميات والتخزين والشبكات والصوت.',
    },
    detailedExplanation: {
      en: 'Modern PCs rely on PCI Express (PCIe), a high-speed serial point-to-point bus organized in lanes: x1, x4, x8, and x16. A single PCIe 5.0 lane moves nearly 4 GB/s in each direction! GPUs occupy reinforced x16 slots, while compact M.2 slots carry x4 PCIe lanes directly to NVMe SSDs or Wi-Fi cards.',
      ar: 'تعتمد الحواسيب الحديثة على ناقل PCI Express المقسم إلى مسارات (Lanes) بأحجام x1 و x4 و x8 و x16. تحتل بطاقة الرسوميات فتحة x16 المقواة بالمعدن، بينما توفر فتحات M.2 أربعة مسارات PCIe مباشرة لأقراص NVMe فائقة السرعة أو بطاقات الواي فاي.',
    },
    howItWorks: {
      en: 'Each PCIe lane consists of two differential wire pairs (transmit and receive) enabling full-duplex simultaneous communication without sharing bandwidth with slower slots.',
      ar: 'يتكون كل مسار PCIe من زوجين تفاضليين للإرسال والاستقبال المتزامن (Full-Duplex) دون مزاحمة مع البطاقات الأخرى.',
    },
    mainFunctions: [
      { en: 'PCIe x16: Primary slot for discrete graphics cards (GPUs)', ar: 'PCIe x16: الفتحة الرئيسية لبطاقات الرسوميات' },
      { en: 'PCIe x1 / x4: Capture cards, 10GbE network cards, sound cards', ar: 'PCIe x1 / x4: بطاقات البث والشبكة السريعة والصوت الاحترافي' },
      { en: 'M.2 Key-M / Key-E: NVMe SSDs and wireless Wi-Fi/Bluetooth modules', ar: 'M.2: فتحات أقراص التخزين NVMe ووحدات الاتصال اللاسلكي' },
    ],
    realWorldExamples: [
      { en: 'Installing a 10-Gigabit Ethernet card into a PCIe x4 slot for a video-editing NAS', ar: 'تركيب بطاقة شبكة 10 جيجابت في فتحة PCIe x4 لمونتاج الفيديو الشبكي' },
    ],
    illustrationKey: 'slots',
    interactiveDiagram: 'motherboard-map',
    vocabulary: [
      { termEn: 'PCIe Lane', termAr: 'مسار PCIe', meaningEn: 'Dedicated high-speed serial point-to-point data pathway', meaningAr: 'مسار بيانات تسلسلي مخصص فائق السرعة' },
      { termEn: 'M.2 Slot', termAr: 'فتحة M.2', meaningEn: 'Compact motherboard connector for NVMe SSDs and wireless cards', meaningAr: 'منفذ مدمج على اللوحة الأم لأقراص NVMe وبطاقات Wi-Fi' },
    ],
    summary: {
      en: 'PCIe and M.2 expansion slots give desktop computers modular upgradability across graphics, storage, and I/O.',
      ar: 'تمنح فتحات التوسعة PCIe و M.2 الحاسوب مرونة الترقية في الرسوميات والتخزين والشبكات.',
    },
    quiz: [
      {
        question: { en: 'What do the numbers x1, x4, and x16 mean on PCIe slots?', ar: 'إلى ماذا تشير الأرقام x1 و x4 و x16 في فتحات PCIe؟' },
        options: [
          { en: 'The number of high-speed data lanes available to that slot', ar: 'عدد مسارات البيانات السريعة المتاحة في تلك الفتحة' },
          { en: 'The price of the motherboard', ar: 'سعر اللوحة الأم' },
          { en: 'The number of fans on the case', ar: 'عدد المراوح في الصندوق' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'More lanes (x16 vs x1) mean proportionally higher bandwidth.',
          ar: 'زيادة عدد المسارات تعني مضاعفة عرض النطاق والسرعة.',
        },
      },
      {
        question: { en: 'Which compact expansion slot commonly hosts modern NVMe SSDs?', ar: 'أي فتحة مدمجة تستضيف عادة أقراص NVMe SSD الحديثة؟' },
        options: [
          { en: 'M.2 Slot', ar: 'فتحة M.2' },
          { en: 'VGA Port', ar: 'منفذ VGA' },
          { en: '24-pin ATX Power', ar: 'منفذ الطاقة 24-pin' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'M.2 slots lie flat against the motherboard and deliver PCIe x4 speed.',
          ar: 'تُركب أقراص NVMe أفقياً في فتحات M.2 بسرعة PCIe x4.',
        },
      },
      {
        question: { en: 'Why are modern PCIe x16 GPU slots often reinforced with steel armor?', ar: 'لماذا تُدعّم فتحات PCIe x16 الحديثة بإطار معدني؟' },
        options: [
          { en: 'To support the physical weight of heavy triple-fan graphics cards', ar: 'لدعم الوزن الكبير لبطاقات الرسوميات ثلاثية المراوح وحمايتها من الانحناء' },
          { en: 'To hold magnetic hard drives', ar: 'لتثبيت الأقراص الصلبة' },
          { en: 'To cool the CPU', ar: 'لتبريد المعالج' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Steel reinforcement prevents slot flex from heavy multi-slot GPUs.',
          ar: 'يحمي التدعيم المعدني الفتحة من التلف تحت وزن كرت الشاشة الثقيل.',
        },
      },
    ],
  },
];
