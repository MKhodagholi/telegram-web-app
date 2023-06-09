/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "--tg-theme-bg-color",
        textColor: "--tg-theme-text-color",
      },
      fontFamily: {
        yekan: "Iran Yekan",
      },
    },
  },
  plugins: [],
};
