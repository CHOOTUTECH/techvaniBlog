// pages/about.tsx
import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LanguageContext } from '../src/context/AppContext';
import { mockAuthors } from '../src/data/mockDjangoData';

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {/* 🔥 SEO के लिए Head */}
      <Head>
        <title>{language === 'hi' ? 'हमारे बारे में (About Us) – टेकवाणी' : 'About Us - TechVani'}</title>
        <meta 
          name="description" 
          content="जानिए टेकवाणी की यात्रा, हमारा उद्देश्य, और हमारी संपादकीय टीम जो प्रामाणिक हिंदी टेक सामग्री प्रदान करने के लिए प्रतिबद्ध है।" 
        />
        <link rel="canonical" href="https://techvani.in/about" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Hero Banner */}
        <div className="bg-[#ecf5fe] dark:bg-gray-800/60 p-8 rounded-3xl border border-blue-100 dark:border-gray-700/60 mb-10">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            {language === 'hi' ? 'हमारी पहचान • हमारा मिशन' : 'Our Identity • Our Mission'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 leading-tight">
            {language === 'hi' ? (
              <>सरल हिंदी में प्रामाणिक <span className="text-[#bb010d]">टेक पत्रकारिता</span></>
            ) : (
              <>Authentic <span className="text-[#bb010d]">Tech Journalism</span> in Simple Hindi</>
            )}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed max-w-2xl">
            {language === 'hi' 
              ? 'टेकवाणी की स्थापना भारतीय पाठकों, डेवलपर्स, और छात्रों को बिना किसी भाषा बाधा के विश्व स्तरीय तकनीकी ज्ञान, कोडिंग ट्यूटोरियल, और निष्पक्ष हार्डवेयर समीक्षाएं उपलब्ध कराने के लिए की गई है।'
              : 'TechVani was founded to provide Indian readers, developers, and students with world-class technical knowledge, coding tutorials, and unbiased hardware reviews without any language barrier.'}
          </p>
        </div>

        {/* Core Values (E-E-A-T) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[26px]">fact_check</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? '100% तथ्य-जांच' : '100% Fact Checking'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {language === 'hi' 
                ? 'हमारे द्वारा प्रकाशित हर शॉर्टकट, कमांड और कोड स्निपेट को हमारी लैब में वास्तविक मशीनों पर टेस्ट किया जाता है।'
                : 'Every shortcut, command, and code snippet published by us is tested on real machines in our lab.'}
            </p>
          </div>

          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[26px]">verified</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? 'निष्पक्ष हार्डवेयर समीक्षा' : 'Unbiased Hardware Reviews'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {language === 'hi' 
                ? 'हम किसी भी ब्रांड से प्रायोजित अनुकूल समीक्षा स्वीकार नहीं करते। हमारी रेटिंग्स केवल पारदर्शी बेंचमार्क्स पर आधारित होती हैं।'
                : 'We do not accept sponsored favorable reviews from any brand. Our ratings are based only on transparent benchmarks.'}
            </p>
          </div>

          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[26px]">translate</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? 'शुद्ध और सहज हिंदी' : 'Pure and Simple Hindi'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {language === 'hi' 
                ? 'तकनीकी शब्दों को अंग्रेजी संदर्भ के साथ सहज हिंदी में समझाया जाता है ताकि शुरुआती छात्र भी आसानी से सीख सकें।'
                : 'Technical terms are explained in simple Hindi with English context so that even beginners can learn easily.'}
            </p>
          </div>
        </div>

        {/* Editorial Team */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'hi' ? 'हमारी वरिष्ठ संपादकीय टीम' : 'Our Senior Editorial Team'}
            </h2>
            <Link href="/editorial-team" className="text-xs font-bold text-[#bb010d] hover:underline flex items-center gap-1">
              {language === 'hi' ? 'सभी सदस्यों को देखें →' : 'See All Members →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mockAuthors.map((author) => (
              <div key={author.id} className="bg-white dark:bg-[#131b22] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4">
                <img src={author.avatar} alt={author.name} loading="lazy" className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/30 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">{author.name}</h4>
                  <p className="text-xs text-[#bb010d] font-semibold truncate">{author.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{author.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Address & Office Info */}
        <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/60">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {language === 'hi' ? 'मुख्यालय और संपर्क विवरण' : 'Headquarters & Contact Details'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong>टेकवाणी मीडिया प्राइवेट लिमिटेड (TechVani Media Pvt. Ltd.)</strong><br />
            {language === 'hi' ? 'प्लॉट नंबर 42, सेक्टर 18, साइबर सिटी, गुरुग्राम, हरियाणा 122002, भारत' : 'Plot No. 42, Sector 18, Cyber City, Gurugram, Haryana 122002, India'}<br />
            {language === 'hi' ? 'ईमेल' : 'Email'}: contact@techvani.in | {language === 'hi' ? 'फोन' : 'Phone'}: +91 124 456 7890
          </p>
        </section>
      </div>
    </>
  );
}