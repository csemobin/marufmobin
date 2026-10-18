"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { navigation } from "@/content/navigation";
import type { NavHref, NavItem } from "@/content/types";

type PrimaryNavProps = {
  activeHash?: NavItem["hash"] | "";
  onNavigate?: (hash: NavItem["hash"]) => void;
};

const icons: Record<NavHref, ReactNode> = {
  "/#home": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.489a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.789V20Zm-2-1V9.978L12 4.534 5 9.978V19h14Z" />
    </svg>
  ),
  "/#projects": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M4 5v14h16V7h-8.414l-2-2H4Zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2Z" />
    </svg>
  ),
  "/#about": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M4 22a8 8 0 0 1 16 0h-2a6 6 0 0 0-12 0H4Zm8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>
  ),
  "/#contact": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M21.727 2.957 16.273 22.043c-.15.528-.475.552-.717.07L11 13 1.923 9.369c-.51-.204-.503-.509.034-.688L21.043 2.32c.528-.176.831.12.684.638ZM19.035 5.096 6.812 9.171l5.637 2.255 3.04 6.081 3.546-12.41Z" />
    </svg>
  ),
  "/#cover-letter": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4Zm2-1v1h6V4H9Zm-5 3v12h16V7H4Zm4 3h8v2H8v-2Zm0 4h8v2H8v-2Z" />
    </svg>
  ),
};

export function PrimaryNav({ activeHash = "", onNavigate }: PrimaryNavProps) {
  return (
    <ul className="flex w-full items-center justify-between gap-2 md:justify-center md:gap-10 lg:gap-12">
      {navigation.map((item) => {
        const current = activeHash === item.hash;

        return (
          <li key={item.href} className="flex-1 md:flex-none">
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={() => onNavigate?.(item.hash)}
              className={`relative flex flex-col items-center gap-1 text-[0.65rem] transition-colors hover:text-white sm:text-xs md:text-base ${
                current ? "text-white" : "text-[#f3f3f398]"
              }`}
            >
              <span
                className={`absolute top-1/2 -left-5 hidden size-2 -translate-y-1/2 rounded-full bg-[#A9FF5B] transition-all duration-300 md:block ${
                  current ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
              <span className="flex size-6 items-center justify-center md:hidden">
                {icons[item.href]}
              </span>
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
