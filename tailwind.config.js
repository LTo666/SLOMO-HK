module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFCC33",

          "primary-content": "#7C4444",

          secondary: "#F000B8",

          accent: "#570DF8",

          neutral: "#7C4444",

          "neutral-content": "#FFCC33",

          "base-100": "#FFFFFF",

          "base-200": "#F7F7F7",

          "base-content": "#1C1C1C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
