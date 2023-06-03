/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
