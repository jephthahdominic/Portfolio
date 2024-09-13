/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['45px', '52px'],
        '8xl': ['96px', '106px']
      },
      colors:{
        "white-400":"rgba(255, 255, 255, 0.80)",
        "white-500":"rgba(255, 255, 255, 0.50)",
        "theme-color": "#363721",
        "eerie-black": "#1b1b1b",
        "chineseBlack": "#141414",
        "antiFlash": "#FFFFFF",
        "paper": "#DBE9F4",
        "slate-gray": "#6D6D6D",
      },
      backgroundImage:{
        "banner": "url(./assets/images/Banner2.jpg)"
      },
      fontFamily:{
        "openSans":['openSans', 'sans-serif'],
        "roboto":['roboto', 'sans-serif']
      },
      keyframes: {
        'fade-slow': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'appear': {
          '0%': {opacity: '0', width: '0', height:'0', padding: '0'},
          '100%': {opacity: '1', width: 'auto', height:'auto', padding: '1.25rem'}
        },
        'disappear': {
          '0%': {opacity: '1', width: '50%', height:'max-content', padding: '1.25rem', display: 'block'},
          '100%': {width: '0', height: '0', opacity: '0', padding: '0', display: 'none'}
        }
      },
      animation: {
        'fade-slow': 'fade-slow .5s linear 1',
        'appear': 'appear 1s linear 1',
        'disappear': 'disappear .5s linear 1'
      },
    },
  },
  plugins: [],
}

