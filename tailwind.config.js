/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    boxShadow: {
      md: "0 4px 4px rgba(0, 0, 0, 0.05)",
    },
  },
};
export const plugins = [
  require("prettier-plugin-tailwindcss"),
  require("tailwind-scrollbar-hide"),
];
export const tailwindConfig = "./tailwind.config.js";
