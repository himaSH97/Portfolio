/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:'burtons',
      },
    colors: {
        back: '#EAFDFC',
        gr5: '#DEF5E5',
        gr4: '#8EC3B0',
        gr3: '#BCEAD5',
      },
    },
  },
  plugins: [],
}