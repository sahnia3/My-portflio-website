import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ProjectRow } from "@/components/project-row";
import { Reveal } from "@/components/reveal";
import { labProjects, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies: MapleRewards, Polymarket Trading Agent, Life-OS, Flux Trading, and more — plus open-source and research work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="The archive"
        title="Everything I've shipped."
        subtitle="Six case studies and a shelf of from-scratch reimplementations — products in production, systems trading live markets, and papers turned into code."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex items-baseline gap-4 border-t-2 border-fg pt-4">
          <span className="font-display text-sm font-bold text-accent">01</span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Case studies
          </span>
        </div>
        <div className="mt-10">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="flex items-baseline gap-4 border-t-2 border-fg pt-4">
          <span className="font-display text-sm font-bold text-accent">02</span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Open source & research
          </span>
        </div>
        <div className="mt-10">
          {labProjects.map((lab, i) => (
            <Reveal key={lab.title} delay={i * 0.04}>
              <a
                href={lab.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 border-t border-line py-6 last:border-b md:grid-cols-[auto_240px_1fr_auto] md:gap-x-10"
              >
                <span className="font-display text-sm font-bold text-faint transition-colors duration-200 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-accent">
                  {lab.title}
                </span>
                <span className="col-span-3 col-start-1 text-sm leading-relaxed text-muted md:col-span-1 md:col-start-3">
                  {lab.description}
                </span>
                <span className="hidden items-center gap-3 text-xs text-faint md:flex">
                  {lab.stack.join(" · ")}
                  <ArrowUpRight className="h-4 w-4 transition-colors duration-200 group-hover:text-accent" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
