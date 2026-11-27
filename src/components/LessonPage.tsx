import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Box,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import {
  ALL_LESSONS,
  getCategoryMeta,
  getLessonById,
} from '../data/curriculum';
import { t, UI_STRINGS } from '../data/uiStrings';
import { InteractiveDiagramWidget } from './InteractiveDiagrams';
import { LessonIllustration } from './LessonIllustration';

export const LessonPage: React.FC<{ lessonId: string }> = ({ lessonId }) => {
  const {
    lang,
    navigate,
    completedLessons,
    toggleLessonComplete,
    markLessonComplete,
    saveQuizScore,
  } = useAcademy();

  const lesson = getLessonById(lessonId) ?? ALL_LESSONS[0];
  const category = getCategoryMeta(lesson.categoryId);

  const currentIdx = ALL_LESSONS.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIdx > 0 ? ALL_LESSONS[currentIdx - 1] : null;
  const nextLesson =
    currentIdx >= 0 && currentIdx < ALL_LESSONS.length - 1
      ? ALL_LESSONS[currentIdx + 1]
      : null;

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
  }, [lesson.id]);

  const isCompleted = completedLessons.includes(lesson.id);
  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const PrevArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const NextArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const correctCount = lesson.quiz.reduce(
    (acc, q, idx) => (answers[idx] === q.correctIndex ? acc + 1 : acc),
    0
  );

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    saveQuizScore(lesson.id, correctCount);
    if (correctCount >= Math.ceil(lesson.quiz.length * 0.66)) {
      markLessonComplete(lesson.id);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Top Breadcrumb + 3D Lab shortcut */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() =>
            navigate({ view: 'learning', categoryId: lesson.categoryId })
          }
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
        >
          <BackArrow className="w-4 h-4" />
          <span>{t(UI_STRINGS.lesson.backToLibrary, lang)}</span>
        </button>

        {lesson.linked3DComponent && (
          <button
            type="button"
            onClick={() =>
              navigate({ view: 'lab', focusComponent: lesson.linked3DComponent })
            }
            className="px-4 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <Box className="w-4 h-4" />
            <span>{t(UI_STRINGS.lesson.inspectIn3D, lang)}</span>
          </button>
        )}
      </div>

      {/* Lesson Title Header (Bilingual EN & AR) */}
      <header className="glass-surface rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span>
            {category ? `${category.code}${lesson.order}. ${t(category.title, lang)}` : ''}
          </span>
          <span aria-hidden="true">·</span>
          <span>{t(UI_STRINGS.levels[lesson.level], lang)}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            {lesson.readMinutes} {lang === 'ar' ? 'دقائق قراءة' : 'min read'}
          </span>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {t(lesson.title, lang)}
          </h1>
          <p
            dir={lang === 'en' ? 'rtl' : 'ltr'}
            className="text-base sm:text-lg font-medium text-cyan-300/90"
          >
            {lang === 'en' ? lesson.title.ar : lesson.title.en}
          </p>
        </div>

        {/* Definition Block */}
        <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
          <div className="text-xs font-semibold text-cyan-400">
            {t(UI_STRINGS.lesson.definition, lang)}
          </div>
          <p className="text-base text-slate-100 leading-relaxed">
            {t(lesson.definition, lang)}
          </p>
        </div>
      </header>

      {/* Educational Schematic Illustration */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-300">
          {t(UI_STRINGS.lesson.illustration, lang)}
        </h2>
        <LessonIllustration
          illustrationKey={lesson.illustrationKey}
          title={t(lesson.title, lang)}
        />
      </section>

      {/* Interactive Concept Explorer (when relevant) */}
      {lesson.interactiveDiagram !== 'none' && (
        <section className="glass-surface rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.interactiveLab, lang)}
          </h2>
          <InteractiveDiagramWidget type={lesson.interactiveDiagram} />
        </section>
      )}

      {/* Detailed Explanation & How It Works */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass-surface-subtle rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.detailedExplanation, lang)}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t(lesson.detailedExplanation, lang)}
          </p>
        </section>

        <section className="glass-surface-subtle rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.howItWorks, lang)}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t(lesson.howItWorks, lang)}
          </p>
        </section>
      </div>

      {/* Main Functions & Real-World Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass-surface-subtle rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.mainFunctions, lang)}
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {lesson.mainFunctions.map((fn, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-cyan-400 mt-0.5 tabular-nums">
                  0{i + 1}.
                </span>
                <span className="leading-relaxed">{t(fn, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-surface-subtle rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.realWorldExamples, lang)}
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {lesson.realWorldExamples.map((ex, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-blue-400 mt-0.5 tabular-nums">
                  0{i + 1}.
                </span>
                <span className="leading-relaxed">{t(ex, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Important Bilingual Vocabulary Table */}
      <section className="glass-surface-subtle rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <h2 className="text-lg font-bold text-white">
            {t(UI_STRINGS.lesson.vocabulary, lang)}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs text-slate-400 bg-slate-900/60">
                <th className="py-3 px-5 text-start font-semibold">
                  {t(UI_STRINGS.lesson.englishTerm, lang)}
                </th>
                <th className="py-3 px-5 text-start font-semibold">
                  {t(UI_STRINGS.lesson.arabicTerm, lang)}
                </th>
                <th className="py-3 px-5 text-start font-semibold">
                  {t(UI_STRINGS.lesson.explanation, lang)}
                </th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocabulary.map((v, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-800/60 last:border-b-0"
                >
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-cyan-300">
                    {v.termEn}
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-white">
                    {v.termAr}
                  </td>
                  <td className="py-3.5 px-5 text-slate-300">
                    {lang === 'ar' ? v.meaningAr : v.meaningEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary & Completion Toggle */}
      <section className="glass-surface rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h2 className="text-sm font-bold text-cyan-400">
            {t(UI_STRINGS.lesson.summary, lang)}
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            {t(lesson.summary, lang)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => toggleLessonComplete(lesson.id)}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2 ${
            isCompleted
              ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
              : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>
            {isCompleted
              ? t(UI_STRINGS.lesson.completedBadge, lang)
              : t(UI_STRINGS.lesson.markComplete, lang)}
          </span>
        </button>
      </section>

      {/* Interactive Quiz */}
      <section className="glass-surface rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-white">
            {t(UI_STRINGS.lesson.quizTitle, lang)}
          </h2>
          {submitted && (
            <div className="text-sm font-mono font-semibold text-cyan-300 tabular-nums">
              {lang === 'ar' ? 'النتيجة:' : 'Score:'} {correctCount} / {lesson.quiz.length}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {lesson.quiz.map((q, qIdx) => {
            const chosen = answers[qIdx];
            return (
              <div
                key={qIdx}
                className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3"
              >
                <p className="text-sm font-semibold text-white">
                  {qIdx + 1}. {t(q.question, lang)}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosen === optIdx;
                    const isCorrect = optIdx === q.correctIndex;
                    let cls =
                      'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700';

                    if (submitted) {
                      if (isCorrect) {
                        cls = 'bg-emerald-950/50 border-emerald-500 text-emerald-200';
                      } else if (isSelected && !isCorrect) {
                        cls = 'bg-rose-950/50 border-rose-500 text-rose-200';
                      }
                    } else if (isSelected) {
                      cls = 'bg-cyan-500/15 border-cyan-400 text-white';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
                        }
                        className={`w-full text-start px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between gap-3 ${cls}`}
                      >
                        <span>{t(opt, lang)}</span>
                        {submitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="text-xs text-slate-400 pt-1">
                    {t(q.explanation, lang)}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!submitted ? (
            <button
              type="button"
              disabled={Object.keys(answers).length < lesson.quiz.length}
              onClick={handleSubmitQuiz}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
            >
              {t(UI_STRINGS.lesson.checkAnswer, lang)}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t(UI_STRINGS.lesson.retakeQuiz, lang)}</span>
            </button>
          )}
        </div>
      </section>

      {/* Previous / Next Lesson Navigation */}
      <nav className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
        {prevLesson ? (
          <button
            type="button"
            onClick={() => navigate({ view: 'lesson', lessonId: prevLesson.id })}
            className="glass-surface-subtle hover:border-cyan-500/40 rounded-xl p-4 text-start flex items-center gap-3 transition-colors"
          >
            <PrevArrow className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-[11px] text-slate-400">
                {t(UI_STRINGS.lesson.prevLesson, lang)}
              </div>
              <div className="text-sm font-semibold text-white">
                {t(prevLesson.title, lang)}
              </div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextLesson && (
          <button
            type="button"
            onClick={() => navigate({ view: 'lesson', lessonId: nextLesson.id })}
            className="glass-surface-subtle hover:border-cyan-500/40 rounded-xl p-4 text-end flex items-center justify-end gap-3 transition-colors"
          >
            <div>
              <div className="text-[11px] text-slate-400">
                {t(UI_STRINGS.lesson.nextLesson, lang)}
              </div>
              <div className="text-sm font-semibold text-white">
                {t(nextLesson.title, lang)}
              </div>
            </div>
            <NextArrow className="w-4 h-4 text-cyan-400 shrink-0" />
          </button>
        )}
      </nav>
    </main>
  );
};
