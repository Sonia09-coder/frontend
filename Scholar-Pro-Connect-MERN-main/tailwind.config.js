/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        black: "#000",
        silver: "#b7b4b4",
        gainsboro: "#dbdbdb",
        royalblue: "#4169e1",
        lime: "#34f823",
        darkorange: "#ff9933",
        red: "#ff2400",
        darkblue: "#0504aa",
        mediumslateblue: "#2558f1",
        darkslategray: "#434343",
        lavender: "#edebfe",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "41xl": "60px",
        lg: "18px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
