import type { NavItem } from "@/content/types";

export const navigation = [
  { href: "/#home", hash: "#home", label: "Home" },
  { href: "/#projects", hash: "#projects", label: "Projects" },
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#cover-letter", hash: "#cover-letter", label: "Cover & CV" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
] as const satisfies readonly NavItem[];
