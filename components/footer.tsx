import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { CopyEmail } from "@/components/copy-email";

export function Footer() {
  return (
    <footer className="border-t-2 border-fg">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Have something in mind?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 self-start bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent active:translate-y-px md:self-auto"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-faint">
              Email
            </p>
            <CopyEmail className="mt-3" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-faint">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 text-faint transition-colors duration-200 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-faint">
              Index
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-faint">
              Location
            </p>
            <p className="mt-3 text-sm text-muted">{site.location}</p>
            <p className="mt-1 text-xs text-faint">{site.availability}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed and built by hand.</p>
        </div>
      </div>
    </footer>
  );
}
