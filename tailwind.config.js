/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lightyellow:'#fce72b',
        mdyellow:'#fccb28',
        yellow:'#faa716',
        darkyellow:'#c97d0a',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bermuda: '#78dcca',
        blue:'#0555f5',
        darkblue:'#0d0e1f',
        lightblue:'#323440',
        darkbluegray:'#283b4a',
        footerbottom:'#11161c',
        gray:'#5f6061',
        lightgray:'#e3e5e6',
        lightwhite:'#e6e8e8',
        bluegray:'#9da1a8',
        sky:'#d1f4ff',
        lightbrown:'#a86832'
        
      },
      boxShadow:{
        testShadow:"0px 0px 32px 1px rgba(199,199,199,1)",
        boxInput:"0 0 3px 2px rgba(228 121 17 / 50%)",

      }
    },
  },
  plugins: [],
}

