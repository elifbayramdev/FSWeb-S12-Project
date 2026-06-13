/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 DARK MODE İÇİN ŞART
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
};