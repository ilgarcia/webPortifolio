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
      animation: {
        slideDown: 'slideDown 0.5s forwards',
        shine: 'shine 2s infinite'
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
      },
    },
  },
  plugins: [],
};
