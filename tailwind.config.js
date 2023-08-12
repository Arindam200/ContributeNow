/** @type {import('tailwindcss').Config} */

import kutty from "kutty";
import preline from "preline/plugin";
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [kutty, preline],
};
