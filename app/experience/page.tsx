import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { education, experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Software Engineer Co-op at TD Bank, freelance full-stack work, and healthcare platform development at DocOnline.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Experience"
        title={
          <>
            Where I&apos;ve put in
            <br />
            the <span className="text-accent">reps</span>.
          </>
        }
        subtitle="Banking security operations, freelance e-commerce, and healthcare data platforms — shipped in production, not in tutorials."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div>
          {experience.map((job, i) => (
            <Reveal key={job.company}>
              <article className="grid grid-cols-1 gap-6 border-t border-line py-10 last:border-b md:grid-cols-12 md:py-14">
                <div className="md:col-span-4">
                  <p className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-medium">{job.period}</p>
                  {job.location && (
                    <p className="mt-1 text-xs text-faint">{job.location}</p>
                  )}
                </div>

                <div className="md:col-span-8">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {job.company}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {job.role}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {job.stack && (
                    <p className="mt-6 text-xs text-faint">
                      {job.stack.join(" · ")}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="border border-line bg-surface px-6 py-6 md:px-8">
            <p className="text-xs uppercase tracking-[0.14em] text-faint">
              Education
            </p>
            <div className="mt-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <p className="font-display text-xl font-bold tracking-tight">
                {education.degree}
              </p>
              <p className="text-sm text-muted">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
