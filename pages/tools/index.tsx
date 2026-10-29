// pages/tools/index.tsx
import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LanguageContext } from '../../src/context/AppContext';

export default function ToolsDirectoryPage() {
  const { language } = useContext(LanguageContext);

  // यहाँ हम अपने सारे टूल्स की लिस्ट बना रहे हैं
  const toolsList = [
    {
      slug: 'word-counter',
      titleHi: 'वर्ड और कैरेक्टर काउंटर',
      titleEn: 'Word & Character Counter',
      descHi: 'अपने आर्टिकल, निबंध या सोशल मीडिया पोस्ट के शब्दों, अक्षरों और पढ़ने के समय को तुरंत मापें।',
      descEn: 'Instantly measure the words, characters, and reading time of your articles, essays, or social media posts.',
      icon: 'format_size',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      slug: 'image-compressor',
      titleHi: 'इमेज कंप्रेसर',
      titleEn: 'Image Compressor',
      descHi: 'बिना क्वालिटी खराब किए अपनी इमेजेज का साइज़ कम करें।',
      descEn: 'Reduce the size of your images without compromising on quality.',
      icon: 'image',
      color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      slug: 'password-generator',
      titleHi: 'स्ट्रॉन्ग पासवर्ड जनरेटर',
      titleEn: 'Strong Password Generator',
      descHi: 'अपने अकाउंट्स के लिए हैकर्स से सुरक्षित, मजबूत और रैंडम पासवर्ड बनाएं।',
      descEn: 'Create strong, random, and hacker-proof passwords for your accounts.',
      icon: 'key',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    }
  ];

  return (
    <>
      <Head>
        <title>
          {language === 'hi' ? 'ऑनलाइन टूल्स - टेकवाणी' : 'Online Tools - TechVani'}
        </title>
        <meta 
          name="description" 
          content="टेकवाणी के मुफ्त ऑनलाइन टूल्स का उपयोग करें। वर्ड काउंटर, इमेज कंप्रेसर और अन्य उपयोगी टूल्स।" 
        />
        <link rel="canonical" href="https://techvani.in/tools" />
      </Head>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-6 text-center">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            {language === 'hi' ? 'मुफ्त टेक टूल्स' : 'Free Tech Tools'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
            {language === 'hi' ? 'ऑनलाइन टूल्स डायरेक्टरी' : 'Online Tools Directory'}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            {language === 'hi' 
              ? 'रोज़मर्रा के कामों को आसान बनाने के लिए हमारे मुफ्त और तेज़ ऑनलाइन टूल्स का उपयोग करें। कोई रजिस्ट्रेशन नहीं, कोई सीमा नहीं।'
              : 'Use our free and fast online tools to make everyday tasks easier. No registration, no limits.'}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsList.map((tool) => (
            <Link 
              href={`/tools/${tool.slug}`} 
              key={tool.slug}
              className="group bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${tool.color}`}>
                <span className="material-symbols-outlined text-[28px]">{tool.icon}</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#bb010d] transition-colors">
                  {language === 'hi' ? tool.titleHi : tool.titleEn}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {language === 'hi' ? tool.descHi : tool.descEn}
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-[#bb010d] text-sm font-bold group-hover:underline">
                {language === 'hi' ? 'टूल खोलें' : 'Open Tool'} <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}