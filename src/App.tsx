import React, { useState, useEffect } from 'react';
import { useRouter } from './hooks/useRouter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CheatSheetModal } from './components/CheatSheetModal';
import { VideoTutorialModal } from './components/VideoTutorialModal';

import { HomePage } from './pages/HomePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ProductReviewPage } from './pages/ProductReviewPage';
import { CategoryPage } from './pages/CategoryPage';
import { TagPage } from './pages/TagPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { EditorialTeamPage } from './pages/EditorialTeamPage';
import { SitemapPage } from './pages/SitemapPage';
import { AdminBlogEditorPage } from './pages/AdminBlogEditorPage';

export default function App() {
  const { path, params, navigate } = useRouter();
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('techvani_theme') === 'dark';
    }
    return false;
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isVideoTutorialOpen, setIsVideoTutorialOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('techvani_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('techvani_theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  // Render appropriate page view
  const renderCurrentView = () => {
    if (path === '/article/:slug' && params.slug) {
      return <ArticleDetailPage slug={params.slug} onNavigate={navigate} />;
    }
    if (path === '/product/:slug' && params.slug) {
      return <ProductReviewPage slug={params.slug} onNavigate={navigate} />;
    }
    if (path === '/category/:slug' && params.slug) {
      return <CategoryPage slug={params.slug} onNavigate={navigate} />;
    }
    if (path === '/tag/:slug' && params.slug) {
      return <TagPage slug={params.slug} onNavigate={navigate} />;
    }
    if (path === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (path === '/about') {
      return <AboutUsPage onNavigate={navigate} />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }
    if (path === '/terms') {
      return <TermsPage />;
    }
    if (path === '/editorial-team') {
      return <EditorialTeamPage />;
    }
    if (path === '/sitemap') {
      return <SitemapPage onNavigate={navigate} />;
    }
    if (path === '/admin') {
      return <AdminBlogEditorPage onNavigate={navigate} />;
    }

    // Default to Home
    return (
      <HomePage
        onNavigate={navigate}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenVideoTutorial={() => setIsVideoTutorialOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#f6faff] dark:bg-[#10171d] text-[#141d23] dark:text-[#e0e9f2] flex flex-col font-sans transition-colors duration-200">
      {/* 3-Tier Fixed Header */}
      <Header
        currentPath={path}
        onNavigate={navigate}
        isDark={isDark}
        onToggleDark={toggleDark}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-36">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(slug) => navigate(`/article/${slug}`)}
      />

      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      <VideoTutorialModal
        isOpen={isVideoTutorialOpen}
        onClose={() => setIsVideoTutorialOpen(false)}
      />
    </div>
  );
}
