import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { ALL_LESSONS, CATEGORIES } from '../data/curriculum';
import { t, UI_STRINGS } from '../data/uiStrings';
import { CategoryId } from '../types/academy';

export const LearningCenterPage: React.FC<{
  initialCategory?: CategoryId;
}> = ({ initialCategory }) => {
  const { lang, navigate, completedLessons } = useAcademy();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    initialCategory ?? 'all'
  );
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredLessons = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_LESSONS.filter((lesson) => {
      if (selectedCategory !== 'all' && lesson.categoryId !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        lesson.title.en.toLowerCase().includes(q) ||
        lesson.title.ar.toLowerCase().includes(q) ||
        lesson.definition.en.toLowerCase().includes(q) ||
        lesson.definition.ar.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, search]);

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const progressPct = Math.round(
    (completedLessons.length / ALL_LESSONS.length) * 100
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header & Progress */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t(UI_STRINGS.learningCenter.title, lang)}
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            {t(UI_STRINGS.learningCenter.subtitle, lang)}
          </p>
        </div>

        <div className="glass-surface-subtle rounded-xl px-5 py-4 min-w-[260px] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">
              {t(UI_STRINGS.learningCenter.yourProgress, lang)}
            </span>
            <span className="font-mono text-cyan-300 font-semibold tabular-nums">
              {completedLessons.length} / {ALL_LESSONS.length} ({progressPct}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t(UI_STRINGS.learningCenter.allCategories, lang)} ({ALL_LESSONS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {cat.code}. {t(cat.title, lang)} ({cat.lessonCount})
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(UI_STRINGS.learningCenter.searchPlaceholder, lang)}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Lessons Grid */}
      {filteredLessons.length === 0 ? (
        <div className="glass-surface-subtle rounded-2xl p-12 text-center text-slate-400 text-sm">
          {t(UI_STRINGS.learningCenter.noResults, lang)}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLessons.map((lesson) => {
            const cat = CATEGORIES.find((c) => c.id === lesson.categoryId);
            const isDone = completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => navigate({ view: 'lesson', lessonId: lesson.id })}
                className="glass-surface-subtle hover:border-cyan-500/45 rounded-2xl p-6 text-start transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span>
                      {cat ? `${cat.code}${lesson.order}. ${t(cat.title, lang)}` : ''}
                    </span>
                    <span className="tabular-nums">
                      {lesson.readMinutes} {lang === 'ar' ? 'د' : 'min'}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(lesson.title, lang)}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {t(lesson.definition, lang)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {t(UI_STRINGS.levels[lesson.level], lang)}
                  </span>
                  {isDone ? (
                    <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t(UI_STRINGS.lesson.completedBadge, lang)}</span>
                    </span>
                  ) : (
                    <span className="text-cyan-400 font-semibold inline-flex items-center gap-1">
                      <span>{t(UI_STRINGS.sections.openLesson, lang)}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </main>
  );
};
