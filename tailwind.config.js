/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      bbpurple: "#9853F0",
      bbLpurple: "#F6EFFF",
      bbyellow: "#FFEC8A",
      bbpink: "#FF6FB5",
      bb22: "#222222",
      bb66: "#666666",
      bb88: "#888888",
      bbBB: "#BBBBBB",
      bbfb: "#FBFBFB",
    },
    extend: {
      fontFamily: {
        sans: ["Pretendard Std", "Pretendard Std Variable"],
      },
    },
  },
  plugins: [],
}
