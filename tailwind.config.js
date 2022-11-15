/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.6rem',
        '2xs': '.5rem'
      },
      colors: {
        'charged-blue': '#1DACE3',
        'cerise-pink': '#E9327C',
        'oxford-blue': '#001A49',
        'chinese-silver': '#CCCCCC',
        'cultured': '#F5F5F5',
        'ghost-white': '#F9F9F9'
      }
    },
  },
  plugins: [],
}
