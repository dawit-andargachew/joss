/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      DM_Sans: ["DM Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#009A6A",
        secondary: "#99E6CE",
        danger_red: "#9A0000",
        danger_yellow: "#DA930B",
        text_gray: "#6B7280",
        watch_video: "#374151",
        watch_video_outline: "#D1D5DB",
        table_color_alternate: "#F6F8FB",
        table_header_color: "#A0A4A8",
      },
    },
  },
  plugins: [],
});
