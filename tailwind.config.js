/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#ffffff",
      gray: {
        50: "#f9f9f9",
        90: "#f0f0f0",
        100: "#e4e7eb",
        200: "#d1d5db",
        300: "#9ca3af",
        400: "#4b5663",
        500: "#1f2a37",
        600: "#111927",
        700: "#18191a",
      },
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

