import { Navbar } from "@/components/Navbar/Navbar";
import { Layout } from "@/components/Layout/Layout";
import { AuthNavigation } from "@/components/AuthNavbar/AuthNav";
import { AuthNavbarAsside } from "@/components/AuthNavbar/AuthNavbarAsside";
import { EventBus } from "@/shared";

export default async function Repetition() {
  EventBus.emit("some");
  return <div className="h-[100vh]">Repetition</div>;
}
