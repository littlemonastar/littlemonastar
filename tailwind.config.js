module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
