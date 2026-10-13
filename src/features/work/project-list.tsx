import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <p className="py-8 text-muted">
        No projects yet. Add one in{" "}
        <code className="font-mono text-sm text-foreground">
          src/content/projects.ts
        </code>
        .
      </p>
    );
  }

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/work/${project.slug}`}
            className="group grid gap-3 py-6 md:grid-cols-[5.5rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-sm text-muted">{project.year}</span>
            <span>
              <span className="block font-serif text-2xl tracking-tight transition-colors group-hover:text-accent">
                {project.title}
              </span>
              <span className="mt-2 block max-w-2xl text-sm leading-6 text-muted">
                {project.summary}
              </span>
            </span>
            <span className="text-sm text-muted">{project.role}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
