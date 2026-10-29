/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🔥 यह लाइन सबसे ज़रूरी है
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}