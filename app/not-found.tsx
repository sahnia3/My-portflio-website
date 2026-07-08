import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-16 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        Page not found
      </p>
      <h1 className="mt-6 font-display text-8xl font-bold tracking-tight md:text-9xl">
        404
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        This page doesn&apos;t exist — it may have moved in the redesign.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 border border-fg px-6 py-3.5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-fg hover:text-bg"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
