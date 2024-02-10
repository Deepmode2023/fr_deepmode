import { Test } from "@/components/Test/Test";
import { Navbar } from "@/components/Navbar/Navbar";
import { Layout } from "@/components/Layout/Layout";
import { AuthNavigation } from "@/components/Navbar/AuthNavbar/AuthNav";

export default async function Home() {
  return (
    <Layout Navbar={<Navbar />} AuthNavbar={<AuthNavigation />} isDev={true}>
      <Test />
    </Layout>
  );
}
