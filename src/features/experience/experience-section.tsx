import { ExperienceList } from "@/features/experience/experience-list";
import { profile } from "@/content/profile";

export function ExperienceSection() {
  return (
    <section
      id="work_experience"
      className="relative overflow-hidden bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A476FF]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 right-0 h-72 w-72 translate-x-1/3 rounded-full bg-[#5e4491]/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Work <span className="text-[#A476FF]">Experience</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
            From mentoring and product teams to shipping Flutter apps for clients
            — a path built around building, teaching, and delivering.
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <ExperienceList items={[...profile.experience].reverse()} />
        </div>
      </div>
    </section>
  );
}
