import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { site, seoKeywords } from "@/content/site";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource/newsreader/latin-400.css";
import "@fontsource/newsreader/latin-400-italic.css";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/newsreader/latin-600.css";
import "@fontsource/newsreader/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · Maruf Mobin — Flutter Developer`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  authors: [{ name: "Maruf Mobin", url: site.url }],
  creator: "Maruf Mobin",
  publisher: "Maruf Mobin",
  category: "technology",
  applicationName: "Maruf Mobin Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: "Maruf Mobin — Flutter Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 512,
        height: 512,
        alt: "Maruf Mobin — Flutter Developer, Mobile Application Developer, App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
    creator: "@MarufMobin",
  },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg", sizes: "48x48" }],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
