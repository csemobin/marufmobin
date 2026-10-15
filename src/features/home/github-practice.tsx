import { site } from "@/content/site";

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

export function GithubPractice({ publicRepos }: { publicRepos: number | null }) {
  return (
    <div className="w-full max-w-sm bg-black/10 px-8 py-10 backdrop-blur-[2px] sm:px-10 sm:py-12">
      <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
        Stacks
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Open work</h2>
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
      <p className="mt-4 font-[family-name:var(--font-newsreader),serif] text-[1.65rem] leading-snug text-white">
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
                  {index > 0 ? <span className="text-white/30"> · </span> : null}
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
  );
}
