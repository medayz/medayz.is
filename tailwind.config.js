const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './library/**/*.js'
  ],
  darkMode: "media", // TODO: change to class'
  theme: {
    extend: {},
    container: {
      center: true
    },
    colors: {
      teal: colors.teal,
      emerald: colors.emerald,
      gray: colors.blueGray,
      cool: colors.coolGray,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      orange: colors.orange,
      purple: colors.purple
    },
    fontFamily: {
      sans: [
        "Heebo",
        "Space Grotesk",
        "Helvetica",
        "Montserrat",
        "system-ui",
        "sans-serif"
      ],
      mono: ["Roboto Mono", "Fira", "monospace"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
