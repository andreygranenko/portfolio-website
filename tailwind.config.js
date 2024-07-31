/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#112D4E',
      'light-blue': '#DBE2EF',
      'blue': '#3F72AF',
      'bg-primary': '#F9F7F7'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}