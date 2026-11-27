/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AcademyProvider, useAcademy } from './context/AcademyContext';
import { ArticlesPage } from './components/ArticlesPage';
import { Footer } from './components/Footer';
import { GmailWorkspacePage } from './components/GmailWorkspacePage';
import { HomePage } from './components/HomePage';
import { LearningCenterPage } from './components/LearningCenterPage';
import { LessonPage } from './components/LessonPage';
import { Navbar } from './components/Navbar';
import { PCLab3D } from './components/PCLab3D';

const AcademyShell: React.FC = () => {
  const { route } = useAcademy();

  return (
    <div className="min-h-screen flex flex-col bg-[#050A17] text-slate-100">
      <Navbar />
      <div className="flex-1">
        {route.view === 'home' && <HomePage />}
        {route.view === 'learning' && (
          <LearningCenterPage initialCategory={route.categoryId} />
        )}
        {route.view === 'lesson' && <LessonPage lessonId={route.lessonId} />}
        {route.view === 'lab' && (
          <PCLab3D initialComponent={route.focusComponent} />
        )}
        {route.view === 'articles' && (
          <ArticlesPage initialArticleId={route.articleId} />
        )}
        {route.view === 'mail' && (
          <GmailWorkspacePage
            prefillSubject={route.prefillSubject}
            prefillBody={route.prefillBody}
          />
        )}
      </div>
      {route.view !== 'lab' && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <AcademyProvider>
      <AcademyShell />
    </AcademyProvider>
  );
}
