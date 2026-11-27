import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  HardDrive,
  Layers,
  Monitor,
  Network,
} from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { ARTICLES } from '../data/articles';
import {
  ALL_LESSONS,
  CATEGORIES,
  getLessonById,
  POPULAR_LESSON_IDS,
} from '../data/curriculum';
import { PC_COMPONENTS } from '../data/pcComponents';
import { t, UI_STRINGS } from '../data/uiStrings';
import { CategoryId } from '../types/academy';
import { HeroComputer3D } from './HeroComputer3D';

const CATEGORY_ICONS: Record<CategoryId, React.ReactNode> = {
  fundamentals: <Monitor className="w-5 h-5 text-cyan-400" />,
  hardware: <Cpu className="w-5 h-5 text-blue-400" />,
  os: <HardDrive className="w-5 h-5 text-sky-400" />,
  networking: <Network className="w-5 h-5 text-indigo-400" />,
  programming: <Code2 className="w-5 h-5 text-cyan-300" />,
};

export const HomePage: React.FC = () => {
  const { lang, navigate, completedLessons } = useAcademy();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const popularLessons = POPULAR_LESSON_IDS.map((id) => getLessonById(id)).filter(
    (l): l is NonNullable<typeof l> => Boolean(l)
  );

  return (
    <main className="blueprint-grid">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-medium text-cyan-400 tracking-wide flex flex-wrap items-center gap-2">
              <span>{t(UI_STRINGS.brandName, lang)}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{t(UI_STRINGS.byCreator, lang)}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">{t(UI_STRINGS.tagline, lang)}</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'en'
                ? 'Discover the World of Computer Science.'
                : t(UI_STRINGS.hero.title, lang)}
            </h1>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              {lang === 'en'
                ? UI_STRINGS.hero.subtitleEn
                : UI_STRINGS.hero.subtitleAr}
            </p>

            {/* Required Arabic platform explanation visible in hero */}
            {lang === 'en' && (
              <p
                dir="rtl"
                lang="ar"
                className="text-sm text-cyan-200/85 leading-relaxed max-w-xl border-t border-slate-800/80 pt-4"
              >
                {UI_STRINGS.hero.subtitleAr}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => navigate({ view: 'learning' })}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-950/50"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t(UI_STRINGS.hero.ctaPrimary, lang)}</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ view: 'lab' })}
                className="px-6 py-3 rounded-xl bg-[#0B1326] hover:bg-slate-900 border border-cyan-500/35 hover:border-cyan-400 text-cyan-200 text-sm font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t(UI_STRINGS.hero.ctaSecondary, lang)}</span>
              </button>
            </div>

            {/* Clean quantitative strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">
                  {ALL_LESSONS.length}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'ar' ? 'درساً تفاعلياً' : 'Interactive Lessons'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 tabular-nums">10</div>
                <div className="text-xs text-slate-400">
                  {lang === 'ar' ? 'مكونات حاسوب 3D' : '3D PC Components'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">
                  {completedLessons.length}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'ar' ? 'دروس مكتملة' : 'Lessons Completed'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroComputer3D />
          </div>
        </div>
      </section>

      {/* 2. FEATURED COURSES / LEARNING CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-t border-slate-800/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t(UI_STRINGS.sections.featuredCourses, lang)}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t(UI_STRINGS.sections.featuredCoursesSub, lang)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ view: 'learning' })}
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>{t(UI_STRINGS.sections.viewAll, lang)}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => navigate({ view: 'learning', categoryId: cat.id })}
              className="glass-surface rounded-2xl p-5 text-start hover:border-cyan-400/45 transition-all group flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    {CATEGORY_ICONS[cat.id]}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    0{CATEGORIES.indexOf(cat) + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t(cat.title, lang)}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t(cat.description, lang)}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="tabular-nums">
                  {cat.lessonCount} {t(UI_STRINGS.sections.lessonsLabel, lang)}
                </span>
                <ArrowIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. 3D PC BUILDER LAB PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="glass-surface rounded-2xl overflow-hidden grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="text-xs font-medium text-cyan-400">
                {lang === 'ar'
                  ? 'الميزة الرئيسية · محرك Three.js ثلاثي الأبعاد'
                  : 'Flagship Lab · Real-Time Three.js Hardware Simulator'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {t(UI_STRINGS.sections.labPreviewTitle, lang)}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t(UI_STRINGS.sections.labPreviewDesc, lang)}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {PC_COMPONENTS.map((comp) => (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() =>
                      navigate({ view: 'lab', focusComponent: comp.id })
                    }
                    className="px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 text-start truncate transition-colors"
                  >
                    {t(comp.shortName, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate({ view: 'lab' })}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>{t(UI_STRINGS.sections.launchLab, lang)}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[280px] bg-[#060C1C]">
            <img
              src="/src/assets/images/course_architecture_blueprint_1795787319183.jpg"
              alt="Isometric 3D PC Hardware Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A17]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 4. POPULAR LESSONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-t border-slate-800/70">
        <div className="space-y-2 max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t(UI_STRINGS.sections.popularLessons, lang)}
          </h2>
          <p className="text-sm text-slate-400">
            {t(UI_STRINGS.sections.popularLessonsSub, lang)}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularLessons.map((lesson) => {
            const cat = CATEGORIES.find((c) => c.id === lesson.categoryId);
            const isDone = completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => navigate({ view: 'lesson', lessonId: lesson.id })}
                className="glass-surface-subtle hover:border-cyan-500/40 rounded-2xl p-6 text-start transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{cat ? t(cat.title, lang) : ''}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      {lesson.readMinutes} {lang === 'ar' ? 'د' : 'min'}
                    </span>
                    {isDone && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-medium">
                          {t(UI_STRINGS.lesson.completedBadge, lang)}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(lesson.title, lang)}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {t(lesson.definition, lang)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 pt-2">
                  <span>{t(UI_STRINGS.sections.openLesson, lang)}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. LATEST TECHNOLOGY ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-t border-slate-800/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t(UI_STRINGS.sections.latestArticles, lang)}
            </h2>
            <p className="text-sm text-slate-400">
              {t(UI_STRINGS.sections.latestArticlesSub, lang)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ view: 'articles' })}
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>{t(UI_STRINGS.nav.articles, lang)}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="glass-surface-subtle rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-cyan-500/35 transition-colors"
            >
              <div>
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={article.image}
                    alt={t(article.imageAlt, lang)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{t(article.category, lang)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t(article.date, lang)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t(article.readTime, lang)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {t(article.title, lang)}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {t(article.excerpt, lang)}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={() =>
                    navigate({ view: 'articles', articleId: article.id })
                  }
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
                >
                  <span>{t(UI_STRINGS.sections.readArticle, lang)}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
