export type NavItem = {
  href: "/" | "/work" | "/about" | "/contact";
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  place: string;
  role: string;
  period: string;
  points: string[];
  link?: {
    label: string;
    href: string;
  };
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  featured: boolean;
  problem: string;
  approach: string;
  outcome: string;
  links: ProjectLink[];
};
