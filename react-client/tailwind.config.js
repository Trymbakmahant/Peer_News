/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {},
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#529b03",

          secondary: "#e9e92f",

          accent: "#f6f9c8",

          neutral: "#191a3e",

          "base-100": "#ffffff",

          info: "#cae2e8",

          success: "#dff2a1",

          warning: "#f7e488",

          error: "#f2b6b5",
        },
      },
    ],
  },
};
