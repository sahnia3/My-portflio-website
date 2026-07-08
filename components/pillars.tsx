"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * Three pillars revealed one at a time over the "builder" clip —
 * a pinned section; scroll advances which pillar is lit.
 */

const PILLARS = [
  {
    title: "Full-stack products",
    body: "Idea to production: Go backends, Next.js frontends, payments, auth, real users. MapleRewards runs live at maplerewards.app.",
  },
  {
    title: "AI & autonomous systems",
    body: "Multi-agent orchestration with real stakes — a 13-agent trading system with net-positive realized P&L on live markets.",
  },
  {
    title: "From-scratch engineering",
    body: "A no-engine god simulator, Raft consensus, audio fingerprinting — I build the machinery, not just the wrapper.",
  },
];

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <video
          src="/clip-builder.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />

        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            What I do
          </p>
          <div className="mt-10 space-y-12 md:space-y-16">
            {PILLARS.map((p, i) => {
              const start = i / PILLARS.length;
              const end = (i + 1) / PILLARS.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.08, end - 0.04, end],
                [i === 0 ? 1 : 0.18, 1, 1, i === PILLARS.length - 1 ? 1 : 0.18]
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const x = useTransform(
                scrollYProgress,
                [start, start + 0.08],
                [i === 0 ? 0 : 32, 0]
              );
              return (
                <motion.div key={p.title} style={{ opacity, x }}>
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <span className="font-condensed text-2xl text-accent md:text-3xl">
                      0{i + 1}
                    </span>
                    <h2 className="font-condensed text-4xl uppercase leading-none tracking-[0.01em] md:text-7xl">
                      {p.title}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:pl-16 md:text-base">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
