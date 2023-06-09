/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1C1C25",
        secondaryColor: "#5F9CFF",
      },
      fontFamily: {
        yekan: "Iran Yekan",
      },
    },
  },
  plugins: [],
};
