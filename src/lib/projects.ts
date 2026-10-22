import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

const slugs = new Set<string>();

for (const project of projects) {
  if (!project.slug.trim()) {
    throw new Error("Every project needs a slug.");
  }

  if (slugs.has(project.slug)) {
    throw new Error(`Duplicate project slug: ${project.slug}`);
  }

  slugs.add(project.slug);
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
