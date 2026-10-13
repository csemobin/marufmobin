"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";

export default function SiteError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24">
      <h1 className="font-serif text-4xl tracking-tight">
        This page could not be shown
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Something unexpected happened while rendering this view.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-8 bg-foreground px-4 py-2 text-sm text-background"
      >
        Try again
      </button>
    </Container>
  );
}
