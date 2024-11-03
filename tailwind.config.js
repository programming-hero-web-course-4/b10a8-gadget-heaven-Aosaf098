/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        'prim': '#9538E2'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}