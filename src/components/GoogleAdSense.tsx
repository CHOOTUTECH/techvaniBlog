import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  slot: string;
  client?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reusable Google AdSense Ad Unit Component
 * जब AdSense अप्रूवल मिले, तो बस अपना Publisher ID (ca-pub-XXXXXXXXXXXX) पास करें
 * या .env.example में VITE_ADSENSE_CLIENT_ID सेट करें।
 */
export const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({
  slot,
  client = import.meta.env.VITE_ADSENSE_CLIENT_ID || '',
  format = 'auto',
  responsive = true,
  className = '',
  style,
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && client) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (e) {
      // Ignore adsbygoogle errors in development
    }
  }, [client, slot]);

  // If no client ID configured yet, render clean advertisement placeholder
  if (!client) {
    return (
      <aside
        aria-label="विज्ञापन"
        className={`w-full my-6 p-4 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40 text-center flex flex-col items-center justify-center min-h-[90px] transition-colors ${className}`}
        style={style}
      >
        <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 dark:text-gray-500">
          विज्ञापन (Google AdSense Slot #{slot})
        </span>
        <span className="text-[11px] text-gray-400 mt-0.5">
          AdSense अप्रूवल के बाद यहाँ विज्ञापन स्वतः दिखाई देंगे।
        </span>
      </aside>
    );
  }

  return (
    <aside aria-label="विज्ञापन" className={`my-6 text-center overflow-hidden ${className}`}>
      <span className="text-[9px] uppercase tracking-wider text-gray-400 block mb-1">
        विज्ञापन (Advertisement)
      </span>
      <ins
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </aside>
  );
};
