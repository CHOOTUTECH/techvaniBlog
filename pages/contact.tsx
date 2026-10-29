// pages/contact.tsx
import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { LanguageContext } from '../src/context/AppContext';

export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'संपादकीय पूछताछ',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // डमी सबमिशन (आप इसे अपने API से जोड़ सकते हैं)
    setTimeout(() => {
      setLoading(false);
      setStatus(language === 'hi' 
        ? 'धन्यवाद! आपका संदेश हमारी संपादकीय टीम को प्राप्त हो चुका है। हम 24 घंटों में उत्तर देंगे।'
        : 'Thank you! Your message has been received by our editorial team. We will respond within 24 hours.');
      
      setFormData({
        name: '',
        email: '',
        category: 'संपादकीय पूछताछ',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <>
      <Head>
        <title>{language === 'hi' ? 'संपर्क करें (Contact Us) – टेकवाणी' : 'Contact Us - TechVani'}</title>
        <meta 
          name="description" 
          content="टेकवाणी संपादकीय टीम, विज्ञापन विभाग या सहायता से संपर्क करें। अपने सुझाव या तकनीकी प्रश्न भेजें।" 
        />
        <link rel="canonical" href="https://techvani.in/contact" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            {language === 'hi' ? 'सहायता और संचार' : 'Help & Communication'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            {language === 'hi' ? 'हमसे संपर्क करें (Contact Us)' : 'Contact Us'}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {language === 'hi' 
              ? 'किसी तकनीकी लेख में सुधार, विज्ञापन, या सहयोग के लिए सीधे हमसे जुड़ें।'
              : 'Reach out to us directly for corrections in technical articles, advertising, or collaboration.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-7 bg-white dark:bg-[#131b22] p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'hi' ? 'आपका नाम *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'hi' ? "उदा: रोहित कुमार" : "e.g. Rohit Kumar"}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rohit@example.com"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'hi' ? 'संदेश का प्रकार *' : 'Message Type *'}
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                >
                  <option value="editorial">{language === 'hi' ? 'संपादकीय पूछताछ (Editorial)' : 'Editorial Inquiry'}</option>
                  <option value="correction">{language === 'hi' ? 'तथ्य सुधार (Fact Correction)' : 'Fact Correction'}</option>
                  <option value="advertisement">{language === 'hi' ? 'विज्ञापन (Advertisement)' : 'Advertisement'}</option>
                  <option value="feedback">{language === 'hi' ? 'सामान्य सुझाव (Feedback)' : 'General Feedback'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'hi' ? 'विषय (Subject) *' : 'Subject *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={language === 'hi' ? "संक्षिप्त विवरण दर्ज करें..." : "Enter brief description..."}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'hi' ? 'आपका विस्तृत संदेश *' : 'Your Detailed Message *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'hi' ? "अपना संदेश यहाँ लिखें..." : "Write your message here..."}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#bb010d] hover:bg-[#e02924] disabled:opacity-50 text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md cursor-pointer"
              >
                {loading 
                  ? (language === 'hi' ? 'संदेश भेजा जा रहा है...' : 'Sending message...') 
                  : (language === 'hi' ? 'संदेश भेजें' : 'Send Message')}
              </button>

              {status && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {language === 'hi' ? 'सीधे संपर्क सूत्र' : 'Direct Contact'}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#bb010d] text-[20px] shrink-0 mt-0.5">mail</span>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">
                      {language === 'hi' ? 'संपादकीय ईमेल' : 'Editorial Email'}
                    </div>
                    <div>editor@techvani.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#bb010d] text-[20px] shrink-0 mt-0.5">campaign</span>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">
                      {language === 'hi' ? 'विज्ञापनों के लिए' : 'For Advertisements'}
                    </div>
                    <div>ads@techvani.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#bb010d] text-[20px] shrink-0 mt-0.5">location_on</span>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">
                      {language === 'hi' ? 'कार्यालय का पता' : 'Office Address'}
                    </div>
                    <div>
                      {language === 'hi' 
                        ? 'टेकवाणी मीडिया, साइबर सिटी, गुरुग्राम, हरियाणा 122002'
                        : 'TechVani Media, Cyber City, Gurugram, Haryana 122002'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ecf5fe] dark:bg-gray-800/40 p-6 rounded-2xl border border-blue-100 dark:border-gray-700/60 text-xs text-gray-600 dark:text-gray-400">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                {language === 'hi' ? 'संपादकीय सुधार नीति' : 'Editorial Corrections Policy'}
              </h4>
              <p className="leading-relaxed">
                {language === 'hi' 
                  ? 'यदि आपको हमारे किसी लेख या कोड में कोई त्रुटि मिलती है, तो कृपया विषय में "तथ्य सुधार" लिखकर भेजें। हम 48 घंटों में सत्यापन कर संशोधित करेंगे।'
                  : 'If you find any error in our article or code, please send it with "Fact Correction" in the subject. We will verify and correct it within 48 hours.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}