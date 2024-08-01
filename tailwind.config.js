/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "dark-gray"  : "#3e4144",
        "light-green": "rgb(35, 206, 107)",
        "light-red"  : "#E31F71"
      },
    }
  },
  plugins: [],
}

