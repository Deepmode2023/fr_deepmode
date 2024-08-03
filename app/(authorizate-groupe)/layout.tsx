import { Navbar } from "@/components/Navbar/Navbar";
import { Layout } from "@/components/Layout/Layout";
import { AuthNavigation } from "@/components/AuthNavbar/AuthNav";
import { AuthNavbarContainer } from "@/widgets";
import { AuthAssideDrawer } from "@/features/auth-navbar";
import { PropsWithChildren } from "react";

export default function AuthorizationGroupLayout({
  children,
}: PropsWithChildren) {
  return (
    <Layout
      Navbar={<Navbar />}
      AuthNavbarAsside={<AuthAssideDrawer />}
      AuthNavbar={<AuthNavbarContainer />}
      isDev={false}
    >
      {children}
    </Layout>
  );
}
