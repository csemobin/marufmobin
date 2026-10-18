"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavShell } from "@/components/layout/nav-shell";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { navigation } from "@/content/navigation";
import type { NavItem } from "@/content/types";

const sectionIds = navigation.map((item) => item.hash.slice(1));

function readActiveHash(): NavItem["hash"] | "" {
  const marker = Math.min(160, window.innerHeight * 0.25);
  let activeId = "";

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) {
      continue;
    }

    if (el.getBoundingClientRect().top - marker <= 0) {
      activeId = id;
    }
  }

  if (!activeId) {
    const firstExisting = sectionIds.find((id) => document.getElementById(id));
    return firstExisting ? (`#${firstExisting}` as NavItem["hash"]) : "";
  }

  return `#${activeId}` as NavItem["hash"];
}

export function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<NavItem["hash"] | "">("#home");
  const lockedHash = useRef<NavItem["hash"] | null>(null);
  const lockTimer = useRef<number>(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) {
      return;
    }

    let frame = 0;

    const updateChrome = () => {
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
      const width = fullWidth - (fullWidth - 640) * progress;
      nav.style.width = `${width}px`;
    };

    const onScrollChrome = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateChrome);
      }
    };

    updateChrome();
    window.addEventListener("scroll", onScrollChrome, { passive: true });
    window.addEventListener("resize", onScrollChrome);

    return () => {
      window.removeEventListener("scroll", onScrollChrome);
      window.removeEventListener("resize", onScrollChrome);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    let spyFrame = 0;

    const syncActive = () => {
      spyFrame = 0;

      if (lockedHash.current) {
        setActiveHash(lockedHash.current);
        return;
      }

      const next = readActiveHash();
      if (next) {
        setActiveHash(next);
      }
    };

    const onScrollSpy = () => {
      if (spyFrame === 0) {
        spyFrame = window.requestAnimationFrame(syncActive);
      }
    };

    const onHashChange = () => {
      const match = navigation.find((item) => item.hash === window.location.hash);
      if (match) {
        lockedHash.current = match.hash;
        setActiveHash(match.hash);
        window.clearTimeout(lockTimer.current);
        lockTimer.current = window.setTimeout(() => {
          lockedHash.current = null;
          syncActive();
        }, 700);
      }
    };

    syncActive();
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    window.addEventListener("resize", onScrollSpy);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScrollSpy);
      window.removeEventListener("resize", onScrollSpy);
      window.removeEventListener("hashchange", onHashChange);
      window.clearTimeout(lockTimer.current);
      if (spyFrame !== 0) {
        window.cancelAnimationFrame(spyFrame);
      }
    };
  }, [pathname]);

  const handleNavigate = (hash: NavItem["hash"]) => {
    lockedHash.current = hash;
    setActiveHash(hash);
    window.clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lockedHash.current = null;
    }, 700);
  };

  return (
    <NavShell navRef={navRef} scrolled={scrolled}>
      <PrimaryNav activeHash={activeHash} onNavigate={handleNavigate} />
    </NavShell>
  );
}
