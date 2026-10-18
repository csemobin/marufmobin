import type { Metadata } from "next";
import { site, seoKeywords } from "@/content/site";
import { HomeView } from "@/features/home/home-view";

export const metadata: Metadata = {
  title: {
    absolute: site.title,
  },
  description: site.description,
  keywords: [...seoKeywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
