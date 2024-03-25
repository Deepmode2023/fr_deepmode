"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren, useState, useEffect } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1e81b0" },
    secondary: { main: "#1e81b0" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ec8c4e" },
    secondary: { main: "#c487fc" },
  },
});

const ThemeMUIProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<String | null>(null);
  useEffect(() => {
    setTheme(window?.localStorage.getItem("theme") ?? "light");

    const EventCallback = function () {
      const theme = window.localStorage.getItem("theme");

      if (theme) {
        setTheme(theme);
      }
    };
    window.addEventListener("storage", EventCallback);

    return function cleanUp() {
      window.removeEventListener("storage", EventCallback);
    };
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export { ThemeMUIProvider };
