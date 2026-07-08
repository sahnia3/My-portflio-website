import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  breadcrumb: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  breadcrumb,
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-44">
        <Reveal y={12}>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {breadcrumb}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-tight">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.24}>{children}</Reveal>}
      </div>
    </header>
  );
}
