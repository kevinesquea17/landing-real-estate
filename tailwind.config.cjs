/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB5264',
        secondary: '#F4BA24',
        background: '#F7F7F7',
        footer: '#181A26',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}