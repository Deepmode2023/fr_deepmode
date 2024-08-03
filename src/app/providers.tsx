"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, PropsWithChildren } from "react";
import { BreadcrompsProvider } from "@/components/Breadcromps/context/BreadcropContext";
import { ApolloWrapper } from "./apollo_client/client_provider";
import { SnackProvider, DisplayToastAdapter } from "@/entities/snackbar";
import { CreateSession, TIME_DISPLAY_TOAST } from "@/shared";
import { useAuthProvider } from "@/entities/auth";

export const Providers = ({ children }: PropsWithChildren) => {
  const [mount, setMount] = useState(false);
  useAuthProvider(mount);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <div>Loading ....</div>;

  return (
    <ThemeProvider attribute="class">
      <SnackProvider>
        <BreadcrompsProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </BreadcrompsProvider>
      </SnackProvider>
    </ThemeProvider>
  );
};
