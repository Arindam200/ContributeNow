/** @type {import('tailwindcss').Config} */

import kutty from "kutty";
import preline from "preline/plugin";
import { nextui } from "@nextui-org/react";
// const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [kutty, preline, nextui()],
};
