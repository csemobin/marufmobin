import type { Metadata } from "next";
import { AboutView } from "@/features/about/about-view";

export const metadata: Metadata = {
  title: "About Maruf Mobin — Flutter Developer",
  description:
    "About Maruf Mobin, Flutter Developer and Mobile Application Developer. Experience building apps across ride sharing, e-commerce, fleet, and tutoring.",
  keywords: [
    "Maruf Mobin",
    "Flutter Developer",
    "Mobile Application Developer",
    "App Developer",
    "About",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Maruf Mobin — Flutter Developer",
    description:
      "About Maruf Mobin, Flutter Developer and Mobile Application Developer. Experience building apps across ride sharing, e-commerce, fleet, and tutoring.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Maruf Mobin — Flutter Developer",
    description:
      "About Maruf Mobin, Flutter Developer and Mobile Application Developer. Experience building apps across ride sharing, e-commerce, fleet, and tutoring.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
