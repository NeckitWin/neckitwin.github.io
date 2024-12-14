/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#171717',
        textColor: '#fdf2f8',
        primary: '#831843',
        primaryDark: '#4B0D1E'
      }
    },
  },
  plugins: [],
}

