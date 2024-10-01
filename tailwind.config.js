/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubikBold: ["Rubik_700Bold"],
        rubikSemiBold: ["Rubik_600SemiBold"],
      },
    },
  },
  plugins: [],
};
