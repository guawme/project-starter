module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          tint: '#4c8dff',
          DEFAULT: '#3880ff',
          shade: '#3171e0',
        },
        secondary: {
          tint: '#50c8ff',
          DEFAULT: '#3dc2ff',
          shade: '#36abe0',
        },
      },
      letterSpacing: {
        widest: '.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
