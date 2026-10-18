import type { SocialLink } from "@/content/types";

export const seoKeywords = [
  "Maruf Mobin",
  "Flutter Developer",
  "Mobile Application Developer",
  "App Developer",
] as const;

export const site = {
  name: "Maruf Mobin",
  role: "Flutter Developer · Mobile Application Developer · App Developer",
  title:
    "Maruf Mobin — Flutter Developer | Mobile Application Developer | App Developer",
  description:
    "Maruf Mobin is a Flutter Developer and Mobile Application Developer building cross-platform apps for iOS and Android. Hire an App Developer for ride sharing, e-commerce, tutoring, and more.",
  url: "https://marufmobin.netlify.app",
  email: "appdevmaruf@gmail.com",
  phone: "+8801936 691536",
  signature: {
    name: "Maruf Mobin",
    role: "Flutter Developer",
    skills: ["Flutter", "Laravel", "Python", "SQL", "NO SQL"],
  },
  github: "MarufMobin",
  location: "Dhaka, Bangladesh",
  availability: "Available for selected work",
  copyrightYear: "2026",
  keywords: [...seoKeywords],
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MarufMobin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/appdevmaruf" },
  { label: "Facebook", href: "https://www.facebook.com/appdevmaruf" },
];
