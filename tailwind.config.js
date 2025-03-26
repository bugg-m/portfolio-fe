/** @type {import('tailwindcss').Config} */
import { join } from 'path';

export const content = [join(__dirname, 'apps/**/src/{components,app}/**/*.{ts,tsx}')];
export const theme = {
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  extend: {
    colors: {
      primary: {
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
      },
      secondary: {
        50: 'var(--secondary-50)',
        100: 'var(--secondary-100)',
        200: 'var(--secondary-200)',
        300: 'var(--secondary-300)',
        400: 'var(--secondary-400)',
        500: 'var(--secondary-500)',
        600: 'var(--secondary-600)',
        700: 'var(--secondary-700)',
        800: 'var(--secondary-800)',
        900: 'var(--secondary-900)',
      },
      neutral: {
        50: 'var(--neutral-50)',
        100: 'var(--neutral-100)',
        200: 'var(--neutral-200)',
        300: 'var(--neutral-300)',
        400: 'var(--neutral-400)',
        500: 'var(--neutral-500)',
        600: 'var(--neutral-600)',
        700: 'var(--neutral-700)',
        800: 'var(--neutral-800)',
        900: 'var(--neutral-900)',
      },
    },
    borderRadius: {
      '4xl': '8rem',
      '5xl': '10rem',
      '6xl': '16rem',
      '7xl': '20rem',
      '8xl': '25rem',
      '9xl': '30rem',
      '10xl': '40rem',
    },
    fontSize: {
      '5xs': '0.25rem',
      '4xs': '0.3rem',
      '3xs': '0.35rem',
      '2xs': '0.5rem',
    },
  },
};
