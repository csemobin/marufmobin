import Link from "next/link";
import { profile } from "@/content/profile";
import { ExperienceSection } from "@/features/experience/experience-section";
import { FeaturedProjects } from "@/features/home/featured-projects";
import { GithubSection } from "@/features/home/github-section";
import portrait from "@/ref/marufmobin.jpg";

export async function HomeView() {
  return (
    <>
    <section className="grid min-h-svh items-stretch bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white md:grid-cols-2">
      <div className="flex items-center px-6 pt-16 pb-10 sm:px-10 md:px-16 md:py-24 lg:px-24">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {profile.headline}
          </h1>
          <p className="mt-5 text-base leading-7 text-white/75 md:text-lg">
            {profile.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="inline-flex items-center rounded-[3px] bg-[#2f6fed] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#245ad4]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm9 17a1 1 0 0 1-2 0 7 7 0 0 0-14 0 1 1 0 0 1-2 0 9 9 0 0 1 18 0Z" />
              </svg>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center overflow-visible bg-black pt-8 md:pt-12">
        <div className="relative shrink-0">
          <img
            src={portrait.src}
            alt="Portrait"
            width={portrait.width}
            height={portrait.height}
            fetchPriority="high"
            decoding="async"
            className="block h-auto w-auto max-h-[calc(100svh-2rem)] max-w-full object-contain object-top brightness-[0.72] contrast-110 saturate-50 md:max-h-[calc(100svh-3rem)]"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_32%)] md:bg-[linear-gradient(to_right,#000_0%,rgba(0,0,0,0.4)_24%,rgba(0,0,0,0.1)_100%)]"
          />
        </div>
      </div>
    </section>
    <FeaturedProjects />
    <GithubSection />
    <ExperienceSection />
    </>
  );
}
