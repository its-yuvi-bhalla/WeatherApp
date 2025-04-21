/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          platinum: "#EAEAEA",
          periwinkle: "#CBC5EA",
          pomp: "#73628A",
          delft: "#313D5A",
          gunmetal: "#183642",
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  