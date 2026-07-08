import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { OrbitHero } from "@/components/orbit-hero";
import { Pillars } from "@/components/pillars";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { WorkCinema } from "@/components/work-cinema";
import { experience } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <OrbitHero />

      <StatsStrip />

      <Pillars />

      <WorkCinema />

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-6">
            <SectionHeading index="04" label="Right now" title="The current chapter" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Most of my time goes into{" "}
                <Link
                  href="/projects/maplerewards"
                  className="border-b border-accent font-medium text-fg transition-colors duration-200 hover:text-accent"
                >
                  MapleRewards
                </Link>
                , live at maplerewards.app — the first rewards optimizer built
                for Canadian credit cards, covering 94 cards and 41 loyalty
                programs.
              </p>
              <p>
                On the side I&apos;m building{" "}
                <Link
                  href="/projects/aeon"
                  className="border-b border-accent font-medium text-fg transition-colors duration-200 hover:text-accent"
                >
                  AEON
                </Link>
                , a god simulator written from scratch with no game engine, and
                running an autonomous{" "}
                <Link
                  href="/projects/polymarket-bot"
                  className="border-b border-accent font-medium text-fg transition-colors duration-200 hover:text-accent"
                >
                  trading agent
                </Link>{" "}
                on live prediction markets.
              </p>
              <p>
                Computer Science at McMaster University (2027). Open to
                freelance and collaboration.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <SectionHeading index="05" label="Experience" title="Track record" />
            <div className="mt-8">
              {experience.map((job) => (
                <Reveal key={job.company}>
                  <div className="border-t border-line py-5 last:border-b">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-display text-lg font-bold tracking-tight">
                        {job.company}
                      </p>
                      <p className="shrink-0 text-xs text-faint">{job.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{job.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link
                href="/experience"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-fg"
              >
                The full story
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
