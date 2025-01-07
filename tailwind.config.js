/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        customGray: "rgb(131, 136, 143)",
        gray: "rgb(254, 252, 247);",
        primaryBtn: "rgb(14, 135, 132);",
        gradientCollection:
          "linear-gradient(180.00deg, rgba(254, 252, 247, 0),rgb(254, 252, 247) 100%);",
      },
    },
  },
  plugins: [],
};