/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontSize: {
      hero: '48px',
      h1: '40px',
      h2: '30px',
      h3: '24px',
      h4: '16px',
      h5: '14px',

      p1: '18px',
      p2: '16px',
      p3: '14px',
      p4: '12px',
    },
    extend: {
      colors: {
        heading: '#0E1422',
        content: '#969696',
        content2: '#DDDDDD',
        button: '#01695D',
        active: '#036459',
        focus: '#004038',
        footer: '#000C0C',
        hero: '#10171D',
        icon: '#0EC5D7',
      },
    },
  },
  plugins: [],
};
