import type { Metadata } from "next";
import { WorkView } from "@/features/work/work-view";

export const metadata: Metadata = {
  title: "Work — Maruf Mobin App Developer Projects",
  description:
    "Mobile apps developed by Maruf Mobin, Flutter Developer and Mobile Application Developer — LMS Official App, Lyfuber, Sleeknit, and Court Connect.",
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
  openGraph: {
    title: "Work — Maruf Mobin App Developer Projects",
    description:
      "Mobile apps developed by Maruf Mobin, Flutter Developer and Mobile Application Developer — LMS Official App, Lyfuber, Sleeknit, and Court Connect.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Maruf Mobin App Developer Projects",
    description:
      "Mobile apps developed by Maruf Mobin, Flutter Developer and Mobile Application Developer — LMS Official App, Lyfuber, Sleeknit, and Court Connect.",
  },
};

export default function WorkPage() {
  return <WorkView />;
}
