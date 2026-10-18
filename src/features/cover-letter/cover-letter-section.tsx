import { coverLetter } from "@/content/cover-letter";
import { DownloadCoverLetterButton } from "@/features/cover-letter/download-cover-letter";

export function CoverLetterSection() {
  const { applicant, paragraphs } = coverLetter;

  return (
    <section
      id="cover-letter"
      aria-labelledby="cover-letter-heading"
      className="scroll-mt-28 bg-black px-6 py-16 font-[family-name:var(--font-montserrat),sans-serif] text-white md:scroll-mt-32 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-[#A476FF] uppercase">
              Application
            </p>
            <h2
              id="cover-letter-heading"
              className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
            >
              Cover <span className="text-[#A476FF]">Letter</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              A concise introduction from Maruf Mobin — Flutter Developer, Mobile
              Application Developer, and App Developer.
            </p>
          </div>
          <DownloadCoverLetterButton />
        </div>

        <article className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="border-b border-white/10 bg-gradient-to-r from-[#A476FF]/15 via-transparent to-transparent px-6 py-8 md:px-10 md:py-10">
            <p className="text-2xl font-bold tracking-tight md:text-3xl">
              {applicant.name}
            </p>
            <p className="mt-2 text-sm text-[#A476FF] md:text-base">
              {applicant.role}
            </p>
            <ul className="mt-5 flex flex-col gap-1.5 text-sm text-white/65 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-1">
              <li>{applicant.location}</li>
              <li>
                <a
                  href={`mailto:${applicant.email}`}
                  className="transition-colors hover:text-white"
                >
                  {applicant.email}
                </a>
              </li>
              <li>{applicant.phone}</li>
              <li>
                <a
                  href={applicant.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              {applicant.linkedin ? (
                <li>
                  <a
                    href={applicant.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="space-y-6 px-6 py-8 text-sm leading-7 text-white/80 md:px-10 md:py-10 md:text-base md:leading-8">
            <p className="font-medium text-white">{coverLetter.greeting}</p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <p>{coverLetter.closing}</p>
              <p className="mt-6">{coverLetter.signOff}</p>
              <p className="mt-6 text-lg font-bold text-white">
                {applicant.name}
              </p>
              <p className="mt-1 text-sm text-white/55">
                Flutter Developer · Mobile Application Developer
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
