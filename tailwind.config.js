/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
    "./src/entities/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['SF Pro Text']
    },
    container: {
      center: true,
      padding: 16,
      screens: {
        sm: '600px'
      }
    },
    colors: {
      'main': '#248BF2',
      'white': '#ffffff',
      'gray': '#71747A',
      'light-gray':'rgba(201, 204, 209, 0.24)',
      'gray-darker': '#81889F',
      'border-color': '#D7DDF3',
      'error': '#FF005C',
      'error-bg': 'rgba(255, 0, 0, 0.1)',
      'light-bg': '#ECF2FF',
      'is-liked': 'rgba(252, 165, 165, 0.8 )',
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
}