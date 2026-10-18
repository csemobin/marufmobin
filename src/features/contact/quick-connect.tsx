"use client";

import { useActionState } from "react";
import { submitContact } from "@/features/contact/actions";
import { contactLimits } from "@/features/contact/schema";
import { contactInitialState } from "@/features/contact/state";

const fieldClass =
  "w-full border-0 border-b border-white/25 bg-transparent px-1 py-2 text-white outline-none placeholder:text-white/35 focus:border-white/25 focus-visible:outline-none";

export function QuickConnect() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    contactInitialState,
  );

  return (
    <section
      id="contact"
      aria-labelledby="quick-connect-title"
      className="relative scroll-mt-28 overflow-hidden bg-black font-[family-name:var(--font-montserrat),sans-serif] text-white md:scroll-mt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A476FF] to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#A476FF]/15 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="text-xs font-medium tracking-[0.22em] text-[#A476FF] uppercase">
          Open line
        </p>
        <h2
          id="quick-connect-title"
          className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Quick Connect
        </h2>

        <form action={formAction} className="mt-8">
          {state.message ? (
            <p
              role={state.status === "error" ? "alert" : "status"}
              className={
                state.status === "error"
                  ? "mb-6 text-sm text-[#A476FF]"
                  : "mb-6 text-sm text-white/80"
              }
            >
              {state.message}
            </p>
          ) : null}

          <p className="text-2xl leading-[1.8] font-medium tracking-tight text-white/90 md:text-3xl md:leading-[1.7]">
            I&apos;m{" "}
            <span className="inline-block min-w-[9rem] align-baseline">
              <label htmlFor="quick-name" className="sr-only">
                Name
              </label>
              <input
                id="quick-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={contactLimits.name.max}
                placeholder="your name"
                aria-invalid={state.fieldErrors.name ? true : undefined}
                aria-describedby={
                  state.fieldErrors.name ? "quick-name-error" : undefined
                }
                className={fieldClass}
              />
            </span>
            . Reach me at{" "}
            <span className="inline-block min-w-[14rem] align-baseline">
              <label htmlFor="quick-email" className="sr-only">
                Email
              </label>
              <input
                id="quick-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={contactLimits.email.max}
                placeholder="your email"
                aria-invalid={state.fieldErrors.email ? true : undefined}
                aria-describedby={
                  state.fieldErrors.email ? "quick-email-error" : undefined
                }
                className={fieldClass}
              />
            </span>
            .
          </p>

          <div className="mt-8">
            <label htmlFor="quick-message" className="sr-only">
              Message
            </label>
            <textarea
              id="quick-message"
              name="message"
              required
              rows={3}
              maxLength={contactLimits.message.max}
              placeholder="Tell me about the app you want to build."
              aria-invalid={state.fieldErrors.message ? true : undefined}
              aria-describedby={
                state.fieldErrors.message ? "quick-message-error" : undefined
              }
              className={`${fieldClass} resize-none text-base leading-7`}
            />
          </div>

          <div className="mt-3 grid gap-1 text-sm text-[#A476FF]">
            {state.fieldErrors.name ? (
              <p id="quick-name-error">{state.fieldErrors.name}</p>
            ) : null}
            {state.fieldErrors.email ? (
              <p id="quick-email-error">{state.fieldErrors.email}</p>
            ) : null}
            {state.fieldErrors.message ? (
              <p id="quick-message-error">{state.fieldErrors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-[#A476FF] hover:shadow-[0_0_28px_rgba(164,118,255,0.45)] disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
