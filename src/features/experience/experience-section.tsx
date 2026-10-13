import { ExperienceList } from "@/features/experience/experience-list";
import { profile } from "@/content/profile";

export function ExperienceSection() {
  return (
    <section
      id="work_experience"
      className="bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          My Work <span className="text-[#A476FF]">Experience</span>
        </h2>
        <div className="mt-12">
          <ExperienceList items={profile.experience} />
        </div>
      </div>
    </section>
  );
}
