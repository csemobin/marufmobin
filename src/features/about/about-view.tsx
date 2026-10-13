import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { ExperienceList } from "@/features/experience/experience-list";

export function AboutView() {
  return (
    <Container className="py-16 md:py-24">
      <Eyebrow>{site.location}</Eyebrow>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
        About
      </h1>
      <div className="mt-8 grid max-w-2xl gap-5 text-lg leading-8 text-muted">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section id="work_experience" className="mt-16">
        <h2 className="font-serif text-3xl tracking-tight">
          My Work <span className="text-[#A476FF]">Experience</span>
        </h2>
        <div className="mt-8">
          <ExperienceList items={profile.experience} />
        </div>
      </section>
    </Container>
  );
}
