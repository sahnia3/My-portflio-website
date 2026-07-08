"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const STATS: { value: number; suffix?: string; label: string }[] = [
  { value: 94, label: "Canadian cards modelled — MapleRewards, live" },
  { value: 13, label: "AI agents trading live prediction markets" },
  { value: 6687, label: "lines of hand-written game simulation" },
  { value: 41, suffix: "", label: "loyalty programs optimized in real CAD" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-line bg-surface/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`border-line px-5 py-10 md:px-8 ${
              i > 0 ? "md:border-l" : ""
            } ${i % 2 === 1 ? "border-l md:border-l" : ""} ${
              i >= 2 ? "border-t md:border-t-0" : ""
            }`}
          >
            <p className="font-condensed text-5xl uppercase text-fg md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
