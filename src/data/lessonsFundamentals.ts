import { LessonData } from '../types/academy';

export const LESSONS_FUNDAMENTALS: LessonData[] = [
  {
    id: 'what-is-a-computer',
    categoryId: 'fundamentals',
    order: 1,
    title: { en: 'What is a Computer?', ar: 'ما هو الحاسوب؟' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'A computer is a programmable electronic machine that accepts raw data as input, processes it according to stored instructions, stores results, and produces meaningful information as output.',
      ar: 'الحاسوب هو جهاز إلكتروني قابل للبرمجة يستقبل البيانات الخام كمدخلات، ويعالجها وفق تعليمات مخزنة، ويحفظ النتائج، ثم يخرجها على شكل معلومات مفيدة.',
    },
    detailedExplanation: {
      en: 'Unlike single-purpose appliances such as a toaster or calculator, a general-purpose computer can run vastly different tasks simply by changing the software loaded into its memory. Inside every computer—whether a smartphone, laptop, or data-center server—millions or billions of electronic switches flip between ON (1) and OFF (0) states to represent numbers, text, images, and logic.',
      ar: 'على عكس الأجهزة أحادية الغرض، يتميز الحاسوب بقدرته على أداء مهام لا حصر لها بمجرد تغيير البرمجيات المحملة في ذاكرته. وفي داخل كل حاسوب—سواء كان هاتفاً ذكياً أو حاسوباً مكتبياً أو خادماً—تتبدل مليارات المفاتيح الإلكترونية بين حالتي التشغيل (1) والإيقاف (0) لتمثيل الأرقام والنصوص والصور والمنطق.',
    },
    howItWorks: {
      en: 'Every task follows four universal steps: (1) Input captures signals from a keyboard, sensor, or network; (2) Processing executes arithmetic and logic operations inside the CPU; (3) Storage holds active data in RAM and long-term files on an SSD/HDD; (4) Output renders visuals on a display, sound through speakers, or packets onto a network.',
      ar: 'تتم كل عملية في الحاسوب عبر أربع مراحل أساسية: (1) الإدخال لالتقاط البيانات من لوحة المفاتيح أو المستشعرات، (2) المعالجة لتنفيذ العمليات الحسابية والمنطقية داخل المعالج، (3) التخزين المؤقت في الذاكرة العشوائية والدائم في الأقراص، (4) الإخراج لعرض النتائج على الشاشة أو عبر السماعات.',
    },
    mainFunctions: [
      { en: 'Accepts raw data from users or sensors (Input)', ar: 'استقبال البيانات الخام من المستخدم أو المستشعرات (الإدخال)' },
      { en: 'Executes logical & mathematical calculations (Processing)', ar: 'تنفيذ العمليات الحسابية والمنطقية بسرعة فائقة (المعالجة)' },
      { en: 'Saves files & programs temporarily or permanently (Storage)', ar: 'حفظ الملفات والبرامج بشكل مؤقت أو دائم (التخزين)' },
      { en: 'Delivers clear, actionable results (Output)', ar: 'تقديم النتائج بصورة مفهومة للمستخدم (الإخراج)' },
    ],
    realWorldExamples: [
      { en: 'Desktop workstations editing 4K video and running 3D simulations', ar: 'محطات العمل المكتبية لتحرير الفيديو والتصميم ثلاثي الأبعاد' },
      { en: 'Smartphones acting as pocket computers with GPS and cameras', ar: 'الهواتف الذكية كحواسيب محمولة مزودة بمستشعرات وكاميرات' },
      { en: 'Embedded microcomputers inside modern cars managing braking and navigation', ar: 'الحواسيب المدمجة داخل السيارات الحديثة لإدارة المكابح والملاحة' },
    ],
    illustrationKey: 'computer',
    interactiveDiagram: 'ipo-cycle',
    vocabulary: [
      { termEn: 'Data', termAr: 'البيانات', meaningEn: 'Unprocessed raw facts, numbers, or symbols', meaningAr: 'حقائق وأرقام ورموز خام غير معالجة' },
      { termEn: 'Information', termAr: 'المعلومات', meaningEn: 'Processed, organized data with meaning', meaningAr: 'بيانات تمت معالجتها وتنظيمها لتصبح ذات معنى' },
      { termEn: 'Programmable', termAr: 'قابل للبرمجة', meaningEn: 'Capable of following different sets of instructions', meaningAr: 'قادر على تنفيذ مجموعات مختلفة من التعليمات البرمجية' },
    ],
    summary: {
      en: 'A computer transforms raw input into meaningful output through programmable electronic processing and memory.',
      ar: 'يحول الحاسوب المدخلات الخام إلى مخرجات مفيدة عبر المعالجة الإلكترونية القابلة للبرمجة والتخزين.',
    },
    quiz: [
      {
        question: { en: 'What are the four core functions of every computer?', ar: 'ما هي الوظائف الأربع الأساسية لكل حاسوب؟' },
        options: [
          { en: 'Input, Processing, Storage, Output', ar: 'الإدخال، المعالجة، التخزين، الإخراج' },
          { en: 'Typing, Printing, Gaming, Charging', ar: 'الكتابة، الطباعة، اللعب، الشحن' },
          { en: 'Cooling, Lighting, Networking, Painting', ar: 'التبريد، الإضاءة، الشبكات، الرسم' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'All computing systems operate on the Input-Process-Storage-Output model.',
          ar: 'تعتمد جميع أنظمة الحوسبة على نموذج الإدخال والمعالجة والتخزين والإخراج.',
        },
      },
      {
        question: { en: 'Why is a computer considered "general-purpose"?', ar: 'لماذا يُعد الحاسوب جهازاً متعدد الأغراض؟' },
        options: [
          { en: 'It only runs one fixed circuit forever', ar: 'لأنه ينفذ دائرة كهربائية واحدة ثابتة للأبد' },
          { en: 'It can perform new tasks by loading different software', ar: 'لأنه يستطيع أداء مهام مختلفة بتغيير البرمجيات' },
          { en: 'It requires no electricity', ar: 'لأنه لا يحتاج إلى كهرباء' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Stored-program architecture lets software reconfigure what the hardware computes.',
          ar: 'تتيح بنية البرنامج المخزن للبرمجيات إعادة توجيه ما يقوم به العتاد.',
        },
      },
      {
        question: { en: 'Which binary digits represent the two electronic states inside a computer?', ar: 'ما الرقمان اللذان يمثلان الحالتين الإلكترونيتين داخل الحاسوب؟' },
        options: [
          { en: '1 and 2', ar: '1 و 2' },
          { en: '0 and 1', ar: '0 و 1' },
          { en: 'A and B', ar: 'A و B' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Digital electronics use binary 0 (OFF) and 1 (ON).',
          ar: 'تعتمد الإلكترونيات الرقمية على النظام الثنائي 0 (إيقاف) و 1 (تشغيل).',
        },
      },
    ],
  },
  {
    id: 'how-does-a-computer-work',
    categoryId: 'fundamentals',
    order: 2,
    title: { en: 'How Does a Computer Work?', ar: 'كيف يعمل الحاسوب؟' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'A computer works by continuously running the Fetch-Decode-Execute instruction cycle between its memory and processor while exchanging data along system buses.',
      ar: 'يعمل الحاسوب عبر تكرار دورة التعليمات: الجلب وفك التشفير والتنفيذ بين الذاكرة والمعالج مع تبادل البيانات عبر نواقل النظام.',
    },
    detailedExplanation: {
      en: 'When you click an app icon, your operating system copies the program instructions from your SSD into fast RAM. The CPU reads those instructions one by one at billions of cycles per second, performs math or logic inside its Arithmetic Logic Unit (ALU), and updates pixels on your screen through the GPU.',
      ar: 'عندما تنقر على أيقونة برنامج، ينسخ نظام التشغيل تعليمات البرنامج من قرص التخزين إلى الذاكرة العشوائية السريعة RAM. يقرأ المعالج تلك التعليمات الواحدة تلو الأخرى بمليارات الدورات في الثانية، وينفذ الحسابات في وحدة الحساب والمنطق، ثم يعرض النتيجة عبر بطاقة الرسوميات.',
    },
    howItWorks: {
      en: 'Inside the CPU clock tick: (1) Fetch retrieves the next binary instruction from RAM; (2) Decode translates the opcode inside the Control Unit; (3) Execute runs the calculation in the ALU or moves data; (4) Write-back stores the result into a register or RAM.',
      ar: 'مع كل نبضة ساعة في المعالج: (1) الجلب يسحب التعليمة التالية من RAM، (2) فك التشفير يترجم نوع العملية داخل وحدة التحكم، (3) التنفيذ يجري الحساب في وحدة ALU، (4) الكتابة تحفظ النتيجة في المسجل أو الذاكرة.',
    },
    mainFunctions: [
      { en: 'Fetch instructions sequentially from RAM', ar: 'جلب التعليمات بالتسلسل من الذاكرة العشوائية' },
      { en: 'Decode binary opcodes into hardware control signals', ar: 'فك تشفير الأوامر الثنائية إلى إشارات تحكم' },
      { en: 'Execute arithmetic, comparison, and memory jumps', ar: 'تنفيذ العمليات الحسابية والمقارنات المنطقية' },
      { en: 'Synchronize operations using the system clock', ar: 'مزامنة كافة العمليات عبر نبضات الساعة الرقمية' },
    ],
    realWorldExamples: [
      { en: 'Pressing a key on a keyboard triggers an interrupt handled in microseconds', ar: 'الضغط على مفتاح في لوحة المفاتيح يرسل مقاطعة تُعالج في أجزاء من الميكروثانية' },
      { en: 'Adding two cells in a spreadsheet executes millions of CPU cycles seamlessly', ar: 'جمع خليتين في جدول بيانات يمر بسلسلة سريعة من الجلب والتنفيذ والعرض' },
    ],
    illustrationKey: 'cycle',
    interactiveDiagram: 'ipo-cycle',
    vocabulary: [
      { termEn: 'Instruction Cycle', termAr: 'دورة التعليمة', meaningEn: 'Fetch-Decode-Execute loop run by the CPU', meaningAr: 'حلقة الجلب وفك التشفير والتنفيذ في المعالج' },
      { termEn: 'System Bus', termAr: 'ناقل النظام', meaningEn: 'Electrical pathways carrying data, addresses, and control signals', meaningAr: 'مسارات كهربائية تنقل البيانات والعناوين وإشارات التحكم' },
      { termEn: 'Clock Speed', termAr: 'سرعة الساعة', meaningEn: 'Cycles per second measured in Gigahertz (GHz)', meaningAr: 'عدد الدورات في الثانية وتقاس بالجيجاهرتز' },
    ],
    summary: {
      en: 'Computers operate through rapid Fetch-Decode-Execute cycles synchronized by a digital clock across memory and buses.',
      ar: 'يعمل الحاسوب عبر دورات متسارعة من الجلب وفك التشفير والتنفيذ المتزامنة مع ساعة النظام.',
    },
    quiz: [
      {
        question: { en: 'Which order correctly describes the CPU instruction cycle?', ar: 'ما الترتيب الصحيح لدورة التعليمة في المعالج؟' },
        options: [
          { en: 'Execute → Fetch → Decode', ar: 'تنفيذ ← جلب ← فك تشفير' },
          { en: 'Fetch → Decode → Execute', ar: 'جلب ← فك تشفير ← تنفيذ' },
          { en: 'Print → Store → Delete', ar: 'طباعة ← تخزين ← حذف' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The CPU must fetch the instruction first, decode what it means, and then execute it.',
          ar: 'يجب على المعالج جلب التعليمة أولاً ثم فك تشفيرها ثم تنفيذها.',
        },
      },
      {
        question: { en: 'Where are active program instructions loaded before the CPU runs them?', ar: 'أين تُحمّل تعليمات البرنامج النشط قبل أن يشغلها المعالج؟' },
        options: [
          { en: 'RAM (Random Access Memory)', ar: 'الذاكرة العشوائية RAM' },
          { en: 'Power Supply Unit', ar: 'مزود الطاقة' },
          { en: 'Monitor Cable', ar: 'كابل الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'RAM provides fast volatile workspace directly accessible by the CPU.',
          ar: 'توفر RAM مساحة عمل سريعة ومباشرة للمعالج.',
        },
      },
      {
        question: { en: 'What unit measures CPU clock frequency?', ar: 'ما وحدة قياس تردد ساعة المعالج؟' },
        options: [
          { en: 'Watts (W)', ar: 'الواط' },
          { en: 'Gigahertz (GHz)', ar: 'الجيجاهرتز' },
          { en: 'Terabytes (TB)', ar: 'التيرابايت' },
        ],
        correctIndex: 1,
        explanation: {
          en: '1 GHz equals one billion clock cycles per second.',
          ar: '1 جيجاهرتز يساوي مليار دورة ساعة في الثانية.',
        },
      },
    ],
  },
  {
    id: 'history-of-computers',
    categoryId: 'fundamentals',
    order: 3,
    title: { en: 'History of Computers', ar: 'تاريخ الحاسوب' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'The history of computers spans from ancient mechanical counting tools like the abacus to 19th-century analytical machines and modern silicon microprocessors.',
      ar: 'يمتد تاريخ الحاسوب من أدوات العد الميكانيكية القديمة كالمعداد إلى الآلات التحليلية في القرن التاسع عشر وصولاً إلى المعالجات الدقيقة الحديثة.',
    },
    detailedExplanation: {
      en: 'In the 1830s, Charles Babbage designed the Analytical Engine while Ada Lovelace wrote the first published computer algorithm. A century later, Alan Turing formalized universal computation, and 1940s electronic giants like ENIAC replaced gears with thousands of vacuum tubes. The invention of the transistor (1947) and integrated circuit (1958) shrank room-sized computers onto desktops and smartphones.',
      ar: 'في ثلاثينيات القرن التاسع عشر صمم تشارلز باباج الآلة التحليلية، وكتبت آدا لوفليس أول خوارزمية برمجية في التاريخ. وبعد قرن وضع آلان تورينج الأسس النظرية للحوسبة الشاملة، وظهرت حواسيب إلكترونية ضخمة مثل ENIAC باستخدام الصمامات المفرغة، قبل أن يؤدي اختراع الترانزستور والدوائر المتكاملة إلى تصغير الحاسوب ليصبح بحجم المكتب والهاتف.',
    },
    howItWorks: {
      en: 'Each era replaced slower, bulkier switching mechanisms with faster, smaller, and cooler switches: mechanical gears → electromechanical relays → vacuum tubes → discrete transistors → silicon microchips.',
      ar: 'استبدلت كل حقبة آلية التبديل الأقدم بأخرى أصغر وأسرع وأقل استهلاكاً للطاقة: التروس الميكانيكية ← المرحلات الكهربائية ← الصمامات المفرغة ← الترانزستورات ← الرقائق السيليكونية المتكاملة.',
    },
    mainFunctions: [
      { en: 'Mechanical era: Abacus, Pascaline, Babbage Analytical Engine', ar: 'العصر الميكانيكي: المعداد، آلة باسكال، آلة باباج التحليلية' },
      { en: 'Theoretical foundation: Turing Machine & stored-program concept', ar: 'الأساس النظري: آلة تورينج ومفهوم البرنامج المخزن' },
      { en: 'Electronic breakthrough: ENIAC, transistors, and microchips', ar: 'الثورة الإلكترونية: ENIAC والترانزستور والمعالجات الدقيقة' },
    ],
    realWorldExamples: [
      { en: 'ENIAC (1945) weighed 27 tons and filled an entire room', ar: 'حاسوب ENIAC عام 1945 كان يزن 27 طناً ويشغل غرفة كاملة' },
      { en: 'Intel 4004 (1971) became the first commercial single-chip microprocessor', ar: 'معالج Intel 4004 عام 1971 كان أول معالج دقيق تجاري على شريحة واحدة' },
    ],
    illustrationKey: 'history',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Analytical Engine', termAr: 'الآلة التحليلية', meaningEn: 'Babbage’s 1837 mechanical general-purpose computer design', meaningAr: 'تصميم باباج الميكانيكي لأول حاسوب عام الغرض' },
      { termEn: 'Transistor', termAr: 'الترانزستور', meaningEn: 'Semiconductor switch invented in 1947 replacing vacuum tubes', meaningAr: 'مفتاح شبه موصل حل محل الصمامات المفرغة' },
      { termEn: 'Microprocessor', termAr: 'المعالج الدقيق', meaningEn: 'A full CPU fabricated onto a single silicon integrated circuit', meaningAr: 'وحدة معالجة مركزية كاملة مصنعة على رقاقة سيليكون واحدة' },
    ],
    summary: {
      en: 'Computing evolved from mechanical calculators to silicon microchips by continually shrinking and accelerating electronic switches.',
      ar: 'تطور الحاسوب من الآلات الميكانيكية إلى الرقائق الدقيقة عبر تصغير المفاتيح الإلكترونية ومضاعفة سرعتها.',
    },
    quiz: [
      {
        question: { en: 'Who is widely recognized as the first computer programmer?', ar: 'من تُعد أول مبرمجة حاسوب في التاريخ؟' },
        options: [
          { en: 'Ada Lovelace', ar: 'آدا لوفليس' },
          { en: 'Isaac Newton', ar: 'إسحاق نيوتن' },
          { en: 'Thomas Edison', ar: 'توماس إديسون' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Ada Lovelace authored the first algorithm intended for Babbage’s Analytical Engine.',
          ar: 'كتبت آدا لوفليس أول خوارزمية مخصصة لآلة باباج التحليلية.',
        },
      },
      {
        question: { en: 'Which invention replaced fragile vacuum tubes and made compact computers possible?', ar: 'ما الاختراع الذي حل محل الصمامات المفرغة ومكّن من تصغير الحواسيب؟' },
        options: [
          { en: 'The Transistor', ar: 'الترانزستور' },
          { en: 'The Steam Engine', ar: 'المحرك البخاري' },
          { en: 'Floppy Disks', ar: 'الأقراص المرنة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Transistors were smaller, faster, cooler, and far more reliable than vacuum tubes.',
          ar: 'كانت الترانزستورات أصغر وأسرع وأكثر موثوقية بكثير من الصمامات المفرغة.',
        },
      },
      {
        question: { en: 'ENIAC was built during the 1940s using which switching technology?', ar: 'اعتمد حاسوب ENIAC في الأربعينيات على أي تقنية؟' },
        options: [
          { en: 'Quantum qubits', ar: 'البتات الكمومية' },
          { en: 'Vacuum tubes', ar: 'الصمامات المفرغة' },
          { en: '3nm FinFET', ar: 'شرائح 3 نانومتر' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'ENIAC used nearly 18,000 vacuum tubes.',
          ar: 'استخدم حاسوب ENIAC قرابة 18 ألف صمام مفرغ.',
        },
      },
    ],
  },
  {
    id: 'hardware-vs-software',
    categoryId: 'fundamentals',
    order: 4,
    title: { en: 'Hardware vs Software', ar: 'العتاد الصلب مقابل البرمجيات' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Hardware refers to the physical electronic and mechanical components you can touch, whereas software consists of the intangible code and instructions telling the hardware what to do.',
      ar: 'العتاد الصلب (Hardware) هو المكونات الفيزيائية الملموسة للحاسوب، بينما البرمجيات (Software) هي التعليمات والأكواد غير الملموسة التي توجه العتاد لأداء المهام.',
    },
    detailedExplanation: {
      en: 'Hardware and software depend completely on each other. Without software, a powerful CPU and GPU sit idle as expensive silicon and metal. Without hardware, code has no physical circuits to execute on. Firmware bridges both worlds—permanently embedded low-level code like BIOS/UEFI that wakes up hardware when power turns on.',
      ar: 'يعتمد العتاد والبرمجيات على بعضهما بشكل كامل؛ فبدون البرمجيات يبقى المعالج وبطاقة الرسوميات قطعاً صامتة بلا فائدة، وبدون العتاد لا توجد دوائر لتنفيذ الكود. وتعمل البرمجيات الثابتة (Firmware) كجسر بينهما مثل نظام BIOS/UEFI الذي يهيئ المكونات عند بدء التشغيل.',
    },
    howItWorks: {
      en: 'Software layers issue high-level commands (e.g., "Save file") → the OS translates them via device drivers → hardware controllers send electrical signals to SSD NAND chips or display panels.',
      ar: 'ترسل البرمجيات أوامر عالية المستوى (مثل حفظ ملف) ← يترجمها نظام التشغيل عبر التعريفات ← ترسل المتحكمات إشارات كهربائية إلى القرص أو الشاشة.',
    },
    mainFunctions: [
      { en: 'Hardware: Physical computation, memory, storage, I/O', ar: 'العتاد: المعالجة الفيزيائية، الذاكرة، التخزين، الإدخال والإخراج' },
      { en: 'System Software: OS & drivers managing hardware resources', ar: 'برمجيات النظام: أنظمة التشغيل والتعريفات لإدارة العتاد' },
      { en: 'Application Software: Tools for user productivity & creativity', ar: 'برمجيات التطبيقات: برامج الإنتاجية والتصميم والتصفح' },
    ],
    realWorldExamples: [
      { en: 'Hardware: CPU, Motherboard, Monitor, Keyboard', ar: 'العتاد: المعالج، اللوحة الأم، الشاشة، لوحة المفاتيح' },
      { en: 'Software: Windows, Linux, Python, Web Browsers', ar: 'البرمجيات: ويندوز، لينكس، بايثون، متصفحات الويب' },
    ],
    illustrationKey: 'hardware-software',
    interactiveDiagram: 'os-layers',
    vocabulary: [
      { termEn: 'Hardware', termAr: 'العتاد الصلب', meaningEn: 'Tangible physical parts of a computer', meaningAr: 'الأجزاء المادية الملموسة في الحاسوب' },
      { termEn: 'Software', termAr: 'البرمجيات', meaningEn: 'Programs, operating systems, and executable code', meaningAr: 'البرامج وأنظمة التشغيل والتعليمات البرمجية' },
      { termEn: 'Firmware', termAr: 'البرمجيات الثابتة', meaningEn: 'Low-level software stored on ROM/Flash chips (e.g., UEFI)', meaningAr: 'برمجيات منخفضة المستوى مخزنة على شريحة ثابتة مثل UEFI' },
    ],
    summary: {
      en: 'Hardware provides physical computing power; software directs that power to accomplish human goals.',
      ar: 'يوفر العتاد القدرة الفيزيائية، بينما توجهه البرمجيات لتنفيذ أهداف المستخدم.',
    },
    quiz: [
      {
        question: { en: 'Which of the following is an example of hardware?', ar: 'أي مما يلي يعد مثالاً على العتاد الصلب؟' },
        options: [
          { en: 'Python Script', ar: 'برنامج بايثون' },
          { en: 'Solid State Drive (SSD)', ar: 'قرص التخزين SSD' },
          { en: 'Linux Kernel', ar: 'نواة لينكس' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'An SSD is a physical storage device you can hold in your hand.',
          ar: 'قرص SSD هو جهاز تخزين مادي ملموس.',
        },
      },
      {
        question: { en: 'What type of software initializes hardware right when you press the power button?', ar: 'ما نوع البرمجيات التي تهيئ العتاد فور الضغط على زر التشغيل؟' },
        options: [
          { en: 'Firmware (BIOS / UEFI)', ar: 'البرمجيات الثابتة (BIOS / UEFI)' },
          { en: 'Spreadsheet App', ar: 'برنامج الجداول' },
          { en: 'Video Editor', ar: 'محرر الفيديو' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'UEFI/BIOS firmware performs POST and boots the operating system.',
          ar: 'يقوم UEFI/BIOS بفحص المكونات ثم إقلاع نظام التشغيل.',
        },
      },
      {
        question: { en: 'Can software run without any physical hardware?', ar: 'هل يمكن للبرمجيات أن تعمل دون وجود أي عتاد مادي؟' },
        options: [
          { en: 'Yes, software floats in the cloud without servers', ar: 'نعم، تعمل في السحابة دون خوادم' },
          { en: 'No, all software needs physical processors and memory', ar: 'لا، كل برمجية تحتاج لمعالج وذاكرة فيزيائية لتعمل' },
          { en: 'Only on weekends', ar: 'أحياناً فقط' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Even cloud software executes on physical server hardware inside data centers.',
          ar: 'حتى البرمجيات السحابية تعمل فعلياً على خوادم مادية في مراكز البيانات.',
        },
      },
    ],
  },
  {
    id: 'data-and-information',
    categoryId: 'fundamentals',
    order: 5,
    title: { en: 'Data and Information', ar: 'البيانات والمعلومات' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Data consists of raw, unorganized facts and binary values, while information is data that has been structured, interpreted, and given context for decision-making.',
      ar: 'البيانات هي حقائق وقيم ثنائية خام غير منظمة، بينما المعلومات هي بيانات تمت معالجتها وتنسيقها ضمن سياق يمنحها معنى مفيداً.',
    },
    detailedExplanation: {
      en: 'Inside a computer, every piece of data—whether a number, Arabic or English letter, pixel color, or audio sample—is encoded as binary bits (0s and 1s). Eight bits form 1 Byte, which can represent 256 distinct values (from 0 to 255). Standards like ASCII and UTF-8 map numbers to characters, while RGB values map bytes to screen colors.',
      ar: 'داخل الحاسوب، يتم ترميز كل قطعة بيانات—سواء كانت رقماً أو حرفاً أو لون بكسل أو صوتاً—على هيئة بتات ثنائية (0 و1). كل 8 بت تشكل 1 بايت قادراً على تمثيل 256 قيمة مختلفة. وتحدد معايير مثل ASCII و UTF-8 كيفية تحويل الأرقام إلى حروف، بينما تحدد قيم RGB ألوان الشاشة.',
    },
    howItWorks: {
      en: 'Raw sensor readings or keystrokes enter as binary voltage pulses → encoding standards group bits into bytes → software aggregates and formats those bytes into charts, text, or alerts.',
      ar: 'تدخل الإشارات الخام كنبضات ثنائية ← تجمعها المعايير في بايتات ← تعالجها البرمجيات لتصبح نصوصاً أو جداول أو رسوماً مفهومة.',
    },
    mainFunctions: [
      { en: 'Bit (0/1): Smallest unit of digital representation', ar: 'البت (Bit): أصغر وحدة لتمثيل البيانات الرقمية' },
      { en: 'Byte (8 bits): Standard unit for a single ASCII character', ar: 'البايت (8 بت): الوحدة الأساسية لتمثيل حرف واحد' },
      { en: 'Scale units: KB → MB → GB → TB (powers of 1024 / 1000)', ar: 'وحدات القياس: كيلوبايت ← ميجابايت ← جيجابايت ← تيرابايت' },
    ],
    realWorldExamples: [
      { en: 'Data: "39, 41, 38" · Information: "Server CPU temperatures average 39.3°C"', ar: 'البيانات: "39, 41, 38" · المعلومات: "متوسط حرارة المعالج 39.3 درجة مئوية"' },
      { en: 'Binary 01001110 equals decimal 78, which represents the letter "N" in ASCII', ar: 'الرقم الثنائي 01001110 يساوي 78 ويمثل الحرف "N" في نظام ASCII' },
    ],
    illustrationKey: 'data',
    interactiveDiagram: 'binary-ascii',
    vocabulary: [
      { termEn: 'Bit', termAr: 'بت (Bit)', meaningEn: 'Binary digit: either 0 or 1', meaningAr: 'خانة ثنائية قيمتها إما 0 أو 1' },
      { termEn: 'Byte', termAr: 'بايت (Byte)', meaningEn: 'Group of 8 bits representing 256 possible states', meaningAr: 'مجموعة من 8 بت تمثل 256 احتمالاً' },
      { termEn: 'UTF-8 / ASCII', termAr: 'ترميز UTF-8 / ASCII', meaningEn: 'Character encoding standards mapping numbers to text', meaningAr: 'معايير لربط الأرقام بالحروف العربية والإنجليزية' },
    ],
    summary: {
      en: 'Computers encode all text, media, and numbers in binary bits and bytes, transforming raw data into structured information.',
      ar: 'يرمز الحاسوب النصوص والوسائط والأرقام في بتات وبايتات ثنائية ليحول البيانات الخام إلى معلومات مفيدة.',
    },
    quiz: [
      {
        question: { en: 'How many bits are in 1 Byte?', ar: 'كم بت يوجد في 1 بايت؟' },
        options: [
          { en: '4 bits', ar: '4 بت' },
          { en: '8 bits', ar: '8 بت' },
          { en: '16 bits', ar: '16 بت' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'One Byte always consists of 8 bits.',
          ar: 'يتكون البايت الواحد دائماً من 8 بت.',
        },
      },
      {
        question: { en: 'Which statement best illustrates "Information"?', ar: 'أي عبارة تعبر بشكل أدق عن مفهوم "المعلومات"؟' },
        options: [
          { en: 'A list of unlabelled numbers: 95, 88, 92', ar: 'قائمة أرقام مجردة: 95، 88، 92' },
          { en: 'Your average quiz score this semester is 91.6%', ar: 'متوسط درجاتك في الاختبارات هذا الفصل هو 91.6%' },
          { en: 'A single voltage pulse', ar: 'نبضة جهد واحدة' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Information gives context, structure, and meaning to raw numbers.',
          ar: 'المعلومات تمنح الأرقام سياقاً ومعنى واضحاً.',
        },
      },
      {
        question: { en: 'Which encoding standard supports both Arabic and English text seamlessly?', ar: 'أي معيار ترميز يدعم النصوص العربية والإنجليزية معاً؟' },
        options: [
          { en: 'UTF-8 (Unicode)', ar: 'UTF-8 (يونيكود)' },
          { en: 'Morse Code', ar: 'شفرة مورس' },
          { en: 'VGA', ar: 'منفذ VGA' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'UTF-8 covers over 140,000 characters across global languages including Arabic.',
          ar: 'يدعم ترميز UTF-8 كافة لغات العالم ومنها العربية بدقة.',
        },
      },
    ],
  },
  {
    id: 'computer-generations',
    categoryId: 'fundamentals',
    order: 6,
    title: { en: 'Computer Generations', ar: 'أجيال الحاسوب' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Computer generations classify major historical leaps in computing hardware, from first-generation vacuum tubes to fifth-generation parallel AI silicon.',
      ar: 'تصنف أجيال الحاسوب القفزات التقنية الكبرى في العتاد، بدءاً من الجيل الأول بالصمامات المفرغة وصولاً إلى الجيل الخامس القائم على المعالجة المتوازية والذكاء الاصطناعي.',
    },
    detailedExplanation: {
      en: 'Each generation is defined by its core electronic building block: 1st Gen (1940s–1950s) used vacuum tubes; 2nd Gen (1950s–1960s) introduced transistors; 3rd Gen (1960s–1970s) packed multiple transistors into Integrated Circuits (ICs); 4th Gen (1971–present) delivered VLSI microprocessors and personal computers; 5th Gen focuses on massive multi-core parallelism, neural accelerators, and quantum research.',
      ar: 'يتميز كل جيل بالتقنية الإلكترونية الأساسية المستخدمة: الجيل الأول (الصمامات المفرغة)، الجيل الثاني (الترانزستور)، الجيل الثالث (الدوائر المتكاملة IC)، الجيل الرابع (المعالجات الدقيقة فائقة التكامل VLSI والحواسيب الشخصية)، والجيل الخامس (الحوسبة المتوازية، مسرعات الذكاء الاصطناعي، والحوسبة الكمومية).',
    },
    howItWorks: {
      en: 'Higher integration density reduces the distance electrons must travel, lowering heat per operation and multiplying instructions per second by orders of magnitude.',
      ar: 'زيادة كثافة الدمج تقلل المسافة التي تقطعها الإلكترونات، مما يخفض الحرارة لكل عملية ويضاعف عدد العمليات في الثانية.',
    },
    mainFunctions: [
      { en: '1st Gen: Vacuum Tubes (ENIAC, UNIVAC)', ar: 'الجيل الأول: الصمامات المفرغة' },
      { en: '2nd Gen: Transistors & Assembly/COBOL', ar: 'الجيل الثاني: الترانزستورات ولغات التجميع' },
      { en: '3rd Gen: Integrated Circuits (IC) & OS multitasking', ar: 'الجيل الثالث: الدوائر المتكاملة وتعدد المهام' },
      { en: '4th Gen: Microprocessors (VLSI) & Personal Computing', ar: 'الجيل الرابع: المعالجات الدقيقة والحواسيب الشخصية' },
      { en: '5th Gen: AI Accelerators, Parallelism & Quantum Computing', ar: 'الجيل الخامس: الذكاء الاصطناعي والمعالجة المتوازية' },
    ],
    realWorldExamples: [
      { en: '1st Gen UNIVAC consumed 125 kW of power; a 4th/5th Gen smartphone SoC uses ~5 W', ar: 'استهلك حاسوب الجيل الأول 125 ألف واط، بينما يستهلك معالج الهاتف الحديث نحو 5 واط فقط' },
      { en: 'Modern GPUs & NPUs represent 5th Gen parallel neural hardware', ar: 'تمثل بطاقات الرسوميات ومسرعات الذكاء الاصطناعي حوسبة الجيل الخامس المتوازية' },
    ],
    illustrationKey: 'generations',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Integrated Circuit (IC)', termAr: 'الدائرة المتكاملة', meaningEn: 'Multiple transistors etched onto a single silicon chip', meaningAr: 'دمج العديد من الترانزستورات في رقاقة سيليكون واحدة' },
      { termEn: 'VLSI', termAr: 'التكامل فائق الكثافة', meaningEn: 'Very-Large-Scale Integration packing millions/billions of transistors', meaningAr: 'تقنية دمج ملايين ومليارات الترانزستورات في معالج واحد' },
    ],
    summary: {
      en: 'Five generations of computing hardware transformed room-sized machines into pocketable, AI-accelerated devices.',
      ar: 'نقلت خمسة أجيال تقنية الحاسوب من أجهزة تملأ الغرف إلى معالجات دقيقة تدعم الذكاء الاصطناعي.',
    },
    quiz: [
      {
        question: { en: 'Which technology defined the Third Generation of computers?', ar: 'ما التقنية التي ميّزت الجيل الثالث من الحواسيب؟' },
        options: [
          { en: 'Integrated Circuits (ICs)', ar: 'الدوائر المتكاملة (IC)' },
          { en: 'Vacuum Tubes', ar: 'الصمامات المفرغة' },
          { en: 'Mechanical Gears', ar: 'التروس الميكانيكية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Integrated circuits combined many transistors onto one silicon wafer in the 1960s.',
          ar: 'جمعت الدوائر المتكاملة عدة ترانزستورات على رقاقة واحدة.',
        },
      },
      {
        question: { en: 'Which generation introduced microprocessors and personal computers (PCs)?', ar: 'أي جيل قدّم المعالجات الدقيقة والحواسيب الشخصية؟' },
        options: [
          { en: 'First Generation', ar: 'الجيل الأول' },
          { en: 'Fourth Generation', ar: 'الجيل الرابع' },
          { en: 'Zero Generation', ar: 'الجيل الصفري' },
        ],
        correctIndex: 1,
        explanation: {
          en: '4th Generation VLSI microprocessors made affordable personal computers possible.',
          ar: 'مكّنت معالجات الجيل الرابع ظهور الحواسيب الشخصية للجميع.',
        },
      },
      {
        question: { en: 'What is a hallmark of Fifth Generation computing?', ar: 'ما أبرز سمات الجيل الخامس من الحوسبة؟' },
        options: [
          { en: 'Parallel processing and AI acceleration', ar: 'المعالجة المتوازية ومسرعات الذكاء الاصطناعي' },
          { en: 'Punched paper cards', ar: 'البطاقات الورقية المثقبة' },
          { en: 'Manual relay switches', ar: 'المفاتيح اليدوية' },
        ],
        correctIndex: 0,
        explanation: {
          en: '5th Generation systems emphasize parallel cores, AI/ML silicon, and quantum research.',
          ar: 'يركز الجيل الخامس على الأنوية المتوازية وشرائح الذكاء الاصطناعي.',
        },
      },
    ],
  },
  {
    id: 'types-of-computers',
    categoryId: 'fundamentals',
    order: 7,
    title: { en: 'Types of Computers', ar: 'أنواع الحواسيب' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Computers are categorized by size, processing power, and intended workload—from tiny embedded microcontrollers to personal desktops, enterprise servers, and supercomputers.',
      ar: 'تُصنف الحواسيب حسب الحجم والقدرة الحسابية والغرض؛ من المتحكمات الدقيقة المدمجة إلى الحواسيب الشخصية والخوادم والحواسيب الفائقة.',
    },
    detailedExplanation: {
      en: 'While all computers share binary logic, their physical architecture scales dramatically to fit different jobs. Embedded systems run inside appliances; personal computers (desktops, laptops, tablets) empower individuals; workstations handle heavy CAD and 3D rendering; servers deliver websites and databases 24/7; and supercomputers connect thousands of nodes for climate modeling and genomics.',
      ar: 'رغم اشتراك جميع الحواسيب في المنطق الثنائي، تختلف أحجامها وتصاميمها وفق المهمة. الأنظمة المدمجة تدير الأجهزة اليومية، والحواسيب الشخصية تخدم الأفراد، ومحطات العمل تعالج التصميم الهندسي، والخوادم تستضيف المواقع على مدار الساعة، بينما تجمع الحواسيب الفائقة آلاف المعالجات لمحاكاة المناخ والأبحاث العلمية.',
    },
    howItWorks: {
      en: 'Scaling changes cooling capacity, memory bandwidth, redundancy (ECC RAM, dual PSUs in servers), and interconnect speed between processor nodes.',
      ar: 'يختلف التصميم حسب سعة التبريد وعرض نطاق الذاكرة ووجود مكونات احتياطية في الخوادم وسرعة الربط بين العقد.',
    },
    mainFunctions: [
      { en: 'Supercomputers: Weather forecasting, physics & AI training clusters', ar: 'الحواسيب الفائقة: التنبؤ بالطقس والمحاكاة العلمية وتدريب الذكاء الاصطناعي' },
      { en: 'Mainframes & Servers: Banking transactions, cloud apps & web hosting', ar: 'الحواسيب المركزية والخوادم: الأنظمة البنكية واستضافة السحابة' },
      { en: 'Personal Computers & Workstations: Desktops, laptops, engineering rigs', ar: 'الحواسيب الشخصية ومحطات العمل: المهام اليومية والهندسية' },
      { en: 'Embedded Systems: Smartwatches, car ECUs, medical sensors', ar: 'الأنظمة المدمجة: الساعات الذكية والسيارات والأجهزة الطبية' },
    ],
    realWorldExamples: [
      { en: 'Cloud data centers running rack-mounted servers for millions of simultaneous users', ar: 'مراكز البيانات التي تشغل خوادم متراصة لخدمة ملايين المستخدمين في وقت واحد' },
      { en: 'A custom ATX gaming & creator desktop built in our 3D PC Lab', ar: 'حاسوب مكتبي احترافي للتصميم والألعاب كما في مختبر 3D' },
    ],
    illustrationKey: 'types',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Supercomputer', termAr: 'الحاسوب الفائق', meaningEn: 'Ultra-high-performance cluster performing quadrillions of calculations/sec', meaningAr: 'نظام حوسبي عملاق يجري كوادريليونات العمليات في الثانية' },
      { termEn: 'Server', termAr: 'الخادم', meaningEn: 'Computer dedicated to providing data and services over a network', meaningAr: 'حاسوب مخصص لتقديم الخدمات والبيانات عبر الشبكة' },
      { termEn: 'Embedded System', termAr: 'النظام المدمج', meaningEn: 'Dedicated computer built inside a larger mechanical/electrical device', meaningAr: 'حاسوب مخصص مدمج داخل جهاز آخر كالسيارة أو الغسالة' },
    ],
    summary: {
      en: 'Computers span a continuous spectrum from embedded microchips to personal desktops, servers, and supercomputers.',
      ar: 'تتنوع الحواسيب من الرقائق المدمجة الصغيرة إلى الحواسيب الشخصية والخوادم والحواسيب الفائقة.',
    },
    quiz: [
      {
        question: { en: 'Which computer type is built for climate simulation and nuclear physics modeling?', ar: 'أي نوع من الحواسيب يُستخدم في محاكاة المناخ والفيزياء المعقدة؟' },
        options: [
          { en: 'Supercomputer', ar: 'الحاسوب الفائق' },
          { en: 'Smartwatch', ar: 'الساعة الذكية' },
          { en: 'Pocket Calculator', ar: 'الآلة الحاسبة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Supercomputers harness thousands of CPUs and GPUs in parallel for scientific simulations.',
          ar: 'تستخدم الحواسيب الفائقة آلاف المعالجات بالتوازي للمحاكاة العلمية.',
        },
      },
      {
        question: { en: 'What is a microcontroller inside a modern car’s airbag system called?', ar: 'ماذا يُسمى الحاسوب الدقيق داخل نظام الوسائد الهوائية في السيارة؟' },
        options: [
          { en: 'Mainframe', ar: 'حاسوب مركزي' },
          { en: 'Embedded System', ar: 'نظام مدمج' },
          { en: 'Workstation', ar: 'محطة عمل' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Embedded systems perform dedicated real-time control inside larger machines.',
          ar: 'تؤدي الأنظمة المدمجة مهام تحكم محددة داخل الأجهزة.',
        },
      },
      {
        question: { en: 'Why do enterprise servers often include dual power supplies and ECC memory?', ar: 'لماذا تحتوي الخوادم غالباً على مزودي طاقة وذاكرة تصحيح أخطاء ECC؟' },
        options: [
          { en: 'To ensure 24/7 uptime and data integrity', ar: 'لضمان العمل المتواصل 24/7 وسلامة البيانات' },
          { en: 'To make the case heavier', ar: 'لزيادة الوزن فقط' },
          { en: 'To play louder audio', ar: 'لرفع صوت السماعات' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Redundancy prevents downtime if one component fails.',
          ar: 'الاحتياطية تمنع توقف الخدمة عند تعطل أي قطعة.',
        },
      },
    ],
  },
  {
    id: 'computer-system-unit',
    categoryId: 'fundamentals',
    order: 8,
    title: { en: 'Computer System Unit', ar: 'وحدة النظام' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'The Computer System Unit is the main enclosure (tower or chassis) that houses and protects all core internal hardware components including the motherboard, CPU, RAM, storage, and power supply.',
      ar: 'وحدة النظام هي الصندوق الرئيسي (الهيكل) الذي يضم ويحمي كافة المكونات الداخلية الأساسية للحاسوب مثل اللوحة الأم والمعالج والذاكرة والتخزين ومزود الطاقة.',
    },
    detailedExplanation: {
      en: 'Beginners often mistakenly call the tower "the CPU", whereas the CPU is just one small chip mounted inside the System Unit. The chassis organizes airflow from front intake fans to rear exhaust, grounds electrical components safely, provides front-panel USB/power buttons, and aligns PCIe expansion slots at the rear.',
      ar: 'يخطئ الكثير من المبتدئين بتسمية الصندوق الكامل "المعالج CPU"، بينما المعالج هو شريحة صغيرة مثبتة داخل وحدة النظام. ينظم الصندوق تدفق الهواء البارد، ويوفر التأريض الكهربائي الآمن، ومنافذ الواجهة الأمامية، وفتحات البطاقات الخلفية.',
    },
    howItWorks: {
      en: 'Brass standoffs lift the motherboard safely off the steel tray, PSU shrouds isolate power cables, and tempered glass or ventilated side panels enclose the acoustic and thermal chamber.',
      ar: 'ترفع قواعد التثبيت اللوحة الأم بأمان عن المعدن، وتفصل حجرة مزود الطاقة الكابلات، بينما يحافظ الغطاء الجانبي على مسار التبريد والهدوء.',
    },
    mainFunctions: [
      { en: 'Physical protection against dust, impacts, and static discharge', ar: 'حماية المكونات من الصدمات والغبار والتداخل الكهرومغناطيسي' },
      { en: 'Structured thermal airflow tunnel from intake to exhaust', ar: 'تنظيم نفق تدفق الهواء من المراوح الأمامية إلى الخلفية' },
      { en: 'Front I/O access (Power button, USB-C, audio jacks)', ar: 'توفير أزرار التشغيل ومنافذ USB الأمامية بسهولة' },
    ],
    realWorldExamples: [
      { en: 'ATX Mid-Tower cases with tempered glass panels for hardware inspection', ar: 'صناديق ATX المتوسطة ذات الألواح الزجاجية لعرض المكونات' },
      { en: 'Compact Mini-ITX cases designed for living-room workstations', ar: 'صناديق Mini-ITX المدمجة لمحطات العمل الصغيرة' },
    ],
    illustrationKey: 'system-unit',
    interactiveDiagram: 'none',
    linked3DComponent: 'case',
    vocabulary: [
      { termEn: 'Chassis / Case', termAr: 'الهيكل / الصندوق', meaningEn: 'Outer metal and glass enclosure of the system unit', meaningAr: 'الغلاف المعدني والزجاجي الخارجي لوحدة النظام' },
      { termEn: 'Form Factor', termAr: 'المعيار الحجمي', meaningEn: 'Standardized dimensions such as ATX, Micro-ATX, or Mini-ITX', meaningAr: 'المقاسات القياسية مثل ATX أو Micro-ATX' },
      { termEn: 'Standoffs', termAr: 'قواعد التثبيت', meaningEn: 'Threaded brass spacers preventing motherboard short circuits', meaningAr: 'فواصل معدنية تمنع تلامس اللوحة الأم مع الصندوق' },
    ],
    summary: {
      en: 'The system unit encloses, powers, cools, and connects every internal component inside a standardized chassis.',
      ar: 'تحتضن وحدة النظام كافة المكونات الداخلية وتوفر لها الطاقة والتبريد والحماية القياسية.',
    },
    quiz: [
      {
        question: { en: 'What is the purpose of brass standoffs inside a PC case?', ar: 'ما وظيفة قواعد التثبيت النحاسية (Standoffs) داخل صندوق الحاسوب؟' },
        options: [
          { en: 'Hold the motherboard elevated so its back circuits do not short on metal', ar: 'رفع اللوحة الأم لمنع حدوث تماس كهربائي مع معدن الصندوق' },
          { en: 'Increase internet speed', ar: 'زيادة سرعة الإنترنت' },
          { en: 'Store operating system files', ar: 'تخزين ملفات نظام التشغيل' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Standoffs create a safe air gap between the motherboard solder points and the steel tray.',
          ar: 'تمنع القواعد تلامس نقاط اللحام الخلفية للوحة الأم مع هيكل الصندوق.',
        },
      },
      {
        question: { en: 'Which is the most common desktop PC case size standard?', ar: 'ما المعيار الأكثر شيوعاً لأحجام صناديق الحاسوب المكتبي؟' },
        options: [
          { en: 'ATX', ar: 'ATX' },
          { en: 'HDMI', ar: 'HDMI' },
          { en: 'HTTP', ar: 'HTTP' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'ATX (Advanced Technology eXtended) is the standard desktop motherboard and case form factor.',
          ar: 'ATX هو المعيار القياسي الأكثر انتشاراً لأحجام اللوحات الأم والصناديق.',
        },
      },
      {
        question: { en: 'Is the entire System Unit tower the same thing as the CPU?', ar: 'هل صندوق وحدة النظام الكامل هو نفسه المعالج CPU؟' },
        options: [
          { en: 'Yes, they are identical', ar: 'نعم، هما شيء واحد' },
          { en: 'No, the CPU is one chip mounted inside the System Unit', ar: 'لا، المعالج شريحة صغيرة مثبتة داخل وحدة النظام' },
          { en: 'Only on laptops', ar: 'في الحواسيب المحمولة فقط' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The system unit holds the motherboard, CPU, RAM, GPU, storage, and PSU.',
          ar: 'تحتوي وحدة النظام على اللوحة الأم والمعالج والذاكرة والتخزين ومزود الطاقة.',
        },
      },
    ],
  },
];
