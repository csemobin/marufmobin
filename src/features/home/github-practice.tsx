import Link from "next/link";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { getGithubProfile } from "@/features/home/github-contributions";

const lanes = [
  {
    stack: "Flutter",
    projects: [
      { name: "Zulzana commerce", repo: "zulzana-e-commerce" },
      { name: "Air tickets", repo: "zulzana_air_ticket_booking_app" },
      { name: "E-commerce", repo: "e-commerce" },
      { name: "Water tracker", repo: "waterTrackerApplication" },
    ],
  },
  {
    stack: "Laravel",
    projects: [
      { name: "Shop", repo: "laravel_ecommerce" },
      { name: "Live chat", repo: "laravel-chat-app" },
      { name: "Contacts", repo: "ContactManagement" },
    ],
  },
  {
    stack: "React & Node",
    projects: [
      { name: "People Hunt", repo: "People-Hunt" },
      { name: "Car rental", repo: "car-rental" },
      { name: "Car garage", repo: "node-car-garage-clint-site" },
      { name: "Zulzana coffee", repo: "Zulzana-coffie" },
      { name: "Job portal", repo: "jobportal" },
    ],
  },
  {
    stack: "Also public",
    projects: [
      { name: "Healthcare", repo: "healthcare" },
      { name: "Tourism", repo: "tourism" },
      { name: "University", repo: "university-management-auth-services" },
      { name: "Library", repo: "Library-Management-System-Project" },
      { name: "Short links", repo: "shortLink" },
    ],
  },
] as const;

const focusSkills = [
  "Flutter",
  "React",
  "Node.js",
  "Laravel",
  "Python",
  "AI Engineering",
] as const;

export async function GithubPractice() {
  const githubProfile = await getGithubProfile();
  const publicRepos = githubProfile?.publicRepos ?? null;

  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 font-[family-name:var(--font-montserrat),sans-serif] text-white md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A476FF]/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#5e4491]/15 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/10">
        {/* About me */}
        <div className="md:pr-12 lg:pr-16">
          <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
            About me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Who I am
          </h2>
          <p className="mt-5 font-[family-name:var(--font-newsreader),serif] text-[1.55rem] leading-snug text-white md:text-[1.7rem]">
            {profile.intro}
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/65 md:text-base md:leading-7">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[0.65rem] font-medium tracking-[0.16em] text-[#A476FF]/80 uppercase">
              Focus
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/80">
              {focusSkills.map((skill) => (
                <li key={skill} className="relative pl-3 before:absolute before:left-0 before:text-[#A476FF] before:content-['·']">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-[0.65rem] font-medium tracking-[0.16em] text-[#A476FF]/80 uppercase">
              Shipping for
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {profile.services.join(" · ")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-white transition-opacity hover:opacity-75"
            >
              More about me
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
            <span className="text-sm text-white/40">{site.availability}</span>
          </div>
        </div>

        {/* Open work / stacks */}
        <div className="md:pl-12 lg:pl-16">
          <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
            Stacks
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Open work
          </h2>
          <p className="mt-5 text-sm text-[#f3f3f3]/80">
            {publicRepos == null ? (
              "Public repositories"
            ) : (
              <>
                <span className="text-lg font-semibold text-white">
                  {publicRepos.toLocaleString()}
                </span>{" "}
                public repositories
              </>
            )}
          </p>
          <p className="mt-4 font-[family-name:var(--font-newsreader),serif] text-[1.55rem] leading-snug text-white md:text-[1.7rem]">
            Flutter, Laravel, React, Node, Python, and TypeScript.
          </p>
          <p className="mt-2 text-sm leading-6 text-white/60">
            PHP and C++ sit in the same public history.
          </p>

          <ul className="mt-8 space-y-6">
            {lanes.map((lane) => (
              <li key={lane.stack}>
                <p className="text-xs font-medium tracking-[0.16em] text-[#A476FF]/80 uppercase">
                  {lane.stack}
                </p>
                <p className="mt-2 text-sm leading-6">
                  {lane.projects.map((project, index) => (
                    <span key={project.repo}>
                      {index > 0 ? (
                        <span className="text-white/30"> · </span>
                      ) : null}
                      <a
                        href={`https://github.com/${site.github}/${project.repo}`}
                        target="_blank"
                        rel="noreferrer"
                        className="whitespace-nowrap text-white/85 transition-colors hover:text-white"
                      >
                        {project.name}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
