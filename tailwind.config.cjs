/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        300: '300px',
        1000: '1000px',
      },
      fontFamily: {
        sans: ['satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
