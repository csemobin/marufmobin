"use client";

import { useEffect, useRef, useState } from "react";

function getScrollY() {
  return (
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function BackToHero() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const leaveTimer = useRef(0);
  const locked = useRef(false);

  useEffect(() => {
    const update = () => {
      if (locked.current) {
        return;
      }
      setShow(getScrollY() > 120);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
      window.clearTimeout(leaveTimer.current);
    };
  }, []);

  const goToHero = () => {
    if (!show || leaving) {
      return;
    }

    locked.current = true;
    setLeaving(true);
    setShow(false);

    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      const home = document.getElementById("home");
      if (home) {
        home.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.replaceState(null, "", "/#home");

      window.setTimeout(() => {
        locked.current = false;
        setLeaving(false);
        setShow(getScrollY() > 120);
      }, 900);
    }, 480);
  };

  const visible = show && !leaving;

  return (
    <button
      type="button"
      onClick={goToHero}
      aria-label="Back to hero section"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className="back-hero-btn md:!bottom-8"
      style={{
        position: "fixed",
        right: 16,
        bottom: 96,
        zIndex: 9999,
        width: 48,
        height: 48,
        borderRadius: 9999,
        border: "1.5px solid rgba(255,255,255,0.18)",
        background:
          "linear-gradient(160deg, rgba(28,28,28,0.95) 0%, rgba(0,0,0,0.92) 100%)",
        color: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: visible ? "pointer" : "default",
        boxShadow:
          "0 10px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0) scale(1)"
          : leaving
            ? "translate3d(20px,-24px,0) scale(0.5)"
            : "translate3d(14px,12px,0) scale(0.75)",
        transition:
          "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = "rgba(164,118,255,0.65)";
        event.currentTarget.style.color = "#A476FF";
        event.currentTarget.style.boxShadow =
          "0 10px 28px rgba(0,0,0,0.55), 0 0 0 1px rgba(164,118,255,0.25), inset 0 1px 0 rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
        event.currentTarget.style.color = "#f5f5f5";
        event.currentTarget.style.boxShadow =
          "0 10px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)";
      }}
    >
      {visible ? (
        <>
          <span className="back-hero-btn__ring" aria-hidden="true" />
          <span
            className="back-hero-btn__ring back-hero-btn__ring--delay"
            aria-hidden="true"
          />
        </>
      ) : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={visible ? "animate-bounce relative z-10" : "relative z-10"}
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
