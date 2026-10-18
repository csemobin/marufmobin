import Image from "next/image";
import {
  featuredApps,
  featuredStories,
} from "@/content/featured-projects";
import lyfuber from "@/images/lyfuber.png";
import courtConnectLogo from "@/images/logos/court-connect.png";
import lyfuberLogo from "@/images/logos/lyfuber.png";
import sleeknitLogo from "@/images/logos/sleeknit.png";
import theOfficialLmsLogo from "@/images/logos/the-official-lms.png";
import theOfficialLms from "@/images/the-official-lms.png";
import type { StaticImageData } from "next/image";

const storyImages: Record<
  (typeof featuredStories)[number]["key"],
  StaticImageData
> = {
  lms: theOfficialLms,
  lyfuber,
};

const appLogos: Record<(typeof featuredApps)[number]["key"], StaticImageData> =
  {
    lms: theOfficialLmsLogo,
    lyfuber: lyfuberLogo,
    "court-connect": courtConnectLogo,
    sleeknit: sleeknitLogo,
  };

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="scroll-mt-28 bg-black px-6 py-16 font-[family-name:var(--font-montserrat),sans-serif] text-white md:scroll-mt-32 md:py-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="featured-projects-heading"
          className="text-center text-4xl font-bold tracking-tight md:text-5xl md:leading-[1.2]"
        >
          Featured <span className="text-[#A476FF]">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/65 md:text-base">
          Selected apps by Maruf Mobin — Flutter Developer, Mobile Application
          Developer, and App Developer.
        </p>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {featuredStories.map((story) => {
            const image = storyImages[story.key];
            const copy = (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#A476FF] md:text-3xl">
                  {story.title}
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/75 md:text-base">
                  {story.body}
                </p>
                {story.links.length > 0 ? (
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    {story.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            );
            const photo = (
              <Image
                src={image}
                alt={`${story.title} mobile app by Maruf Mobin, Flutter Developer`}
                width={image.width}
                height={image.height}
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="mx-auto h-auto w-[70%] rounded-lg md:w-[65%]"
              />
            );
            const rule = (
              <span
                aria-hidden="true"
                className="mx-auto my-6 block h-24 w-[3px] bg-[#A476FF]"
              />
            );

            return (
              <article key={story.key} className="text-center">
                {story.imageFirst ? photo : copy}
                {rule}
                {story.imageFirst ? copy : photo}
              </article>
            );
          })}
        </div>

        <ul className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {featuredApps.map((app) => {
            const logo = appLogos[app.key];

            return (
              <li key={app.key} className="text-center">
                <Image
                  src={logo}
                  alt={`${app.title} app icon — Maruf Mobin App Developer`}
                  width={logo.width}
                  height={logo.height}
                  sizes="176px"
                  className="mx-auto size-36 rounded-3xl object-contain sm:size-40 md:size-44"
                />
                <h3 className="mt-6 text-xl font-bold">{app.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/70">
                  {app.body}
                </p>
                {app.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    {app.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
