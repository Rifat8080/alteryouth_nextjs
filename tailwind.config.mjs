import { counter } from '@fortawesome/fontawesome-svg-core';

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
        counterColor: "#F3F4F6",
        sidebarColor: "#DCFCE6",
        uberColor: "#FCFCFC",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/1.jpg')",
      },
      screens: {
        '1.5xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
