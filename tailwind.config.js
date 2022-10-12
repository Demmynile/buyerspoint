/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage : {
        'ban' : "url('../assets/banner-bg.png')" 
      },
      backgroundColor : {
        'colYellow' : "#EAC450",
        'colPink' : '#BB585F',
        'colDeepBlue' : '#263564',
        'colDeepBlack' : '#15162C'


      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
