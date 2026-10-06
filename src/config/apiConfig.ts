/**
 * Django REST Framework API Configuration
 * 
 * जब आप अपने लोकल कंप्यूटर में Django चलाएंगे:
 * 1. .env में VITE_DJANGO_API_BASE_URL="http://127.0.0.1:8000/api/v1" सेट करें
 * 2. जब तक Django सर्वर चालू नहीं होता, यह ऐप अपने आप बिल्ट-इन सुरक्षित डेटा का उपयोग करेगा
 *    ताकि कोई एरर न आए।
 */

export const API_CONFIG = {
  // Local or production Django REST API URL
  BASE_URL: import.meta.env.VITE_DJANGO_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
  
  // Timeout in milliseconds (8s gives enough time for cloud databases like Supabase)
  TIMEOUT: 8000,
  
  // Headers for Django REST Framework
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // Fallback to local data if Django server is not reachable
  USE_FALLBACK: import.meta.env.VITE_USE_MOCK_FALLBACK !== 'false',
};
