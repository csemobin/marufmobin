import Link from "next/link";
import { site } from "@/content/site";

export function NotFoundView() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
      <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-muted">
        That address is not part of this site.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-sm text-foreground underline-offset-4 hover:underline"
        >
          Back to {site.name}
        </Link>
      </p>
    </div>
  );
}
