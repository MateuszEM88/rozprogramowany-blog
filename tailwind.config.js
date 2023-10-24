/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryText: "#0f172a",
        darkText: "#D4D5DB",
        containerBg: "#ffffff",
        containerDark: "#18162C",
        borderDark: "#232140",
        inputBg: "#D4D5DB",
      },
    },
  },
  plugins: [],
};
