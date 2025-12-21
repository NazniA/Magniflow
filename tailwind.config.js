/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        magniflow: {
          900: '#004AAD',
          500: '#009DFF'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    },
  },
    plugins: [],
}
