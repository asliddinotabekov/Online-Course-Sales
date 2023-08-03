
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {

      'sm': { 'min': '0px ', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': { 'min': '768px ', 'max': '1279px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'xl': { 'min': '1280px', 'max': '1953px' },
      // => @media (min-width: 1280px) { ... }
      '2xl': { 'min': '1953px' }
    },
  },
  plugins: [],
})
