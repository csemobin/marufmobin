import type { SocialLink } from "@/content/types";

export const site = {
  name: "MD MARUF",
  role: "Mobile Application Developer",
  title: "MD MARUF — Portfolio",
  description:
    "Mobile application developer focused on Flutter, with a full-stack background in React, Node.js, and Laravel.",
  url: "https://example.com",
  email: "appdevmaruf@gmail.com",
  phone: "+8801936 691536",
  signature: {
    name: "Md Maruf",
    role: "Flutter Developer",
    skills: ["Flutter", "Laravel", "Python", "SQL", "NO SQL"],
  },
  github: "MarufMobin",
  location: "Your city",
  availability: "Available for selected work",
  copyrightYear: "2026",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MarufMobin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/appdevmaruf" },
  { label: "Facebook", href: "https://www.facebook.com/appdevmaruf" },
];
