const { fontFamily, screens } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ['./packages/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          enabled: true,
          mode: 'all',
          content: [
            './packages/**/*.{js,ts,jsx,tsx}',
            './pages/**/*.{js,ts,jsx,tsx}',
          ],
          options: {
            safelist: [],
          },
        }
      : false,
  theme: {
    screens: {
      sm: screens.sm,
      md: screens.md,
      lg: screens.lg,
      xl: screens.xl,
    },
    colors: {
      primary: '#00648B',
      primary1: '#004A69',
      primary2: '#002E48',
      secondary: '#7FBC42',
      secondary1: '#ABCF38',
      secondary2: '#208134',
      neutral: '#C5D1D7',
      neutral1: '#7A8F9B',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d5d6d7',
        400: '#9e9e9e',
        500: '#707275',
        600: '#4c4f52',
        700: '#24262d',
        800: '#1a1c23',
        900: '#121317',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
    extend: {},
  },
  corePlugins: {
    float: false,
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
