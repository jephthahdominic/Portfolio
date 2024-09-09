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
        "chineseBlack": "#141414"
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
        }
      },
      animation: {
        'fade-slow': 'fade-slow .5s linear 1',
      },
    },
  },
  plugins: [],
}

