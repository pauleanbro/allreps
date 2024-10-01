/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubikBold: ["Rubik_700Bold"],
        rubikSemiBold: ["Rubik_600SemiBold"],
      },
      colors: {
        primary: "#FF8A65",
        secondary: "#6C5F5B",
        tertiary: "#4F4A45",
        white: "#F6F1EE",
      }
    },
  },
  plugins: [],
};
