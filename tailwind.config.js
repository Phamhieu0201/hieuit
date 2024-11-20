/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      maxWidth: {
        1480: "1480px",
      },
      xs: {
        400: "400px",
      },
      width: {
        130: "130px",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "serif"],
      },
      backgroundColor: {
        background: ["#EBEBE9"],
      },
      colors: {
        lineGray: ["#8A8A8A"],
      },
    },
  },
  plugins: [],
};
