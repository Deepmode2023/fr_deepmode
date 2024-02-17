import { Test } from "@/components/Test/Test";
import { Navbar } from "@/components/Navbar/Navbar";
import { Layout } from "@/components/Layout/Layout";
import { AuthNavigation } from "@/components/AuthNavbar/AuthNav";
import { AuthNavbarAsside } from "@/components/AuthNavbar/AuthNavbarAsside";

export default async function Home() {
  return (
    <Layout
      Navbar={<Navbar />}
      AuthNavbarAsside={<AuthNavbarAsside />}
      AuthNavbar={<AuthNavigation />}
      isDev={false}
    >
      <Test />
    </Layout>
  );
}
