const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        xs: '375px',
        ...defaultTheme.screens
      },
      //colors:{
      //   orange: '#FF7D1A',
        // 'pale-orange': '#FFEDE0',
        // 'very-dark-blue': hsl(220, '13%', '13%'),
        // 'dark-grayish-blue': hsl(219, '9%', '45%'),
        // 'grayish-blue': hsl(220, '14%', '75%'),
        // 'light-grayish-blue': hsl(223, '64%', '98%'),
        // white: hsl(0, '0%', '100%'),
        // black: hsl(0, '0%', '0%)
      //},
      extend: {
        fontFamily: {
          display: ['Kumbh Sans', 'cursive']
        },
      }
    },
    plugins: [],
  }