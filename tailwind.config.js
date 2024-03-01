/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        hd: "90.01rem",
      },

      colors: {
        primary: "#00DF7C",
        secondary: "#C2AFCB",
        newgray: "#D9D9D9",
        dark: "#1b1b1b",
        light: "#FFFFFF",
      },
      fontFamily: {
        main: ["Lobster"],
        special: ["Fira Sans"],
        secondary: ["Inter"],
        assinature: ["Great Vibes"],
      },
    },
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  plugins: [],
};
