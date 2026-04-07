/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf7f2',
        warm: '#f0e8db',
        gold: {
          DEFAULT: '#c8a96e',
          light: '#e8d5b0',
          dark: '#b8945a',
        },
        dark: '#2a1f14',
        mid: '#6b5744',
        rose: '#c4796a',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease forwards',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};
