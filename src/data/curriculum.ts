import { CategoryId, CategoryMeta, LessonData } from '../types/academy';
import { LESSONS_FUNDAMENTALS } from './lessonsFundamentals';
import { LESSONS_HARDWARE } from './lessonsHardware';
import { LESSONS_OS } from './lessonsOS';
import { LESSONS_NETWORKING } from './lessonsNetworking';
import { LESSONS_PROGRAMMING } from './lessonsProgramming';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'fundamentals',
    code: 'A',
    title: { en: 'Computer Fundamentals', ar: 'أساسيات الحاسوب' },
    description: {
      en: 'Core computing principles, binary data representation, computer generations, and system architecture.',
      ar: 'مبادئ الحوسبة الأساسية، تمثيل البيانات الثنائية، أجيال الحاسوب، وبنية وحدة النظام.',
    },
    lessonCount: LESSONS_FUNDAMENTALS.length,
  },
  {
    id: 'hardware',
    code: 'B',
    title: { en: 'Computer Hardware', ar: 'عتاد الحاسوب' },
    description: {
      en: 'Deep dive into Motherboards, CPUs, RAM, GPUs, NVMe SSDs, PSUs, cooling systems, and expansion slots.',
      ar: 'دراسة تفصيلية للوحة الأم والمعالج والذاكرة وبطاقة الرسوميات والأقراص ومزود الطاقة والتبريد.',
    },
    lessonCount: LESSONS_HARDWARE.length,
  },
  {
    id: 'os',
    code: 'C',
    title: { en: 'Operating Systems', ar: 'أنظمة التشغيل' },
    description: {
      en: 'How kernels manage processes and files across Windows, Linux, macOS, device drivers, and packages.',
      ar: 'كيف تدير النواة العمليات والملفات في أنظمة ويندوز ولينكس وماك، إضافة للتعريفات وتثبيت البرامج.',
    },
    lessonCount: LESSONS_OS.length,
  },
  {
    id: 'networking',
    code: 'D',
    title: { en: 'Computer Networking', ar: 'شبكات الحاسوب' },
    description: {
      en: 'Master LAN/MAN/WAN, IPv4/IPv6 addressing, DNS resolution, HTTPS encryption, routers, and topologies.',
      ar: 'إتقان الشبكات المحلية والواسعة، عناوين IP، نظام DNS، تشفير HTTPS، الموجهات والمبدلات.',
    },
    lessonCount: LESSONS_NETWORKING.length,
  },
  {
    id: 'programming',
    code: 'E',
    title: { en: 'Programming', ar: 'البرمجة' },
    description: {
      en: 'Learn algorithms, flowcharts, HTML, CSS, JavaScript, Python, and Boolean programming logic.',
      ar: 'تعلّم الخوارزميات ومخططات التدفق ولغات HTML و CSS وجافاسكريبت وبايثون ومنطق البوابات.',
    },
    lessonCount: LESSONS_PROGRAMMING.length,
  },
];

export const ALL_LESSONS: LessonData[] = [
  ...LESSONS_FUNDAMENTALS,
  ...LESSONS_HARDWARE,
  ...LESSONS_OS,
  ...LESSONS_NETWORKING,
  ...LESSONS_PROGRAMMING,
];

export function getLessonById(id: string): LessonData | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getLessonsByCategory(categoryId: CategoryId): LessonData[] {
  return ALL_LESSONS.filter((l) => l.categoryId === categoryId).sort((a, b) => a.order - b.order);
}

export function getCategoryMeta(categoryId: CategoryId): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === categoryId);
}

export const POPULAR_LESSON_IDS = [
  'what-is-a-computer',
  'motherboard',
  'cpu',
  'gpu',
  'ip-address',
  'programming-logic',
];
