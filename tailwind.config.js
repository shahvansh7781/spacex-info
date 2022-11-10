/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.95vmax",
      base: "1.15vmax",
      lg:"1.40vmax",
      xl: "1.55vmax",
      "2xl": "1.903vmax",
      "3xl": "2.253vmax",
      "4xl": "2.851vmax",
      "5xl": "3.402vmax",
      "6xl": "3.953vmax",
    },
  },
  plugins: [],
};
