// pages/tools/[slug].tsx
import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { LanguageContext } from '../../src/context/AppContext';

interface ToolViewerPageProps {
  slug: string;
}

export default function ToolViewerPage({ slug }: ToolViewerPageProps) {
  const { language } = useContext(LanguageContext);
  
  // Word Counter के लिए स्टेट
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

  const toolTitle = language === 'hi' 
    ? (slug === 'word-counter' ? 'वर्ड और कैरेक्टर काउंटर' : slug === 'image-compressor' ? 'इमेज कंप्रेसर' : 'पासवर्ड जनरेटर')
    : (slug === 'word-counter' ? 'Word & Character Counter' : slug === 'image-compressor' ? 'Image Compressor' : 'Password Generator');

  return (
    <>
      <Head>
        <title>{toolTitle} - टेकवाणी</title>
        <meta name="description" content={`Free online ${toolTitle} tool.`} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#bb010d]">{language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#bb010d]">{language === 'hi' ? 'ऑनलाइन टूल्स' : 'Online Tools'}</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200">{toolTitle}</span>
        </nav>

        <div className="bg-white dark:bg-[#131b22] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-10 shadow-sm">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-red-50 dark:bg-red-950/40 text-[#bb010d] rounded-2xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">
                {slug === 'word-counter' ? 'format_size' : slug === 'image-compressor' ? 'image' : 'key'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              {toolTitle}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'hi' ? 'नीचे दिए गए बॉक्स में अपना टेक्स्ट पेस्ट करें।' : 'Paste your text in the box below.'}
            </p>
          </div>

          {/* 🔥 असली टूल का इंटरफ़ेस (सिर्फ Word Counter के लिए उदाहरण) */}
          {slug === 'word-counter' && (
            <div className="space-y-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={language === 'hi' ? 'यहाँ अपना टेक्स्ट लिखें या पेस्ट करें...' : 'Type or paste your text here...'}
                rows={10}
                className="w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bb010d] transition-all"
              />
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-[#bb010d]">{wordCount}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{language === 'hi' ? 'शब्द (Words)' : 'Words'}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-[#bb010d]">{charCount}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{language === 'hi' ? 'अक्षर (Characters)' : 'Characters'}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-[#bb010d]">{readingTime}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{language === 'hi' ? 'मिनट पढ़ने का समय' : 'Min read time'}</div>
                </div>
              </div>
            </div>
          )}

          {/* बाकी टूल्स के लिए प्लेसहोल्डर */}
          {slug !== 'word-counter' && (
            <div className="p-10 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
              <p className="text-sm font-medium text-gray-500">
                {language === 'hi' ? 'यह टूल जल्द ही लॉन्च होगा...' : 'This tool will launch soon...'}
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  return {
    props: {
      slug,
    },
  };
};