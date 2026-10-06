import React, { useState } from 'react';
import { djangoApi } from '../services/djangoApi';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await djangoApi.subscribeNewsletter(email);
      setStatus(res);
      if (res.success) {
        setEmail('');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-[#141d23] text-[#e0e9f2] pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Newsletter Callout */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
                <span className="text-xs uppercase font-bold tracking-wider">साप्ताहिक टेक डाइजेस्ट</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1.5">हमारे न्यूज़लेटर से जुड़ें</h3>
              <p className="text-sm text-gray-400">
                हर हफ्ते नई कोडिंग टिप्स, गुप्त कंप्यूटर ट्रिक्स और उत्पादकता शॉर्टकट्स सीधे अपने ईमेल में मुफ्त पाएं।
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="आपका ईमेल पता दर्ज करें..."
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2.5 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#bb010d] hover:bg-[#e02924] disabled:opacity-50 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shrink-0 shadow-md cursor-pointer"
                >
                  {loading ? 'प्रोसेसिंग...' : 'सदस्यता लें'}
                </button>
              </form>
              {status && (
                <p className={`text-xs mt-2 ${status.success ? 'text-emerald-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About TechVani */}
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#bb010d] leading-none">
                टेक<span className="text-white">वाणी</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-1">
                हिंदी टेक पोर्टल
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              भारत का अग्रणी हिंदी टेक मैगज़ीन पोर्टल जहां आपको प्रोग्रामिंग, कंप्यूटर दक्षता और हार्डवेयर की प्रामाणिक जानकारी सरल हिंदी में मिलती है।
            </p>
            <div className="pt-1 flex items-center gap-3 text-gray-400">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">smart_display</span>
              </a>
              <button onClick={() => onNavigate('/sitemap')} className="hover:text-red-400 text-xs bg-white/5 px-2.5 py-1 rounded border border-white/10 transition-colors">
                RSS फ़ीड
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">त्वरित लिंक्स</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                  मुख्य पृष्ठ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/category/programming')} className="hover:text-white transition-colors">
                  प्रोग्रामिंग ट्यूटोरियल
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/category/keyboard-shortcuts')} className="hover:text-white transition-colors">
                  कीबोर्ड शॉर्टकट्स
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/category/computer-tricks')} className="hover:text-white transition-colors">
                  कंप्यूटर ट्रिक्स
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/category/gadgets')} className="hover:text-white transition-colors">
                  गैजेट समीक्षा
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Tags */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">लोकप्रिय टैग्स</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'पायथन', slug: 'python' },
                { name: 'जावास्क्रिप्ट', slug: 'javascript' },
                { name: 'विंडोज 11', slug: 'windows-11' },
                { name: 'एक्सेल शॉर्टकट्स', slug: 'excel-tricks' },
                { name: 'VS Code', slug: 'vs-code' },
                { name: 'रिएक्ट', slug: 'react-19' },
              ].map((tag) => (
                <button
                  key={tag.slug}
                  onClick={() => onNavigate(`/tag/${tag.slug}`)}
                  className="text-xs bg-white/5 hover:bg-[#bb010d] text-gray-300 hover:text-white px-2.5 py-1 rounded transition-colors"
                >
                  #{tag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Policy & Help (Google Policy Compliance) */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">नीति व सहायता</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  हमारे बारे में (About Us)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  संपर्क करें (Contact)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-white transition-colors font-medium text-gray-300">
                  गोपनीयता नीति (Privacy Policy)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">
                  नियम और शर्तें (Terms of Service)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/editorial-team')} className="hover:text-white transition-colors">
                  संपादकीय टीम और नीतियां
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/admin')} className="hover:text-red-400 transition-colors font-medium">
                  एडमिन पोस्टिंग पोर्टल (CMS)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>सर्वाधिकार सुरक्षित © 2025 टेकवाणी। सर्वाधिकार TechVani Media द्वारा आरक्षित।</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors">हिंदी (भारत)</span>
            <span>•</span>
            <button onClick={() => onNavigate('/sitemap')} className="hover:text-gray-300 transition-colors">
              साइटमैप (Sitemap)
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-gray-300 transition-colors">
              गोपनीयता नीति
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
