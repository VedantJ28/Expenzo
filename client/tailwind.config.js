/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      logo: ["Playwrite PL", "cursive"],
    },
    extend: {},
  },
  plugins: [],
}