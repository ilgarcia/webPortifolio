/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--fira-font)",
      body: "var(--inter-font)",
      logo: "var(--nunito-font)",
    },
    extend: {
      colors: {
        theme: {
          dark: "#13131F",
          inky: "#252525",
          orange: "#FCA311",
          purple: "#7942ED",
        },
      },
      dropShadow: {
        neonWhite: [
          "0 0px 3px rgb(255,255,255,0.8)",
          "0 -4px 10px rgb(255,255,255,0.5)",
          "0 0px 21px rgb(255,255,255,0.2)",
          "0 0px 42px rgb(255,255,255,0.2)",
          "0 0px 82px rgb(0,255,170,0.3)",
          "0 0px 92px rgb(0,255,170,0.3)",
          "0 0px 102px rgb(0,255,170,0.4)",
          "0 0px 151px rgb(0,255,170,0.4)",
        ],
        neonOrange: [
          "0 0px 3px rgb(252,163,17,1)",
          "0 0px 5px rgb(252,163,17,1)",
          "0 -4px 10px rgb(252,163,17,1)",
          "0 0px 21px rgb(252,163,17,1)",
          "0 0px 42px rgb(252,163,17,1)",
          "0 0px 82px rgb(252,163,17,1)",
          "0 0px 92px rgb(252,163,17,1)",
          "0 0px 102px rgb(252,163,17,1)",
          "0 0px 151px rgb(252,163,17,1)",
        ],
        neonPurple: [
          "0 0px 3px rgb(121,66,237,1)",
          "0 0px 5px rgb(121,66,237,1)",
          "0 -6px 10px rgb(121,66,237,1)",
          "0 0px 21px rgb(121,66,237,1)",
          "0 0px 42px rgb(121,66,237,1)",
          "0 0px 82px rgb(121,66,237,1)",
          "0 0px 92px rgb(121,66,237,1)",
          "0 0px 102px rgb(121,66,237,1)",
          "0 0px 151px rgb(121,66,237,1)",
        ],
      },

      animation: {
        slideDown: "slideDown 0.5s forwards",
        shine: "shine 2s infinite",
        animLoader: "animLoader 2s linear infinite",
        neonLight: "neonLight 5s infinite",
        brokenLight: "brokenLight 5s infinite",
      },
      keyframes: {
        slideDown: {
          "0%, 50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        shine: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
        animLoader: {
          "0%": {
            boxShadow:
              "20px 0 rgb(255,255,255,0), 43px 0 rgb(255,255,255,0), 66px 0 rgb(255,255,255,0), 89px 0 rgb(255,255,255,0), 112px 0 rgb(255,255,255,0)",
          },
          "20%": {
            boxShadow:
              "20px 0 rgb(255,255,255), 43px 0 rgb(255,255,255,0), 66px 0 rgb(255,255,255,0), 89px 0 rgb(255,255,255,0), 112px 0 rgb(255,255,255,0)",
          },
          "40%": {
            boxShadow:
              "20px 0 rgb(255,255,255), 43px 0 rgb(255,255,255), 66px 0 rgb(255,255,255,0), 89px 0 rgb(255,255,255,0), 112px 0 rgb(255,255,255,0)",
          },
          "60%": {
            boxShadow:
              "20px 0 rgb(255,255,255), 43px 0 rgb(255,255,255), 66px 0 rgb(255,255,255), 89px 0 rgb(255,255,255,0), 112px 0 rgb(255,255,255,0)",
          },
          "80%": {
            boxShadow:
              "20px 0 rgb(255,255,255), 43px 0 rgb(255,255,255), 66px 0 rgb(255,255,255), 89px 0 rgb(255,255,255), 112px 0 rgb(255,255,255,0)",
          },
          "100%": {
            boxShadow:
              "20px 0 rgb(255,255,255), 43px 0 rgb(255,255,255), 66px 0 rgb(255,255,255), 89px 0 rgb(255,255,255), 112px 0 rgb(255,255,255)",
          },
        },
        neonLight: {
          "0%": {opacity: 0},
          // "40%": {opacity: 1},
          // "45%": {opacity: 0.8},
          // "50%": {opacity: 0.9},
          // "55%": {opacity: 0.8},
          // "60%": {opacity: 0.9},
          // "65%": {opacity: 0.8},
          "70%": {opacity: 1},
          "100%": {opacity: 1}
        },
        brokenLight: {
          "0%": {opacity: 0},
          "55%": {opacity: 0.4},
          "60%": {opacity: 0.2},
          "65%": {opacity: 0.4},
          "70%": {opacity: 0.2},
          "100%": {opacity: 0.5}
        },
        
      },
    },
  },
  plugins: [],
};
