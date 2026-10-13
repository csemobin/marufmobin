import type { Metadata } from "next";
import { ContactView } from "@/features/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation about a project.",
};

export default function ContactPage() {
  return <ContactView />;
}
