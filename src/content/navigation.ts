import type { NavItem } from "@/content/types";

export const navigation = [
  { href: "/#home", hash: "#home", label: "Home" },
  { href: "/#projects", hash: "#projects", label: "Projects" },
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
  { href: "/#cover-letter", hash: "#cover-letter", label: "Cover Letter" },
] as const satisfies readonly NavItem[];
