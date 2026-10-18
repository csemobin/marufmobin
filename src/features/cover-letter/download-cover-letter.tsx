"use client";

import { useState } from "react";
import { coverLetter } from "@/content/cover-letter";

export function DownloadCoverLetterButton() {
  const [pending, setPending] = useState(false);

  const download = async () => {
    setPending(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 56;
      const maxWidth = pageWidth - margin * 2;
      let y = 64;

      const { applicant, paragraphs } = coverLetter;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text(applicant.name, margin, y);
      y += 22;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(80);
      const roleLines = doc.splitTextToSize(applicant.role, maxWidth);
      doc.text(roleLines, margin, y);
      y += roleLines.length * 14 + 8;

      doc.setTextColor(40);
      doc.setFontSize(10);
      const contact = [
        applicant.location,
        applicant.email,
        applicant.phone,
        applicant.github,
        applicant.linkedin,
      ].filter(Boolean);
      for (const line of contact) {
        doc.text(line, margin, y);
        y += 14;
      }

      y += 18;
      doc.setDrawColor(164, 118, 255);
      doc.setLineWidth(1.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 28;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(0);
      doc.text(coverLetter.title, margin, y);
      y += 28;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(coverLetter.greeting, margin, y);
      y += 22;

      for (const paragraph of paragraphs) {
        const lines = doc.splitTextToSize(paragraph, maxWidth);
        if (y + lines.length * 15 > doc.internal.pageSize.getHeight() - 72) {
          doc.addPage();
          y = 64;
        }
        doc.text(lines, margin, y);
        y += lines.length * 15 + 14;
      }

      y += 6;
      doc.text(coverLetter.closing, margin, y);
      y += 28;
      doc.text(coverLetter.signOff, margin, y);
      y += 28;
      doc.setFont("helvetica", "bold");
      doc.text(applicant.name, margin, y);
      y += 14;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(80);
      doc.text("Flutter Developer · Mobile Application Developer", margin, y);

      doc.save(coverLetter.fileName);
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
      {pending ? "Preparing PDF…" : "Download PDF"}
    </button>
  );
}
