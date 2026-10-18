import type { Metadata } from "next";
import { ContactView } from "@/features/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Maruf Mobin — Hire a Flutter Developer",
  description:
    "Contact Maruf Mobin to hire a Flutter Developer, Mobile Application Developer, or App Developer for your next iOS and Android project.",
  keywords: [
    "Maruf Mobin",
    "Flutter Developer",
    "Mobile Application Developer",
    "App Developer",
    "Hire Flutter developer",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
