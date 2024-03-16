"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { BreadcrompsProvider } from "@/components/Breadcromps/context/BreadcropContext";

export const Providers = ({ children }: PropsWithChildren) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return children;
  return (
    <ThemeProvider attribute="class">
      <BreadcrompsProvider>{children}</BreadcrompsProvider>
    </ThemeProvider>
  );
};
