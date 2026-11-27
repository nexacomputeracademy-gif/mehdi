import { LessonData } from '../types/academy';

export const LESSONS_PROGRAMMING: LessonData[] = [
  {
    id: 'introduction-to-programming',
    categoryId: 'programming',
    order: 1,
    title: { en: 'Introduction to Programming', ar: 'مقدمة في البرمجة' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'Programming is the craft of writing precise, step-by-step instructions in a formal language that a computer can translate into machine code and execute.',
      ar: 'البرمجة هي كتابة تعليمات دقيقة ومتسلسلة بلغة برمجة منظمة يستطيع الحاسوب ترجمتها إلى لغة الآلة وتنفيذها.',
    },
    detailedExplanation: {
      en: 'Computers are fast but completely literal: they only understand binary machine code (`0`s and `1`s). Programming languages like Python, JavaScript, and C++ allow humans to write readable logic (`if score >= 90: print("A")`), which a Compiler or Interpreter translates into CPU instructions. Nearly every modern tool—from web apps to spacecraft—runs on code.',
      ar: 'الحواسيب فائقة السرعة لكنها حرفية تماماً ولا تفهم إلا لغة الآلة الثنائية. تتيح لغات البرمجة مثل Python و JavaScript و C++ للبشر كتابة منطق مفهوم، يتولى المترجم (Compiler) أو المفسّر (Interpreter) تحويله إلى أوامر ينفذها المعالج. كل تطبيق وموقع ونظام ذكي اليوم يقوم على البرمجة.',
    },
    howItWorks: {
      en: 'Write source code → Syntax check & translation (Compiler builds native executable ahead of time; Interpreter executes line-by-line) → CPU executes instructions using variables in RAM.',
      ar: 'كتابة الكود المصدري ← الفحص والترجمة (المترجم يحوله لملف تنفيذي أو المفسّر يشغله سطراً بسطر) ← ينفذ المعالج الأوامر باستخدام الذاكرة.',
    },
    mainFunctions: [
      { en: 'Variables: Named containers holding data in RAM', ar: 'المتغيرات: حاويات مسماة لحفظ القيم في الذاكرة' },
      { en: 'Conditionals & Loops: Decisions (`if/else`) and repetition (`for/while`)', ar: 'الشروط والحلقات: اتخاذ القرارات وتكرار المهام' },
      { en: 'Functions: Reusable blocks of logic solving sub-problems', ar: 'الدوال: كتل برمجية قابلة لإعادة الاستخدام' },
    ],
    realWorldExamples: [
      { en: 'Automating data analysis, building interactive websites, and programming microcontrollers', ar: 'أتمتة تحليل البيانات، بناء مواقع الويب التفاعلية، وبرمجة الروبوتات' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'logic-gates',
    vocabulary: [
      { termEn: 'Compiler', termAr: 'المترجم (Compiler)', meaningEn: 'Translates an entire program into fast machine code before execution', meaningAr: 'برنامج يترجم الكود بالكامل إلى لغة الآلة قبل التشغيل' },
      { termEn: 'Interpreter', termAr: 'المفسّر (Interpreter)', meaningEn: 'Reads and executes source code dynamically line by line', meaningAr: 'برنامج يقرأ الكود وينفذه سطراً بسطر مباشرة' },
      { termEn: 'Syntax', termAr: 'القواعد النحوية للكود', meaningEn: 'Exact grammar rules required by a programming language', meaningAr: 'القواعد الدقيقة لكتابة الأوامر في لغة برمجة معينة' },
    ],
    summary: {
      en: 'Programming translates human problem-solving into unambiguous instructions executed by computer hardware.',
      ar: 'تحول البرمجة حلول المشكلات البشرية إلى تعليمات دقيقة ينفذها عتاد الحاسوب.',
    },
    quiz: [
      {
        question: { en: 'What does a Compiler or Interpreter do to high-level code like Python or C++?', ar: 'ماذا يفعل المترجم (Compiler) أو المفسّر بالكود عالي المستوى مثل بايثون أو C++؟' },
        options: [
          { en: 'Translates it into binary machine instructions the CPU understands', ar: 'يترجمه إلى تعليمات ثنائية يفهمها المعالج' },
          { en: 'Increases monitor resolution', ar: 'يزيد دقة الشاشة' },
          { en: 'Cools down the GPU fans', ar: 'يبرد مراوح كرت الشاشة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'CPUs execute binary machine code produced by compilers or interpreters.',
          ar: 'ينفذ المعالج لغة الآلة الناتجة عن الترجمة أو التفسير.',
        },
      },
      {
        question: { en: 'What is a "variable" in programming?', ar: 'ما المقصود بالمتغير (Variable) في البرمجة؟' },
        options: [
          { en: 'A named storage location in memory holding a value', ar: 'موقع مسمى في الذاكرة يحفظ قيمة قابلة للاستخدام والتغيير' },
          { en: 'A physical USB cable', ar: 'كابل USB مادي' },
          { en: 'A syntax error', ar: 'خطأ برمجي' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Variables label data stored in RAM so code can read and update it.',
          ar: 'تسمح المتغيرات بحفظ البيانات وتعديلها بسهولة داخل الكود.',
        },
      },
      {
        question: { en: 'What happens if you violate a language’s spelling or punctuation rules?', ar: 'ماذا يحدث عند مخالفة قواعد الكتابة في لغة البرمجة؟' },
        options: [
          { en: 'A Syntax Error prevents the code from running properly', ar: 'يظهر خطأ نحوي (Syntax Error) يمنع تشغيل البرنامج' },
          { en: 'The computer guesses your mind', ar: 'يخمن الحاسوب ما تقصده' },
          { en: 'The PSU shuts off forever', ar: 'يتلف مزود الطاقة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Programming languages demand exact syntax so instructions remain unambiguous.',
          ar: 'تتطلب لغات البرمجة كتابة دقيقة خالية من الغموض.',
        },
      },
    ],
  },
  {
    id: 'algorithms',
    categoryId: 'programming',
    order: 2,
    title: { en: 'Algorithms', ar: 'الخوارزميات' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'An algorithm is a finite, well-defined sequence of step-by-step rules designed to solve a specific problem or perform a computation.',
      ar: 'الخوارزمية هي سلسلة محددة وواضحة من الخطوات المنطقية المتسلسلة لحل مشكلة معينة أو إجراء عملية حسابية.',
    },
    detailedExplanation: {
      en: 'Named after the 9th-century scholar Muhammad ibn Musa al-Khwarizmi, algorithms exist independently of any single programming language. Finding a name in a sorted phonebook by jumping to the middle repeatedly (Binary Search) takes at most 20 steps out of 1,000,000 entries, whereas checking one by one (Linear Search) could take 1,000,000 steps! Efficiency is measured using Big-O notation.',
      ar: 'سُميت الخوارزميات نسبةً للعالم محمد بن موسى الخوارزمي، وهي مستقلة عن لغة البرمجة نفسها. فمثلاً البحث عن اسم في قائمة مرتبة من مليون اسم بالقفز للمنتصف في كل مرة (البحث الثنائي) يستغرق 20 خطوة كحد أقصى، بينما قد يستغرق البحث التسلسلي مليون خطوة! وتُقاس كفاءة الخوارزميات بتعقيد Big-O.',
    },
    howItWorks: {
      en: 'Every valid algorithm defines: (1) Clear Inputs, (2) Unambiguous Deterministic Steps, (3) Finite Termination (must stop), and (4) Correct Output.',
      ar: 'تتطلب الخوارزمية السليمة: (1) مدخلات واضحة، (2) خطوات دقيقة غير غامضة، (3) نهاية محددة، (4) مخرجات صحيحة.',
    },
    mainFunctions: [
      { en: 'Searching: Linear Search vs Binary Search ($O(\\log n)$)', ar: 'البحث: البحث الخطي مقابل البحث الثنائي السريع' },
      { en: 'Sorting: Merge Sort, Quick Sort, Bubble Sort', ar: 'الفرز والترتيب: خوارزميات الترتيب السريع والدمج' },
      { en: 'Pathfinding: Dijkstra & A* powering GPS navigation maps', ar: 'إيجاد أقصر مسار: خوارزميات الملاحة والخرائط' },
    ],
    realWorldExamples: [
      { en: 'GPS route planning calculating the fastest road path in milliseconds', ar: 'خوارزميات خرائط GPS التي تحسب أسرع طريق خلال أجزاء من الثانية' },
    ],
    illustrationKey: 'cycle',
    interactiveDiagram: 'ipo-cycle',
    vocabulary: [
      { termEn: 'Binary Search', termAr: 'البحث الثنائي', meaningEn: 'Fast divide-and-conquer search halving sorted data each step', meaningAr: 'خوارزمية بحث سريعة تقسم البيانات المرتبة إلى نصفين في كل خطوة' },
      { termEn: 'Big-O Notation', termAr: 'تدوين Big-O', meaningEn: 'Measure of how an algorithm’s runtime scales as input grows', meaningAr: 'مقياس لتقدير سرعة الخوارزمية مع زيادة حجم البيانات' },
    ],
    summary: {
      en: 'Algorithms are language-independent problem-solving blueprints whose design determines speed and scalability.',
      ar: 'الخوارزميات هي خطط حل المشكلات التي يحدد حسن تصميمها سرعة البرامج وقابليتها للتوسع.',
    },
    quiz: [
      {
        question: { en: 'Who is the historical mathematician whose name gave rise to the word "Algorithm"?', ar: 'من العالم الذي اشتُق من اسمه مصطلح "الخوارزمية" (Algorithm)؟' },
        options: [
          { en: 'Muhammad ibn Musa al-Khwarizmi', ar: 'محمد بن موسى الخوارزمي' },
          { en: 'Galileo Galilei', ar: 'غاليليو غاليلي' },
          { en: 'Nikola Tesla', ar: 'نيكولا تسلا' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Al-Khwarizmi’s 9th-century treatise on systematic calculation inspired the term "algorithm".',
          ar: 'اشتق المصطلح الغربي Algorithm من اللقب اللاتيني للعالم الخوارزمي.',
        },
      },
      {
        question: { en: 'What prerequisite is required to use Binary Search on a list?', ar: 'ما الشرط الأساسي لتطبيق خوارزمية البحث الثنائي على قائمة؟' },
        options: [
          { en: 'The list must already be sorted', ar: 'أن تكون القائمة مرتبة مسبقاً' },
          { en: 'The list must contain only 2 items', ar: 'أن تحتوي عنصرين فقط' },
          { en: 'The list must be encrypted', ar: 'أن تكون مشفرة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Binary search decides which half to discard by comparing against a sorted midpoint.',
          ar: 'يعتمد البحث الثنائي على ترتيب القائمة لاستبعاد نصف العناصر في كل خطوة.',
        },
      },
      {
        question: { en: 'Which property must every valid algorithm satisfy?', ar: 'أي صفة يجب أن تتوافر في كل خوارزمية صحيحة؟' },
        options: [
          { en: 'It must terminate in a finite number of clear steps', ar: 'أن تنتهي خلال عدد محدود من الخطوات الواضحة' },
          { en: 'It must loop infinitely forever', ar: 'أن تستمر في التكرار إلى ما لا نهاية' },
          { en: 'It must only work in Python', ar: 'أن تعمل في بايثون فقط' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Algorithms must be finite, unambiguous, and produce correct output.',
          ar: 'الخوارزمية السليمة تنتهي بنتيجة واضحة ضمن خطوات محدودة.',
        },
      },
    ],
  },
  {
    id: 'flowcharts',
    categoryId: 'programming',
    order: 3,
    title: { en: 'Flowcharts', ar: 'مخططات التدفق (Flowcharts)' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'A flowchart is a standardized visual diagram using connected geometric shapes to map the step-by-step control flow, decisions, and loops of an algorithm before writing code.',
      ar: 'مخطط التدفق هو رسم بياني قياسي يستخدم أشكالاً هندسية متصلة بالأسهم لتوضيح مسار الخوارزمية والقرارات والتكرار قبل كتابة الكود.',
    },
    detailedExplanation: {
      en: 'Engineers sketch flowcharts to spot logic bugs early. Standard ISO symbols make every diagram universally readable: an Oval/Pill marks Start and End; a Parallelogram represents Input or Output; a Rectangle stands for a Process or calculation; and a Diamond represents a Yes/No Decision branch.',
      ar: 'يرسم المبرمجون مخططات التدفق لاكتشاف الأخطاء المنطقية مبكراً. وتُستخدم رموز قياسية عالمية: الشكل البيضاوي للبداية والنهاية، ومتوازي الأضلاع للإدخال والإخراج، والمستطيل للمعالجة والعمليات، والمعين لاتخاذ القرار (نعم/لا).',
    },
    howItWorks: {
      en: 'Trace arrows starting at the Start oval → read inputs → compute values inside process boxes → branch True or False out of Decision diamonds → reach End.',
      ar: 'تتبع الأسهم من رمز البداية ← قراءة المدخلات ← تنفيذ المعالجة ← التفرع عند رمز القرار (صح/خطأ) ← الوصول للنهاية.',
    },
    mainFunctions: [
      { en: 'Oval (Terminal): Start and Stop endpoints', ar: 'الشكل البيضاوي: نقطة البداية والنهاية' },
      { en: 'Parallelogram: User Input / Display Output', ar: 'متوازي الأضلاع: الإدخال والإخراج' },
      { en: 'Rectangle: Processing calculation or variable update', ar: 'المستطيل: المعالجة والعمليات الحسابية' },
      { en: 'Diamond: Conditional decision branching (True / False)', ar: 'المعين: نقطة اتخاذ القرار والتفرع الشرطي' },
    ],
    realWorldExamples: [
      { en: 'Mapping an ATM PIN verification loop (up to 3 attempts before locking card)', ar: 'تخطيط آلية التحقق من الرقم السري لصراف آلي بحد أقصى 3 محاولات' },
    ],
    illustrationKey: 'cycle',
    interactiveDiagram: 'ipo-cycle',
    vocabulary: [
      { termEn: 'Decision Diamond', termAr: 'معين القرار', meaningEn: 'Diamond shape branching into True/False paths', meaningAr: 'شكل هندسي يتفرع إلى مسارين حسب تحقق الشرط' },
      { termEn: 'Flowline', termAr: 'خط التدفق', meaningEn: 'Directional arrow showing execution order', meaningAr: 'سهم يحدد اتجاه سير الخطوات في المخطط' },
    ],
    summary: {
      en: 'Flowcharts turn abstract algorithms into clear visual roadmaps using standardized shapes.',
      ar: 'تحول مخططات التدفق الخوارزميات المجردة إلى خرائط بصرية واضحة باستخدام رموز قياسية.',
    },
    quiz: [
      {
        question: { en: 'Which flowchart shape represents a Yes/No condition or decision?', ar: 'أي شكل في مخطط التدفق يمثل قراراً أو شرطاً (نعم / لا)؟' },
        options: [
          { en: 'Diamond', ar: 'المعين (Diamond)' },
          { en: 'Oval', ar: 'البيضاوي' },
          { en: 'Rectangle', ar: 'المستطيل' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'A diamond evaluates a condition and branches into True and False arrows.',
          ar: 'يُستخدم المعين لاختبار الشروط والتفرع إلى مسار صح أو خطأ.',
        },
      },
      {
        question: { en: 'What does a Rectangle signify in a standard flowchart?', ar: 'ماذا يمثل المستطيل في مخطط التدفق القياسي؟' },
        options: [
          { en: 'A processing step or calculation', ar: 'خطوة معالجة أو عملية حسابية' },
          { en: 'Start / End', ar: 'البداية / النهاية' },
          { en: 'Network cable', ar: 'كابل شبكة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Rectangles denote actions, assignments, and computations.',
          ar: 'يمثل المستطيل العمليات الحسابية وتنفيذ الأوامر.',
        },
      },
      {
        question: { en: 'Which shape marks the Start and End of a flowchart?', ar: 'أي شكل يحدد نقطتي البداية والنهاية في مخطط التدفق؟' },
        options: [
          { en: 'Oval (Rounded Terminator)', ar: 'الشكل البيضاوي' },
          { en: 'Triangle', ar: 'المثلث' },
          { en: 'Hexagon', ar: 'السداسي' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Terminator ovals always anchor the beginning and end.',
          ar: 'يُستخدم الشكل البيضاوي دائماً لبداية ونهاية المخطط.',
        },
      },
    ],
  },
  {
    id: 'html',
    categoryId: 'programming',
    order: 4,
    title: { en: 'HTML (HyperText Markup Language)', ar: 'لغة HTML' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'HTML is the standard markup language used to structure the content and semantic hierarchy of every webpage—defining headings, paragraphs, links, images, forms, and sections.',
      ar: 'HTML هي لغة الترميز القياسية لبناء هيكل صفحات الويب وتحديد عناصرها الدلالية مثل العناوين والفقرات والروابط والصور والنماذج.',
    },
    detailedExplanation: {
      en: 'HTML is not a programming language with loops—it is a structural markup language made of nested elements (`<header>`, `<main>`, `<h1>`, `<p>`, `<a href="...">`). Semantic HTML tags help screen readers for blind users and search engines understand the meaning of each block, forming the skeleton upon which CSS adds styling and JavaScript adds interactivity.',
      ar: 'ليست HTML لغة برمجة منطقية، بل لغة وصف وبناء تتكون من وسوم متداخلة مثل <header> و <main> و <h1> و <p>. وتساعد الوسوم الدلالية الحديثة محركات البحث وقارئات الشاشة على فهم بنية الصفحة، لتشكل الهيكل العظمي الذي يزينه CSS ويحركه JavaScript.',
    },
    howItWorks: {
      en: 'Browser receives `.html` text → parses tags top-to-bottom into the DOM (Document Object Model) tree → applies CSS styles and renders elements onto the viewport.',
      ar: 'يستقبل المتصفح ملف HTML ← يحلل الوسوم لبناء شجرة المستند DOM ← يطبق التنسيقات ويعرض الصفحة.',
    },
    mainFunctions: [
      { en: 'Semantic Structure: `<header>`, `<nav>`, `<article>`, `<footer>`', ar: 'الهيكلة الدلالية: تنظيم الصفحة بأقسام واضحة المعنى' },
      { en: 'Hyperlinks & Media: `<a>`, `<img>`, `<video>`, `<canvas>`', ar: 'الروابط والوسائط: ربط الصفحات وعرض الصور والفيديو' },
      { en: 'Forms & Inputs: `<form>`, `<input>`, `<button>` for user data', ar: 'النماذج والحقول: استقبال مدخلات المستخدمين' },
    ],
    realWorldExamples: [
      { en: 'Every website on the Internet—including NC Computer Academy—renders through HTML DOM elements', ar: 'كل موقع على الإنترنت ومنها منصة أكاديمية NC يعتمد على عناصر HTML' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'HTML Tag / Element', termAr: 'الوسم (Tag)', meaningEn: 'Markup keyword inside angle brackets like <section>...</section>', meaningAr: 'علامة محاطة بأقواس مثل <section> تحدد نوع العنصر' },
      { termEn: 'DOM', termAr: 'نموذج كائن المستند', meaningEn: 'Live tree representation of HTML elements in browser memory', meaningAr: 'الشجرة الحية لعناصر الصفحة في ذاكرة المتصفح' },
    ],
    summary: {
      en: 'HTML defines the semantic structure and content skeleton of every webpage.',
      ar: 'تبني HTML الهيكل الدلالي والمحتوى الأساسي لكل صفحة ويب.',
    },
    quiz: [
      {
        question: { en: 'What is HTML’s primary role in web development?', ar: 'ما الدور الأساسي للغة HTML في تطوير الويب؟' },
        options: [
          { en: 'Defining the structure and semantic content of a webpage', ar: 'بناء هيكل ومحتوى صفحة الويب الدلالي' },
          { en: 'Cooling the web server', ar: 'تبريد خادم الويب' },
          { en: 'Managing Wi-Fi router passwords', ar: 'إدارة كلمات مرور الواي فاي' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'HTML builds structure; CSS controls appearance; JavaScript controls behavior.',
          ar: 'تبني HTML الهيكل، وتنسق CSS المظهر، وتضيف JavaScript التفاعل.',
        },
      },
      {
        question: { en: 'Which HTML tag creates a clickable hyperlink to another page?', ar: 'أي وسم HTML ينشئ رابطاً تشعبياً قابلاً للنقر؟' },
        options: [
          { en: '<a>', ar: '<a>' },
          { en: '<p>', ar: '<p>' },
          { en: '<img>', ar: '<img>' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The anchor tag `<a href="...">` links pages across the Web.',
          ar: 'يُستخدم وسم الرابط <a> للتنقل بين الصفحات.',
        },
      },
      {
        question: { en: 'What does DOM stand for in browsers?', ar: 'إلى ماذا يرمز اختصار DOM في المتصفحات؟' },
        options: [
          { en: 'Document Object Model', ar: 'نموذج كائن المستند (Document Object Model)' },
          { en: 'Digital Output Monitor', ar: 'شاشة الإخراج الرقمية' },
          { en: 'Disk Operating Memory', ar: 'ذاكرة القرص' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'The browser parses HTML into the live DOM tree so CSS and JS can style and manipulate it.',
          ar: 'يحول المتصفح ملف HTML إلى شجرة DOM لكي يتمكن CSS و JS من التفاعل معها.',
        },
      },
    ],
  },
  {
    id: 'css',
    categoryId: 'programming',
    order: 5,
    title: { en: 'CSS (Cascading Style Sheets)', ar: 'لغة CSS' },
    readMinutes: 5,
    level: 'beginner',
    definition: {
      en: 'CSS is the styling language that controls the visual presentation of HTML documents—including colors, typography, spacing, responsive Flexbox/Grid layouts, and smooth animations.',
      ar: 'CSS هي لغة التنسيق التي تتحكم في المظهر البصري لصفحات HTML؛ مثل الألوان والخطوط والمسافات وتخطيطات الشبكة والتجاوب مع مختلف الشاشات.',
    },
    detailedExplanation: {
      en: 'CSS separates design from content. Using selectors (`.card`, `#hero`, `button:hover`), developers apply rules cleanly across entire sites. Modern CSS Flexbox and Grid systems automatically adapt layouts from wide 1440px desktop monitors down to smartphones (`@media`), while CSS variables (`--accent`) and transitions keep interfaces cohesive and fast.',
      ar: 'تفصل CSS التصميم عن المحتوى؛ فمن خلال المحددات (Selectors) يمكن تنسيق الموقع بالكامل بمرونة. وتسمح أنظمة Flexbox و CSS Grid ببناء واجهات متجاوبة تتكيف تلقائياً من الشاشات الكبيرة إلى الهواتف الذكية مع حركات انتقال سلسة.',
    },
    howItWorks: {
      en: 'Browser matches CSS selectors against DOM nodes → resolves Cascade & Specificity rules → computes Box Model (content, padding, border, margin) → paints pixels via GPU.',
      ar: 'يطابق المتصفح محددات CSS مع عناصر DOM ← يحسب أولوية التنسيقات ← يطبق نموذج الصندوق (الحشوة والحدود والهوامش) ← يرسم الصفحة.',
    },
    mainFunctions: [
      { en: 'Visual styling: Colors, gradients, typography, borders, and shadows', ar: 'التصميم البصري: الألوان والخطوط والظلال والحدود' },
      { en: 'Responsive Layouts: Flexbox, CSS Grid, and Media Queries', ar: 'التجاوب: أنظمة Flexbox و Grid للتلاؤم مع كل الأحجام' },
      { en: 'Motion: GPU-accelerated `transform` & `opacity` transitions', ar: 'الحركة: انتقالات سلسة عبر GPU' },
    ],
    realWorldExamples: [
      { en: 'Switching NC Computer Academy seamlessly between English LTR and Arabic RTL layouts', ar: 'تبديل تخطيط منصة أكاديمية NC بسلاسة بين الاتجاه الإنجليزي والعربي' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Box Model', termAr: 'نموذج الصندوق', meaningEn: 'Every element consists of content, padding, border, and margin layers', meaningAr: 'كل عنصر يتكون من المحتوى والحشوة الداخلية والحد والهامش الخارجي' },
      { termEn: 'Flexbox / Grid', termAr: 'Flexbox و Grid', meaningEn: 'Modern 1D and 2D CSS layout systems for responsive design', meaningAr: 'أنظمة حديثة لترتيب العناصر في صفوف وأعمدة متجاوبة' },
    ],
    summary: {
      en: 'CSS transforms raw HTML into responsive, accessible, visually polished user interfaces.',
      ar: 'تحوّل CSS هيكل HTML المجرد إلى واجهات جميلة ومتجاوبة مع كافة الأجهزة.',
    },
    quiz: [
      {
        question: { en: 'Which CSS property creates space INSIDE an element’s border around its content?', ar: 'أي خاصية في CSS تضيف مسافة داخلية بين المحتوى وحدود العنصر؟' },
        options: [
          { en: 'padding', ar: 'padding (الحشوة الداخلية)' },
          { en: 'margin', ar: 'margin' },
          { en: 'font-size', ar: 'font-size' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Padding sits inside the border; margin sits outside the border.',
          ar: 'تقع padding داخل حدود العنصر بينما تقع margin خارجها.',
        },
      },
      {
        question: { en: 'Which modern CSS systems are best for building responsive layouts across desktop and mobile?', ar: 'أي تقنيات CSS تُعد الأفضل لبناء تخطيطات متجاوبة بين الحاسوب والهاتف؟' },
        options: [
          { en: 'Flexbox and CSS Grid', ar: 'Flexbox و CSS Grid' },
          { en: 'HTML <marquee>', ar: 'وسم <marquee>' },
          { en: 'BIOS setup', ar: 'إعدادات BIOS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Flexbox handles 1D rows/columns while Grid orchestrates full 2D page layouts.',
          ar: 'تتيح Flexbox و Grid توزيع العناصر بمرونة في بعد واحد أو بعدين.',
        },
      },
      {
        question: { en: 'What does the "C" in CSS ("Cascading") refer to?', ar: 'إلى ماذا يشير حرف C (Cascading / التتالي) في CSS؟' },
        options: [
          { en: 'The priority rules deciding which style wins when multiple rules target one element', ar: 'قواعد الأولوية التي تحدد أي تنسيق يُطبّق عند تعارض أكثر من قاعدة' },
          { en: 'C programming language', ar: 'لغة البرمجة C' },
          { en: 'CPU cache', ar: 'الذاكرة المخبئية' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Specificity, source order, and inheritance cascade cleanly to determine final styles.',
          ar: 'تحدد قواعد التتالي والأولوية المظهر النهائي لكل عنصر.',
        },
      },
    ],
  },
  {
    id: 'javascript',
    categoryId: 'programming',
    order: 6,
    title: { en: 'JavaScript', ar: 'لغة جافاسكريبت (JavaScript)' },
    readMinutes: 6,
    level: 'intermediate',
    definition: {
      en: 'JavaScript is the dynamic programming language of the web—running inside every browser (and on servers via Node.js) to power interactivity, APIs, and 3D WebGL experiences.',
      ar: 'جافاسكريبت (JavaScript) هي لغة البرمجة الديناميكية للويب، وتعمل داخل كل متصفح (وعلى الخوادم عبر Node.js) لتشغيل التفاعل والبيانات وتجارب 3D.',
    },
    detailedExplanation: {
      en: 'While HTML gives structure and CSS handles design, JavaScript brings pages alive. It listens for clicks, validates forms, fetches live JSON data from servers, updates the DOM without reloading the page, and powers 3D graphics engines like Three.js. Modern TypeScript adds static type-checking on top of JavaScript to catch bugs before code ships.',
      ar: 'تمنح جافاسكريبت الحياة لصفحات الويب؛ فهي تستجيب لنقرات المستخدم، وتتحقق من النماذج، وتجلب البيانات من الخوادم دون إعادة تحميل الصفحة، وتشغل محركات الرسوميات ثلاثية الأبعاد مثل Three.js. وتضيف لغة TypeScript فحص الأنواع فوق جافاسكريبت لاكتشاف الأخطاء مبكراً.',
    },
    howItWorks: {
      en: 'Browser V8/SpiderMonkey engine compiles JS via Just-In-Time (JIT) compilation → Event Loop processes user clicks and async `fetch()` promises non-blockingly.',
      ar: 'يقوم محرك المتصفح (مثل V8) بترجمة جافاسكريبت فورياً JIT ← وتدير حلقة الأحداث (Event Loop) النقرات والطلبات غير المتزامنة بسلاسة.',
    },
    mainFunctions: [
      { en: 'DOM Manipulation & Event Listeners (`click`, `input`, `keydown`)', ar: 'التحكم بعناصر الصفحة والاستجابة لأحداث المستخدم' },
      { en: 'Asynchronous API fetching (`async/await`, JSON)', ar: 'جلب البيانات غير المتزامن من الخوادم وواجهات API' },
      { en: 'Full-stack reach: React frontends, Node.js backends, Three.js 3D graphics', ar: 'شمولية كاملة: واجهات React، خوادم Node.js، ورسوميات Three.js' },
    ],
    realWorldExamples: [
      { en: 'The entire NC Computer Academy web app and 3D PC Builder Lab run on TypeScript + JavaScript + Three.js', ar: 'تعمل منصة أكاديمية NC ومختبر 3D بالكامل باستخدام TypeScript و JavaScript و Three.js' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'logic-gates',
    vocabulary: [
      { termEn: 'Event Listener', termAr: 'مستمع الحدث', meaningEn: 'Function triggered when a user clicks, types, or scrolls', meaningAr: 'دالة برمجية تنطلق عند نقر المستخدم أو كتابته' },
      { termEn: 'Async / Await', termAr: 'البرمجة غير المتزامنة', meaningEn: 'Syntax handling network requests without freezing the UI', meaningAr: 'أسلوب لتنفيذ طلبات الشبكة في الخلفية دون تجميد الواجهة' },
    ],
    summary: {
      en: 'JavaScript powers interactive web interfaces, real-time 3D graphics, and server-side APIs across the modern web.',
      ar: 'تشغّل جافاسكريبت التفاعل في الويب والرسوميات ثلاثية الأبعاد والخوادم الحديثة.',
    },
    quiz: [
      {
        question: { en: 'What is JavaScript’s primary role inside a web browser?', ar: 'ما الدور الرئيسي للغة جافاسكريبت داخل متصفح الويب؟' },
        options: [
          { en: 'Adding interactivity, logic, API calls, and dynamic DOM updates', ar: 'إضافة التفاعل والمنطق وجلب البيانات وتحديث الصفحة ديناميكياً' },
          { en: 'Replacing the CPU heatsink', ar: 'استبدال مبرد المعالج' },
          { en: 'Formatting NTFS drives', ar: 'تهيئة أقراص NTFS' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'JavaScript executes client-side logic and responds dynamically to user actions.',
          ar: 'تمنح جافاسكريبت الصفحة سلوكاً ديناميكياً وتفاعلياً.',
        },
      },
      {
        question: { en: 'Which runtime allows JavaScript to execute outside the browser on backend servers?', ar: 'ما بيئة التشغيل التي تتيح تشغيل جافاسكريبت خارج المتصفح على الخوادم؟' },
        options: [
          { en: 'Node.js', ar: 'Node.js' },
          { en: 'HTML5', ar: 'HTML5' },
          { en: 'CSS Grid', ar: 'CSS Grid' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Node.js runs the V8 JavaScript engine on servers and CLI tools.',
          ar: 'تتيح بيئة Node.js بناء خوادم وأدوات سطر أوامر بلغة جافاسكريبت.',
        },
      },
      {
        question: { en: 'What does TypeScript add on top of standard JavaScript?', ar: 'ماذا تضيف لغة TypeScript فوق جافاسكريبت القياسية؟' },
        options: [
          { en: 'Static type checking to catch bugs before running code', ar: 'فحص الأنواع الثابت لاكتشاف الأخطاء البرمجية قبل التشغيل' },
          { en: 'Extra RAM chips', ar: 'شرائح ذاكرة إضافية' },
          { en: 'Faster Wi-Fi signals', ar: 'إشارة واي فاي أقوى' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'TypeScript verifies variable and function types at compile time.',
          ar: 'تتحقق TypeScript من صحة أنواع البيانات قبل تشغيل التطبيق.',
        },
      },
    ],
  },
  {
    id: 'python',
    categoryId: 'programming',
    order: 7,
    title: { en: 'Python', ar: 'لغة بايثون (Python)' },
    readMinutes: 6,
    level: 'beginner',
    definition: {
      en: 'Python is a readable, high-level, interpreted programming language prized for clean syntax, beginner friendliness, and dominance in AI, data science, automation, and backend engineering.',
      ar: 'بايثون (Python) هي لغة برمجة عالية المستوى سهلة القراءة والكتابة، وتُعد الأكثر استخداماً في الذكاء الاصطناعي، علم البيانات، الأتمتة، وتطوير الخوادم.',
    },
    detailedExplanation: {
      en: 'Created by Guido van Rossum in 1991, Python emphasizes human clarity using indentation instead of curly braces (`for item in items: print(item)`). Its vast "batteries-included" standard library and ecosystem (`NumPy`, `Pandas`, `PyTorch`, `Django`, `FastAPI`) let beginners write working programs in minutes while powering cutting-edge AI research labs.',
      ar: 'صُممت بايثون للوضوح والبساطة باستخدام المسافات البادئة بدلاً من الأقواس المعقدة. وبفضل مكتباتها الضخمة مثل NumPy و Pandas و PyTorch و FastAPI، يبدأ المبتدئون بكتابة برامج عملية خلال دقائق، بينما يعتمد عليها الباحثون في تطوير أنظمة الذكاء الاصطناعي.',
    },
    howItWorks: {
      en: 'Python compiles `.py` scripts transparently into bytecode executed by the Python Virtual Machine (PVM), calling high-speed C/C++ libraries under the hood for heavy math.',
      ar: 'تحول بايثون الكود إلى Bytecode تشغله الآلة الافتراضية لبايثون، وتستدعي مكتبات C/C++ السريعة في الخلفية للعمليات الرياضية الثقيلة.',
    },
    mainFunctions: [
      { en: 'Clean indentation-based syntax ideal for learning CS fundamentals', ar: 'صياغة واضحة ومرتبة مثالية لتعلم أسس البرمجة' },
      { en: 'Artificial Intelligence, Machine Learning, and Data Analytics', ar: 'الذكاء الاصطناعي وتعلم الآلة وتحليل البيانات' },
      { en: 'Task automation, cybersecurity scripting, and web APIs', ar: 'أتمتة المهام والسكربتات الأمنية وواجهات الويب' },
    ],
    realWorldExamples: [
      { en: 'Training neural networks with PyTorch or automating spreadsheet reports in 15 lines of Python', ar: 'تدريب الشبكات العصبية أو أتمتة تقارير الجداول في 15 سطراً فقط بلغة بايثون' },
    ],
    illustrationKey: 'code',
    interactiveDiagram: 'none',
    vocabulary: [
      { termEn: 'Indentation', termAr: 'المسافة البادئة', meaningEn: 'Leading spaces defining code blocks in Python', meaningAr: 'المسافات في بداية السطر لتحديد كتل الشروط والحلقات في بايثون' },
      { termEn: 'pip / Library', termAr: 'مدير الحزم pip', meaningEn: 'Python package installer accessing hundreds of thousands of open-source modules', meaningAr: 'أداة تثبيت المكتبات البرمجية الجاهزة في بايثون' },
    ],
    summary: {
      en: 'Python combines readable syntax with an unmatched ecosystem for AI, data science, automation, and education.',
      ar: 'تجمع بايثون بين سهولة القراءة وأقوى بيئة مكتبات للذكاء الاصطناعي والبيانات والأتمتة.',
    },
    quiz: [
      {
        question: { en: 'How does Python mark the scope of loops and `if` blocks?', ar: 'كيف تحدد لغة بايثون نطاق الحلقات والشروط البرمجية؟' },
        options: [
          { en: 'Using consistent Indentation (leading whitespace)', ar: 'باستخدام المسافات البادئة (Indentation)' },
          { en: 'Using HTML <div> tags', ar: 'باستخدام وسوم HTML' },
          { en: 'Using bold text', ar: 'باستخدام الخط العريض' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Python enforces clean indentation rather than curly braces `{}`.',
          ar: 'تعتمد بايثون على المسافات البادئة مما يجعل الكود مرتباً وسهل القراءة.',
        },
      },
      {
        question: { en: 'In which field is Python especially dominant worldwide?', ar: 'في أي مجال تهيمن لغة بايثون بشكل خاص عالمياً؟' },
        options: [
          { en: 'Artificial Intelligence, Machine Learning & Data Science', ar: 'الذكاء الاصطناعي وتعلم الآلة وعلم البيانات' },
          { en: 'Manufacturing copper heatpipes', ar: 'تصنيع الأنابيب النحاسية' },
          { en: 'Soldering ATX power supplies', ar: 'لحام مزودات الطاقة' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'PyTorch, TensorFlow, Pandas, and Scikit-learn make Python the standard AI language.',
          ar: 'مكتبات الذكاء الاصطناعي وتحليل البيانات جعلت بايثون اللغة الأولى في هذا المجال.',
        },
      },
      {
        question: { en: 'Which command-line tool installs third-party Python packages?', ar: 'ما الأداة المستخدمة لتثبيت مكتبات بايثون الإضافية؟' },
        options: [
          { en: 'pip', ar: 'pip' },
          { en: 'hdmi', ar: 'hdmi' },
          { en: 'bios', ar: 'bios' },
        ],
        correctIndex: 0,
        explanation: {
          en: '`pip install <package>` installs libraries from the Python Package Index (PyPI).',
          ar: 'يقوم أمر pip install بتحميل وتثبيت المكتبات من مستودع PyPI.',
        },
      },
    ],
  },
  {
    id: 'programming-logic',
    categoryId: 'programming',
    order: 8,
    title: { en: 'Programming Logic & Boolean Gates', ar: 'منطق البرمجة والبوابات المنطقية' },
    readMinutes: 6,
    level: 'intermediate',
    definition: {
      en: 'Programming logic relies on Boolean algebra (`TRUE`/`FALSE`, `1`/`0`) and logical operators (`AND`, `OR`, `NOT`, `XOR`) that govern both software `if` statements and hardware CPU gates.',
      ar: 'يعتمد منطق البرمجة على الجبر البولياني (صح/خطأ، 1/0) والعوامل المنطقية (AND و OR و NOT و XOR) التي تحكم شروط البرامج وبوابات المعالج الإلكترونية معاً.',
    },
    detailedExplanation: {
      en: 'Every decision in software and hardware boils down to George Boole’s logic: `AND` outputs True only when ALL inputs are True; `OR` outputs True when AT LEAST ONE input is True; `NOT` flips True to False; and `XOR` outputs True when inputs differ. Inside your CPU, physical transistor logic gates combine these exact rules to add numbers and execute `if` branches!',
      ar: 'تعود كل القرارات في البرمجيات والعتاد إلى المنطق البولياني: بوابة AND تعطي (1) فقط إذا كان كلا المدخلين (1)؛ وبوابة OR تعطي (1) إذا كان أحدهما على الأقل (1)؛ وبوابة NOT تعكس القيمة؛ وبوابة XOR تعطي (1) عند اختلاف المدخلين. وتستخدم دوائر المعالج هذه البوابات نفسها لإجراء الحسابات والشروط.',
    },
    howItWorks: {
      en: 'Boolean expressions evaluate conditions (`isLoggedIn && hasPermission`) into a single 1-bit `true`/`false` flag that directs program execution or transistor switches.',
      ar: 'تُقيّم التعبيرات المنطقية الشروط إلى قيمة واحدة (صح أو خطأ) توجه مسار البرنامج أو تفتح وتغلق الترانزستورات.',
    },
    mainFunctions: [
      { en: 'AND (`&&`): Both conditions must be True', ar: 'AND (و): يجب تحقق الشرطين معاً' },
      { en: 'OR (`||`): Either condition being True is enough', ar: 'OR (أو): يكفي تحقق أحد الشرطين' },
      { en: 'NOT (`!`): Inverts True ↔ False', ar: 'NOT (النفي): يعكس النتيجة المنطقية' },
      { en: 'XOR (`^`): True only when inputs are opposite', ar: 'XOR (أو الحصرية): تتحقق عند اختلاف القيمتين' },
    ],
    realWorldExamples: [
      { en: 'Login check: `emailValid AND passwordMatches` · Half-Adder circuit inside an ALU using XOR + AND', ar: 'التحقق من الدخول: صحة البريد AND تطابق كلمة المرور · دائرة الجمع داخل المعالج عبر XOR و AND' },
    ],
    illustrationKey: 'cpu',
    interactiveDiagram: 'logic-gates',
    vocabulary: [
      { termEn: 'Boolean', termAr: 'قيمة منطقية (Boolean)', meaningEn: 'Data type with exactly two possible states: True (1) or False (0)', meaningAr: 'نوع بيانات له قيمتان فقط: صح (1) أو خطأ (0)' },
      { termEn: 'Truth Table', termAr: 'جدول الصواب', meaningEn: 'Table listing every possible input combination and logic gate output', meaningAr: 'جدول يوضح مخرجات البوابة المنطقية لكل احتمالات المدخلات' },
    ],
    summary: {
      en: 'Boolean logic unifies high-level software decisions and physical CPU transistor circuits through AND, OR, NOT, and XOR.',
      ar: 'يربط المنطق البولياني بين شروط البرمجة والدوائر الفيزيائية للمعالج عبر بوابات AND و OR و NOT و XOR.',
    },
    quiz: [
      {
        question: { en: 'For an AND gate with inputs A = 1 and B = 0, what is the output?', ar: 'في بوابة AND عندما يكون المدخل A = 1 و B = 0، ما الناتج؟' },
        options: [
          { en: '0 (False)', ar: '0 (خطأ)' },
          { en: '1 (True)', ar: '1 (صح)' },
          { en: '2', ar: '2' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'AND requires BOTH inputs to be 1 to output 1.',
          ar: 'تتطلب بوابة AND أن يكون كلا المدخلين 1 لتعطي 1.',
        },
      },
      {
        question: { en: 'Which gate outputs 1 ONLY when its two inputs are different (one 1, one 0)?', ar: 'أي بوابة تعطي الناتج 1 فقط عندما يختلف المدخلان (أحدهما 1 والآخر 0)؟' },
        options: [
          { en: 'XOR (Exclusive OR)', ar: 'XOR (أو الحصرية)' },
          { en: 'AND', ar: 'AND' },
          { en: 'NOT', ar: 'NOT' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'XOR outputs True strictly when inputs differ.',
          ar: 'تعطي XOR القيمة 1 عند اختلاف المدخلين فقط.',
        },
      },
      {
        question: { en: 'What does the NOT gate do to an input of 0?', ar: 'ماذا تفعل بوابة NOT بالمدخل 0؟' },
        options: [
          { en: 'Inverts it to 1', ar: 'تعكسه ليصبح 1' },
          { en: 'Keeps it at 0', ar: 'تبقيه 0' },
          { en: 'Multiplies it by 10', ar: 'تضربه في 10' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'NOT (inverter) always flips 0 → 1 and 1 → 0.',
          ar: 'تعكس بوابة النفي NOT القيمة دائماً من 0 إلى 1 والعكس.',
        },
      },
    ],
  },
];
