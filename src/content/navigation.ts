import type { NavItem } from "@/content/types";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly NavItem[];
