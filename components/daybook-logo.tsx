interface DaybookLogoProps {
  className?: string;
}

export function DaybookMark({ className }: DaybookLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6h15a18 18 0 0 1 0 36H9z" className="fill-accent" />
      <rect x="15" y="16.5" width="17" height="3.4" rx="1.7" className="fill-bg" />
      <rect x="15" y="22.3" width="12.5" height="3.4" rx="1.7" className="fill-bg" />
      <rect x="15" y="28.1" width="8" height="3.4" rx="1.7" className="fill-bg" />
    </svg>
  );
}

export function DaybookLogo({ className }: DaybookLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 normal-case tracking-normal ${className ?? ""}`}
    >
      <DaybookMark className="h-9 w-9" />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold tracking-tight text-fg">
          Daybook
        </span>
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-faint">
          Software
        </span>
      </span>
    </span>
  );
}
