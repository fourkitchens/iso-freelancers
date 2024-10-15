const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-kitchensKelly',
  ],
  theme: {
    fontFamily: {
      sans: ['mundial', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        kitchensKelly: {
          DEFAULT: '#0EB747',
          light: '#4AC975',
          dark: '#0B9239',
        },
        leafyGreen: { DEFAULT: '#0F2C15', dark: '#08200D', light: '#244E2C' },
        whippedCream: {
          DEFAULT: '#F8F5EC',
          dark: '#EEEADE',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
