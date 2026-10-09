import React, { useState, useEffect, useCallback } from 'react';
import { ToolDefinition } from './types';

interface PasswordGeneratorToolProps {
  onNavigate: (path: string) => void;
  tool: ToolDefinition;
}

export const PasswordGeneratorTool: React.FC<PasswordGeneratorToolProps> = ({ onNavigate, tool }) => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let chars = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    let syms = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (excludeSimilar) {
      upper = upper.replace(/[IO]/g, '');
      lower = lower.replace(/[lo]/g, '');
      nums = nums.replace(/[01]/g, '');
    }

    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += nums;
    if (includeSymbols) chars += syms;

    if (!chars) {
      setPassword('');
      return;
    }

    let generated = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      generated += chars[array[i] % chars.length];
    }
    setPassword(generated);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Password strength logic
  const getStrength = () => {
    if (length < 8) return { label: 'कमजोर (Weak)', color: 'bg-red-500', width: '25%' };
    let score = 0;
    if (length >= 12) score += 1;
    if (length >= 16) score += 1;
    if (includeUppercase && includeLowercase) score += 1;
    if (includeNumbers) score += 1;
    if (includeSymbols) score += 1;

    if (score <= 2) return { label: 'साधारण (Fair)', color: 'bg-amber-500', width: '50%' };
    if (score <= 4) return { label: 'मजबूत (Strong)', color: 'bg-blue-500', width: '75%' };
    return { label: 'अत्यधिक सुरक्षित (Very Strong)', color: 'bg-emerald-500', width: '100%' };
  };

  const strength = getStrength();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Password Generator Generator (8 Cols) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* Output Box */}
        <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">आपका सुरक्षित पासवर्ड</span>
          
          <div className="flex items-center justify-between gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="font-mono text-lg sm:text-2xl font-black text-gray-900 dark:text-white break-all tracking-wide select-all">
              {password || 'कृपया कम से कम एक विकल्प चुनें'}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={generatePassword}
                className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                title="नया पासवर्ड बनाएं"
              >
                <span className="material-symbols-outlined text-[20px]">refresh</span>
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-lg bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'कॉपी हुआ!' : 'कॉपी करें'}</span>
              </button>
            </div>
          </div>

          {/* Strength Bar */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">सुरक्षा स्तर:</span>
              <span className="font-bold text-gray-800 dark:text-gray-200">{strength.label}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-300 ${strength.color}`} style={{ width: strength.width }} />
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-5">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">पासवर्ड अनुकूलित करें (Settings)</h3>

          {/* Length Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700 dark:text-gray-300">पासवर्ड की लंबाई (Characters):</span>
              <span className="font-mono font-bold text-base text-[#bb010d] bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-lg border border-red-200 dark:border-red-900">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-[#bb010d] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>8 (न्यूनतम)</span>
              <span>16 (मानक)</span>
              <span>32 (मजबूत)</span>
              <span>64 (सुपर-सिक्योर)</span>
            </div>
          </div>

          {/* Checkboxes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100 dark:border-gray-800 text-xs">
            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-850 cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="accent-[#bb010d] w-4 h-4 rounded"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">बड़े अक्षर (A-Z)</span>
            </label>

            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-850 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="accent-[#bb010d] w-4 h-4 rounded"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">छोटे अक्षर (a-z)</span>
            </label>

            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-850 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="accent-[#bb010d] w-4 h-4 rounded"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">अंक (0-9)</span>
            </label>

            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-850 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="accent-[#bb010d] w-4 h-4 rounded"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">विशेष चिह्न (!@#$%)</span>
            </label>

            <label className="sm:col-span-2 flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-850 cursor-pointer">
              <input
                type="checkbox"
                checked={excludeSimilar}
                onChange={(e) => setExcludeSimilar(e.target.checked)}
                className="accent-[#bb010d] w-4 h-4 rounded"
              />
              <div>
                <span className="font-medium text-gray-800 dark:text-gray-200 block">समान दिखने वाले अक्षर छोड़ें</span>
                <span className="text-[11px] text-gray-400">जैसे l, 1, I, O, 0 को पासवर्ड में शामिल नहीं किया जाएगा</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Right Column: Security Best Practices (4 Cols) */}
      <aside className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d] text-[20px]">security</span>
            सुरक्षित पासवर्ड के 4 नियम
          </h3>
          <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0">check_circle</span>
              <span><strong>कम से कम 16 अक्षर:</strong> छोटे पासवर्ड आसानी से ब्रूट-फोर्स हो जाते हैं।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0">check_circle</span>
              <span><strong>व्यक्तिगत जानकारी न जोड़ें:</strong> नाम, जन्मतिथि या गाड़ी नंबर कभी न लिखें।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0">check_circle</span>
              <span><strong>हर खाते का अलग पासवर्ड:</strong> एक ही पासवर्ड सभी साइट्स पर दोहराने से बचें।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0">check_circle</span>
              <span><strong>2-स्टेप वेरिफिकेशन (2FA):</strong> हमेशा Google Authenticator चालू रखें।</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default PasswordGeneratorTool;
