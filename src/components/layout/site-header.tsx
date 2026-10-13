import { Suspense } from "react";
import { NavShell } from "@/components/layout/nav-shell";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { SiteNav } from "@/components/layout/site-nav";

export function SiteHeader() {
  return (
    <Suspense
      fallback={
        <NavShell>
          <PrimaryNav />
        </NavShell>
      }
    >
      <SiteNav />
    </Suspense>
  );
}
