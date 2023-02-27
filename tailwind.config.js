/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin:{
        '26rem':'26rem'
      },
      screens:{
        '2xl':'1600px'
      },
      height:{
        "89.5vh":"89.7vh"
      }
    },
  },
  plugins: [],
};
