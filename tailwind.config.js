/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        widthIn: 'widthIn 1s ease-out',
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        widthIn: {
          '0%': { width: '0%' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-purple-100': 'linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-8': '2rem 2rem',
      },
    },
  },
  plugins: [],
};