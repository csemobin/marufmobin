import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { site, socials } from "@/content/site";
import { ExperienceSection } from "@/features/experience/experience-section";
import { FeaturedProjects } from "@/features/home/featured-projects";
import { GithubPractice } from "@/features/home/github-practice";
import portrait from "@/ref/marufmobin.jpg";

const githubHref =
  socials.find((social) => social.label === "GitHub")?.href ??
  `https://github.com/${site.github}`;

export async function HomeView() {
  return (
    <>
    <section
      id="home"
      className="grid min-h-svh scroll-mt-28 items-stretch bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white md:scroll-mt-32 md:grid-cols-2"
    >
      <div className="flex items-center px-6 pt-16 pb-10 sm:px-10 md:px-16 md:py-24 lg:px-24">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {profile.headline}
          </h1>
          <p className="sr-only">
            Maruf Mobin — Flutter Developer, Mobile Application Developer, and
            App Developer based in Dhaka, Bangladesh.
          </p>
          <p className="mt-5 text-base leading-7 text-white/75 md:text-lg">
            {profile.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/#cover-letter"
              className="inline-flex items-center rounded-[3px] bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90 [text-shadow:0.35px_0_0_currentColor,-0.35px_0_0_currentColor,0_0.35px_0_currentColor,0_-0.35px_0_currentColor]"
            >
              View Cover Letter
            </Link>
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              View Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center overflow-visible bg-black pt-8 md:pt-12">
        <div className="relative shrink-0">
          <Image
            src={portrait}
            alt="Maruf Mobin — Flutter Developer and Mobile Application Developer"
            width={portrait.width}
            height={portrait.height}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
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
    <GithubPractice />
    <ExperienceSection />
    </>
  );
}
