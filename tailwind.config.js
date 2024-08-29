/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-grayblue': '#262c39',
      },
    },
    fontFamily: {
      'jbmono-light': ['JetBrainsMono-Light'],
      'jbmono': ['JetBrainsMono-Regular'],
      'jbmono-bold': ['JetBrainsMono-Bold'], 
    },
  },
  plugins: [],
}
