const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('../public/img/main-bg.jpg')",
      }
    },
    colors: {
      ...colors,
      primary: "#14213D",
      secondary: "#2F89CE",
      customDark: "#282828",
      customYellow: "#F9E74D"
    }
  },
  plugins: [],
}