module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  presets: [require("@acmecorp/base-tailwind-config")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-children"),
  ],
}
