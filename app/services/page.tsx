import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent developer in Hamilton, Ontario. Daily reporting pages, internal tools and websites for businesses that don't have a developer on staff.",
};

const offers = [
  {
    title: "Daily reporting pages",
    body: "Yesterday's sales, jobs or orders by person and by location, ready when you open your laptop. Nobody has to compile it.",
  },
  {
    title: "Tools that replace the spreadsheet",
    body: "The shared spreadsheet everyone edits and nobody trusts, rebuilt as a simple tool with logins, a history of changes and totals that add up.",
  },
  {
    title: "Websites you can change yourself",
    body: "Fast, clear sites for businesses and non-profits, set up so you can update them without calling me.",
  },
];

const work = [
  {
    client: "Life insurance sales team",
    title: "Sales Pulse",
    body: "Daily sales reporting used by 195 managers across four levels, every working day. It replaced a morning roll-up done over messages and spreadsheets.",
    link: {
      label: "Open a sample version",
      href: "https://brokerage-pulse-demo.vercel.app",
    },
  },
  {
    client: "Axesouár, jewellery brand",
    title: "Online store",
    body: "A storefront for more than 120 products, built so the photography leads and filtering feels instant.",
    link: { label: "Visit axesouar.in", href: "https://axesouar.in" },
  },
  {
    client: "SHE, non-profit",
    title: "Organization website",
    body: "Designed, built and launched in 2026.",
  },
];

const steps = [
  {
    title: "You tell me what eats your time",
    body: "A short call or a few emails. I ask how the work gets done today and where it goes wrong.",
  },
  {
    title: "Fixed price, agreed in writing",
    body: "You know the cost and what you are getting before I start. You see a working version early, with your own numbers.",
  },
  {
    title: "A flat monthly fee keeps it running",
    body: "Hosting, fixes and small changes are covered. You own your data and can leave at any time.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        title={
          <>
            Software for businesses
            <br />
            without a <span className="text-accent">developer</span>.
          </>
        }
        subtitle="I'm an independent developer in Hamilton, Ontario. I replace the spreadsheets, group chats and hand-built reports a business runs on with one page that stays up to date."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="01" label="What I build" title="Three kinds of work" />
        <ul className="mt-12">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 0.06}>
              <li className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <h3 className="font-display text-2xl font-bold tracking-tight md:col-span-5">
                  {offer.title}
                </h3>
                <p className="max-w-xl leading-relaxed text-muted md:col-span-7">
                  {offer.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading index="02" label="Client work" title="Built and in use" />
          <div className="mt-12 grid grid-cols-1 gap-px bg-line md:grid-cols-12">
            {work.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className={i === 0 ? "md:col-span-12" : "md:col-span-6"}
              >
                <article
                  className={`flex h-full flex-col bg-surface py-8 ${
                    i === 1 ? "md:pr-8" : i === 2 ? "md:pl-8" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-faint">
                    {item.client}
                  </p>
                  <h3
                    className={`mt-3 font-display font-bold tracking-tight ${
                      i === 0 ? "text-4xl md:text-5xl" : "text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {item.body}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-line-bright pb-1 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {item.link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-faint">
              Before working independently I was a software engineering co-op at
              TD Bank, where I built reporting dashboards and automated manual
              data entry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="03" label="How it works" title="Small, fixed and clear" />
        <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li>
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              What takes your team an hour every morning?
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent px-6 py-4 text-sm font-medium text-bg transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Tell me about it
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <CopyEmail className="mt-5" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
