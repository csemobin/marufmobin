import type { Metadata } from "next";
import { AboutView } from "@/features/about/about-view";

export const metadata: Metadata = {
  title: "About",
  description: "Background, focus, and experience.",
};

export default function AboutPage() {
  return <AboutView />;
}
