/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colours
        bs_navy: "#1D3557",
        bs_blue: "#457B9D",
        bs_teal: "#A8DADC",
        bs_cream: "#FAF9F6",

        // Utility / semantic
        primaryBlue: "#1D3557",
        urgentRed: "#E63946",
        shelterGreen: "#2A9D8F",
        clay: "#8D6A5B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        slide: "slide 40s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
