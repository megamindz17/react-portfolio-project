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
      },
    },
  },
  plugins: [],
};
