/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        beige : "#FFFCE0",
        darkBeige : "#0E100F"
      }
    },
  },
  plugins: [],
}