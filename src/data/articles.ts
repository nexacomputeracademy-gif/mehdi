import { ArticleData } from '../types/academy';

export const ARTICLES: ArticleData[] = [
  {
    id: 'modern-silicon-nodes',
    category: { en: 'Processor Architecture', ar: 'معمارية المعالجات' },
    date: { en: 'November 2026', ar: 'نوفمبر 2026' },
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    title: {
      en: 'Inside 3nm Silicon: How Billions of Transistors Fit on Your Fingernail',
      ar: 'داخل شرائح 3 نانومتر: كيف تجتمع مليارات الترانزستورات في شريحة صغيرة',
    },
    excerpt: {
      en: 'Explore extreme ultraviolet lithography, FinFET vs Gate-All-Around transistors, and why chiplet packaging is redefining modern CPU design.',
      ar: 'تعرّف على تقنية الطباعة الضوئية فوق البنفسجية، وانتقال المعالجات إلى تصميم الشرائح المتعددة لزيادة الكفاءة وتقليل الحرارة.',
    },
    body: [
      {
        en: 'Modern desktop processors pack over 50 billion microscopic switches onto a piece of purified silicon smaller than a postage stamp. Each transistor switches billions of times per second to represent binary 1s and 0s.',
        ar: 'تضم المعالجات الحديثة أكثر من 50 مليار مفتاح إلكتروني دقيق (ترانزستور) على قطعة سيليكون نقية أصغر من طابع البريد، وتعمل هذه المفاتيح بسرعة هائلة لتمثيل الأصفار والآحاد.',
      },
      {
        en: 'As planar transistors shrank below 20 nanometers, electrons began leaking through thin gates. Engineers solved this with 3D FinFET fins and now Gate-All-Around (GAA) nanosheets that wrap the control gate completely around the channel.',
        ar: 'مع تقلص حجم الترانزستورات إلى ما دون 20 نانومتر، ظهر تحدي تسرب الإلكترونات. تغلب المهندسون على ذلك بابتكار هياكل ثلاثية الأبعاد تحيط بقناة التيار للتحكم الكامل وتقليل استهلاك الطاقة.',
      },
      {
        en: 'Rather than fabricating one giant monolithic die, modern architectures split CPU cores, cache, and I/O controllers into smaller specialized chiplets connected over an ultra-dense silicon interposer.',
        ar: 'بدلاً من تصنيع شريحة واحدة ضخمة، تعتمد المعماريات الحديثة على تقسيم المعالج إلى شرائح صغيرة متخصصة (Chiplets) متصلة ببعضها بدقة عالية، مما يرفع الإنتاجية ويخفض التكلفة.',
      },
    ],
    image: '/src/assets/images/article_quantum_silicon_1795787317877.jpg',
    imageAlt: {
      en: 'Silicon processor die and gold motherboard pins',
      ar: 'رقاقة معالج سيليكون دقيقة مع دبابيس ذهبية',
    },
    relatedCategoryId: 'hardware',
  },
  {
    id: 'thermal-engineering-gpus',
    category: { en: 'Thermal Engineering', ar: 'هندسة التبريد' },
    date: { en: 'October 2026', ar: 'أكتوبر 2026' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    title: {
      en: 'The Physics of PC Cooling: Vapor Chambers, Heatpipes, and Airflow Pressure',
      ar: 'فيزياء تبريد الحاسوب: الأنابيب الحرارية وتوازن ضغط الهواء',
    },
    excerpt: {
      en: 'Why copper heatpipes use phase-change liquid evaporation and how positive case pressure keeps dust out while dropping GPU temperatures.',
      ar: 'كيف تعمل الأنابيب النحاسية عبر تبخر السوائل داخلها، ولماذا يساعد الضغط الإيجابي للهواء على تبريد بطاقة الرسوميات ومنع تراكم الغبار.',
    },
    body: [
      {
        en: 'Every watt of electricity entering a CPU or GPU eventually turns into thermal energy. Removing 300+ watts from a GPU die smaller than a coin requires rapid conduction and high surface area convection.',
        ar: 'كل واط كهربائي يستهلكه المعالج أو كرت الشاشة يتحول في النهاية إلى حرارة. التخلص من أكثر من 300 واط من مساحة صغيرة يتطلب نقلاً حرارياً سريعاً وتبديداً عبر مساحة سطح واسعة.',
      },
      {
        en: 'Inside sealed copper heatpipes, a tiny amount of working fluid vaporizes at the hot GPU cold plate, travels instantaneously as vapor to the cool aluminum fin stack, condenses back to liquid, and returns via sintered copper wicks.',
        ar: 'داخل الأنابيب النحاسية المغلقة، يتبخر سائل خاص عند ملامسة المعالج الساخن وينتقل كبخار إلى زعانف الألمنيوم الباردة ليتكثف ويعود مجدداً، مما ينقل الحرارة بسرعة تفوق النحاس الصلب بأضعاف.',
      },
      {
        en: 'Case airflow matters just as much: pairing filtered front intake fans with balanced rear exhaust maintains gentle positive pressure so air flows cleanly over every VRM and M.2 heatsink.',
        ar: 'توجيه الهواء داخل الصندوق لا يقل أهمية؛ حيث يضمن وجود مراوح سحب أمامية أكثر قليلاً من الطرد الخلفي ضغطاً إيجابياً يمنع دخول الغبار ويحافظ على برودة جميع القطع.',
      },
    ],
    image: '/src/assets/images/article_gpu_cooling_1795787318770.jpg',
    imageAlt: {
      en: 'Brushed aluminum GPU heatsink fins and copper heatpipes',
      ar: 'زعانف تبريد ألمنيوم وأنابيب نحاسية لبطاقة الرسوميات',
    },
    relatedCategoryId: 'hardware',
  },
  {
    id: 'optical-fiber-backbones',
    category: { en: 'Networking Infrastructure', ar: 'البنية التحتية للشبكات' },
    date: { en: 'September 2026', ar: 'سبتمبر 2026' },
    readTime: { en: '6 min read', ar: '6 دقائق قراءة' },
    title: {
      en: 'Pulses of Light: How Fiber Optic Switches Power the Modern Internet',
      ar: 'نبضات الضوء: كيف تقود مبدلات الألياف الضوئية شبكة الإنترنت الحديثة',
    },
    excerpt: {
      en: 'From total internal reflection in glass strands to multi-terabit data center switches, discover how packets cross continents in milliseconds.',
      ar: 'من الانعكاس الكلي للضوء داخل الخيوط الزجاجية إلى مبدلات مراكز البيانات فائقة السرعة، تعرّف على رحلة البيانات عبر القارات.',
    },
    body: [
      {
        en: 'While copper Ethernet cables carry electrical voltage over short distances, long-haul internet backbones and data centers rely on hair-thin strands of ultra-pure silica glass carrying laser pulses.',
        ar: 'بينما تنقل كابلات النحاس إشارات كهربائية لمسافات محدودة، تعتمد الشبكات الرئيسية ومراكز البيانات على خيوط زجاجية فائقة النقاء تنقل نبضات ضوئية بسرعات هائلة.',
      },
      {
        en: 'Total internal reflection traps laser light inside the glass core even as cables curve around server racks. Using Wavelength-Division Multiplexing, dozens of distinct laser colors travel down a single strand simultaneously.',
        ar: 'بفضل ظاهرة الانعكاس الداخلي الكلي، يرتد الضوء داخل قلب الليف الزجاجي دون فقدان، ويمكن إرسال عشرات الألوان الضوئية المختلفة في الخيط الواحد لمضاعفة السعة.',
      },
      {
        en: 'Enterprise Layer-2 and Layer-3 switches read frame headers in dedicated ASIC silicon chips, forwarding millions of packets per second with sub-microsecond latency.',
        ar: 'تقرأ المبدلات الشبكية المتقدمة عناوين الحزم عبر دوائر إلكترونية مخصصة لتوجيه ملايين حزم البيانات في الثانية بزمن استجابة يقاس بالميكروثانية.',
      },
    ],
    image: '/src/assets/images/article_fiber_network_1795787318785.jpg',
    imageAlt: {
      en: 'Network switch with glowing blue fiber optic patch cables',
      ar: 'مبدل شبكة حديث مع كابلات ألياف ضوئية زرقاء',
    },
    relatedCategoryId: 'networking',
  },
];
