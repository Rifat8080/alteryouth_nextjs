/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        lightGreen: "#37C467",
        darkGreen: "#2D7A4B",
        sidebarColor: "#DCFCE6",
        uberColor: "#FCFCFC",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/1.jpg')",

      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
