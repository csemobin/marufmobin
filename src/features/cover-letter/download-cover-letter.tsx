"use client";

import { useState } from "react";
import {
  applicant,
  coverLetterDoc,
  curriculumVitae,
  type ApplicationDocId,
} from "@/content/cover-letter";

type Props = {
  docId: ApplicationDocId;
};

export function DownloadCoverLetterButton({ docId }: Props) {
  const [pending, setPending] = useState(false);
  const isCover = docId === "cover";

  const download = async () => {
    setPending(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 56;
      const maxWidth = pageWidth - margin * 2;
      let y = 56;

      const ensureSpace = (needed: number) => {
        if (y + needed > pageHeight - 56) {
          doc.addPage();
          y = 56;
        }
      };

      const writeParagraph = (text: string, lineHeight = 14, gap = 10) => {
        const lines = doc.splitTextToSize(text, maxWidth);
        ensureSpace(lines.length * lineHeight + gap);
        doc.text(lines, margin, y);
        y += lines.length * lineHeight + gap;
      };

      const writeHeading = (label: string) => {
        ensureSpace(36);
        y += 8;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(100, 70, 180);
        doc.text(label.toUpperCase(), margin, y);
        y += 18;
        doc.setTextColor(30);
      };

      const writeHeader = () => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(0);
        doc.text(applicant.name, margin, y);
        y += 20;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(80);
        doc.text(applicant.role, margin, y);
        y += 18;

        doc.setFontSize(9);
        doc.setTextColor(50);
        const contact = [
          applicant.location,
          applicant.email,
          applicant.phone,
          applicant.github,
          applicant.linkedin,
          applicant.portfolio,
        ].filter(Boolean);
        for (const line of contact) {
          ensureSpace(14);
          doc.text(line, margin, y);
          y += 13;
        }

        y += 10;
        doc.setDrawColor(164, 118, 255);
        doc.setLineWidth(1.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 22;
      };

      writeHeader();

      if (isCover) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(0);
        doc.text(coverLetterDoc.title, margin, y);
        y += 26;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.text(coverLetterDoc.greeting, margin, y);
        y += 22;

        for (const paragraph of coverLetterDoc.paragraphs) {
          writeParagraph(paragraph, 15, 14);
        }

        writeParagraph(coverLetterDoc.closing, 15, 18);
        doc.text(coverLetterDoc.signOff, margin, y);
        y += 28;
        doc.setFont("helvetica", "bold");
        doc.text(applicant.name, margin, y);
        y += 14;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(80);
        doc.text("Flutter Developer · Mobile Application Developer", margin, y);

        doc.save(coverLetterDoc.fileName);
        return;
      }

      writeHeading("Professional Summary");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      for (const paragraph of curriculumVitae.summary) {
        writeParagraph(paragraph, 13, 10);
      }

      writeHeading("Projects");
      curriculumVitae.projects.forEach((project, index) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(20);
        writeParagraph(`${index + 1}. ${project.title}`, 13, 6);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(40);
        writeParagraph(project.body, 12, 6);

        doc.setTextColor(70);
        writeParagraph(
          `Technologies: ${project.technologies.join(", ")}`,
          11,
          4,
        );

        if (project.links.length > 0) {
          writeParagraph(
            project.links
              .map((link) => `${link.label}: ${link.href}`)
              .join("  |  "),
            10,
            12,
          );
        }
      });

      writeHeading("Languages");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(40);
      writeParagraph(curriculumVitae.programmingLanguages.join(", "), 12, 8);

      writeHeading("Frameworks / Libraries");
      writeParagraph(curriculumVitae.frameworks.join(", "), 12, 8);

      writeHeading("Tools");
      writeParagraph(curriculumVitae.tools.join(", "), 12, 8);

      writeHeading("Education");
      for (const item of curriculumVitae.education) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(20);
        writeParagraph(item.school, 13, 4);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50);
        writeParagraph(item.detail, 12, 10);
      }

      writeHeading("Courses");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(40);
      for (const course of curriculumVitae.courses) {
        writeParagraph(`• ${course}`, 12, 4);
      }

      writeHeading("Work Experience");
      for (const item of curriculumVitae.experience) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(20);
        writeParagraph(item.company, 13, 4);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50);
        writeParagraph(item.detail, 12, 10);
      }

      writeHeading("Spoken Languages");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(40);
      writeParagraph(curriculumVitae.spokenLanguages.join(", "), 12, 8);

      doc.save(curriculumVitae.fileName);
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={download}
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-[3px] bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:cursor-wait disabled:opacity-70"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13 10h5l-6 6-6-6h5V3h2v7Zm-9 9h16v2H4v-2Z" />
      </svg>
      {pending
        ? "Preparing PDF…"
        : `Download ${isCover ? "Cover Letter" : "CV"}`}
    </button>
  );
}
