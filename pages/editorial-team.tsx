// pages/editorial-team.tsx
import React, { useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Author } from '../src/types/api';
import { djangoApi } from '../src/services/djangoApi';
import { mockAuthors } from '../src/data/mockDjangoData';
import { LanguageContext } from '../src/context/AppContext';

interface EditorialTeamPageProps {
  authors: Author[];
}

export default function EditorialTeamPage({ authors }: EditorialTeamPageProps) {
  // भाषा प्राप्त करें
  const { language } = useContext(LanguageContext);

  return (
    <>
      {/* 🔥 SEO Head */}
      <Head>
        <title>
          {language === 'hi' 
            ? 'संपादकीय टीम और नीतियां – टेकवाणी (TechVani Editorial)' 
            : 'Editorial Team & Policies - TechVani'}
        </title>
        <meta 
          name="description" 
          content="टेकवाणी के टेक पत्रकारों, इंजीनियर्स और संपादकों की टीम। जानिए हमारी तथ्य-जांच प्रक्रिया और संपादकीय दिशानिर्देश।" 
        />
        <link rel="canonical" href="https://techvani.in/editorial-team" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            {language === 'hi' ? 'पारदर्शिता और संपादकीय मानक (E-E-A-T)' : 'Transparency & Editorial Standards (E-E-A-T)'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            {language === 'hi' ? 'संपादकीय टीम और नैतिक नीतियां' : 'Editorial Team & Ethical Policies'}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {language === 'hi' 
              ? 'Google News और Google Discover मानकों के अनुरूप हमारी लेखकों की टीम एवं तथ्य सत्यापन प्रक्रिया।'
              : 'Our team of writers and fact-verification process in accordance with Google News and Google Discover standards.'}
          </p>
        </div>

        {/* Author Roster */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'hi' ? 'मुख्य तकनीकी संपादक और लेखक' : 'Key Technical Editors & Writers'}
          </h2>

          <div className="space-y-6">
            {authors.map((author) => (
              <div
                key={author.id}
                className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-red-500/20 shrink-0"
                />
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      {author.name}
                      <span className="material-symbols-outlined text-blue-500 text-[18px]" title="Verified Author">verified</span>
                    </h3>
                    <span className="text-xs bg-red-50 dark:bg-red-950/40 text-[#bb010d] px-2.5 py-1 rounded-full font-bold">
                      {author.articlesCount} {language === 'hi' ? 'प्रकाशित लेख' : 'Published Articles'}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#bb010d]">{author.role}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {author.bio}
                  </p>
                  <div className="pt-1 flex items-center gap-3 text-xs text-gray-500">
                    <span>{language === 'hi' ? 'ट्विटर:' : 'Twitter:'} <strong className="text-gray-700 dark:text-gray-300">{author.twitter}</strong></span>
                    <span>•</span>
                    <span>{language === 'hi' ? 'प्रामाणिक टेक समीक्षक' : 'Authentic Tech Reviewer'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Principles & Fact-Checking */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'hi' ? 'हमारी संपादकीय और सत्यापन प्रक्रिया' : 'Our Editorial & Verification Process'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">biotech</span>
                {language === 'hi' ? '1. वास्तविक डिवाइस टेस्टिंग' : '1. Real Device Testing'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {language === 'hi' 
                  ? 'किसी भी कीबोर्ड शॉर्टकट, रन कमांड, या कोड ट्यूटोरियल को प्रकाशित करने से पहले हमारे तकनीकी विशेषज्ञ विंडोज 10/11, मैक, और लिनक्स प्रणालियों पर व्यक्तिगत रूप से जांचते हैं।'
                  : 'Before publishing any keyboard shortcut, run command, or code tutorial, our technical experts personally test it on Windows 10/11, Mac, and Linux systems.'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">smart_toy</span>
                {language === 'hi' ? '2. AI सामग्री प्रकटीकरण नीति' : '2. AI Content Disclosure Policy'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {language === 'hi' 
                  ? 'हम अनुसंधान में सहायता के लिए कृत्रिम बुद्धिमत्ता का उपयोग कर सकते हैं, लेकिन टेकवाणी पर प्रकाशित प्रत्येक शब्द हमारे मानवीय संपादकों द्वारा समीक्षा और तथ्य-सत्यापित किया जाता है।'
                  : 'We may use AI to assist in research, but every word published on TechVani is reviewed and fact-checked by our human editors.'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">rule</span>
                {language === 'hi' ? '3. निष्पक्षता और स्वतंत्रता' : '3. Fairness & Independence'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {language === 'hi' 
                  ? 'हमारा संपादकीय प्रभाग किसी भी विज्ञापनदाता या हार्डवेयर निर्माता के दबाव से पूरी तरह मुक्त है। हमारी उत्पाद समीक्षाएं पूरी तरह वास्तविक प्रदर्शन पर आधारित हैं।'
                  : 'Our editorial division is completely free from pressure by any advertiser or hardware manufacturer. Our product reviews are based entirely on actual performance.'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">published_with_changes</span>
                {language === 'hi' ? '4. सार्वजनिक संशोधन लॉग' : '4. Public Corrections Log'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {language === 'hi' 
                  ? 'यदि किसी लेख में तथ्यात्मक गलती पाई जाती है, तो हम पाठकों को स्पष्ट रूप से सूचित करते हुए लेख के अंत में संशोधन नोट जोड़ते हैं।'
                  : 'If a factual error is found in an article, we add a correction note at the end of the article, clearly informing the readers.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// 🔥 सर्वर-साइड रेंडरिंग (SSR) - लेखकों का डेटा सर्वर पर फ़ेच होगा
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await djangoApi.getAuthors();
    // अगर डेटा मिलता है और खाली नहीं है, तो उसे भेजें, वरना mockAuthors भेजें
    const authors = (data && data.length > 0) ? data : mockAuthors;

    return {
      props: {
        authors,
      },
    };
  } catch (error) {
    console.error("Error fetching authors:", error);
    return {
      props: {
        authors: mockAuthors,
      },
    };
  }
};