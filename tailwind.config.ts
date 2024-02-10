import type { Config } from "tailwindcss";

const colorize = {
  white: "white",
  red: {
    100: "#ffcbd1",
    200: "#f69697",
    300: "#ee6b6e",
    400: "#f94449",
    500: "#ff2c2c",
    600: "#ff0012",
    700: "#f30013",
    800: "#e50008",
    900: "#d50000",
  },
  blue: {
    100: "#9fdfe8",
    300: "#98dfe7",
    450: "#62c2da",
    600: "#1e81b0",
    800: "#08508a",
    900: "#092e5b",
  },
  orange: {
    100: "#feeab8",
    300: "#fae1a9",
    500: "#fab85a",
    700: "#ec8c4e",
    900: "#e45a28",
  },
  success: "#28a745",
  error: "#dc3545",
  total: {
    color: "#dae3e9",
    colorHover: "#7491a0",
    colorShadow: "#4E535D",
  },
  light: {
    total: "#1b1e25",
    totalL: "#252831",
    color: "#4E535D",
    color1: "#1e81b0",
    color1hover: "#08508a",
    palette: {
      100: "#d1e0fc",
      200: "#b4d6f5",
      300: "#e3c2e3",
      400: "#f3cde6",
      600: "#f9d9e2",
      700: "#fae6dd",
    },
  },
  dark: {
    total: "#121212",
    totalD: "#252831",
    color: "#676767",
    color1: "#c487fc",
    color2: "#00ddbc",
    color3: "#ec8c4e",
    color3hover: "fab85a",
    color1hover: "#4a3f53",
    color2hover: "#1f4948",
    palette: {
      100: "#383838",
      200: "#363636",
      300: "#333333",
      400: "#2e2e2e",
      500: "#2c2c2c",
      600: "#272727",
      700: "#252525",
      800: "#232323",
      900: "#1e1e1e",
      1000: "#121212",
    },
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    borderColor: colorize,
    backgroundColor: colorize,
    stroke: colorize,
    textColor: colorize,
    extend: {
      transitionProperty: {
        width: "width",
        minWidth: "min-width",
      },
    },
  },
  plugins: [],
};
export default config;
