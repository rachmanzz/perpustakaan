/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'mobile-nav': '0px -2px 5px 1px rgba(251,191,36,0.51)',
      }
    },
  },
  plugins: [],
}
