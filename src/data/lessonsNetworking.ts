import { LessonData } from '../types/academy';

export const LESSONS_NETWORKING: LessonData[] = [
  {
    id: 'what-is-a-computer-network',
    categoryId: 'networking',
    order: 1,
    title: { en: 'What is a Computer Network?', ar: 'ما هي شبكة الحاسوب؟' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'A computer network is a connected system of two or more computing devices linked by wired or wireless media to share data, resources, and communication protocols.',
      ar: 'شبكة الحاسوب هي مجموعة من جهازين أو أكثر متصلة معاً عبر وسائط سلكية أو لاسلكية لتبادل البيانات ومشاركة الموارد وفق بروتوكولات موحدة.',
    },
    detailedExplanation: {
      en: 'Without networks, every computer would be an isolated island requiring physical USB drives to move files. Networking splits large messages into small numbered Packets, wraps them with source and destination addresses, and sends them across copper Ethernet, fiber optic glass, or Wi-Fi radio waves.',
      ar: 'بدون الشبكات، سيعمل كل حاسوب كجزيرة معزولة. تقسّم الشبكات البيانات الكبيرة إلى حزم صغيرة مرقمة (Packets) تحمل عنوان المرسل والمستقبل، وتنقلها عبر كابلات النحاس أو الألياف الضوئية أو موجات Wi-Fi اللاسلكية.',
    },
    howItWorks: {
      en: 'Sender splits data into packets → Network Interface Card (NIC) encodes bits as electrical, light, or radio signals → Switches/Routers forward packets → Receiver reassembles the message.',
      ar: 'يقسّم المرسل البيانات إلى حزم ← تحولها بطاقة الشبكة إلى إشارات كهربائية أو ضوئية أو لاسلكية ← توجهها المبدلات والموجهات ← يعيد المستقبل تجميعها.',
    },
    mainFunctions: [
      { en: 'Resource sharing (printers, NAS storage, internet gateways)', ar: 'مشاركة الموارد مثل الطابعات ووحدات التخزين والإنترنت' },
      { en: 'Instant global communication (email, video calls, cloud apps)', ar: 'التواصل الفوري وتبادل الملفات والخدمات السحابية' },
      { en: 'Centralized data backup and security management', ar: 'النسخ الاحتياطي المركزي وإدارة الأمان والصلاحيات' },
    ],
    realWorldExamples: [
      { en: 'Home Wi-Fi linking laptops, phones, and smart TVs to a single fiber router', ar: 'شبكة المنزل اللاسلكية التي تربط الحواسيب والهواتف بالموجه' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Packet', termAr: 'حزمة بيانات', meaningEn: 'Small formatted chunk of data transmitted over a network', meaningAr: 'وحدة صغيرة مرقمة من البيانات تُرسل عبر الشبكة' },
      { termEn: 'Bandwidth', termAr: 'عرض النطاق', meaningEn: 'Maximum data transfer rate of a link (e.g., 1 Gbps)', meaningAr: 'السعة القصوى لنقل البيانات في الثانية (مثل 1 جيجابت/ث)' },
      { termEn: 'Latency', termAr: 'زمن الاستجابة', meaningEn: 'Time delay (in milliseconds) for a packet to travel to its target', meaningAr: 'الزمن المستغرق بالمللي ثانية لوصول الحزمة إلى وجهتها' },
    ],
    summary: {
      en: 'Networks connect devices through standardized media and packet protocols to share resources and information instantaneously.',
      ar: 'تربط الشبكات الأجهزة عبر وسائط وبروتوكولات قياسية لتبادل البيانات ومشاركة الموارد فوراً.',
    },
    quiz: [
      {
        question: { en: 'What are large files broken into before traveling across a network?', ar: 'إلى ماذا تُقسّم الملفات الكبيرة قبل إرسالها عبر الشبكة؟' },
        options: [
          { en: 'Packets', ar: 'حزم بيانات (Packets)' },
          { en: 'Pixels', ar: 'بكسلات' },
          { en: 'Transistors', ar: 'ترانزستورات' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Packet switching prevents one large download from blocking everyone else on the wire.',
          ar: 'تقسيم البيانات لحزم يمنع احتكار الخط ويتيح تصحيح الأخطاء.',
        },
      },
      {
        question: { en: 'What does "Latency" measure in networking?', ar: 'ماذا يقيس مصطلح "زمن الاستجابة" (Latency) في الشبكات؟' },
        options: [
          { en: 'Time delay in milliseconds for data to reach its destination', ar: 'التأخير الزمني بالمللي ثانية لوصول البيانات إلى وجهتها' },
          { en: 'Cable length in meters', ar: 'طول الكابل بالأمتار' },
          { en: 'Monitor brightness', ar: 'سطوع الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Lower latency (ping) means faster real-time responsiveness.',
          ar: 'كلما انخفض زمن الاستجابة أصبحت الاستجابة الفورية أسرع.',
        },
      },
      {
        question: { en: 'Which hardware component inside a computer connects it to a network?', ar: 'ما المكوّن الذي يربط الحاسوب بالشبكة؟' },
        options: [
          { en: 'NIC (Network Interface Card)', ar: 'بطاقة واجهة الشبكة (NIC)' },
          { en: 'CPU Thermal Paste', ar: 'المعجون الحراري' },
          { en: 'CMOS Battery', ar: 'بطارية CMOS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Every wired or wireless computer uses a Network Interface Card (NIC).',
          ar: 'تتولى بطاقة الشبكة السلكية أو اللاسلكية إرسال واستقبال الإشارات.',
        },
      },
    ],
  },
  {
    id: 'lan-man-and-wan',
    categoryId: 'networking',
    order: 2,
    title: { en: 'LAN, MAN and WAN', ar: 'الشبكات المحلية والإقليمية والواسعة' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'LAN, MAN, and WAN classify networks by geographic coverage: Local Area (a room or building), Metropolitan Area (a city), and Wide Area (countries or the globe).',
      ar: 'تصنف LAN و MAN و WAN الشبكات حسب نطاقها الجغرافي: المحلية (مبنى أو منزل)، الإقليمية (مدينة)، والواسعة (عبر الدول والقارات).',
    },
    detailedExplanation: {
      en: 'A Local Area Network (LAN) links devices in a single home, school, or office using Gigabit Ethernet switches and Wi-Fi with very low latency. A Metropolitan Area Network (MAN) interconnects multiple buildings or campuses across a city via high-speed fiber rings. A Wide Area Network (WAN) spans countries and oceans—with the global Internet being the largest WAN in existence.',
      ar: 'تربط الشبكة المحلية (LAN) الأجهزة داخل منزل أو مدرسة أو شركة بسرعة عالية وزمن تأخير منخفض جداً. وتغطي الشبكة الإقليمية (MAN) مدينة كاملة عبر حلقات ألياف ضوئية تربط الجامعات أو فروع المؤسسات. أما الشبكة الواسعة (WAN) فتمتد عبر الدول والقارات، ويُعد الإنترنت أكبر شبكة WAN في العالم.',
    },
    howItWorks: {
      en: 'Devices inside a LAN communicate through local Switches → a Router bridges the LAN to an ISP’s MAN fiber backbone → submarine cables and core routers link WAN regions worldwide.',
      ar: 'تتواصل أجهزة LAN عبر مبدل محلي ← يربط الموجه الشبكة المحلية بشبكة المدينة (MAN) لدى مزود الخدمة ← تصل الكابلات البحرية الشبكات الواسعة (WAN) حول العالم.',
    },
    mainFunctions: [
      { en: 'LAN: High-speed private connectivity (1–10 Gbps) inside one site', ar: 'LAN: اتصال محلي خاص فائق السرعة داخل مبنى واحد' },
      { en: 'MAN: City-wide campus or municipal fiber interconnect', ar: 'MAN: ربط عدة مبانٍ وفروع على مستوى المدينة' },
      { en: 'WAN: Long-distance enterprise links and the global Internet', ar: 'WAN: ربط الفروع الدولية وشبكة الإنترنت العالمية' },
    ],
    realWorldExamples: [
      { en: 'LAN: Your computer lab at school · MAN: University city fiber · WAN: The Internet', ar: 'LAN: مختبر الحاسوب · MAN: شبكة جامعية على مستوى المدينة · WAN: الإنترنت' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'network-topology',
    vocabulary: [
      { termEn: 'LAN', termAr: 'الشبكة المحلية', meaningEn: 'Local Area Network covering a home, lab, or office building', meaningAr: 'شبكة تغطي نطاقاً محدوداً كالمنزل أو الشركة' },
      { termEn: 'MAN', termAr: 'الشبكة الإقليمية', meaningEn: 'Metropolitan Area Network spanning a city or large campus', meaningAr: 'شبكة تمتد على مستوى مدينة أو تجمع جامعي' },
      { termEn: 'WAN', termAr: 'الشبكة الواسعة', meaningEn: 'Wide Area Network spanning cities, countries, or continents', meaningAr: 'شبكة واسعة تربط بين المدن والدول والقارات' },
    ],
    summary: {
      en: 'LAN, MAN, and WAN scale networking from a single room up to city-wide fiber and the global Internet.',
      ar: 'تتدرج الشبكات من النطاق المحلي LAN إلى الإقليمي MAN ثم الواسع WAN على مستوى العالم.',
    },
    quiz: [
      {
        question: { en: 'Which network type covers a single school computer lab or home office?', ar: 'أي نوع شبكة يغطي مختبر حاسوب مدرسي أو منزلاً واحداً؟' },
        options: [
          { en: 'LAN (Local Area Network)', ar: 'LAN (الشبكة المحلية)' },
          { en: 'WAN (Wide Area Network)', ar: 'WAN (الشبكة الواسعة)' },
          { en: 'GAN', ar: 'GAN' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'LAN covers a localized geographic area such as one building.',
          ar: 'تغطي الشبكة المحلية مبنى أو مساحة محدودة.',
        },
      },
      {
        question: { en: 'What is the largest Wide Area Network (WAN) in the world?', ar: 'ما أكبر شبكة واسعة (WAN) في العالم؟' },
        options: [
          { en: 'The Internet', ar: 'شبكة الإنترنت' },
          { en: 'Bluetooth', ar: 'البلوتوث' },
          { en: 'A USB hub', ar: 'موزع USB' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The Internet connects millions of local networks globally into one WAN.',
          ar: 'يربط الإنترنت ملايين الشبكات حول العالم في شبكة واسعة واحدة.',
        },
      },
      {
        question: { en: 'Which network spans an entire city to link branch campuses?', ar: 'أي شبكة تغطي مدينة كاملة لربط فروع مؤسسات أو جامعات؟' },
        options: [
          { en: 'MAN (Metropolitan Area Network)', ar: 'MAN (الشبكة الإقليمية)' },
          { en: 'PAN (Personal Area Network)', ar: 'PAN (الشبكة الشخصية)' },
          { en: 'SATA', ar: 'SATA' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'MAN bridges multiple LANs across a metropolitan city area.',
          ar: 'تربط شبكة MAN عدة شبكات محلية على امتداد مدينة.',
        },
      },
    ],
  },
  {
    id: 'ip-address',
    categoryId: 'networking',
    order: 3,
    title: { en: 'IP Address', ar: 'عنوان IP' },
    readMinutes: 6,
    level: 'intermediate',
    definition: {
      en: 'An IP (Internet Protocol) address is a unique numerical identifier assigned to every device on a network so packets know where they came from and where to go.',
      ar: 'عنوان IP هو معرّف رقمي فريد يُمنح لكل جهاز متصل بالشبكة لتحديد هويته وتوجيه حزم البيانات منه وإليه بدقة.',
    },
    detailedExplanation: {
      en: 'Just as postal mail requires a street address, IP packets carry source and destination IP addresses. IPv4 uses 32 bits written as four decimal octets separated by dots (e.g., `192.168.1.45`), supporting ~4.3 billion addresses. Because the Internet outgrew IPv4, IPv6 introduced 128-bit hexadecimal addresses providing virtually limitless capacity. Subnet Masks divide an IP into its Network portion and Host portion.',
      ar: 'تماماً كالعنوان البريدي للمنزل، تحمل كل حزمة شبكة عنوان IP للمرسل والمستقبل. يستخدم IPv4 32 بت تُكتب كأربع مجموعات عشرية (مثل 192.168.1.45)، ومع نفاد هذه العناوين عالمياً ظهر IPv6 بطول 128 بت ليوفر عدداً هائلاً لا ينضب من العناوين. ويحدد قناع الشبكة (Subnet Mask) أي جزء يخص الشبكة وأي جزء يخص الجهاز.',
    },
    howItWorks: {
      en: 'When you join Wi-Fi, a DHCP server automatically leases your device a Private IP (like `192.168.1.20`). Your router uses NAT to translate that private IP onto one Public IP assigned by your ISP.',
      ar: 'عند الاتصال بالواي فاي، يمنحك خادم DHCP عنواناً محلياً خاصاً، ويترجمه الموجه عبر تقنية NAT إلى عنوان IP عام للوصول إلى الإنترنت.',
    },
    mainFunctions: [
      { en: 'Host identification and end-to-end packet routing across networks', ar: 'تعريف الأجهزة وتوجيه الحزم عبر الشبكات المترابطة' },
      { en: 'Separates Private LAN space (192.168.x.x / 10.x.x.x) from Public IPs', ar: 'فصل العناوين المحلية الخاصة عن العناوين العامة على الإنترنت' },
      { en: 'IPv4 (32-bit) and IPv6 (128-bit) addressing schemes', ar: 'توفير عناوين IPv4 (32 بت) و IPv6 (128 بت)' },
    ],
    realWorldExamples: [
      { en: 'Loopback address `127.0.0.1` always refers back to your own computer ("localhost")', ar: 'العنوان 127.0.0.1 يشير دائماً إلى جهازك نفسه أثناء التطوير' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'ip-subnet',
    vocabulary: [
      { termEn: 'IPv4 / IPv6', termAr: 'IPv4 و IPv6', meaningEn: '32-bit dotted-decimal vs 128-bit hexadecimal IP standards', meaningAr: 'إصدارا بروتوكول الإنترنت بطول 32 بت و 128 بت' },
      { termEn: 'Subnet Mask', termAr: 'قناع الشبكة', meaningEn: 'Bitmask separating the network ID from the device host ID', meaningAr: 'قيمة تحدد جزء الشبكة وجزء الجهاز داخل عنوان IP' },
      { termEn: 'DHCP', termAr: 'بروتوكول DHCP', meaningEn: 'Service that automatically assigns IP addresses to devices joining a network', meaningAr: 'خدمة تمنح الأجهزة عناوين IP تلقائياً عند الاتصال' },
    ],
    summary: {
      en: 'IP addresses uniquely label every networked node so routers can deliver packets across local LANs and the global Internet.',
      ar: 'تمنح عناوين IP كل جهاز هوية رقمية تتيح للموجهات إيصال البيانات بدقة عبر الشبكات.',
    },
    quiz: [
      {
        question: { en: 'How many bits are in a standard IPv4 address?', ar: 'كم بت يتكون منها عنوان IPv4 القياسي؟' },
        options: [
          { en: '32 bits (4 octets)', ar: '32 بت (4 خانات)' },
          { en: '8 bits', ar: '8 بت' },
          { en: '128 bits', ar: '128 بت' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Each of the four numbers (0–255) is 8 bits, totaling 32 bits.',
          ar: 'كل رقم من الخانات الأربع يمثل 8 بت، بمجموع 32 بت.',
        },
      },
      {
        question: { en: 'Which protocol automatically assigns an IP address when your phone joins Wi-Fi?', ar: 'أي بروتوكول يمنح هاتفك عنوان IP تلقائياً عند الاتصال بالواي فاي؟' },
        options: [
          { en: 'DHCP', ar: 'DHCP' },
          { en: 'HTML', ar: 'HTML' },
          { en: 'HDMI', ar: 'HDMI' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Dynamic Host Configuration Protocol (DHCP) automates IP configuration.',
          ar: 'يقوم بروتوكول DHCP بتوزيع عناوين IP تلقائياً.',
        },
      },
      {
        question: { en: 'Why was IPv6 created?', ar: 'لماذا تم ابتكار الإصدار IPv6؟' },
        options: [
          { en: 'IPv4’s 4.3 billion addresses ran out due to billions of connected devices', ar: 'لنفاد عناوين IPv4 البالغة 4.3 مليار مع الانتشار الهائل للأجهزة' },
          { en: 'IPv4 could not transmit text', ar: 'لأن IPv4 لا ينقل النصوص' },
          { en: 'To replace monitors', ar: 'لاستبدال الشاشات' },
        ],
        correctIndex: 0,
        explanation: {
          en: '128-bit IPv6 supports 340 undecillion addresses for IoT and global growth.',
          ar: 'يوفر IPv6 مساحة عناوين شبه لا نهائية لجميع الأجهزة المستقبلية.',
        },
      },
    ],
  },
  {
    id: 'dns',
    categoryId: 'networking',
    order: 4,
    title: { en: 'DNS (Domain Name System)', ar: 'نظام أسماء النطاقات DNS' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'DNS is the Internet’s distributed phonebook—translating memorable human domain names like ncacademy.edu into the numerical IP addresses computers need to connect.',
      ar: 'نظام أسماء النطاقات (DNS) هو دليل الهاتف الموزع للإنترنت، الذي يترجم أسماء المواقع السهلة للناس إلى عناوين IP الرقمية التي تفهمها الأجهزة.',
    },
    detailedExplanation: {
      en: 'Humans remember words easily, while routers only understand numbers like `172.67.182.10`. When you type a web address, your computer checks its local cache first, then queries a DNS Resolver. If uncached, the resolver asks Root servers, Top-Level Domain servers (`.com`, `.org`, `.edu`), and finally the domain’s Authoritative Nameserver to retrieve the exact IP.',
      ar: 'يحفظ البشر الأسماء بسهولة بينما تتعامل الموجهات مع الأرقام فقط. عند كتابة عنوان موقع في المتصفح، يبحث جهازك في ذاكرته المؤقتة، فإن لم يجد العنوان يستعلم من خادم DNS الذي يتواصل هرمياً مع الخوادم الجذرية وخوادم النطاق العلوي حتى يجلب عنوان IP الصحيح خلال أجزاء من الثانية.',
    },
    howItWorks: {
      en: 'Browser types domain → OS checks local DNS cache → Query sent to Recursive Resolver → Root Server (`.`) → TLD Server (`.com`) → Authoritative Nameserver returns A/AAAA IP record.',
      ar: 'كتابة الاسم ← فحص الذاكرة المؤقتة ← سؤال خادم DNS ← الخادم الجذري ← خادم النطاق العلوي ← الخادم الموثوق الذي يرجع عنوان IP.',
    },
    mainFunctions: [
      { en: 'Maps domain names to IPv4 (A record) and IPv6 (AAAA record)', ar: 'ربط النطاقات بعناوين IPv4 (سجل A) و IPv6 (سجل AAAA)' },
      { en: 'Routes email servers using MX records', ar: 'توجيه خوادم البريد الإلكتروني عبر سجلات MX' },
      { en: 'Caches lookups locally (respecting TTL) for instant page loads', ar: 'تخزين النتائج مؤقتاً لتسريع فتح المواقع المتكررة' },
    ],
    realWorldExamples: [
      { en: 'Fast public DNS resolvers such as `1.1.1.1` (Cloudflare) and `8.8.8.8` (Google)', ar: 'خوادم DNS العامة السريعة مثل 1.1.1.1 و 8.8.8.8' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'dns-flow',
    vocabulary: [
      { termEn: 'DNS Resolver', termAr: 'محلل DNS', meaningEn: 'Server that recursively tracks down the IP address for a domain', meaningAr: 'خادم يتتبع الهرم الشبكي للعثور على عنوان IP المطلوب' },
      { termEn: 'A Record', termAr: 'سجل A', meaningEn: 'DNS record mapping a domain name directly to an IPv4 address', meaningAr: 'سجل يربط اسم النطاق بعنوان IPv4 مباشر' },
    ],
    summary: {
      en: 'DNS converts human-readable domain names into IP addresses seamlessly in milliseconds.',
      ar: 'يحول نظام DNS أسماء النطاقات المفهومة للبشر إلى عناوين IP رقمية خلال أجزاء من الثانية.',
    },
    quiz: [
      {
        question: { en: 'What is the primary job of the Domain Name System (DNS)?', ar: 'ما الوظيفة الأساسية لنظام أسماء النطاقات (DNS)؟' },
        options: [
          { en: 'Translate domain names into IP addresses', ar: 'ترجمة أسماء النطاقات إلى عناوين IP رقمية' },
          { en: 'Cool down the CPU', ar: 'تبريد المعالج' },
          { en: 'Compress video files', ar: 'ضغط ملفات الفيديو' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'DNS maps memorable names to numerical IP endpoints.',
          ar: 'يربط DNS الأسماء النصية بعناوين IP.',
        },
      },
      {
        question: { en: 'Which DNS record type stores an IPv4 address for a domain?', ar: 'أي نوع من سجلات DNS يحفظ عنوان IPv4 للموقع؟' },
        options: [
          { en: 'A Record', ar: 'سجل A' },
          { en: 'USB Record', ar: 'سجل USB' },
          { en: 'GIF Record', ar: 'سجل GIF' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'A records store IPv4 addresses; AAAA records store IPv6 addresses.',
          ar: 'يحفظ سجل A عنوان IPv4 بينما يحفظ سجل AAAA عنوان IPv6.',
        },
      },
      {
        question: { en: 'Why do computers cache DNS responses for a set Time-To-Live (TTL)?', ar: 'لماذا تحتفظ الحواسيب بنتائج DNS مؤقتاً لفترة TTL؟' },
        options: [
          { en: 'To load repeat websites immediately without re-querying global servers', ar: 'لتسريع فتح المواقع المتكررة دون تكرار الاستعلام في كل مرة' },
          { en: 'To turn off Wi-Fi', ar: 'لإيقاف الواي فاي' },
          { en: 'To format the hard drive', ar: 'لتهيئة القرص الصلب' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'DNS caching drastically lowers page load latency and server traffic.',
          ar: 'يقلل التخزين المؤقت زمن الانتظار وضغط الشبكة.',
        },
      },
    ],
  },
  {
    id: 'http-and-https',
    categoryId: 'networking',
    order: 5,
    title: { en: 'HTTP and HTTPS', ar: 'بروتوكول HTTP و HTTPS' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'HTTP is the application protocol powering web data requests and responses; HTTPS wraps HTTP inside TLS encryption to guarantee privacy, integrity, and server identity.',
      ar: 'HTTP هو البروتوكول المسؤول عن تبادل صفحات وبيانات الويب، بينما يضيف HTTPS طبقة تشفير TLS لحماية الخصوصية ومنع التجسس والتلاعب.',
    },
    detailedExplanation: {
      en: 'Every time your browser opens a webpage, it sends an HTTP request (`GET /lessons`) and receives a status code (`200 OK`, `404 Not Found`) plus HTML/CSS/JS files. Plain HTTP sends everything in readable text—meaning attackers on public Wi-Fi could read passwords. HTTPS solves this using TLS public-key cryptography and digital certificates verified by browsers.',
      ar: 'في كل مرة تفتح فيها موقعاً، يرسل المتصفح طلب HTTP ويتلقى رمز حالة (مثل 200 OK) وملفات الصفحة. ينقل HTTP البيانات كنص مكشوف يمكن التنصت عليه في الشبكات العامة، لذلك يعتمد الويب الحديث على HTTPS الذي يشفر الاتصال بالكامل عبر بروتوكول TLS وشهادات الأمان الرقمية.',
    },
    howItWorks: {
      en: 'Browser initiates TCP/QUIC connection → TLS Handshake verifies the website’s SSL certificate and negotiates shared symmetric encryption keys → All HTTP headers, cookies, and payloads travel encrypted.',
      ar: 'يبدأ المتصفح الاتصال ← يتحقق من شهادة الأمان في مصافحة TLS ويتفق على مفاتيح التشفير ← تسير كافة البيانات والطلبات مشفرة بالكامل.',
    },
    mainFunctions: [
      { en: 'HTTP Methods: GET (fetch), POST (submit), PUT (update), DELETE (remove)', ar: 'أوامر HTTP: GET للطلب، POST للإرسال، PUT للتحديث، DELETE للحذف' },
      { en: 'HTTPS Encryption: Protects logins, banking, and personal data in transit', ar: 'تشفير HTTPS: حماية كلمات المرور والبيانات أثناء النقل' },
      { en: 'Authentication: Digital certificates prove you are talking to the real site', ar: 'المصادقة: إثبات هوية الموقع الحقيقي ومنع انتحال الصفة' },
    ],
    realWorldExamples: [
      { en: 'Padlock icon in your browser bar confirming TLS 1.3 encryption on port 443', ar: 'أيقونة القفل في المتصفح التي تؤكد تفعيل تشفير TLS 1.3 على المنفذ 443' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'TLS (SSL)', termAr: 'تشفير TLS', meaningEn: 'Transport Layer Security cryptographic protocol encrypting HTTPS traffic', meaningAr: 'بروتوكول تشفير يؤمّن حركة البيانات بين المتصفح والخادم' },
      { termEn: 'Status Code 200 / 404', termAr: 'رموز الحالة', meaningEn: 'Server response codes (200 = Success, 404 = Page Not Found)', meaningAr: 'أكواد رد الخادم: 200 تعني النجاح و 404 تعني غير موجود' },
    ],
    summary: {
      en: 'HTTP structures web communication, while HTTPS secures it with TLS encryption and verified certificates.',
      ar: 'ينظم HTTP تبادل صفحات الويب، ويؤمّنه HTTPS بالتشفير والتحقق من هوية الخادم.',
    },
    quiz: [
      {
        question: { en: 'What does the "S" in HTTPS stand for, and what technology provides it?', ar: 'علامَ يدل حرف "S" في HTTPS وما التقنية التي توفره؟' },
        options: [
          { en: 'Secure, provided by TLS encryption', ar: 'آمن (Secure)، عبر تشفير TLS' },
          { en: 'Slow, provided by dial-up', ar: 'بطيء، عبر الهاتف' },
          { en: 'Static, provided by CSS', ar: 'ثابت، عبر CSS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'HTTPS = HTTP Secure, encrypted end-to-end between browser and server using TLS.',
          ar: 'يعني HTTPS الاتصال الآمن المشفر باستخدام بروتوكول TLS.',
        },
      },
      {
        question: { en: 'What does HTTP status code 404 mean?', ar: 'ماذا يعني رمز الحالة 404 في HTTP؟' },
        options: [
          { en: 'Resource Not Found', ar: 'الصفحة أو المورد غير موجود' },
          { en: 'Success OK', ar: 'تم بنجاح' },
          { en: 'Power Supply Off', ar: 'إيقاف مزود الطاقة' },
        ],
        correctIndex: 0,
        explanation: {
          en: '404 indicates the requested URL path does not exist on the server.',
          ar: 'يشير الرمز 404 إلى عدم وجود المسار المطلوب على الخادم.',
        },
      },
      {
        question: { en: 'Which TCP port is the standard default for HTTPS traffic?', ar: 'ما رقم المنفذ الافتراضي لبروتوكول HTTPS؟' },
        options: [
          { en: 'Port 443', ar: 'المنفذ 443' },
          { en: 'Port 80', ar: 'المنفذ 80' },
          { en: 'Port 21', ar: 'المنفذ 21' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'HTTPS uses port 443 by default (whereas plain HTTP uses port 80).',
          ar: 'يعمل HTTPS افتراضياً على المنفذ 443 بينما يعمل HTTP غير المشفر على 80.',
        },
      },
    ],
  },
  {
    id: 'router-and-switch',
    categoryId: 'networking',
    order: 6,
    title: { en: 'Router and Switch', ar: 'الموجه والمبدل (Router & Switch)' },
    readMinutes: 5,
    level: 'intermediate',
    definition: {
      en: 'A Switch connects devices inside a single local network (LAN) using MAC addresses, whereas a Router connects different networks together and directs traffic across IP addresses.',
      ar: 'يربط المبدل (Switch) الأجهزة داخل نفس الشبكة المحلية باستخدام عناوين MAC، بينما يربط الموجه (Router) شبكات مختلفة معاً ويوجه الحزم عبر عناوين IP.',
    },
    detailedExplanation: {
      en: 'Imagine a Switch as an office mailroom delivering envelopes strictly between desks in the same building—it learns which physical MAC address sits on each Ethernet port so packets only go to the intended computer. A Router acts as the city postal hub reading IP addresses, consulting routing tables, running firewall rules, and choosing the fastest path toward the Internet.',
      ar: 'يعمل المبدل داخل المبنى الواحد؛ حيث يتعلم العنوان الفيزيائي (MAC) لكل جهاز متصل بمنافذه لإرسال البيانات للمستلم فقط دون إزعاج البقية. أما الموجه فيربط شبكتك المحلية بالإنترنت، ويقرأ عناوين IP ويستشير جداول التوجيه لاختيار أفضل مسار عبر الشبكات المختلفة.',
    },
    howItWorks: {
      en: 'Switch (Layer 2) inspects Ethernet frame destination MAC addresses; Router (Layer 3) strips Layer-2 headers, inspects destination IP, checks its routing table, and forwards to the next hop.',
      ar: 'يفحص المبدل (الطبقة الثانية) عنوان MAC؛ بينما يفحص الموجه (الطبقة الثالثة) عنوان IP ويحيله للخطوة التالية عبر جدول التوجيه.',
    },
    mainFunctions: [
      { en: 'Switch: Connects PCs, printers, and access points inside a LAN (Layer 2)', ar: 'المبدل: ربط الحواسيب والطابعات داخل الشبكة المحلية بسرعة عالية' },
      { en: 'Router: Connects LAN to ISP/WAN, runs NAT, DHCP, and firewalling (Layer 3)', ar: 'الموجه: ربط الشبكة المحلية بالإنترنت وتوجيه الحزم وجدار الحماية' },
    ],
    realWorldExamples: [
      { en: 'Your home "Wi-Fi router" actually combines a Router, a 4-port Ethernet Switch, and a Wireless Access Point in one box', ar: 'جهاز الواي فاي المنزلي يجمع غالباً بين موجه ومبدل من 4 منافذ ونقطة بث لاسلكية في صندوق واحد' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'network-topology',
    vocabulary: [
      { termEn: 'MAC Address', termAr: 'عنوان MAC', meaningEn: 'Permanent 48-bit physical hardware address burned into a NIC', meaningAr: 'عنوان فيزيائي فريد مدمج في بطاقة الشبكة' },
      { termEn: 'Routing Table', termAr: 'جدول التوجيه', meaningEn: 'Map stored inside a router listing best paths to destination networks', meaningAr: 'خريطة مسارات داخل الموجه تحدد الطريق الأفضل لكل شبكة' },
    ],
    summary: {
      en: 'Switches build fast local networks using MAC addresses; Routers interconnect networks globally using IP addresses.',
      ar: 'يبني المبدل الشبكة المحلية عبر عناوين MAC، بينما يربط الموجه الشبكات عبر عناوين IP.',
    },
    quiz: [
      {
        question: { en: 'Which address type does a standard Layer-2 Switch use to forward frames inside a LAN?', ar: 'ما نوع العنوان الذي يستخدمه المبدل (Switch) لتوجيه البيانات داخل الشبكة المحلية؟' },
        options: [
          { en: 'MAC Address', ar: 'عنوان MAC الفيزيائي' },
          { en: 'URL Domain', ar: 'اسم النطاق' },
          { en: 'Postal ZIP Code', ar: 'الرمز البريدي' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Switches maintain a MAC address table mapping ports to connected NICs.',
          ar: 'يحتفظ المبدل بجدول يربط كل منفذ بعنوان MAC للجهاز المتصل به.',
        },
      },
      {
        question: { en: 'Which device connects your home or school LAN to the external Internet?', ar: 'أي جهاز يربط الشبكة المحلية (LAN) بشبكة الإنترنت الخارجية؟' },
        options: [
          { en: 'Router', ar: 'الموجه (Router)' },
          { en: 'CPU Cooler', ar: 'مبرد المعالج' },
          { en: 'HDMI Cable', ar: 'كابل HDMI' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Routers sit at network boundaries to route IP packets between LAN and WAN.',
          ar: 'يقوم الموجه بتوجيه حزم IP بين الشبكة المحلية والشبكة الخارجية.',
        },
      },
      {
        question: { en: 'Why is a Switch much smarter and faster than an old network Hub?', ar: 'لماذا يُعد المبدل (Switch) أذكى وأسرع من الموزع القديم (Hub)؟' },
        options: [
          { en: 'A Switch sends data only to the target port instead of broadcasting to every port', ar: 'لأن المبدل يرسل البيانات للمنفذ المستهدف فقط بدلاً من إرسالها للجميع' },
          { en: 'A Switch uses no electricity', ar: 'لأنه لا يحتاج كهرباء' },
          { en: 'A Switch stores 10 TB of video', ar: 'لأنه يخزن 10 تيرابايت فيديو' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Targeted forwarding eliminates collisions and maximizes full-duplex bandwidth.',
          ar: 'التوجيه المباشر يمنع التصادمات ويمنح كل منفذ سرعته الكاملة.',
        },
      },
    ],
  },
  {
    id: 'network-topologies',
    categoryId: 'networking',
    order: 7,
    title: { en: 'Network Topologies', ar: 'طوبولوجيا الشبكات' },
    readMinutes: 5,
    level: 'intermediate',
    definition: {
      en: 'Network topology describes the physical and logical arrangement of nodes and communication links in a network—commonly Star, Bus, Ring, or Mesh.',
      ar: 'طوبولوجيا الشبكة هي الهندسة الفيزيائية والمنطقية التي توضح كيفية ارتباط الأجهزة والكابلات في الشبكة مثل النجمة والناقل والحلقة والشبكة المتداخلة.',
    },
    detailedExplanation: {
      en: 'Choosing a topology determines cost, cable layout, and fault tolerance. In a Star topology, every computer connects to a central switch—if one cable breaks, others keep working smoothly. Bus topology shares one backbone cable (now rare due to single-point failure). Ring passes tokens around a loop. Mesh links nodes directly to multiple neighbors, delivering extreme resilience for data centers and wireless mesh routers.',
      ar: 'يحدد تصميم الطوبولوجيا التكلفة وقدرة الشبكة على تحمل الأعطال. في الطوبولوجيا النجمية (Star) يتصل كل جهاز بمبدل مركزي، مما يعزل أي عطل فردي. أما الخطية (Bus) فتشترك في كابل واحد، والحلقة (Ring) تمرر البيانات دائرياً، بينما توفر الشبكة المتداخلة (Mesh) مسارات بديلة متعددة عالية الموثوقية.',
    },
    howItWorks: {
      en: 'Redundant links in Mesh topologies let routing protocols like OSPF or BGP automatically reroute packets around broken cables in milliseconds.',
      ar: 'تتيح المسارات المتعددة في طوبولوجيا Mesh إعادة توجيه البيانات تلقائياً عند انقطاع أي وصلة خلال أجزاء من الثانية.',
    },
    mainFunctions: [
      { en: 'Star: Standard modern LAN layout centered on a switch', ar: 'النجمية (Star): التصميم القياسي للشبكات الحديثة عبر مبدل مركزي' },
      { en: 'Mesh: Full or partial multi-path links for zero single-point failure', ar: 'المتداخلة (Mesh): مسارات بديلة تمنع توقف الشبكة بالكامل' },
      { en: 'Bus & Ring: Historical topologies helpful for understanding resilience', ar: 'الخطية والحلقة: تصاميم كلاسيكية مهمة لفهم تطور الشبكات' },
    ],
    realWorldExamples: [
      { en: 'Office Ethernet LANs use Star topology; Internet backbones use Mesh topology', ar: 'شبكات المكاتب تستخدم النجمية، بينما يستخدم عمود الإنترنت المتداخلة Mesh' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'network-topology',
    vocabulary: [
      { termEn: 'Star Topology', termAr: 'الطوبولوجيا النجمية', meaningEn: 'All nodes connect individually to a central switch or hub', meaningAr: 'اتصال جميع الأجهزة بمبدل مركزي واحد' },
      { termEn: 'Mesh Topology', termAr: 'الطوبولوجيا المتداخلة', meaningEn: 'Nodes interconnect with multiple redundant paths', meaningAr: 'ترابط الأجهزة بمسارات متعددة احتياطية' },
      { termEn: 'Single Point of Failure', termAr: 'نقطة فشل وحيدة', meaningEn: 'One component whose breakdown halts the whole system', meaningAr: 'عنصر واحد يؤدي تعطله إلى توقف الشبكة بأكملها' },
    ],
    summary: {
      en: 'Star topology dominates modern offices for easy isolation, while Mesh topology secures mission-critical backbones.',
      ar: 'تسود الطوبولوجيا النجمية في الشبكات المحلية لسهولة صيانتها، بينما تحمي المتداخلة الشبكات الحيوية.',
    },
    quiz: [
      {
        question: { en: 'In which topology does a single broken workstation cable NOT affect any other device?', ar: 'في أي طوبولوجيا لا يؤثر انقطاع كابل جهاز واحد على بقية الأجهزة؟' },
        options: [
          { en: 'Star Topology', ar: 'الطوبولوجيا النجمية (Star)' },
          { en: 'Broken Bus Topology', ar: 'الخطية المقطوعة' },
          { en: 'Single-cable Daisy Chain', ar: 'السلسلة المفردة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Each node has an independent link to the central switch in a Star layout.',
          ar: 'يمتلك كل جهاز في الشبكة النجمية وصلته المستقلة بالمبدل المركزي.',
        },
      },
      {
        question: { en: 'Which topology offers the highest fault tolerance through redundant paths?', ar: 'أي طوبولوجيا توفر أعلى موثوقية عبر تعدد المسارات البديلة؟' },
        options: [
          { en: 'Mesh Topology', ar: 'الطوبولوجيا المتداخلة (Mesh)' },
          { en: 'Bus Topology', ar: 'الطوبولوجيا الخطية (Bus)' },
          { en: 'Linear Chain', ar: 'السلسلة الخطية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Mesh topologies provide alternate routes if any link fails.',
          ar: 'توفر Mesh طرقاً بديلة تلقائية عند تعطل أي مسار.',
        },
      },
      {
        question: { en: 'What is the main drawback of a classic Bus topology?', ar: 'ما العيب الرئيسي في الطوبولوجيا الخطية (Bus)؟' },
        options: [
          { en: 'If the main backbone cable breaks, the entire network goes down', ar: 'إذا انقطع الكابل الرئيسي تتوقف الشبكة بالكامل' },
          { en: 'It uses fiber switches everywhere', ar: 'تستخدم مبدلات ضوئية مكلفة في كل نقطة' },
          { en: 'It has infinite redundancy', ar: 'تمتلك مسارات احتياطية لا نهائية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The shared backbone cable is a single point of failure.',
          ar: 'الكابل المشترك الواحد يمثل نقطة فشل وحيدة.',
        },
      },
    ],
  },
  {
    id: 'internet-fundamentals',
    categoryId: 'networking',
    order: 8,
    title: { en: 'Internet Fundamentals', ar: 'أساسيات الإنترنت' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'The Internet is a global decentralized "network of networks" bound together by the TCP/IP protocol suite, submarine fiber cables, IXPs, and open web standards.',
      ar: 'الإنترنت هو شبكة عالمية لا مركزية من الشبكات المترابطة التي توحدها حزمة بروتوكولات TCP/IP والكابلات البحرية ونقاط التبادل ومعايير الويب المفتوحة.',
    },
    detailedExplanation: {
      en: 'No single company or government owns the Internet. Instead, millions of private, academic, and ISP networks peer together using Border Gateway Protocol (BGP). Underneath the World Wide Web (websites using HTTP/HTML), the TCP/IP stack breaks content into reliable packets, routes them through fiber-optic undersea trunks crossing oceans, and reassembles them accurately on your screen.',
      ar: 'لا تملك أي جهة واحدة شبكة الإنترنت؛ بل تتعاون ملايين الشبكات ومزودي الخدمة عبر بروتوكول BGP. وتحت طبقة الويب (المواقع والروابط)، تعمل حزمة TCP/IP على تقسيم البيانات وإرسالها عبر كابلات الألياف الضوئية العابرة للمحيطات ثم إعادة تجميعها بدقة على شاشتك.',
    },
    howItWorks: {
      en: 'URL entered → DNS resolves IP → TCP 3-way handshake establishes reliable delivery → TLS encrypts session → HTTP fetches HTML/CSS/JS over ISP & submarine fiber backbones.',
      ar: 'إدخال الرابط ← يترجم DNS الاسم إلى IP ← يفتح TCP اتصالاً موثوقاً ← يشفر TLS الجلسة ← يجلب HTTP الصفحة عبر الألياف الضوئية.',
    },
    mainFunctions: [
      { en: 'TCP/IP Suite: Reliable packet delivery and global addressing', ar: 'حزمة TCP/IP: ضمان سلامة وصول الحزم والعنونة العالمية' },
      { en: 'Internet vs Web: Internet is the physical/network infrastructure; Web is websites running on top', ar: 'الإنترنت مقابل الويب: الإنترنت هو البنية التحتية، والويب خدمة مواقع تعمل فوقه' },
      { en: 'Subsea Fiber & IXPs: Physical glass trunks carrying 99% of intercontinental traffic', ar: 'الكابلات البحرية: تنقل 99% من حركة البيانات بين القارات بسرعة الضوء' },
    ],
    realWorldExamples: [
      { en: 'Opening a video lesson hosted on another continent in under 150 milliseconds', ar: 'فتح درس تعليمي مستضاف في قارة أخرى خلال أقل من 150 مللي ثانية' },
    ],
    illustrationKey: 'network',
    interactiveDiagram: 'dns-flow',
    vocabulary: [
      { termEn: 'TCP/IP', termAr: 'بروتوكول TCP/IP', meaningEn: 'Core protocol suite governing reliable data transport and IP routing', meaningAr: 'الحزمة الأساسية التي تنظم نقل البيانات والعنونة على الإنترنت' },
      { termEn: 'ISP', termAr: 'مزود خدمة الإنترنت', meaningEn: 'Internet Service Provider connecting homes and businesses to the backbone', meaningAr: 'الشركة التي توصل المنازل والمؤسسات بشبكة الإنترنت العالمية' },
    ],
    summary: {
      en: 'The Internet unites global networks via TCP/IP and undersea fiber, supporting services like the Web, email, and cloud computing.',
      ar: 'يوحد الإنترنت شبكات العالم عبر TCP/IP والألياف الضوئية ليحمل خدمات الويب والبريد والسحابة.',
    },
    quiz: [
      {
        question: { en: 'What is the difference between the Internet and the World Wide Web?', ar: 'ما الفرق بين شبكة الإنترنت (Internet) والشبكة العنكبوتية (Web)؟' },
        options: [
          { en: 'The Internet is the global network infrastructure; the Web is the collection of websites running on it', ar: 'الإنترنت هو البنية التحتية للشبكة العالمية، والويب هو المواقع التي تعمل فوقها' },
          { en: 'They are completely unrelated inventions', ar: 'لا علاقة بينهما إطلاقاً' },
          { en: 'The Web is made of submarine cables', ar: 'الويب مصنوع من الكابلات البحرية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Email, online gaming, and the Web all run as services on top of the Internet infrastructure.',
          ar: 'يعمل الويب والبريد والألعاب كخدمات فوق البنية التحتية للإنترنت.',
        },
      },
      {
        question: { en: 'How does nearly 99% of intercontinental Internet traffic cross oceans?', ar: 'كيف تعبر قرابة 99% من بيانات الإنترنت بين القارات والمحيطات؟' },
        options: [
          { en: 'Undersea submarine fiber optic cables', ar: 'كابلات الألياف الضوئية البحرية' },
          { en: 'Bluetooth towers', ar: 'أبراج البلوتوث' },
          { en: 'Copper telephone lines only', ar: 'أسلاك الهاتف النحاسية فقط' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Submarine fiber optic trunks carry massive bandwidth between continents.',
          ar: 'تنقل الكابلات البحرية الضوئية السعات الهائلة للبيانات بين القارات.',
        },
      },
      {
        question: { en: 'Which protocol pair forms the foundational transport and addressing backbone of the Internet?', ar: 'أي ثنائي بروتوكولات يشكّل العمود الفقري لنقل وعنونة بيانات الإنترنت؟' },
        options: [
          { en: 'TCP/IP', ar: 'TCP/IP' },
          { en: 'PNG/JPEG', ar: 'PNG/JPEG' },
          { en: 'USB/SATA', ar: 'USB/SATA' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'TCP ensures reliable, ordered packet delivery while IP routes packets between addresses.',
          ar: 'يضمن TCP سلامة وترتيب الحزم بينما يوجهها IP عبر العناوين.',
        },
      },
    ],
  },
];
