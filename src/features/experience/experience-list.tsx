"use client";

import { useState } from "react";
import type { Experience } from "@/content/types";

type ExperienceListProps = {
  items: Experience[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ol className="relative">
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[0.6875rem] w-px bg-gradient-to-b from-[#A476FF]/70 via-white/15 to-transparent md:left-[0.8125rem]"
      />

      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `experience-panel-${index}`;
        const isCurrent = /present/i.test(item.period);

        return (
          <li key={`${item.company}-${item.period}`} className="relative pl-10 md:pl-12">
            <span
              aria-hidden="true"
              className={`absolute top-3 left-0 flex size-6 items-center justify-center rounded-full border md:top-3.5 md:size-7 ${
                open || isCurrent
                  ? "border-[#A476FF] bg-[#A476FF]/20 shadow-[0_0_20px_rgba(164,118,255,0.35)]"
                  : "border-white/20 bg-black"
              }`}
            >
              <span
                className={`size-1.5 rounded-full md:size-2 ${
                  open || isCurrent ? "bg-[#A476FF]" : "bg-white/35"
                }`}
              />
            </span>

            <article
              className={`border-b border-white/10 transition-colors ${
                open ? "border-[#A476FF]/25" : "hover:border-white/20"
              }`}
            >
              <button
                type="button"
                className="group flex w-full items-start justify-between gap-4 py-5 text-left md:py-6"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-mono text-[0.7rem] tracking-wide text-white/45 uppercase md:text-xs">
                      {item.period}
                    </p>
                    {isCurrent ? (
                      <span className="text-[0.65rem] font-medium tracking-[0.14em] text-[#A476FF] uppercase">
                        Now
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-white md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/65 md:text-base">
                    <span className="text-white/85">{item.company}</span>
                    <span className="text-white/30"> · </span>
                    {item.place}
                  </p>
                </div>

                <span
                  className={`mt-1 flex size-9 shrink-0 items-center justify-center border text-white/70 transition-all duration-300 group-hover:border-white/30 group-hover:text-white ${
                    open
                      ? "border-[#A476FF]/50 text-[#A476FF]"
                      : "border-white/15"
                  }`}
                >
                  <span className="sr-only">
                    {open ? "Hide details" : "Show details"}
                  </span>
                  <ChevronIcon open={open} />
                </span>
              </button>

              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 md:pb-7">
                    <ul className="space-y-2.5 border-l border-white/10 pl-4 text-sm leading-6 text-white/70 md:pl-5">
                      {item.points.map((point) => (
                        <li key={point} className="relative">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.link ? (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#A476FF] transition-opacity hover:opacity-80"
                      >
                        {item.link.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
