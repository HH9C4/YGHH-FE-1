/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
      bbp: "#9853F0",
      bblp: "#F6EFFF",
      bby: "#FFEC8A",
      bbo: "#FF7A00",
      bbb: "#222222",
      bbg: "#666666",
    },
    extend: {
      fontFamily: {
        sans: ["Pretendard Std", "Pretendard Std Variable"],
      },
    },
  },
  plugins: [],
}
