const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./common/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#00648B',
      primary1: '#004A69',
      primary2: '#002E48',
      secondary: '#7FBC42',
      secondary1: '#ABCF38',
      secondary2: '#208134',
      neutral: '#C5D1D7',
      neutral1: '#7A8F9B',
    },
    typography: {
      default: {
        css: {
          h1: {
            fontWeight: '500',
          },
          h2: {
            fontWeight: '400',
          },
          h3: {
            fontWeight: '500',
          },
          h4: {
            fontWeight: '500',
          },
        },
      },
    },
    extend: {
      colors: {
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
          // default values from Tailwind UI palette
          // '300': '#d2d6dc',
          // '400': '#9fa6b2',
          // '500': '#6b7280',
          // '600': '#4b5563',
          // '700': '#374151',
          // '800': '#252f3f',
          // '900': '#161e2e',
        },
        'cool-gray': {
          50: '#fbfdfe',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cfd8e3',
          400: '#97a6ba',
          500: '#64748b',
          600: '#475569',
          700: '#364152',
          800: '#27303f',
          900: '#1a202e',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
