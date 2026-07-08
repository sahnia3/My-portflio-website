import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind or want to collaborate? Get in touch with Aditya Sahni.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title={
          <>
            Let&apos;s build
            <br />
            something <span className="text-accent">real</span>.
          </>
        }
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you — the form and my inbox both work."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="space-y-8 md:col-span-4 md:col-start-9">
            <Reveal delay={0.08}>
              <div className="border border-line bg-surface px-5 py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-faint">
                  Direct
                </p>
                <CopyEmail className="mt-3" />
                <p className="mt-2 text-xs text-faint">Click to copy</p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-faint">
                  Elsewhere
                </p>
                <ul className="mt-3 space-y-3">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-b border-line pb-3 text-sm text-muted transition-colors duration-200 hover:text-fg"
                      >
                        {s.label}
                        <span className="flex items-center gap-2 text-xs text-faint">
                          {s.href
                            .replace("https://www.", "")
                            .replace("https://", "")
                            .replace(/\/$/, "")}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-accent" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm">{site.location}</p>
                  <p className="mt-1 text-xs text-faint">{site.availability}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
