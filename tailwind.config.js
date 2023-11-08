/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./client/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hexagons': 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2728%27 height=%2749%27 viewBox=%270 0 28 49%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg id=%27hexagons%27 fill=%27%23a3783f%27 fill-opacity=%270.26%27 fill-rule=%27nonzero%27%3E%3Cpath d=%27M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }
    },
    colors: {
      orange: colors.orange,
      'squareup-teal': '#142e35',
      
    }
  },
  plugins: [ "postcss-preset-env", 
  
],
}

