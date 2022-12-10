/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors")
module.exports = {
  purge: {
    enabeld: true,
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  },
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
      bbpurple: "#7F73FF",
      bbLpurple: "#F1EFFF",
      bborange: "#FFC700",
      bbred: "#ff3535",
      bbyellow: "#FFEC8A",
      bbLyellow: "FFF6C9",
      bbgradientp: "#A66FFF",
      bbpink: "#6F75FF",
      bb22: "#222222",
      bb66: "#666666",
      bb88: "#888888",
      bbBB: "#BBBBBB",
      bbfb: "#FBFBFB",
    },
    fontFamily: {
      sans: ["Pretendard", "Pretendard Std Variable", "Pretendard Std"],
      custom: ["Pretendard"],
    },
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Pretendard Std Variable", "Pretendard Std"],
        custom: ["Pretendard"],
      },
      fontSize: {
        b11: "11px",
        b12: "12px",
        b13: "13px",
        b14: "14px",
        b16: "16px",
        b18: "18px",
        b20: "20px",
        b24: "24px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
