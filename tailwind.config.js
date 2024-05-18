/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/templates/app/*.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#6687a2","100":"#4c7392","200":"#325e83","300":"#194b73","400":"#003764","500":"#003764","600":"##00315a","700":"#002c50","800":"#002646","900":"#00213c","950":"#001b32"}
      },
      width: {

        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
        '320': '80rem',
        '336': '84rem',
        '352': '88rem',
        '368': '92rem',
        '384': '96rem',
        '400': '100rem',
        '416': '104rem',
        '432': '108rem',
        '448': '112rem',
      } , 

      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
        '320': '80rem',
        '336': '84rem',
        '352': '88rem',
        '368': '92rem',
        '384': '96rem',
        '400': '100rem',
        '416': '104rem',
        '432': '108rem',
        '448': '112rem',
      },  
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
        'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}

