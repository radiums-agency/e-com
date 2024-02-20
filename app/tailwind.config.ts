import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        primary: {
          '50': '#f2f5fb',
          '100': '#e7ecf8',
          '200': '#d3dbf2',
          '300': '#b8c3e9',
          '400': '#9ba5de',
          '500': '#8188d3',
          '600': '#6869c3',
          '700': '#5957ab',
          '800': '#49498a',
          '900': '#40416f',
          '950': '#22223b',
        },

      },
      fontFamily: {
        sans: [
          'Geist',

        ],

      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              position: 'relative',
              borderRadius: theme('borderRadius.md'),
            },
          },
        },
      }),
    },
  },

  plugins: [
    typography,
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      // Square utility
      matchUtilities(
        {
          square: (value) => ({
            width: value,
            height: value,
          }),
        },
        { values: theme('spacing') }
      );
    }),
  ],
} satisfies Config;