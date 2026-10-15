import {
  featuredHighlights,
  featuredStories,
} from "@/content/featured-projects";
import lmsAndroid from "@/features/home/featured/lms-android.jpg";
import lmsIos from "@/features/home/featured/lms-ios.jpg";
import lmsSessions from "@/features/home/featured/lms-sessions.jpg";
import lyfuber from "@/features/home/featured/lyfuber.jpg";
import lyfuberWelcome from "@/features/home/featured/lyfuber-welcome.jpg";
import type { StaticImageData } from "next/image";

const highlightImages: Record<
  (typeof featuredHighlights)[number]["key"],
  StaticImageData
> = {
  "lms-ios": lmsIos,
  "lms-android": lmsAndroid,
  lyfuber,
};

const storyImages: Record<
  (typeof featuredStories)[number]["key"],
  StaticImageData
> = {
  lms: lmsSessions,
  lyfuber: lyfuberWelcome,
};

export function FeaturedProjects() {
  return (
    <section className="bg-black px-6 py-16 font-[family-name:var(--font-montserrat),sans-serif] text-white md:py-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl md:leading-[1.2]">
          Featured <span className="text-[#A476FF]">Projects</span>
        </h2>
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredHighlights.map((project) => {
            const image = highlightImages[project.key];

            return (
              <li key={project.key}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block text-center"
                >
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    className="mx-auto h-80 w-full object-contain transition-opacity duration-500 group-hover:opacity-50 md:h-[28rem]"
                  />
                  <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-2 lg:gap-12">
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
              </div>
            );
            const photo = (
              <img
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                className="mx-auto w-3/4 rounded-lg"
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
      </div>
    </section>
  );
}
