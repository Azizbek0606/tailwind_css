/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:
      {
        nunito: "nunito",
      },
      colors:{
        dark_purple: '#000235',
        btn_primary: '#7e7ee3',
        heading_color:'#abd9d9'
      }
    },
  },
  plugins: [],
}