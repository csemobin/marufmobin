import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuickConnect } from "@/features/contact/quick-connect";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex min-h-svh flex-1 flex-col bg-black">
        <main id="content" className="flex-1">
          {children}
        </main>
        <QuickConnect />
        <SiteFooter />
      </div>
    </>
  );
}
