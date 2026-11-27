import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { t, UI_STRINGS } from '../data/uiStrings';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, route, navigate } = useAcademy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: 'home' as const, label: t(UI_STRINGS.nav.home, lang), active: route.view === 'home' },
    {
      key: 'learning' as const,
      label: t(UI_STRINGS.nav.learning, lang),
      active: route.view === 'learning' || route.view === 'lesson',
    },
    { key: 'lab' as const, label: t(UI_STRINGS.nav.lab, lang), active: route.view === 'lab' },
    { key: 'articles' as const, label: t(UI_STRINGS.nav.articles, lang), active: route.view === 'articles' },
    { key: 'mail' as const, label: t(UI_STRINGS.nav.mail, lang), active: route.view === 'mail' },
  ];

  const handleNav = (view: 'home' | 'learning' | 'lab' | 'articles' | 'mail') => {
    setMobileOpen(false);
    navigate({ view });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050A17]/95 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Mark */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-start whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="8"
              fill="#0B1326"
              stroke="#22D3EE"
              strokeWidth="2"
            />
            <path
              d="M10 24V12L17 24V12M26 14.5C24.8 12.8 22.8 12 20.8 12.5C18.8 13 17.6 15.2 17.8 18C18 20.8 19.6 23 22 23.5C23.8 23.8 25.2 23 26 21.5"
              stroke="#38BDF8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
            {t(UI_STRINGS.brandName, lang)}
          </span>
        </button>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleNav(item.key)}
              className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                item.active ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            className="px-3 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/60 bg-slate-900/70 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('learning')}
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t(UI_STRINGS.nav.startLearning, lang)}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#070E20] px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleNav(item.key)}
              className={`w-full text-start px-3 py-2.5 rounded-lg text-sm font-medium ${
                item.active
                  ? 'bg-cyan-500/15 text-cyan-300'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav('learning')}
            className="w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold"
          >
            {t(UI_STRINGS.nav.startLearning, lang)}
          </button>
        </div>
      )}
    </header>
  );
};
