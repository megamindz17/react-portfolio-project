/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px', 
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        bright: '#fdf2e9',
        primary:'#070F2B',
        secondary:"#1B1A55",
        accent:'#535C91',
        dark:"#20262E"
      },
    },
  },
  plugins: [],
};
