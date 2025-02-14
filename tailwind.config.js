/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'packages/**/src/{components,app}/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          500: 'var(--primary-500)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          500: 'var(--secondary-500)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          500: 'var(--neutral-500)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      width: {
        authCard: '26rem',
      },
      height: {
        modalCard: '22rem',
      },
      borderRadius: {
        default: '5rem',
      },
    },
  },
  plugins: [],
};
