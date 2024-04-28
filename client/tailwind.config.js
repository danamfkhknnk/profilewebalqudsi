/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#00a54f",
        secondary: "#e53639",
        dark: "#ffcf22",
        // primary: "#0287a8",
        // secondary: "#00c3c7",
        // dark: "#ffcf22",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
