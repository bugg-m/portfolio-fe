/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(0,223,192)',
      },
      width: {
        authCard: '26rem',
      },
      height: {
        modalCard: '22rem',
      },
    },
  },
  plugins: [],
};
