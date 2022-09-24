/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ]
}



