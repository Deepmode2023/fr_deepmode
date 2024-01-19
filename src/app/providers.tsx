"use client";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { useEffect, useState } from "react";

type ProvidersPropsType = {
  children: ReactNode;
};

export const Providers: FC<ProvidersPropsType> = ({ children }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return children;
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
