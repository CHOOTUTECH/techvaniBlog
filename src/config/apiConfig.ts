/**
 * Django REST Framework API Configuration
 * 
 * जब आप अपने लोकल कंप्यूटर में Django चलाएंगे:
 * 1. .env में NEXT_PUBLIC_DJANGO_API_BASE_URL="http://127.0.0.1:8000/api/v1" सेट करें
 * 2. जब तक Django सर्वर चालू नहीं होता, यह ऐप अपने आप बिल्ट-इन सुरक्षित डेटा का उपयोग करेगा
 *    ताकि कोई एरर न आए।
 */

// src/config/apiConfig.ts
export const API_CONFIG = {
  // 🔥 Next.js का process.env इस्तेमाल करें
  BASE_URL: process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
  
  // Timeout in milliseconds
  TIMEOUT: 3500,

  // Headers for Django REST Framework
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // Fallback to local data if Django server is not reachable
  // 🔥 यहाँ भी process.env और NEXT_PUBLIC_ प्रीफिक्स लगाएँ
  USE_FALLBACK: process.env.NEXT_PUBLIC_USE_MOCK_FALLBACK !== 'false',
};