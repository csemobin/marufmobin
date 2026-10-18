import type { Metadata } from "next";
import { WorkView } from "@/features/work/work-view";

export const metadata: Metadata = {
  title: "Work — Maruf Mobin App Developer Projects",
  description:
    "Selected mobile app work by Maruf Mobin, Flutter Developer and Mobile Application Developer — LMS, Lyfuber, Sleeknit, Court Connect, and more.",
  keywords: [
    "Maruf Mobin",
    "Flutter Developer",
    "Mobile Application Developer",
    "App Developer",
    "Flutter projects",
  ],
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkView />;
}
