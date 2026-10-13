import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project } from "@/content/types";

type ProjectViewProps = {
  project: Project;
};

const sections = [
  { key: "problem", title: "Problem" },
  { key: "approach", title: "Approach" },
  { key: "outcome", title: "Outcome" },
] as const;

export function ProjectView({ project }: ProjectViewProps) {
  return (
    <article>
      <Container className="py-16 md:py-24">
        <p className="font-mono text-sm text-muted">
          {project.year} · {project.role}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {project.summary}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid">
          {sections.map((section) => (
            <section
              key={section.key}
              className="max-w-2xl py-10 first:pt-0"
            >
              <h2 className="font-serif text-2xl tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{project[section.key]}</p>
            </section>
          ))}
        </div>

        {project.links.length > 0 ? (
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-14">
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            All work
          </Link>
        </p>
      </Container>
    </article>
  );
}
