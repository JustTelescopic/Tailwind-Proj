/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xss': '0.2rem',
  },
    },
  },
  
  plugins: [],
}
