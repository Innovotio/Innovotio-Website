/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#444444",
        backgroundBlack: "#020002",
        primaryYellow: "#FFCC00",
        text: "#A3A3A3",
        plain: "#0000000F",
        nav: "#AAAAAA",
        side: "#182222",
        Darkgray: "#DDDDDD",
        form: "#F5F5F5",
        yellow: "#FFCC00",
        btnDefaultBlack: "#2E2E2E",
        btnHoverBlack: " #182222",
        btnHoverYellow: "#FBCD59",
        headerGrey: "#A3A3A3",
      },

      fontFamily: {
        font: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
