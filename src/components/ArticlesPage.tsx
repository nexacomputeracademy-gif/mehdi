import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { ARTICLES } from '../data/articles';
import { t, UI_STRINGS } from '../data/uiStrings';

export const ArticlesPage: React.FC<{ initialArticleId?: string }> = ({
  initialArticleId,
}) => {
  const { lang, navigate } = useAcademy();
  const [activeId, setActiveId] = useState<string>(
    initialArticleId ?? ARTICLES[0].id
  );

  useEffect(() => {
    if (initialArticleId) setActiveId(initialArticleId);
  }, [initialArticleId]);

  const activeArticle =
    ARTICLES.find((a) => a.id === activeId) ?? ARTICLES[0];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <div className="space-y-2 border-b border-slate-800/80 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t(UI_STRINGS.sections.latestArticles, lang)}
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          {t(UI_STRINGS.sections.latestArticlesSub, lang)}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Article Selector List */}
        <div className="lg:col-span-4 space-y-3">
          {ARTICLES.map((art) => {
            const isSel = art.id === activeArticle.id;
            return (
              <button
                key={art.id}
                type="button"
                onClick={() => setActiveId(art.id)}
                className={`w-full text-start p-4 rounded-2xl border transition-colors space-y-1.5 ${
                  isSel
                    ? 'bg-cyan-500/10 border-cyan-400/60'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[11px] text-cyan-400 flex items-center gap-2">
                  <span>{t(art.category, lang)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t(art.readTime, lang)}</span>
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  {t(art.title, lang)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Full Article Reader */}
        <article className="lg:col-span-8 glass-surface rounded-2xl overflow-hidden">
          <div className="aspect-[16/9] bg-slate-900 overflow-hidden">
            <img
              src={activeArticle.image}
              alt={t(activeArticle.imageAlt, lang)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-cyan-400 font-medium">
                {t(activeArticle.category, lang)}
              </span>
              <span aria-hidden="true">·</span>
              <span>{t(activeArticle.date, lang)}</span>
              <span aria-hidden="true">·</span>
              <span>{t(activeArticle.readTime, lang)}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {t(activeArticle.title, lang)}
            </h2>

            <p className="text-base text-cyan-200/90 leading-relaxed">
              {t(activeArticle.excerpt, lang)}
            </p>

            <div className="space-y-4 pt-2 border-t border-slate-800/80">
              {activeArticle.body.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed"
                >
                  {t(para, lang)}
                </p>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() =>
                  navigate({
                    view: 'learning',
                    categoryId: activeArticle.relatedCategoryId,
                  })
                }
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? 'استكشف الدروس المرتبطة بهذا الموضوع'
                    : 'Explore Related Curriculum Track'}
                </span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};
