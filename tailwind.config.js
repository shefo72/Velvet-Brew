export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        "primary-coffee": "#3C2A21",
        "coffee-hover": "#5A3D2E",
        "secondary-coffee": "#F5EFE6",
        "secondary-coffee-hover": "#E8DFD2",
        "muted-coffee": "#57534E",
      },
    },
  },
};
