import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Screenshot } from "@/components/screenshot";
import { projects } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-development": "In development",
  research: "Research",
  archived: "Archived",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const [cover, ...gallery] = project.images;

  return (
    <>
      <PageHeader
        breadcrumb={`Case study · ${statusLabel[project.status]} · ${project.year}`}
        title={project.title}
        subtitle={project.tagline}
      >
        <div className="mt-9 flex flex-wrap items-center gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-fg px-5 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:bg-fg hover:text-bg active:translate-y-px"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {project.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`border-line px-5 py-8 md:px-8 ${
                i > 0 ? "border-l max-md:odd:border-l-0" : ""
              } ${i >= 2 ? "max-md:border-t" : ""}`}
            >
              <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {m.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {cover && (
        <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
          <Reveal>
            <Screenshot
              src={cover.src}
              alt={cover.alt}
              label={`Fig. 01 — ${cover.alt}`}
              priority
            />
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-16 md:space-y-20">
          {project.sections.map((section, i) => (
            <Reveal key={section.heading}>
              <div className="grid grid-cols-1 gap-6 border-t border-line pt-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
                    {section.heading}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-muted md:col-span-7 md:col-start-6">
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {gallery.length > 0 && (
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 0.05}
                className={
                  gallery.length % 2 !== 0 && i === gallery.length - 1
                    ? "md:col-span-2"
                    : undefined
                }
              >
                <Screenshot
                  src={img.src}
                  alt={img.alt}
                  label={`Fig. ${String(i + 2).padStart(2, "0")} — ${img.alt}`}
                />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
            Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-line-bright hover:text-fg"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <nav className="border-t border-line" aria-label="Project navigation">
        <div className="mx-auto grid max-w-6xl grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-2 border-r border-line px-5 py-8 transition-colors duration-200 hover:bg-surface md:px-8"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
              <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Previous
            </span>
            <span className="font-display text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-accent md:text-xl">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-2 px-5 py-8 text-right transition-colors duration-200 hover:bg-surface md:px-8"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
              Next
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-accent md:text-xl">
              {next.title}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
