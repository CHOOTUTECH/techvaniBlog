// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['10.201.228.224', 'localhost', '127.0.0.1'],
  compress: true,
  poweredByHeader: false,

  images: {
    // ⚠️ अभी के लिए optimization बंद — क्योंकि backend weird URLs भेज रहा है
    // (http://127.0.0.1:8000/media/https%3A/...)
    // Production में stable होने पर हटा देंगे
    unoptimized: true,

    remotePatterns: [
      { protocol: 'http', hostname: '127.0.0.1', port: '8000' },
      { protocol: 'http', hostname: 'localhost', port: '8000' },
      { protocol: 'https', hostname: 'api.techvani.co.in' },
      { protocol: 'https', hostname: '**.techvani.co.in' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

let withBundleAnalyzer = (config) => config;
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
} catch (e) {}

module.exports = withBundleAnalyzer(nextConfig);