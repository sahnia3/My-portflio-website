import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site";

/*
 * Selected work over the "closer" clip — three cards, one line each.
 */

const PICKS = ["maplerewards", "aeon", "polymarket-bot"];

const pitch: Record<string, string> = {
  maplerewards:
    "The first Canadian rewards optimizer — live, 94 cards, ranked in real dollars.",
  aeon: "A god simulator with no engine — every soul born, every empire earned.",
  "polymarket-bot":
    "13 AI agents trading live prediction markets. Net-positive realized P&L.",
};

export function WorkCinema() {
  const picks = PICKS.map((slug) => projects.find((p) => p.slug === slug)!);

  return (
    <section className="relative overflow-hidden">
      <video
        src="/clip-closer.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/55 to-bg" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Selected work
            </p>
            <h2 className="mt-4 font-condensed text-5xl uppercase leading-none md:text-8xl">
              The proof
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden shrink-0 md:block">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-fg"
            >
              Full archive
              <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {picks.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block border border-line bg-surface/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                {p.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                    <Image
                      src={p.cover}
                      alt={`${p.title} interface`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-condensed text-2xl uppercase tracking-[0.01em] transition-colors duration-200 group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pitch[p.slug]}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-faint transition-colors duration-200 group-hover:text-accent">
                    Case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
