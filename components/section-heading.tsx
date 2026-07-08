import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-baseline gap-4 border-t-2 border-fg pt-4">
        <span className="font-display text-sm font-bold text-accent">
          {index}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
