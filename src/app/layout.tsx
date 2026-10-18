import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Newsreader } from "next/font/google";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { site, seoKeywords } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

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
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
