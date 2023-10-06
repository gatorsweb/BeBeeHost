/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      primary: '#E87A2C',
      secondary: '#250781',
    },
    container:{
      center: true,
      padding: '20px'
    },
    extend: {
      colors:{
        'paragraph': '#5E636E'
      },
      fontFamily:{
        'roboto': 'Roboto, sans-serif'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1297px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

