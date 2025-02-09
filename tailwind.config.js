/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-00)',
          500: 'var(--primary-500)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-00)',
          500: 'var(--secondary-500)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-00)',
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
    },
  },
  plugins: [],
};
