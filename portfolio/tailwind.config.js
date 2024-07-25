/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        Blue : '#0A192F',
        head : '#EEEEEE',
        blue1 : '#64FFDA',
      },
      animation: {
        custom: "scale .2s linear 2.5s",
        morph: "morph 4s ease-in-out infinite both alternate",
        logo : "logo 3s ease infinite both alternate",
        menubar : "menubar 0.5s ease 1 both alternate",
        menuOl : "menuOl 0.3s ease 1 both alternate 0.3s"
      },
      fontFamily: {
        fontHeading: "Poppins, sans-serif",
        fontParagraph: "Mulish, sans-serif"
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)", display: "block" }, "100%": { transform: "scale(0)", display: "none" }
        },
        morph: {
          "0%": {
            borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%"
          },
          "100%": {
            borderRadius: "40% 60%"
          }
        },
        logo : {
          "0%": {
            transform : "scale(3)"
          },
          "100%" :{
            transform : "scale(2)"
          },
        },
        menubar :{
            "0%" :{
              transform : "translateX(-100%)"
            },
            "100%":{
              transform : "translateX(0)"
            }
        },
        menuOl :{
          "0%" :{
            opacity : "0",
            transform : "translateX(-100%)"
          },
          "100%":{
            opacity : "100",
            transform : "translateX(0)"
          }
      },
      },
      gridColumn: {
        mdScreen: "1 / 9",
        mdScreenRev: "5 / -1",
        lgScreen: "7 / -1",
        lgScreenRev: "1 / 8",
        full: "1 / -1",
        lgContent: "1 / 7",
        lgImage: "6 / -1"
      },
    },
  },
  plugins: [],
}

