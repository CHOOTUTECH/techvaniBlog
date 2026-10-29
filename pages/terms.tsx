// pages/terms.tsx
import React, { useContext } from 'react';
import Head from 'next/head';
import { LanguageContext } from '../src/context/AppContext';

export default function TermsPage() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {/* 🔥 SEO Head */}
      <Head>
        <title>
          {language === 'hi' 
            ? 'नियम और शर्तें (Terms of Service) – टेकवाणी' 
            : 'Terms of Service - TechVani'}
        </title>
        <meta 
          name="description" 
          content="टेकवाणी हिंदी टेक मैगज़ीन पोर्टल के नियम, शर्तें और बौद्धिक संपदा अधिकार।" 
        />
        <link rel="canonical" href="https://techvani.in/terms" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            {language === 'hi' ? 'उपयोगकर्ता समझौता' : 'User Agreement'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            {language === 'hi' ? 'नियम और शर्तें (Terms of Service)' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">
            {language === 'hi' ? 'अंतिम अद्यतन: 24 अक्टूबर 2024' : 'Last Updated: 24 October 2024'}
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-sm sm:text-base">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? '1. शर्तों की स्वीकृति' : '1. Acceptance of Terms'}
            </h2>
            <p>
              {language === 'hi' 
                ? 'टेकवाणी (techvani.in) का उपयोग करके आप इन नियमों और शर्तों का पूर्ण पालन करने के लिए बाध्य हैं। यदि आप इनमें से किसी भी शर्त से असहमत हैं, तो कृपया पोर्टल का उपयोग न करें।'
                : 'By using TechVani (techvani.in), you agree to comply with these terms and conditions. If you disagree with any of these terms, please do not use the portal.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? '2. बौद्धिक संपदा और कॉपीराइट (DMCA)' : '2. Intellectual Property and Copyright (DMCA)'}
            </h2>
            <p>
              {language === 'hi' 
                ? 'टेकवाणी पर प्रकाशित सभी मूल लेख, गाइड, और हिंदी अनुवाद कॉपीराइट कानून द्वारा संरक्षित हैं। आप व्यक्तिगत, गैर-व्यावसायिक अध्ययन के लिए हमारे लेख पढ़ और साझा कर सकते हैं। टेकवाणी को उचित क्रेडिट दिए बिना किसी भी लेख की पूरी नकल करना प्रतिबंधित है।'
                : 'All original articles, guides, and Hindi translations published on TechVani are protected by copyright law. You may read and share our articles for personal, non-commercial study. Copying any article in full without giving proper credit to TechVani is prohibited.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? '3. कोड स्निपेट्स का लाइसेंस (Open Source)' : '3. License for Code Snippets (Open Source)'}
            </h2>
            <p>
              {language === 'hi' 
                ? 'हमारे लेखों में दिए गए प्रोग्रामिंग कोड उदाहरण MIT लाइसेंस के तहत प्रदान किए जाते हैं। आप उन्हें अपने निजी या व्यावसायिक सॉफ्टवेयर प्रोजेक्ट्स में स्वतंत्र रूप से उपयोग कर सकते हैं।'
                : 'The programming code examples provided in our articles are offered under the MIT License. You are free to use them in your personal or commercial software projects.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? '4. अस्वीकरण (Disclaimer)' : '4. Disclaimer'}
            </h2>
            <p>
              {language === 'hi' 
                ? 'हम अपने तकनीकी लेखों और शॉर्टकट्स की सटीकता सुनिश्चित करने का हर संभव प्रयास करते हैं। फिर भी, किसी भी टर्मिनल कमांड या रजिस्ट्री संपादन को आज़माने से पहले अपने डेटा का बैकअप लेना आपकी व्यक्तिगत जिम्मेदारी है।'
                : 'We make every effort to ensure the accuracy of our technical articles and shortcuts. However, it is your personal responsibility to back up your data before trying any terminal commands or registry edits.'}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}