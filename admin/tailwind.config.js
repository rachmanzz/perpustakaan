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
        'roboto-opensans': ['Roboto', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'mobile-nav': '0px -2px 2px 1px rgba(251,191,36,0.3)',
      },
      backgroundImage: {
        'focus-off': 'radial-gradient(50% 50% at 50% 50%, #F7EEDE 0%, rgba(247, 238, 222, 0) 100%)',
        'focus-off-dark': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 201, 120, 0.95) 0%, rgba(255, 201, 120, 0.534375) 32.81%, rgba(255, 201, 120, 0.484666) 39.06%, rgba(255, 201, 120, 0) 100%)',
      },
      colors: {
        'orange-450': '#F39508',
      }, 
      keyframes: {
        shake: {
          '20%, 60%': {
            transform: 'translate3d(-2px, 0, 0)',
          },
          '40%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          }
        }
      },
      animation: {
        'shake': 'shake 0.5s',
      }
    },
  },
  plugins: [],
}
