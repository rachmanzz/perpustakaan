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
        'top': '0 -1px 0 0 rgba(0, 0, 0, 0.2), 0 1px 0 0 rgba(0, 0, 0, 0.14), 0 2px 0 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
