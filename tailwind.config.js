const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        primary: '#2AA580',
        from_black_gradient: '#222222',
        to_black_gradient: '#1a222222',
        checkout_bg: '#FBFBFB',
        btn_pop_up: '#EE8434',
        bg_pop_up: '#FFF3EB',
        bg_footer: '#2B2D42',
        golden: '#EE8434',
        btn_apply: '#455065',
        bg_color: '#FBFBFB',
        bg_gray: '#F6F6F6',
        text_gray: '#455065',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
