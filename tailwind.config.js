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
        descriptionGray: "rgb(254, 252, 247);",
        primaryBtn: "rgb(14, 135, 132);",
        gradientCollection:
          "linear-gradient(180.00deg, rgba(254, 252, 247, 0),rgb(254, 252, 247) 100%);",
        customBlack: "rgb(51, 61, 75);",
        customDarkBlue: "rgb(44, 52, 62);",
        customGreen: "rgb(14, 135, 132);",
        customPink: "rgb(253, 214, 186);",
      },
    },
  },
  plugins: [],
};
