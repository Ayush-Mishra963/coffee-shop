/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#1B1410",
          light: "#2A211B",
          lighter: "#3A2F27",
        },
        bone: {
          DEFAULT: "#F3ECE2",
          muted: "#B9A99A",
        },
        brass: {
          DEFAULT: "#C08552",
          dark: "#9C6A3E",
        },
        oxide: "#8B3A2B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
    },
  },
  plugins: [],
};
