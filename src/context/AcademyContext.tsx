import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Language, PageRoute } from '../types/academy';

interface AcademyContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  route: PageRoute;
  navigate: (nextRoute: PageRoute) => void;
  completedLessons: string[];
  toggleLessonComplete: (lessonId: string) => void;
  markLessonComplete: (lessonId: string) => void;
  quizScores: Record<string, number>;
  saveQuizScore: (lessonId: string, score: number) => void;
}

const AcademyContext = createContext<AcademyContextValue | null>(null);

const STORAGE_LANG_KEY = 'nc_academy_lang';
const STORAGE_COMPLETED_KEY = 'nc_academy_completed';
const STORAGE_QUIZ_KEY = 'nc_academy_quiz_scores';

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const [route, setRoute] = useState<PageRoute>({ view: 'home' });

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_COMPLETED_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_QUIZ_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const navigate = useCallback((nextRoute: PageRoute) => {
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleLessonComplete = useCallback((lessonId: string) => {
    setCompletedLessons((prev) => {
      const exists = prev.includes(lessonId);
      const next = exists ? prev.filter((id) => id !== lessonId) : [...prev, lessonId];
      try {
        localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const markLessonComplete = useCallback((lessonId: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) return prev;
      const next = [...prev, lessonId];
      try {
        localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const saveQuizScore = useCallback((lessonId: string, score: number) => {
    setQuizScores((prev) => {
      const next = { ...prev, [lessonId]: Math.max(prev[lessonId] ?? 0, score) };
      try {
        localStorage.setItem(STORAGE_QUIZ_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <AcademyContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        route,
        navigate,
        completedLessons,
        toggleLessonComplete,
        markLessonComplete,
        quizScores,
        saveQuizScore,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export function useAcademy(): AcademyContextValue {
  const ctx = useContext(AcademyContext);
  if (!ctx) throw new Error('useAcademy must be used inside AcademyProvider');
  return ctx;
}
