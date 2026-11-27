import { LessonData } from '../types/academy';

export const LESSONS_OS: LessonData[] = [
  {
    id: 'what-is-an-operating-system',
    categoryId: 'os',
    order: 1,
    title: { en: 'What is an Operating System?', ar: 'ما هو نظام التشغيل؟' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'An Operating System (OS) is the master system software that manages computer hardware resources, schedules running programs, and provides an intuitive interface between users, apps, and silicon.',
      ar: 'نظام التشغيل (OS) هو البرمجية الرئيسية التي تدير موارد عتاد الحاسوب، وتجدول البرامج، وتوفر واجهة سهلة للتفاعل بين المستخدم والتطبيقات والمكونات المادية.',
    },
    detailedExplanation: {
      en: 'Without an operating system, every app developer would have to write raw assembly instructions just to draw a pixel or save a byte to an NVMe drive. The OS kernel acts as a referee: it isolates each app in protected memory spaces, divides CPU milliseconds fairly among dozens of processes, enforces user permissions, and organizes files into folders.',
      ar: 'بدون نظام التشغيل، كان على كل مطور كتابة أوامر معقدة مباشرة للعتاد لعرض حرف أو حفظ ملف. تعمل نواة نظام التشغيل كحكم منظم: تعزل كل برنامج في مساحة ذاكرة محمية، وتوزع وقت المعالج بعدالة بين التطبيقات، وتدير الصلاحيات والملفات.',
    },
    howItWorks: {
      en: 'UEFI loads the Bootloader → Bootloader loads the OS Kernel into RAM → Kernel initializes hardware drivers → User Space shell (Desktop GUI / Terminal) launches apps via System Calls.',
      ar: 'يحمّل UEFI محمل الإقلاع ← يحمّل النواة في الذاكرة ← تفعّل النواة تعريفات الأجهزة ← تنطلق واجهة سطح المكتب للتطبيقات عبر استدعاءات النظام.',
    },
    mainFunctions: [
      { en: 'Process & CPU scheduling (Multitasking)', ar: 'جدولة العمليات وتوزيع وقت المعالج (تعدد المهام)' },
      { en: 'Memory management & virtual RAM allocation', ar: 'إدارة الذاكرة العشوائية وحماية مساحات البرامج' },
      { en: 'File system organization & hardware abstraction', ar: 'إدارة نظام الملفات والتخاطب مع الأجهزة' },
    ],
    realWorldExamples: [
      { en: 'Windows, Linux, macOS on desktops; Android and iOS on mobile', ar: 'أنظمة ويندوز ولينكس وماك على الحواسيب، وأندرويد وiOS على الهواتف' },
    ],
    illustrationKey: 'os',
    interactiveDiagram: 'os-layers',
    vocabulary: [
      { termEn: 'Kernel', termAr: 'النواة (Kernel)', meaningEn: 'Core privileged component of the OS talking directly to hardware', meaningAr: 'الجزء الأساسي من النظام الذي يتواصل مباشرة مع العتاد' },
      { termEn: 'System Call', termAr: 'استدعاء النظام', meaningEn: 'API request from an app asking the OS kernel for a resource', meaningAr: 'طلب يرسله التطبيق إلى النواة للوصول لملف أو عتاد' },
      { termEn: 'Multitasking', termAr: 'تعدد المهام', meaningEn: 'Running multiple programs concurrently via rapid CPU time-slicing', meaningAr: 'تشغيل عدة برامج في آنٍ واحد عبر تقسيم وقت المعالج' },
    ],
    summary: {
      en: 'The operating system coordinates hardware, memory, files, and user interfaces so applications run safely and smoothly.',
      ar: 'ينسق نظام التشغيل العتاد والذاكرة والملفات والواجهات لتعمل التطبيقات بأمان وسلاسة.',
    },
    quiz: [
      {
        question: { en: 'What is the core part of an OS that directly controls hardware?', ar: 'ما الجزء الأساسي في نظام التشغيل الذي يتحكم بالعتاد مباشرة؟' },
        options: [
          { en: 'The Kernel', ar: 'النواة (Kernel)' },
          { en: 'The Screensaver', ar: 'شاشة التوقف' },
          { en: 'The Web Browser', ar: 'متصفح الويب' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The kernel runs in privileged mode to arbitrate CPU, RAM, and device I/O.',
          ar: 'تعمل النواة بصلاحيات عليا لإدارة المعالج والذاكرة والأجهزة.',
        },
      },
      {
        question: { en: 'How does an OS run 20 apps on an 8-core CPU at the same time?', ar: 'كيف يشغل نظام التشغيل 20 تطبيقاً في وقت واحد على معالج ذي 8 أنوية؟' },
        options: [
          { en: 'Preemptive multitasking switches cores between tasks every few milliseconds', ar: 'تعدد المهام يبدّل المهام بسرعة فائقة كل بضعة أجزاء من الألف من الثانية' },
          { en: 'It deletes 12 apps automatically', ar: 'يحذف 12 تطبيقاً تلقائياً' },
          { en: 'It stores them on the keyboard', ar: 'يخزنها في لوحة المفاتيح' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Rapid context switching makes dozens of apps feel simultaneous.',
          ar: 'التبديل السريع بين المهام يمنح تجربة تشغيل متزامنة.',
        },
      },
      {
        question: { en: 'Which software boots the OS kernel when turning on a PC?', ar: 'ما البرنامج الذي يحمّل نواة نظام التشغيل عند تشغيل الحاسوب؟' },
        options: [
          { en: 'Bootloader', ar: 'محمّل الإقلاع (Bootloader)' },
          { en: 'Photo Editor', ar: 'محرر الصور' },
          { en: 'Calculator', ar: 'الآلة الحاسبة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The bootloader hands control from UEFI firmware to the OS kernel.',
          ar: 'ينقل محمل الإقلاع التحكم من UEFI إلى نواة نظام التشغيل.',
        },
      },
    ],
  },
  {
    id: 'windows',
    categoryId: 'os',
    order: 2,
    title: { en: 'Windows Operating System', ar: 'نظام التشغيل ويندوز (Windows)' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Microsoft Windows is the world’s most widely used desktop operating system, built around the NT kernel, NTFS file system, and broad hardware/software compatibility.',
      ar: 'مايكروسوفت ويندوز هو نظام التشغيل المكتبي الأكثر انتشاراً في العالم، ويعتمد على نواة NT ونظام ملفات NTFS وتوافق واسع مع العتاد والبرامج.',
    },
    detailedExplanation: {
      en: 'Designed for x86-64 and ARM PCs across countless manufacturers, Windows balances consumer simplicity with enterprise management (Active Directory, BitLocker encryption, and Windows Subsystem for Linux). Its DirectX API powers PC gaming, while Task Manager and Device Manager give learners deep visibility into hardware performance.',
      ar: 'صُمم ويندوز ليعمل على حواسيب من مئات الشركات المصنعة، ويجمع بين سهولة الاستخدام للأفراد وأدوات الإدارة المتقدمة للشركات مثل التشفير وبيئة لينكس المدمجة WSL. وتوفر أدواته مثل مدير المهام وإدارة الأجهزة مراقبة دقيقة للأداء والعتاد.',
    },
    howItWorks: {
      en: 'Windows uses the NT hybrid kernel, separating user-mode applications from kernel-mode drivers, storing system configuration in the Windows Registry, and managing permissions via NTFS ACLs.',
      ar: 'تعتمد بنية ويندوز على نواة NT الهجينة التي تفصل برامج المستخدم عن تعريفات النواة، وتخزن الإعدادات في سجل النظام مع صلاحيات أمان عبر NTFS.',
    },
    mainFunctions: [
      { en: 'Broadest desktop software, creative suite, and PC gaming support', ar: 'أوسع دعم للتطبيقات المكتبية والهندسية والألعاب' },
      { en: 'Plug-and-Play hardware detection via Windows Update drivers', ar: 'التعرف التلقائي على الأجهزة وتحديث تعريفاتها' },
      { en: 'Built-in security: Windows Defender, BitLocker, and User Account Control', ar: 'حماية مدمجة تشمل التشفير وجدار الحماية والتحكم بالصلاحيات' },
    ],
    realWorldExamples: [
      { en: 'Office workstations, engineering CAD suites, and custom gaming PCs', ar: 'حواسيب الشركات والمكاتب ومحطات التصميم الهندسي والألعاب' },
    ],
    illustrationKey: 'os',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'NTFS', termAr: 'نظام ملفات NTFS', meaningEn: 'New Technology File System supporting permissions, journaling & large files', meaningAr: 'نظام الملفات القياسي لويندوز مع دعم الصلاحيات والأمان' },
      { termEn: 'Task Manager', termAr: 'مدير المهام', meaningEn: 'Built-in monitor for CPU, RAM, GPU, disk, and active processes', meaningAr: 'أداة مراقبة استهلاك المعالج والذاكرة والعمليات النشطة' },
    ],
    summary: {
      en: 'Windows delivers universal PC hardware compatibility, NTFS storage security, and rich productivity tools.',
      ar: 'يوفر نظام ويندوز أوسع توافق مع العتاد والبرمجيات وأدوات إدارة متقدمة.',
    },
    quiz: [
      {
        question: { en: 'What is the standard file system used on modern Windows drives?', ar: 'ما نظام الملفات القياسي المستخدم في أقراص ويندوز الحديثة؟' },
        options: [
          { en: 'NTFS', ar: 'NTFS' },
          { en: 'HTTP', ar: 'HTTP' },
          { en: 'BIOS', ar: 'BIOS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'NTFS supports file permissions, compression, and crash recovery journaling.',
          ar: 'يدعم NTFS الصلاحيات والحماية من فقدان البيانات.',
        },
      },
      {
        question: { en: 'Which shortcut or tool lets you inspect real-time CPU and RAM usage in Windows?', ar: 'أي أداة في ويندوز تتيح مراقبة استهلاك المعالج والذاكرة لحظياً؟' },
        options: [
          { en: 'Task Manager', ar: 'مدير المهام (Task Manager)' },
          { en: 'Paint', ar: 'برنامج الرسام' },
          { en: 'Notepad', ar: 'المفكرة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Task Manager (Ctrl+Shift+Esc) displays live process and hardware metrics.',
          ar: 'يعرض مدير المهام تفاصيل استهلاك العتاد والعمليات النشطة.',
        },
      },
      {
        question: { en: 'What feature lets developers run a genuine Linux environment inside Windows?', ar: 'ما الميزة التي تتيح تشغيل بيئة لينكس داخل ويندوز؟' },
        options: [
          { en: 'WSL (Windows Subsystem for Linux)', ar: 'WSL (نظام ويندوز الفرعي للينكس)' },
          { en: 'DirectX', ar: 'DirectX' },
          { en: 'CMOS', ar: 'CMOS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'WSL runs a real Linux kernel alongside Windows.',
          ar: 'تتيح WSL تشغيل نواة لينكس وأدواته مباشرة على ويندوز.',
        },
      },
    ],
  },
  {
    id: 'linux',
    categoryId: 'os',
    order: 3,
    title: { en: 'Linux Operating System', ar: 'نظام التشغيل لينكس (Linux)' },
    readMinutes: 6,
    level: 'intermediate',
    definition: {
      en: 'Linux is a free, open-source, Unix-like operating system kernel created by Linus Torvalds in 1991, forming the foundation of cloud servers, Android devices, and developer workstations.',
      ar: 'لينكس هو نظام تشغيل مفتوح المصدر شبيه بيونكس أطلقه لينوس تورفالدس عام 1991، ويشكل اليوم أساس خوادم السحابة وأجهزة أندرويد ومحطات المطورين.',
    },
    detailedExplanation: {
      en: 'Unlike proprietary OSes, anyone can inspect, modify, and redistribute Linux source code. Distributions ("distros") such as Ubuntu, Fedora, Debian, and Arch bundle the Linux kernel with package managers (`apt`, `dnf`), desktop environments (GNOME, KDE), and powerful command-line shells (`bash`, `zsh`). Over 95% of the world’s top supercomputers and cloud servers run Linux.',
      ar: 'على عكس الأنظمة المغلقة، يمكن لأي شخص مراجعة كود لينكس وتطويره. وتجمع التوزيعات مثل Ubuntu و Fedora و Debian بين نواة لينكس ومديري الحزم وسطح المكتب والطرفية القوية. ويعمل أكثر من 95% من الحواسيب الفائقة وخوادم الإنترنت بنظام لينكس.',
    },
    howItWorks: {
      en: 'In Linux, "everything is a file"—hardware devices appear under `/dev`, system settings live as readable text in `/etc`, and package managers install verified software from central repositories.',
      ar: 'في لينكس "كل شيء عبارة عن ملف"؛ فتظهر الأجهزة في مجلد /dev، وتُحفظ الإعدادات في /etc، وتُثبّت البرامج بأمر واحد من مستودعات رسمية موثوقة.',
    },
    mainFunctions: [
      { en: 'Open-source transparency, high stability, and zero licensing cost', ar: 'مفتوح المصدر وعالي الاستقرار ومجاني بالكامل' },
      { en: 'Powerful Terminal & shell scripting automation', ar: 'طرفية أوامر قوية لأتمتة المهام وإدارة الخوادم' },
      { en: 'Dominates cloud infrastructure, containers (Docker), and cybersecurity', ar: 'يهيمن على الحوسبة السحابية والحاويات والأمن السيبراني' },
    ],
    realWorldExamples: [
      { en: 'Ubuntu & Debian servers hosting web applications worldwide', ar: 'خوادم أوبونتو وديبيان التي تستضيف مواقع وتطبيقات الويب عالمياً' },
      { en: 'Android OS built atop a modified Linux kernel', ar: 'نظام أندرويد المبني على نواة لينكس' },
    ],
    illustrationKey: 'os',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Open Source', termAr: 'مفتوح المصدر', meaningEn: 'Source code publicly readable, auditable, and modifiable', meaningAr: 'كود برمجي متاح للجميع للاطلاع والتعديل والتطوير' },
      { termEn: 'Distribution (Distro)', termAr: 'توزيعة لينكس', meaningEn: 'Complete OS packaging the Linux kernel with apps and tools (e.g., Ubuntu)', meaningAr: 'نظام متكامل يجمع نواة لينكس مع واجهة وبرامج مثل Ubuntu' },
      { termEn: 'Package Manager', termAr: 'مدير الحزم', meaningEn: 'CLI tool (apt, dnf) installing and updating verified software securely', meaningAr: 'أداة لتثبيت وتحديث البرامج بأمان من المستودعات الرسمية' },
    ],
    summary: {
      en: 'Linux delivers open-source freedom, unmatched stability, and command-line power across servers, cloud, and desktops.',
      ar: 'يمنح لينكس حرية المصدر المفتوح واستقراراً فائقاً وقوة في سطر الأوامر للخوادم والمطورين.',
    },
    quiz: [
      {
        question: { en: 'What makes Linux fundamentally different from proprietary operating systems?', ar: 'ما الذي يميز لينكس جذرياً عن الأنظمة مغلقة المصدر؟' },
        options: [
          { en: 'It is open-source, allowing anyone to inspect and customize the code', ar: 'أنه مفتوح المصدر مما يتيح الاطلاع على الكود وتعديله' },
          { en: 'It does not use a CPU', ar: 'أنه لا يستخدم معالجاً' },
          { en: 'It only runs without monitors', ar: 'أنه لا يعمل مع الشاشات' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Linux’s open-source GPL license encourages global collaboration and security auditing.',
          ar: 'رخصة المصدر المفتوح تتيح التطوير الجماعي والفحص الأمني الشامل.',
        },
      },
      {
        question: { en: 'Which of these is a popular Linux distribution?', ar: 'أي مما يلي يُعد توزيعة لينكس شهيرة؟' },
        options: [
          { en: 'Ubuntu', ar: 'أوبونتو (Ubuntu)' },
          { en: 'Photoshop', ar: 'فوتوشوب' },
          { en: 'Bluetooth', ar: 'بلوتوث' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Ubuntu, Fedora, and Debian are widely used Linux distributions.',
          ar: 'أوبونتو وفيدورا وديبيان من أشهر توزيعات لينكس.',
        },
      },
      {
        question: { en: 'Where does Linux power the majority of systems worldwide?', ar: 'أين يسيطر لينكس على النسبة الأكبر من الأنظمة عالمياً؟' },
        options: [
          { en: 'Cloud servers, supercomputers, and Android smartphones', ar: 'خوادم السحابة والحواسيب الفائقة وهواتف أندرويد' },
          { en: 'Mechanical typewriters', ar: 'الآلات الكاتبة اليدوية' },
          { en: 'Analog radios', ar: 'أجهزة الراديو التناظرية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Linux runs virtually all supercomputers, cloud containers, and Android phones.',
          ar: 'يشغل لينكس الغالبية العظمى من الخوادم السحابية والحواسيب الفائقة.',
        },
      },
    ],
  },
  {
    id: 'macos',
    categoryId: 'os',
    order: 4,
    title: { en: 'macOS Operating System', ar: 'نظام التشغيل ماك أو إس (macOS)' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'macOS is Apple’s Unix-certified desktop operating system engineered exclusively for Mac hardware, renowned for tight silicon-to-software integration and creative workflows.',
      ar: 'ماك أو إس (macOS) هو نظام التشغيل المعتمد على يونكس من شركة آبل والمصمم خصيصاً لأجهزة ماك بتكامل وثيق بين العتاد والبرمجيات.',
    },
    detailedExplanation: {
      en: 'Built on the Darwin/XNU hybrid kernel, macOS combines a genuine Unix command-line Terminal with a polished Aqua graphical desktop. Because Apple designs both the M-series Apple Silicon chips and macOS together, memory bandwidth, battery efficiency, and media engines are tightly tuned without hardware guesswork.',
      ar: 'يبنى macOS على نواة XNU المعتمدة على يونكس، جامعاً بين قوة طرفية الأوامر للمطورين وجمال الواجهة الرسومية للمصممين. وبفضل تصميم آبل للمعالجات والنظام معاً، يحقق كفاءة طاقة وأداءً متناغماً في المونتاج والبرمجة.',
    },
    howItWorks: {
      en: 'macOS uses APFS (Apple File System) with instant copy-on-write snapshots, Metal graphics API for GPU acceleration, and unified memory architecture on Apple Silicon.',
      ar: 'يعتمد النظام على نظام ملفات APFS السريع وواجهة Metal للرسوميات، مع ذاكرة موحدة يتشاركها المعالج وكرت الشاشة مباشرة.',
    },
    mainFunctions: [
      { en: 'Tight hardware-software optimization on Apple Silicon', ar: 'تكامل مباشر بين المعالج والنظام لكفاءة الطاقة والأداء' },
      { en: 'Unix-compliant Terminal ideal for software engineering', ar: 'بيئة طرفية متوافقة مع يونكس ومفضلة لدى المطورين' },
      { en: 'Ecosystem continuity (AirDrop, Universal Clipboard, iCloud)', ar: 'ترابط سلس مع الأجهزة المحمولة مثل AirDrop والمزامنة' },
    ],
    realWorldExamples: [
      { en: 'Audio/video studios, iOS app development in Xcode, and design agencies', ar: 'استوديوهات الصوت والمونتاج وتطوير تطبيقات iOS والتصميم' },
    ],
    illustrationKey: 'os',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'APFS', termAr: 'نظام ملفات APFS', meaningEn: 'Apple File System optimized for flash SSDs with encryption and snapshots', meaningAr: 'نظام ملفات آبل المحسن لأقراص SSD مع التشفير واللقطات الفورية' },
      { termEn: 'UNIX Certified', termAr: 'متوافق مع يونكس', meaningEn: 'Follows POSIX standards enabling native developer shells and tools', meaningAr: 'يتبع معايير POSIX القياسية لأدوات التطوير والطرفية' },
    ],
    summary: {
      en: 'macOS pairs a Unix-certified foundation with tailored hardware integration for creative and engineering work.',
      ar: 'يجمع macOS بين قوة نواة يونكس والتكامل الدقيق مع العتاد للإبداع والبرمجة.',
    },
    quiz: [
      {
        question: { en: 'What is the modern file system introduced by Apple for macOS SSDs?', ar: 'ما نظام الملفات الحديث المستخدم في أجهزة ماك بأقراص SSD؟' },
        options: [
          { en: 'APFS', ar: 'APFS' },
          { en: 'FAT16', ar: 'FAT16' },
          { en: 'NTFS', ar: 'NTFS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Apple File System (APFS) is built specifically for modern flash storage.',
          ar: 'صُمم APFS خصيصاً لمحركات التخزين الوميضية الحديثة.',
        },
      },
      {
        question: { en: 'Why is macOS popular among web and mobile software developers?', ar: 'لماذا يفضل كثير من المطورين نظام macOS؟' },
        options: [
          { en: 'It provides a Unix-certified Terminal plus native Xcode/iOS support', ar: 'لأنه يوفر طرفية متوافقة مع يونكس ودعماً أصيلاً لتطوير تطبيقات آبل' },
          { en: 'It has no keyboard shortcuts', ar: 'لأنه لا يحتوي على اختصارات' },
          { en: 'It runs only on floppy disks', ar: 'لأنه يعمل على الأقراص المرنة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Unix compatibility lets developers use bash/zsh, git, and POSIX tooling natively.',
          ar: 'التوافق مع يونكس يسهل تشغيل أدوات البرمجة القياسية مباشرة.',
        },
      },
      {
        question: { en: 'Which company develops macOS?', ar: 'ما الشركة المطورة لنظام macOS؟' },
        options: [
          { en: 'Apple', ar: 'آبل (Apple)' },
          { en: 'Microsoft', ar: 'مايكروسوفت' },
          { en: 'IBM', ar: 'IBM' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Apple develops macOS exclusively for Mac computers.',
          ar: 'تطور شركة آبل نظام macOS لأجهزة ماك.',
        },
      },
    ],
  },
  {
    id: 'file-management',
    categoryId: 'os',
    order: 5,
    title: { en: 'File Management', ar: 'إدارة الملفات' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'File management is how an operating system organizes, names, indexes, secures, and retrieves digital data stored on drives using hierarchical directories and file systems.',
      ar: 'إدارة الملفات هي الآلية التي ينظم بها نظام التشغيل البيانات الرقمية ويسميها ويؤمنها ويسترجعها من الأقراص عبر المجلدات الهرمية وأنظمة الملفات.',
    },
    detailedExplanation: {
      en: 'Every SSD or HDD is just billions of raw bytes until formatted with a File System (NTFS, ext4, APFS, exFAT). The OS creates a tree of folders (directories) starting from a root (`C:\\` on Windows or `/` on Linux/macOS), tracks metadata (size, timestamps, permissions), and uses file extensions (`.pdf`, `.py`, `.jpg`) to pair files with the right app.',
      ar: 'القرص الفارغ ما هو إلا ملايين القطاعات الرقمية حتى يتم تهيئته بنظام ملفات (مثل NTFS أو ext4 أو APFS). ينشئ نظام التشغيل شجرة مجلدات تبدأ من الجذر، ويحفظ بيانات وصفية كالحجم وتاريخ التعديل والصلاحيات، ويستخدم الامتدادات (.pdf, .py, .jpg) لفتح كل ملف بالبرنامج المناسب.',
    },
    howItWorks: {
      en: 'Saving a file writes data blocks onto free drive clusters → updates an index table (MFT in NTFS or Inodes in Linux) with block pointers, file name, and permissions.',
      ar: 'عند حفظ ملف، تُكتب البيانات في قطاعات القرص الفارغة ← ويُحدّث جدول الفهرسة (MFT أو Inodes) بموقع الكتل واسم الملف وصلاحيات الوصول.',
    },
    mainFunctions: [
      { en: 'Hierarchical directory paths (Absolute vs Relative paths)', ar: 'تنظيم المسارات الهرمية للمجلدات (المسار المطلق والنسبي)' },
      { en: 'File attributes, permissions (Read/Write/Execute), and indexing', ar: 'إدارة الصلاحيات (قراءة/كتابة/تنفيذ) والفهرسة السريعة' },
      { en: 'Cross-platform sharing formats like exFAT for USB flash drives', ar: 'دعم تنسيقات التبادل مثل exFAT لأقراص USB المحمولة' },
    ],
    realWorldExamples: [
      { en: 'Organizing code projects in `/Users/dev/projects/academy/index.html`', ar: 'تنظيم مشاريع البرمجة في مسارات واضحة مثل projects/academy/index.html' },
    ],
    illustrationKey: 'storage',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Directory / Folder', termAr: 'المجلد', meaningEn: 'Container organizing files and subdirectories in a tree', meaningAr: 'حاوية منطقية لترتيب الملفات والمجلدات الفرعية في شجرة' },
      { termEn: 'File Extension', termAr: 'امتداد الملف', meaningEn: 'Suffix like .txt, .png, or .ts indicating file format', meaningAr: 'لاحقة مثل .txt أو .png تحدد نوع الملف والبرنامج المناسب له' },
      { termEn: 'Path', termAr: 'المسار', meaningEn: 'Exact address locating a file inside the directory tree', meaningAr: 'العنوان الكامل الذي يحدد موقع الملف داخل شجرة المجلدات' },
    ],
    summary: {
      en: 'File systems turn raw storage blocks into searchable, permission-protected folder trees.',
      ar: 'تحوّل أنظمة الملفات مساحات التخزين الخام إلى شجرة مجلدات منظمة وآمنة وسهلة البحث.',
    },
    quiz: [
      {
        question: { en: 'Which cross-platform file system works natively on Windows, macOS, and Linux for USB drives?', ar: 'أي نظام ملفات يعمل بمرونة على ويندوز وماك ولينكس لأقراص USB الكبيرة؟' },
        options: [
          { en: 'exFAT', ar: 'exFAT' },
          { en: 'APFS', ar: 'APFS' },
          { en: 'ext4', ar: 'ext4' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'exFAT supports large files (>4 GB) across almost all modern operating systems.',
          ar: 'يدعم exFAT الملفات الكبيرة ويعمل عبر مختلف أنظمة التشغيل.',
        },
      },
      {
        question: { en: 'What does a file extension like ".py" or ".jpg" tell the operating system?', ar: 'ماذا يخبر امتداد الملف مثل .py أو .jpg نظام التشغيل؟' },
        options: [
          { en: 'The file’s data format and default program to open it', ar: 'نوع تنسيق الملف والبرنامج الافتراضي لفتحه' },
          { en: 'The monitor refresh rate', ar: 'معدل تحديث الشاشة' },
          { en: 'The CPU voltage', ar: 'جهد المعالج' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Extensions identify format conventions and associated applications.',
          ar: 'تحدد الامتدادات صيغة الملف والتطبيق المرتبط به.',
        },
      },
      {
        question: { en: 'What is the root directory symbol in Linux and macOS?', ar: 'ما رمز المجلد الجذري (Root) في نظامي لينكس وماك؟' },
        options: [
          { en: '/ (forward slash)', ar: '/ (الشرطة المائلة للأمام)' },
          { en: 'C:\\', ar: 'C:\\' },
          { en: '@', ar: '@' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Unix-like file systems anchor the entire directory tree at "/".',
          ar: 'تبدأ شجرة الملفات في الأنظمة الشبيهة بيونكس من الجذر /.',
        },
      },
    ],
  },
  {
    id: 'device-drivers',
    categoryId: 'os',
    order: 6,
    title: { en: 'Device Drivers', ar: 'تعريفات الأجهزة (Device Drivers)' },
    readMinutes: 5,
    level: 'intermediate',
    definition: {
      en: 'A device driver is specialized translator software that enables the operating system kernel to communicate with and control a specific hardware component.',
      ar: 'تعريف الجهاز (Driver) هو برنامج مترجم متخصص يمكّن نواة نظام التشغيل من التخاطب والتحكم بقطعة عتاد معينة.',
    },
    detailedExplanation: {
      en: 'An operating system cannot possibly know the internal register layout of every graphics card, Wi-Fi chip, or printer ever invented. Instead, hardware manufacturers publish Device Drivers. When you install an NVIDIA or AMD GPU driver, you give the OS the exact translator needed to unlock 3D acceleration, fan curves, and multi-monitor output.',
      ar: 'لا يمكن لنظام التشغيل معرفة تفاصيل كل بطاقة رسوميات أو طابعة أو كرت شبكة يُنتج في العالم؛ لذا يوفر المصنّعون برامج التعريف. عند تثبيت تعريف بطاقة الشاشة، يحصل النظام على المترجم الدقيق لتشغيل التسريع ثلاثي الأبعاد والمراوح والدقة الكاملة.',
    },
    howItWorks: {
      en: 'Application calls generic OS graphics/audio API → OS kernel routes request to the hardware-specific driver → Driver writes commands to hardware registers over PCIe/USB.',
      ar: 'يطلب التطبيق خدمة عامة من النظام ← يوجهها النظام إلى تعريف القطعة ← يرسل التعريف الأوامر الفيزيائية الدقيقة عبر PCIe أو USB.',
    },
    mainFunctions: [
      { en: 'Translates generic OS requests into hardware-specific electrical commands', ar: 'ترجمة طلبات النظام العامة إلى أوامر دقيقة تفهمها القطعة' },
      { en: 'Unlocks full performance, power management, and bug fixes', ar: 'تفعيل كامل قدرات القطعة وتحديثات الاستقرار والأمان' },
      { en: 'Supports Plug-and-Play discovery via PCI/USB Vendor & Device IDs', ar: 'التعرف التلقائي عبر معرّفات الشركات المصنعة' },
    ],
    realWorldExamples: [
      { en: 'GPU drivers enabling WebGL/3D games and video encoding', ar: 'تعريفات بطاقات الرسوميات لتشغيل الألعاب وبرامج التصميم' },
      { en: 'Chipset and Network drivers ensuring full Gigabit Ethernet speed', ar: 'تعريفات اللوحة الأم والشبكة لتحقيق السرعة القصوى' },
    ],
    illustrationKey: 'motherboard',
    interactiveDiagram: 'os-layers',
    vocabulary: [
      { termEn: 'Driver', termAr: 'برنامج التعريف', meaningEn: 'Hardware-specific translator module loaded by the OS', meaningAr: 'برنامج وسيط يربط بين نظام التشغيل وقطعة عتاد محددة' },
      { termEn: 'Plug and Play', termAr: 'التوصيل والتشغيل', meaningEn: 'Automatic detection and driver loading when hardware is attached', meaningAr: 'ميزة التعرف التلقائي على الأجهزة فور توصيلها' },
    ],
    summary: {
      en: 'Device drivers bridge the gap between generic operating system APIs and unique physical hardware designs.',
      ar: 'تعمل التعريفات كجسر ترجمة بين أوامر نظام التشغيل العامة وتفاصيل كل قطعة عتاد.',
    },
    quiz: [
      {
        question: { en: 'What happens if a graphics card lacks its proper driver?', ar: 'ماذا يحدث إذا لم يكن لبطاقة الرسوميات تعريف مناسب مثبت؟' },
        options: [
          { en: 'Display runs in basic low-resolution fallback mode without 3D acceleration', ar: 'تعمل الشاشة بدقة بدائية دون تسريع ثلاثي الأبعاد' },
          { en: 'The monitor catches fire', ar: 'تحترق الشاشة' },
          { en: 'CPU cores double', ar: 'تتضاعف أنوية المعالج' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Without the vendor driver, the OS uses a slow generic display driver.',
          ar: 'يستخدم النظام تعريف عرض قياسي بطيء حتى يُثبّت التعريف الرسمي.',
        },
      },
      {
        question: { en: 'Who normally creates and updates hardware device drivers?', ar: 'من الذي يطور ويحدث تعريفات الأجهزة عادةً؟' },
        options: [
          { en: 'The hardware manufacturer (e.g., AMD, Intel, NVIDIA, Realtek)', ar: 'الشركة المصنعة للعتاد (مثل Intel أو AMD أو NVIDIA)' },
          { en: 'The electric utility company', ar: 'شركة الكهرباء' },
          { en: 'Website visitors', ar: 'زوار المواقع' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Hardware vendors know their silicon’s exact registers and release signed drivers.',
          ar: 'تصمم الشركات المصنعة التعريفات الموقعة لعتادها الخاص.',
        },
      },
      {
        question: { en: 'How does the OS identify a newly plugged USB device automatically?', ar: 'كيف يتعرف نظام التشغيل تلقائياً على جهاز USB موصول حديثاً؟' },
        options: [
          { en: 'By reading its Vendor ID and Device ID via Plug-and-Play', ar: 'عبر قراءة معرّف الشركة والمنتج عبر تقنية التوصيل والتشغيل' },
          { en: 'By weighing the cable', ar: 'بقياس وزن الكابل' },
          { en: 'By guessing randomly', ar: 'بالتخمين العشوائي' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Every USB and PCIe device reports standardized hardware IDs.',
          ar: 'يرسل كل جهاز معرّفات قياسية تمكن النظام من مطابقة التعريف.',
        },
      },
    ],
  },
  {
    id: 'software-installation',
    categoryId: 'os',
    order: 7,
    title: { en: 'Software Installation', ar: 'تثبيت البرمجيات' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Software installation is the structured process of unpacking, verifying, configuring, and registering an application’s executable binaries, libraries, and shortcuts onto an operating system.',
      ar: 'تثبيت البرمجيات هو العملية المنظمة لفك حزمة البرنامج والتحقق منها ونسخ ملفاتها التنفيذية ومكتباتها وتهيئة إعداداتها على نظام التشغيل.',
    },
    detailedExplanation: {
      en: 'Installing an app involves more than copying a single file. Installers (`.msi`, `.exe`, `.dmg`, `.deb`) check system requirements, resolve shared dependencies/libraries, register file associations, and create clean uninstall manifests. Modern package managers (`winget`, `apt`, `brew`) automate this safely with cryptographic signature checks.',
      ar: 'يتجاوز التثبيت مجرد نسخ ملف؛ حيث يتحقق المثبّت من متطلبات التشغيل، ويوفر المكتبات المشتركة اللازمة، ويربط امتدادات الملفات، وينشئ سجل إلغاء التثبيت. وتُسهل متاجر التطبيقات ومديرو الحزم (مثل winget و apt و brew) هذه العملية بأمان مع فحص التوقيع الرقمي.',
    },
    howItWorks: {
      en: 'Download verified package → Check digital signature/checksum → Extract binaries to Program Files / `/usr/bin` → Register shortcuts & dependencies → Ready to launch.',
      ar: 'تنزيل الحزمة ← التحقق من التوقيع الرقمي ← استخراج الملفات إلى مجلد البرامج ← تسجيل الاختصارات والمكتبات ← جاهز للتشغيل.',
    },
    mainFunctions: [
      { en: 'Places executable binaries and shared libraries in protected folders', ar: 'وضع الملفات التنفيذية والمكتبات في مسارات النظام المحمية' },
      { en: 'Verifies cryptographic signatures to block malware tampering', ar: 'التحقق من التوقيع الرقمي لمنع البرمجيات المعدّلة أو الخبيثة' },
      { en: 'Tracks installed files so uninstallers leave zero clutter', ar: 'تتبع الملفات لتسهيل التحديث أو الإزالة النظيفة لاحقاً' },
    ],
    realWorldExamples: [
      { en: 'Installing Python or VS Code via `winget`, `apt install`, or official installers', ar: 'تثبيت Python أو VS Code عبر مدير الحزم أو المثبّت الرسمي' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Dependency', termAr: 'الاعتمادية (Dependency)', meaningEn: 'Shared library or runtime required for another app to function', meaningAr: 'مكتبة أو حزمة برمجية مساعدة يحتاجها البرنامج ليعمل' },
      { termEn: 'Digital Signature', termAr: 'التوقيع الرقمي', meaningEn: 'Cryptographic proof verifying publisher identity and file integrity', meaningAr: 'ختم تشفيري يثبت هوية المطور وسلامة الملف من التعديل' },
    ],
    summary: {
      en: 'Safe software installation verifies authenticity, resolves dependencies, and integrates apps cleanly with the OS.',
      ar: 'يضمن التثبيت السليم موثوقية المصدر وتوفر المكتبات وتكامل التطبيق مع نظام التشغيل.',
    },
    quiz: [
      {
        question: { en: 'Why is verifying a digital signature or downloading from official repositories important?', ar: 'لماذا يُعد التحقق من التوقيع الرقمي أو التحميل من المصادر الرسمية مهماً؟' },
        options: [
          { en: 'It guarantees the installer has not been tampered with by malware', ar: 'يضمن عدم تعديل الملف أو حقنه ببرمجيات خبيثة' },
          { en: 'It makes the hard drive spin backwards', ar: 'يجعل القرص يدور بالعكس' },
          { en: 'It deletes your RAM', ar: 'يمسح الذاكرة العشوائية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Cryptographic signatures protect users from trojans and altered binaries.',
          ar: 'يحمي التوقيع الرقمي المستخدم من الملفات المزورة والضارة.',
        },
      },
      {
        question: { en: 'What is a software "dependency"?', ar: 'ما المقصود بالاعتمادية (Dependency) في تثبيت البرامج؟' },
        options: [
          { en: 'Another library or runtime the application needs in order to run', ar: 'مكتبة أو بيئة تشغيل مساعدة يحتاجها التطبيق ليعمل' },
          { en: 'A computer mouse pad', ar: 'لوحة الفأرة' },
          { en: 'A broken cable', ar: 'كابل تالف' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Applications often share common toolkits like .NET, C++ runtimes, or Python packages.',
          ar: 'تعتمد الكثير من التطبيقات على مكتبات مشتركة جاهزة لتشغيل وظائفها.',
        },
      },
      {
        question: { en: 'Which Linux/macOS/Windows tools automate safe one-command software installs?', ar: 'ما الأدوات التي تؤتمت تثبيت البرامج بأمر واحد بأمان؟' },
        options: [
          { en: 'Package Managers (apt, brew, winget)', ar: 'مديرو الحزم (apt و brew و winget)' },
          { en: 'BIOS CMOS batteries', ar: 'بطاريات CMOS' },
          { en: 'HDMI splitters', ar: 'موزعات HDMI' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Package managers fetch signed packages and resolve dependencies automatically.',
          ar: 'يجلب مدير الحزم البرامج الموثوقة ومكتباتها تلقائياً.',
        },
      },
    ],
  },
];
