"use client";

import { useState } from "react";
import {
  applicant,
  coverLetterDoc,
  curriculumVitae,
  type ApplicationDocId,
} from "@/content/cover-letter";
import { DownloadCoverLetterButton } from "@/features/cover-letter/download-cover-letter";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold tracking-[0.18em] text-[#A476FF] uppercase">
      {children}
    </h3>
  );
}

function SkillList({ items }: { items: readonly string[] }) {
  return (
    <p className="mt-3 text-sm leading-7 text-white/75 md:text-base md:leading-8">
      {items.join(" · ")}
    </p>
  );
}

function ApplicantHeader() {
  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-[#A476FF]/15 via-transparent to-transparent px-6 py-8 md:px-10 md:py-10">
      <p className="text-2xl font-bold tracking-tight md:text-3xl">
        {applicant.name}
      </p>
      <p className="mt-2 text-sm text-[#A476FF] md:text-base">{applicant.role}</p>
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
        <li>
          <a
            href={applicant.portfolio}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

function CoverLetterBody() {
  return (
    <div className="space-y-6 px-6 py-8 text-sm leading-7 text-white/80 md:px-10 md:py-10 md:text-base md:leading-8">
      <p className="font-medium text-white">{coverLetterDoc.greeting}</p>
      {coverLetterDoc.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="pt-2">
        <p>{coverLetterDoc.closing}</p>
        <p className="mt-6">{coverLetterDoc.signOff}</p>
        <p className="mt-6 text-lg font-bold text-white">{applicant.name}</p>
        <p className="mt-1 text-sm text-white/55">
          Flutter Developer · Mobile Application Developer
        </p>
      </div>
    </div>
  );
}

function CurriculumVitaeBody() {
  return (
    <div className="space-y-10 px-6 py-8 md:px-10 md:py-10">
      <section>
        <SectionHeading>Professional Summary</SectionHeading>
        <div className="mt-4 space-y-4 text-sm leading-7 text-white/80 md:text-base md:leading-8">
          {curriculumVitae.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-5 space-y-8">
          {curriculumVitae.projects.map((project, index) => (
            <div key={project.title}>
              <p className="text-base font-semibold text-white md:text-lg">
                {index + 1}. {project.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/75 md:text-base md:leading-8">
                {project.body}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/55">
                <span className="font-medium text-white/70">Technologies:</span>{" "}
                {project.technologies.join(", ")}
              </p>
              {project.links.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#A476FF]">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-opacity hover:opacity-80"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Languages</SectionHeading>
        <SkillList items={curriculumVitae.programmingLanguages} />
      </section>

      <section>
        <SectionHeading>Frameworks / Libraries</SectionHeading>
        <SkillList items={curriculumVitae.frameworks} />
      </section>

      <section>
        <SectionHeading>Tools</SectionHeading>
        <SkillList items={curriculumVitae.tools} />
      </section>

      <section>
        <SectionHeading>Education</SectionHeading>
        <ul className="mt-4 space-y-4">
          {curriculumVitae.education.map((item) => (
            <li key={item.school}>
              <p className="text-sm font-semibold text-white md:text-base">
                {item.school}
              </p>
              <p className="mt-1 text-sm leading-7 text-white/65">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Courses</SectionHeading>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-white/75 md:text-base">
          {curriculumVitae.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Work Experience</SectionHeading>
        <ul className="mt-4 space-y-4">
          {curriculumVitae.experience.map((item) => (
            <li key={item.company}>
              <p className="text-sm font-semibold text-white md:text-base">
                {item.company}
              </p>
              <p className="mt-1 text-sm leading-7 text-white/65">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Spoken Languages</SectionHeading>
        <SkillList items={curriculumVitae.spokenLanguages} />
      </section>
    </div>
  );
}

const docs = [curriculumVitae, coverLetterDoc] as const;

export function CoverLetterSection() {
  const [active, setActive] = useState<ApplicationDocId>("cv");
  const activeDoc = docs.find((doc) => doc.id === active) ?? curriculumVitae;

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
              Cover Letter <span className="text-white/80">&</span>{" "}
              <span className="text-[#A476FF]">CV</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Cover letter for introductions, CV for the full profile — choose
              either and download as PDF.
            </p>
          </div>
          <DownloadCoverLetterButton docId={active} />
        </div>

        <div
          className="mt-10 grid gap-4 md:grid-cols-2"
          role="tablist"
          aria-label="Application documents"
        >
          {docs.map((doc) => {
            const selected = doc.id === active;
            return (
              <button
                key={doc.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="application-document-panel"
                id={`application-tab-${doc.id}`}
                onClick={() => setActive(doc.id)}
                className={`rounded-2xl border px-6 py-6 text-left transition-colors ${
                  selected
                    ? "border-[#A476FF]/50 bg-[#A476FF]/10"
                    : "border-white/10 bg-[#0a0a0a] hover:border-white/25"
                }`}
              >
                <p className="text-xs font-medium tracking-[0.16em] text-[#A476FF] uppercase">
                  {doc.id === "cover" ? "Letter" : "Resume"}
                </p>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  {doc.shortTitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">{doc.blurb}</p>
              </button>
            );
          })}
        </div>

        <article
          id="application-document-panel"
          role="tabpanel"
          aria-labelledby={`application-tab-${active}`}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          <div className="border-b border-white/10 px-6 py-4 md:px-10">
            <p className="text-sm font-medium text-white/70">{activeDoc.title}</p>
          </div>
          <ApplicantHeader />
          {active === "cover" ? <CoverLetterBody /> : <CurriculumVitaeBody />}
        </article>
      </div>
    </section>
  );
}
