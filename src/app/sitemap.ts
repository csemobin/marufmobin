import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/url";

const paths = ["/", "/about", "/work", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = getProjects().map((project) => `/work/${project.slug}`);

  return [...paths, ...projectPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
