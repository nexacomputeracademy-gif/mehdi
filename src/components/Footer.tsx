import React from 'react';
import { Github, Globe, Mail, Youtube } from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { CATEGORIES } from '../data/curriculum';
import { t, UI_STRINGS } from '../data/uiStrings';

export const Footer: React.FC = () => {
  const { lang, navigate } = useAcademy();

  return (
    <footer className="border-t border-slate-800/80 bg-[#040814] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-3">
          <div className="text-lg font-bold text-white">
            {t(UI_STRINGS.brandName, lang)}
          </div>
          <p className="text-xs text-cyan-400 font-medium">
            {t(UI_STRINGS.byCreator, lang)} · {t(UI_STRINGS.tagline, lang)}
          </p>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t(UI_STRINGS.footer.rights, lang)}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-slate-200 tracking-wide">
            {t(UI_STRINGS.footer.curriculum, lang)}
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => navigate({ view: 'learning', categoryId: cat.id })}
                  className="hover:text-cyan-300 transition-colors text-start"
                >
                  {t(cat.title, lang)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-slate-200 tracking-wide">
            {t(UI_STRINGS.footer.platform, lang)}
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <button
                type="button"
                onClick={() => navigate({ view: 'lab' })}
                className="hover:text-cyan-300 transition-colors"
              >
                {t(UI_STRINGS.nav.lab, lang)}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate({ view: 'learning' })}
                className="hover:text-cyan-300 transition-colors"
              >
                {t(UI_STRINGS.nav.learning, lang)}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate({ view: 'articles' })}
                className="hover:text-cyan-300 transition-colors"
              >
                {t(UI_STRINGS.nav.articles, lang)}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate({ view: 'mail' })}
                className="hover:text-cyan-300 transition-colors"
              >
                {t(UI_STRINGS.nav.mail, lang)}
              </button>
            </li>
          </ul>

          <div className="pt-3 flex items-center gap-3">
            <a
              href="#github"
              onClick={(e) => {
                e.preventDefault();
                navigate({ view: 'home' });
              }}
              aria-label="GitHub"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              onClick={(e) => {
                e.preventDefault();
                navigate({ view: 'lab' });
              }}
              aria-label="YouTube"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#web"
              onClick={(e) => {
                e.preventDefault();
                navigate({ view: 'articles' });
              }}
              aria-label="Website"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="mailto:nexacomputeracademy@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
