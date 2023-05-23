/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      normal: '-.1em',
    },
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    },
    fontFamily: {
      default: ['var(--font-inter)'],
      manrope: ['var(--font-manrope)'],
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        black: '#18181b',
        cream: '#e9e4d7',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}