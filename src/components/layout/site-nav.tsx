"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavShell } from "@/components/layout/nav-shell";
import { PrimaryNav } from "@/components/layout/primary-nav";

export function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      const visible = window.scrollY > 12;

      setScrolled(visible);

      if (!desktop || !visible) {
        nav.style.width = "";
        return;
      }
      const progress = 1 - (1 - Math.min(window.scrollY / 1000, 1)) ** 4;
      const fullWidth = window.innerWidth * 0.8;
      const width = fullWidth - (fullWidth - 528) * progress;
      nav.style.width = `${width}px`;
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <NavShell navRef={navRef} scrolled={scrolled}>
      <PrimaryNav pathname={pathname} />
    </NavShell>
  );
}
