import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProjectList } from "@/features/work/project-list";
import { getProjects } from "@/lib/projects";

export function WorkView() {
  return (
    <Container className="py-16 md:py-24">
      <Eyebrow>Selected and earlier work</Eyebrow>
      <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Work
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Each entry is one object in the content file. Featured projects also
        appear on the home page.
      </p>
      <div className="mt-12">
        <ProjectList projects={getProjects()} />
      </div>
    </Container>
  );
}
