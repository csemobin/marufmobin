import type { ReactNode } from "react";
import { BackToHero } from "@/components/layout/back-to-hero";
import { HashScroll } from "@/components/layout/hash-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuickConnect } from "@/features/contact/quick-connect";
import { CoverLetterSection } from "@/features/cover-letter/cover-letter-section";
import { GithubSection } from "@/features/home/github-section";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <HashScroll />
      <SiteHeader />
      <BackToHero />
      <div className="flex min-h-svh flex-1 flex-col bg-black">
        <main id="content" className="flex-1">
          {children}
        </main>
        <GithubSection />
        <QuickConnect />
        <CoverLetterSection />
        <SiteFooter />
      </div>
    </>
  );
}
