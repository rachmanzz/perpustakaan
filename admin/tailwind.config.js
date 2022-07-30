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
      },
      backgroundImage: {
        'focus-off': 'radial-gradient(50% 50% at 50% 50%, #F7EEDE 0%, rgba(247, 238, 222, 0) 100%)'
      }
    },
  },
  plugins: [],
}
