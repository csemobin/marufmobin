import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { ExperienceList } from "@/features/experience/experience-list";

export function AboutView() {
  return (
    <Container className="py-16 md:py-24">
      {/* About me, kept from the earlier page.
      <Eyebrow>{site.location}</Eyebrow>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
        About
      </h1>
      <div className="mt-8 grid max-w-2xl gap-5 text-lg leading-8 text-muted">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      */}

      <section id="work_experience">
        <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
          Career
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Work <span className="text-[#A476FF]">Experience</span>
        </h2>
        <div className="mt-10">
          <ExperienceList items={[...profile.experience].reverse()} />
        </div>
      </section>
    </Container>
  );
}
