"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, PropsWithChildren } from "react";
import { BreadcrompsProvider } from "@/components/Breadcromps/context/BreadcropContext";
import { ApolloWrapper } from "./apollo_client/client_provider";
import { SnackProvider } from "@/entities/snackbar";

export const Providers = ({ children }: PropsWithChildren) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return children;
  return (
    <ThemeProvider attribute="class">
      <SnackProvider>
        <BreadcrompsProvider>
          <ApolloWrapper> {children}</ApolloWrapper>
        </BreadcrompsProvider>
      </SnackProvider>
    </ThemeProvider>
  );
};
