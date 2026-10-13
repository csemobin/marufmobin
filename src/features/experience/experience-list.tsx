"use client";

import { useState } from "react";
import type { Experience } from "@/content/types";

type ExperienceListProps = {
  items: Experience[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(items.length - 1);

  return (
    <div>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `experience-panel-${index}`;

        return (
          <article key={`${item.company}-${item.period}`}>
            <div className="flex items-start gap-4 py-5">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg leading-7 font-medium text-white md:text-xl">
                  <span className="text-[#A476FF]">{index + 1}. </span>
                  {item.company}, {item.place}{" "}
                  <span className="text-white/80">({item.role})</span>
                </h3>
                <p className="mt-1 font-mono text-sm text-muted">{item.period}</p>
              </div>
              <button
                type="button"
                className="mt-1 shrink-0 text-white/80 transition-colors hover:text-white"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="sr-only">{open ? "Hide details" : "Show details"}</span>
                {open ? <MinusIcon /> : <PlusIcon />}
              </button>
            </div>
            {open ? (
              <div id={panelId} className="pb-6 pl-0 md:pl-8">
                <ul className="grid gap-2 text-sm leading-6 text-white/75">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-white underline-offset-4 hover:underline"
                  >
                    {item.link.label}
                  </a>
                ) : null}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 12h8" />
    </svg>
  );
}
