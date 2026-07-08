import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { about, education, site, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: about.paragraphs[0],
};

const profile = [
  { k: "Based in", v: "Hamilton, Ontario" },
  { k: "Studying", v: "CS Honours + Stats, McMaster '27" },
  { k: "Focus", v: "Software, markets & AI" },
  { k: "Currently", v: "MapleRewards, live" },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro: real portrait + identity */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <Reveal y={14}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            About — {site.name}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-5xl font-condensed text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.9] tracking-[0.01em]">
            I build things that
            <br />
            make <span className="text-accent">decisions</span>.
          </h1>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <figure className="overflow-hidden border border-line-bright">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/profile3.jpg"
                  alt="Aditya Sahni"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line-bright bg-surface px-4 py-2.5 text-xs text-faint">
                <span>{site.name}</span>
                <span className="uppercase tracking-[0.14em]">Hamilton, ON</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {site.role}
                {" and CS undergrad at McMaster University. I'm most interested in the seam where software meets markets and AI: systems that don't just run, but decide."}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {profile.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[7rem_1fr] gap-4 py-3.5"
                  >
                    <dt className="text-xs uppercase tracking-[0.14em] text-faint">
                      {row.k}
                    </dt>
                    <dd className="text-sm text-fg">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={site.resume}
                  download
                  className="group inline-flex items-center gap-2 border border-fg px-5 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:bg-fg hover:text-bg active:translate-y-px"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-colors duration-200 group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Verbatim pull quote */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              <span className="text-accent">“</span>
              {about.quote}
              <span className="text-accent">”</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              The story
            </p>
          </Reveal>
          <div className="space-y-6 md:col-span-8 md:col-start-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-fg md:text-2xl md:leading-relaxed"
                      : "text-base leading-relaxed text-muted md:text-lg"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Receipts */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {about.receipts.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 0.05}
              className={`border-line px-5 py-10 md:px-8 ${
                i > 0 ? "md:border-l" : ""
              } ${i % 2 === 1 ? "border-l md:border-l" : ""} ${
                i >= 2 ? "border-t md:border-t-0" : ""
              }`}
            >
              <p className="font-condensed text-5xl uppercase text-fg md:text-6xl">
                {r.value}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                {r.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Four rules */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            How I work
          </p>
          <h2 className="mt-4 font-condensed text-5xl uppercase leading-none md:text-8xl">
            Four rules
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
          {about.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface md:p-9">
                <span className="font-condensed text-3xl text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beyond the screen */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Off the clock
            </p>
            <h2 className="mt-4 font-condensed text-5xl uppercase leading-none md:text-8xl">
              Beyond the screen
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {about.beyond.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="h-full bg-bg p-7 transition-colors duration-300 hover:bg-surface md:p-9">
                  <div className="flex items-baseline gap-4">
                    <span className="font-condensed text-2xl text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              The path
            </p>
            <h2 className="mt-4 font-condensed text-5xl uppercase leading-none md:text-8xl">
              So far
            </h2>
          </Reveal>

          <ol className="mt-14">
            {about.timeline.map((entry, i) => (
              <Reveal key={`${entry.year}-${entry.title}`} delay={i * 0.04}>
                <li className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-7 last:border-b md:grid-cols-[8rem_1fr] md:gap-x-10">
                  <span className="font-condensed text-2xl text-faint transition-colors duration-200 group-hover:text-accent md:text-3xl">
                    {entry.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight md:text-2xl">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {entry.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Toolbox */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Capabilities
            </p>
            <h2 className="mt-4 font-condensed text-5xl uppercase leading-none md:text-8xl">
              Toolbox
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {education.degree}, {education.school} ({education.period}).
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <div className="h-full bg-bg p-6 transition-colors duration-300 hover:bg-surface md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-faint">
                    <span className="mr-2 font-condensed text-accent">
                      0{i + 1}
                    </span>
                    {group.label}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
