import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { NotFoundView } from "@/components/layout/not-found-view";
import { ProjectView } from "@/features/work/project-view";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Page not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage(props: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<NotFoundView />}>
      <ProjectContent params={props.params} />
    </Suspense>
  );
}

async function ProjectContent({
  params,
}: {
  params: PageProps<"/work/[slug]">["params"];
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}
