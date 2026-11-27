export type Language = 'en' | 'ar';

export interface BilingualText {
  en: string;
  ar: string;
}

export type CategoryId =
  | 'fundamentals'
  | 'hardware'
  | 'os'
  | 'networking'
  | 'programming';

export type InteractiveDiagramType =
  | 'ipo-cycle'
  | 'binary-ascii'
  | 'motherboard-map'
  | 'cpu-pipeline'
  | 'os-layers'
  | 'ip-subnet'
  | 'dns-flow'
  | 'network-topology'
  | 'logic-gates'
  | 'none';

export interface VocabularyItem {
  termEn: string;
  termAr: string;
  meaningEn: string;
  meaningAr: string;
}

export interface QuizQuestion {
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export interface LessonData {
  id: string;
  categoryId: CategoryId;
  order: number;
  title: BilingualText;
  readMinutes: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  definition: BilingualText;
  detailedExplanation: BilingualText;
  howItWorks: BilingualText;
  mainFunctions: BilingualText[];
  realWorldExamples: BilingualText[];
  illustrationKey:
    | 'computer'
    | 'cycle'
    | 'history'
    | 'hardware-software'
    | 'data'
    | 'generations'
    | 'types'
    | 'system-unit'
    | 'motherboard'
    | 'cpu'
    | 'memory'
    | 'gpu'
    | 'storage'
    | 'psu'
    | 'cooling'
    | 'io'
    | 'ports'
    | 'slots'
    | 'os'
    | 'network'
    | 'code';
  interactiveDiagram: InteractiveDiagramType;
  linked3DComponent?: PCComponentId;
  vocabulary: VocabularyItem[];
  summary: BilingualText;
  quiz: QuizQuestion[];
}

export interface CategoryMeta {
  id: CategoryId;
  code: string;
  title: BilingualText;
  description: BilingualText;
  lessonCount: number;
}

export type PCComponentId =
  | 'case'
  | 'motherboard'
  | 'cpu'
  | 'cooler'
  | 'ram'
  | 'gpu'
  | 'ssd'
  | 'hdd'
  | 'psu'
  | 'fans';

export interface PCComponentSpec {
  id: PCComponentId;
  order: number;
  name: BilingualText;
  shortName: BilingualText;
  role: BilingualText;
  description: BilingualText;
  specs: { label: BilingualText; value: string }[];
  relatedLessonId: string;
  accentHex: string;
}

export interface ArticleData {
  id: string;
  category: BilingualText;
  date: BilingualText;
  readTime: BilingualText;
  title: BilingualText;
  excerpt: BilingualText;
  body: BilingualText[];
  image: string;
  imageAlt: BilingualText;
  relatedCategoryId: CategoryId;
}

export type PageRoute =
  | { view: 'home' }
  | { view: 'learning'; categoryId?: CategoryId }
  | { view: 'lesson'; lessonId: string }
  | { view: 'lab'; focusComponent?: PCComponentId }
  | { view: 'articles'; articleId?: string };
