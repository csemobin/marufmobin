import type { Project } from "@/content/types";

export const projects = [
  {
    slug: "northwind",
    title: "Northwind",
    summary:
      "A sample case study. Replace it with a product you shipped and the result it produced.",
    year: "2025",
    role: "Design and engineering",
    tags: ["Next.js", "TypeScript", "Design system"],
    featured: true,
    problem:
      "The team had a product people could use, but the interface had grown feature by feature. New work was slow because every screen invented its own patterns.",
    approach:
      "I mapped the repeated jobs, reduced them to a small set of components, and rebuilt the main flows on that system so design and engineering shared one source.",
    outcome:
      "Later features shipped on the shared components. Replace this sentence with a measured result from your own project.",
    links: [{ label: "Example link", href: "https://example.com" }],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    summary:
      "A sample publishing tool. Use this slot for a smaller project with a clear before and after.",
    year: "2024",
    role: "Product engineer",
    tags: ["React", "Content model", "Accessibility"],
    featured: true,
    problem:
      "Editors were maintaining pages in a layout that mixed content, navigation, and one-off styles. Small copy changes required a developer.",
    approach:
      "I separated the content from the screens and gave each page a predictable structure: a title, a summary, and a small set of sections.",
    outcome:
      "Editors could add a piece of work without touching the layout. Describe your own handoff here.",
    links: [],
  },
  {
    slug: "atlas",
    title: "Atlas",
    summary:
      "A sample internal tool. Keep unfeatured projects in the same file; the work index lists every entry.",
    year: "2023",
    role: "Frontend",
    tags: ["UI", "Information architecture"],
    featured: false,
    problem:
      "People searching an internal archive had to know the folder structure before they could find a document.",
    approach:
      "I redesigned the index around the questions people already asked: what it is, when it happened, and who it was for.",
    outcome:
      "The archive became browsable from one list. Replace this with what your users were able to do afterward.",
    links: [],
  },
] satisfies Project[];
