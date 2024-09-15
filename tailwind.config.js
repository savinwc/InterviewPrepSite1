/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: 'media',
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

