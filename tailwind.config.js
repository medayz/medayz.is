const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      teal: colors.teal,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
