"use client";

import { useActionState } from "react";
import { submitContact } from "@/features/contact/actions";
import { contactLimits } from "@/features/contact/schema";
import { contactInitialState } from "@/features/contact/state";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    maxLength: contactLimits.name.max,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    maxLength: contactLimits.email.max,
  },
] as const;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    contactInitialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      {state.message ? (
        <p
          role={state.status === "error" ? "alert" : "status"}
          className={
            state.status === "error" ? "text-sm text-accent" : "text-sm"
          }
        >
          {state.message}
        </p>
      ) : null}

      {fields.map((field) => {
        const errorId = `${field.name}-error`;
        const error = state.fieldErrors[field.name];

        return (
          <div key={field.name} className="grid gap-2">
            <label htmlFor={field.name} className="text-sm">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              maxLength={field.maxLength}
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="border border-line bg-surface px-3 py-2 text-foreground"
            />
            {error ? (
              <p id={errorId} className="text-sm text-accent">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={contactLimits.message.max}
          aria-invalid={state.fieldErrors.message ? true : undefined}
          aria-describedby={
            state.fieldErrors.message ? "message-error" : undefined
          }
          className="border border-line bg-surface px-3 py-2 text-foreground"
        />
        {state.fieldErrors.message ? (
          <p id="message-error" className="text-sm text-accent">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit items-center justify-center bg-foreground px-4 py-2 text-sm text-background disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
