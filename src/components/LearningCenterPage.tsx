import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  Circle,
  RotateCcw,
  Search,
} from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { ALL_LESSONS, CATEGORIES, getLessonsByCategory } from '../data/curriculum';
import { CATEGORY_COLORS, t, UI_STRINGS } from '../data/uiStrings';
import { CategoryId } from '../types/academy';

type CompletionFilter = 'all' | 'completed' | 'incomplete';

export const LearningCenterPage: React.FC<{
  initialCategory?: CategoryId;
}> = ({ initialCategory }) => {
  const {
    lang,
    navigate,
    completedLessons,
    toggleLessonComplete,
    resetProgress,
    quizScores,
  } = useAcademy();

  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    initialCategory ?? 'all'
  );
  const [statusFilter, setStatusFilter] = useState<CompletionFilter>('all');
  const [search, setSearch] = useState('');
  const [confirmingReset, setConfirmingReset] = useState(false);

  React.useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const completedSet = useMemo(
    () => new Set(completedLessons),
    [completedLessons]
  );

  const categoryProgress = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const catLessons = getLessonsByCategory(cat.id);
      const done = catLessons.filter((l) => completedSet.has(l.id)).length;
      const total = catLessons.length;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      return {
        ...cat,
        done,
        total,
        pct,
      };
    });
  }, [completedSet]);

  const filteredLessons = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_LESSONS.filter((lesson) => {
      if (selectedCategory !== 'all' && lesson.categoryId !== selectedCategory) {
        return false;
      }
      const isDone = completedSet.has(lesson.id);
      if (statusFilter === 'completed' && !isDone) return false;
      if (statusFilter === 'incomplete' && isDone) return false;

      if (!q) return true;
      return (
        lesson.title.en.toLowerCase().includes(q) ||
        lesson.title.ar.toLowerCase().includes(q) ||
        lesson.definition.en.toLowerCase().includes(q) ||
        lesson.definition.ar.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, statusFilter, search, completedSet]);

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const totalLessons = ALL_LESSONS.length;
  const totalCompleted = ALL_LESSONS.filter((l) => completedSet.has(l.id)).length;
  const totalRemaining = totalLessons - totalCompleted;
  const progressPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t(UI_STRINGS.learningCenter.title, lang)}
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            {t(UI_STRINGS.learningCenter.subtitle, lang)}
          </p>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t(UI_STRINGS.learningCenter.savedLocally, lang)}</span>
        </div>
      </div>

      {/* Course Progress Tracker Panel */}
      <section
        aria-label={t(UI_STRINGS.learningCenter.yourProgress, lang)}
        className="glass-surface rounded-2xl p-6 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cyan-400 shrink-0" />
              <h2 className="text-lg font-bold text-white">
                {t(UI_STRINGS.learningCenter.yourProgress, lang)}
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              {totalCompleted} / {totalLessons}{' '}
              {t(UI_STRINGS.learningCenter.lessonsCompletedOf, lang)} ·{' '}
              {totalRemaining} {t(UI_STRINGS.learningCenter.remainingLessons, lang)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="text-2xl font-extrabold font-mono text-cyan-300 tabular-nums">
              {progressPct}%
            </div>

            {totalCompleted > 0 && (
              confirmingReset ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      resetProgress();
                      setConfirmingReset(false);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors"
                  >
                    {t(UI_STRINGS.learningCenter.confirmReset, lang)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmingReset(false)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    {t(UI_STRINGS.learningCenter.cancel, lang)}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmingReset(true)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t(UI_STRINGS.learningCenter.resetProgress, lang)}</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Per-Course / Category Progress Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {categoryProgress.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const accent = CATEGORY_COLORS[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setSelectedCategory((prev) => (prev === cat.id ? 'all' : cat.id))
                }
                className={`rounded-xl p-3.5 text-start border transition-all space-y-2.5 ${
                  isSelected
                    ? 'bg-cyan-500/10 border-cyan-400/70'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800"
                    style={{ color: accent }}
                  >
                    {cat.code}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-200 tabular-nums">
                    {cat.done}/{cat.total}
                  </span>
                </div>

                <div className="text-xs font-semibold text-white line-clamp-1">
                  {t(cat.title, lang)}
                </div>

                <div className="space-y-1">
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                    <div
                      className="h-full transition-all duration-300 rounded-full"
                      style={{
                        width: `${cat.pct}%`,
                        backgroundColor: cat.pct === 100 ? '#34D399' : accent,
                      }}
                    />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tabular-nums">
                    {cat.pct}%
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Category Filter Tabs, Completion Filter & Search */}
      <div className="space-y-3">
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

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
              {(
                [
                  { id: 'all', label: UI_STRINGS.learningCenter.filterAll },
                  { id: 'incomplete', label: UI_STRINGS.learningCenter.filterIncomplete },
                  { id: 'completed', label: UI_STRINGS.learningCenter.filterCompleted },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    statusFilter === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t(tab.label, lang)}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 lg:w-72 shrink-0">
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
            const isDone = completedSet.has(lesson.id);
            const bestScore = quizScores[lesson.id];

            return (
              <div
                key={lesson.id}
                className={`glass-surface-subtle rounded-2xl p-6 transition-all flex flex-col justify-between gap-4 border ${
                  isDone
                    ? 'border-emerald-500/35 hover:border-emerald-400/60'
                    : 'border-slate-800/80 hover:border-cyan-500/45'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span>
                      {cat ? `${cat.code}${lesson.order}. ${t(cat.title, lang)}` : ''}
                    </span>

                    <div className="flex items-center gap-2.5">
                      <span className="tabular-nums">
                        {lesson.readMinutes} {lang === 'ar' ? 'د' : 'min'}
                      </span>

                      <button
                        type="button"
                        aria-pressed={isDone}
                        aria-label={`${t(lesson.title, lang)} — ${
                          isDone
                            ? t(UI_STRINGS.learningCenter.doneLabel, lang)
                            : t(UI_STRINGS.learningCenter.markDone, lang)
                        }`}
                        onClick={() => toggleLessonComplete(lesson.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                          isDone
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/25'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200'
                        }`}
                      >
                        {isDone ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        <span>
                          {isDone
                            ? t(UI_STRINGS.learningCenter.doneLabel, lang)
                            : t(UI_STRINGS.learningCenter.markDone, lang)}
                        </span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate({ view: 'lesson', lessonId: lesson.id })}
                    className="block text-start group space-y-2 w-full"
                  >
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t(lesson.title, lang)}
                    </h2>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {t(lesson.definition, lang)}
                    </p>
                  </button>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span>{t(UI_STRINGS.levels[lesson.level], lang)}</span>
                    {bestScore !== undefined && (
                      <span className="font-mono text-[11px] text-cyan-300 tabular-nums">
                        · {bestScore}/{lesson.quiz.length}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate({ view: 'lesson', lessonId: lesson.id })}
                    className={`font-semibold inline-flex items-center gap-1 transition-colors ${
                      isDone
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    <span>{t(UI_STRINGS.sections.openLesson, lang)}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};
