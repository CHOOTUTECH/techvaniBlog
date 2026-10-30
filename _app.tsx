// pages/_app.tsx
import '../src/index.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { SearchModal } from '../src/components/SearchModal';
import { CheatSheetModal } from '../src/components/CheatSheetModal';
import { VideoTutorialModal } from '../src/components/VideoTutorialModal';

// 🔥 कॉन्टेक्स्ट इम्पोर्ट करें
import { LanguageContext, ModalContext } from '../src/context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isVideoTutorialOpen, setIsVideoTutorialOpen] = useState(false);
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  useEffect(() => {
    // डार्क मोड लोड करें
    const storedTheme = localStorage.getItem('techvani_theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    // भाषा लोड करें
    const storedLang = localStorage.getItem('techvani_lang') as 'hi' | 'en';
    if (storedLang === 'en' || storedLang === 'hi') {
      setLanguage(storedLang);
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('techvani_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('techvani_theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'hi' ? 'en' : 'hi';
    setLanguage(newLang);
    localStorage.setItem('techvani_lang', newLang);
    // 🔥 सर्वर को भाषा बताने के लिए कुकी सेट करें
    document.cookie = `techvani_lang=${newLang}; path=/; max-age=31536000`; 
    // पेज रिफ्रेश करें ताकि API नई भाषा में डेटा लाए
    window.location.reload(); 
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <ModalContext.Provider value={{ openCheatSheet: () => setIsCheatSheetOpen(true), openVideoTutorial: () => setIsVideoTutorialOpen(true) }}>
        <div className="min-h-screen bg-[#f6faff] dark:bg-[#10171d] text-[#141d23] dark:text-[#e0e9f2] flex flex-col font-sans transition-colors duration-300">
          
          <Header isDark={isDark} onToggleDark={toggleDark} onOpenSearch={() => setIsSearchOpen(true)} />

          <main className="flex-1 pt-32 sm:pt-36">
            <Component {...pageProps} />
          </main>

          <Footer />

          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          <CheatSheetModal isOpen={isCheatSheetOpen} onClose={() => setIsCheatSheetOpen(false)} />
          <VideoTutorialModal isOpen={isVideoTutorialOpen} onClose={() => setIsVideoTutorialOpen(false)} />
        </div>
      </ModalContext.Provider>
    </LanguageContext.Provider>
  );
}