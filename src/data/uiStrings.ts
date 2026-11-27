import { BilingualText, CategoryId, Language } from '../types/academy';

export const UI_STRINGS = {
  brandName: {
    en: 'NC Computer Academy',
    ar: 'أكاديمية NC للحاسوب',
  },
  byCreator: {
    en: 'By nexa.creative05',
    ar: 'بواسطة nexa.creative05',
  },
  tagline: {
    en: 'Learn. Explore. Build.',
    ar: 'تعلّم. استكشف. ابنِ.',
  },
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    learning: { en: 'Learning Center', ar: 'مركز التعلم' },
    lab: { en: '3D PC Lab', ar: 'مختبر 3D' },
    articles: { en: 'Articles', ar: 'المقالات' },
    mail: { en: 'Gmail', ar: 'البريد' },
    startLearning: { en: 'Start Learning', ar: 'ابدأ التعلم' },
  },
  hero: {
    title: {
      en: 'Discover the World of Computer Science.',
      ar: 'اكتشف عالم علوم الحاسوب والتقنية.',
    },
    subtitleEn:
      'Master computer fundamentals, internal hardware architecture, operating systems, networking, and modern programming with interactive simulations and a realistic 3D PC assembly lab.',
    subtitleAr:
      'منصة تعليمية متكاملة تجمع بين الدروس المنهجية، الرسوم التفاعلية، ومختبر بناء الحاسوب ثلاثي الأبعاد لتعلّم علوم الحاسوب وتقنية المعلومات من الصفر حتى الاحتراف.',
    ctaPrimary: { en: 'Start Learning', ar: 'ابدأ التعلم' },
    ctaSecondary: { en: 'Explore 3D Lab', ar: 'استكشف مختبر 3D' },
    dragHint: {
      en: 'Interactive 3D Workstation · Drag to Orbit · Click to Open Full Lab',
      ar: 'محطة حاسوب ثلاثية الأبعاد تفاعلية · اسحب للتدوير · انقر لفتح المختبر الكامل',
    },
  },
  sections: {
    featuredCourses: { en: 'Featured Learning Tracks', ar: 'المسارات التعليمية المميزة' },
    featuredCoursesSub: {
      en: 'Five structured pillars taking you from binary basics to hardware engineering and software development.',
      ar: 'خمسة مسارات منهجية متكاملة تنقلك من مبادئ الحاسوب والبيانات إلى هندسة العتاد وتطوير البرمجيات.',
    },
    popularLessons: { en: 'Popular Lessons', ar: 'الدروس الأكثر طلباً' },
    popularLessonsSub: {
      en: 'Hands-on lessons featuring bilingual terminology, interactive diagrams, and instant knowledge quizzes.',
      ar: 'دروس تطبيقية مدعومة بالمصطلحات الثنائية اللغة، المخططات التفاعلية، والاختبارات الفورية.',
    },
    categories: { en: 'Learning Categories', ar: 'أقسام المكتبة التعليمية' },
    labPreviewTitle: { en: 'Interactive 3D PC Builder Lab', ar: 'مختبر بناء الحاسوب ثلاثي الأبعاد' },
    labPreviewDesc: {
      en: 'Rotate 360°, open the tempered glass side panel, trigger Exploded View to inspect all 10 hardware components, or assemble a desktop PC step-by-step.',
      ar: 'قم بتدوير الحاسوب بزاوية 360 درجة، افتح الغطاء الزجاجي، فعّل العرض التفجيري لفحص جميع المكونات العشرة، أو قم بتجميع الحاسوب خطوة بخطوة.',
    },
    latestArticles: { en: 'Latest Technology Articles', ar: 'أحدث المقالات التقنية' },
    latestArticlesSub: {
      en: 'Deep dives into modern silicon, thermal engineering, and optical networking.',
      ar: 'مقالات تقنية معمّقة حول المعالجات الحديثة، هندسة التبريد، وشبكات الألياف الضوئية.',
    },
    viewAll: { en: 'Browse All Lessons', ar: 'تصفح جميع الدروس' },
    readArticle: { en: 'Read Article', ar: 'اقرأ المقال' },
    openLesson: { en: 'Open Lesson', ar: 'افتح الدرس' },
    launchLab: { en: 'Launch 3D PC Lab', ar: 'افتح مختبر 3D' },
    lessonsLabel: { en: 'Lessons', ar: 'دروس' },
    completedLabel: { en: 'Completed', ar: 'مكتمل' },
  },
  learningCenter: {
    title: { en: 'Learning Center', ar: 'مركز التعلم الشامل' },
    subtitle: {
      en: 'Explore 41 bilingual lessons across 5 core computer science disciplines.',
      ar: 'استكشف 41 درساً ثنائي اللغة عبر 5 تخصصات أساسية في علوم الحاسوب.',
    },
    searchPlaceholder: {
      en: 'Search lessons by topic or keyword...',
      ar: 'ابحث عن درس أو مفهوم تقني...',
    },
    allCategories: { en: 'All Categories', ar: 'جميع الأقسام' },
    noResults: {
      en: 'No lessons match your current search.',
      ar: 'لم يتم العثور على دروس مطابقة لبحثك.',
    },
    yourProgress: { en: 'Course Progress', ar: 'تقدم الدورات' },
    lessonsCompletedOf: { en: 'Lessons Completed', ar: 'دروس مكتملة' },
    remainingLessons: { en: 'Remaining', ar: 'المتبقي' },
    filterAll: { en: 'All', ar: 'الكل' },
    filterCompleted: { en: 'Completed', ar: 'المكتملة' },
    filterIncomplete: { en: 'In Progress', ar: 'غير المكتملة' },
    markDone: { en: 'Mark Complete', ar: 'تحديد كمكتمل' },
    doneLabel: { en: 'Completed', ar: 'مكتمل' },
    resetProgress: { en: 'Reset Progress', ar: 'إعادة التقدم' },
    confirmReset: { en: 'Confirm Reset', ar: 'تأكيد الإعادة' },
    cancel: { en: 'Cancel', ar: 'إلغاء' },
    savedLocally: { en: 'Saved automatically in this browser', ar: 'يُحفظ التقدم تلقائياً في المتصفح' },
  },
  lesson: {
    backToLibrary: { en: 'Back to Learning Center', ar: 'العودة إلى مركز التعلم' },
    definition: { en: 'Definition', ar: 'التعريف المبسط' },
    detailedExplanation: { en: 'Detailed Explanation', ar: 'الشرح المفصل' },
    howItWorks: { en: 'How It Works', ar: 'آلية العمل' },
    mainFunctions: { en: 'Main Functions', ar: 'الوظائف الرئيسية' },
    realWorldExamples: { en: 'Real-World Examples', ar: 'أمثلة من الواقع' },
    illustration: { en: 'Hardware & Architecture Diagram', ar: 'المخطط التعليمي التوضيحي' },
    interactiveLab: { en: 'Interactive Concept Explorer', ar: 'المخطط التفاعلي التطبيقي' },
    vocabulary: { en: 'Key Vocabulary (EN / AR)', ar: 'المصطلحات الأساسية (عربي / إنجليزي)' },
    summary: { en: 'Lesson Summary', ar: 'ملخص الدرس' },
    quizTitle: { en: 'Knowledge Check Quiz', ar: 'اختبار الفهم التفاعلي' },
    checkAnswer: { en: 'Submit Quiz', ar: 'تحقق من الإجابات' },
    retakeQuiz: { en: 'Retake Quiz', ar: 'إعادة الاختبار' },
    markComplete: { en: 'Mark Lesson Complete', ar: 'تحديد الدرس كمكتمل' },
    completedBadge: { en: 'Completed', ar: 'درس مكتمل' },
    prevLesson: { en: 'Previous Lesson', ar: 'الدرس السابق' },
    nextLesson: { en: 'Next Lesson', ar: 'الدرس التالي' },
    inspectIn3D: { en: 'Inspect Component in 3D Lab', ar: 'فحص المكوّن في مختبر 3D' },
    englishTerm: { en: 'English Term', ar: 'المصطلح بالإنجليزية' },
    arabicTerm: { en: 'Arabic Term', ar: 'المصطلح بالعربية' },
    explanation: { en: 'Explanation', ar: 'التوضيح' },
  },
  lab: {
    title: { en: '3D PC Builder Lab', ar: 'مختبر بناء الحاسوب ثلاثي الأبعاد' },
    subtitle: {
      en: 'Interactive Three.js Hardware Inspection & Assembly Simulator',
      ar: 'محاكي فحص وتجميع مكونات الحاسوب بتقنية 3D',
    },
    exploreMode: { en: '3D Explore', ar: 'الاستكشاف 3D' },
    assembleMode: { en: 'Assembly Simulator', ar: 'محاكي التجميع' },
    explodedView: { en: 'Exploded View', ar: 'العرض التفجيري' },
    openCase: { en: 'Open Case', ar: 'فتح الصندوق' },
    closeCase: { en: 'Close Case', ar: 'إغلاق الصندوق' },
    labelsOn: { en: 'Labels On', ar: 'التسميات مفعّلة' },
    labelsOff: { en: 'Labels Off', ar: 'إخفاء التسميات' },
    resetView: { en: 'Reset Camera', ar: 'إعادة الكاميرا' },
    hideHud: { en: 'Hide Dock', ar: 'إخفاء الشريط' },
    showHud: { en: 'Show Controls', ar: 'إظهار التحكم' },
    selectPrompt: {
      en: 'Click any component in the 3D viewport or list to inspect its specifications.',
      ar: 'انقر على أي مكوّن في العرض ثلاثي الأبعاد أو القائمة لعرض تفاصيله الفنية.',
    },
    componentsList: { en: 'Components (10)', ar: 'المكونات (10)' },
    installNext: { en: 'Install Selected Part', ar: 'تركيب القطعة المحددة' },
    resetBuild: { en: 'Reset Assembly', ar: 'إعادة التجميع' },
    assemblyComplete: {
      en: 'PC Build Complete! All 10 components installed and powered.',
      ar: 'اكتمل تجميع الحاسوب! تم تركيب جميع المكونات العشرة بنجاح.',
    },
    openRelatedLesson: { en: 'Study Hardware Lesson', ar: 'ادرس هذا المكوّن' },
  },
  levels: {
    beginner: { en: 'Beginner', ar: 'مبتدئ' },
    intermediate: { en: 'Intermediate', ar: 'متوسط' },
    advanced: { en: 'Advanced', ar: 'متقدم' },
  },
  footer: {
    rights: {
      en: 'NC Computer Academy by nexa.creative05. Crafted for modern computer science education.',
      ar: 'أكاديمية NC للحاسوب بواسطة nexa.creative05. منصة متخصصة في تعليم علوم الحاسوب.',
    },
    curriculum: { en: 'Curriculum', ar: 'المسارات' },
    platform: { en: 'Platform', ar: 'المنصة' },
    connect: { en: 'Connect', ar: 'تواصل معنا' },
  },
};

export function t(text: BilingualText, lang: Language): string {
  return text[lang];
}

export const CATEGORY_COLORS: Record<CategoryId, string> = {
  fundamentals: '#06B6D4',
  hardware: '#3B82F6',
  os: '#0EA5E9',
  networking: '#2563EB',
  programming: '#38BDF8',
};
