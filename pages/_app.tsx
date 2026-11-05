// pages/_app.tsx
import '../src/index.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';  // ✅ यह नया import
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { LanguageContext } from '../src/context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('techvani-lang');
      if (saved === 'hi' || saved === 'en') setLanguage(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('techvani-lang', language);
      document.documentElement.lang = language;
    } catch {}
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((v) => (v === 'hi' ? 'en' : 'hi'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow" style={{ paddingTop: '146px' }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      {/* ✅ Google Analytics — return के सबसे अंदर, Provider के अंदर */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </LanguageContext.Provider>
  );
}