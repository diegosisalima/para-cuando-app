/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'app-blue': '#1b4db1',
        'app-yellow': '#f3f243',
        'app-pink': '#ff64bc',
        'app-black': '#000000',
        'app-blackLight': '#1A1E2E',
        'app-grayDark': '#A7A6A7',
        'app-grayLight': '#D9D9D9',
        'app-grayLighter': '#F8F7FA',
        'app-red': '#EF3F47',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'app-card': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'app-bgSignIn':
          "linear-gradient(90deg, #000000 -7.73%, rgba(0, 0, 0, 0.59) 37.54%, rgba(0, 0, 0, 0) 98.92%, rgba(0, 0, 0, 0) 98.92%), url('/imagen-de-fondo.png')",
      },
      borderRadius: {
        DEFAULT: '20px',
      },
    },
  },
  plugins: [],
};
