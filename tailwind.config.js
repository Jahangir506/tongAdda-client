/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBrown': "#FF5757",
        "darkBrownHover": "#ef4444",
        "coffeeBrown": "#995C2D"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: []
  },
}