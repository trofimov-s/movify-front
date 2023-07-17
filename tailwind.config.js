/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#ffffff",
      turquise: {
        50: "#effdfd",
        100: "#06d1de",
        400: "#0fbac5",
        500: "#0fa4ae",
        800: "#064b50",
      },
    },
    fontFamily: {
      main: "Comfortaa",
    },
    extend: {},
  },
  plugins: [],
}

