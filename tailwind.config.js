/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        amazonBlack: "#131921",
        amazonYellow: "#cd9042",
      },
      spacing: {
        12: "3rem", // Customize the value to match your design
      },
    },
  },
  plugins: [],
};
