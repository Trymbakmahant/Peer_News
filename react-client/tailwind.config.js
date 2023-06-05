/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend:{
        colors:{
        
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "pastel",
  },
}