"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(behavior: ScrollBehavior = "smooth") {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const el = document.getElementById(hash.slice(1));
  if (!el) {
    return;
  }

  el.scrollIntoView({ behavior, block: "start" });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onHashChange = () => scrollToHash("smooth");

    // Wait a tick so the destination page sections exist after route changes.
    const timer = window.setTimeout(() => scrollToHash("smooth"), 50);

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
