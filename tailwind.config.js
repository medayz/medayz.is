const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true
    },
    colors: {
      teal: colors.teal,
      emerald: colors.emerald,
      gray: colors.blueGray,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      purple: colors.purple
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
