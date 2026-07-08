"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

/*
 * Cinematic hero: a 360° orbit clip rendered as a frame sequence on a
 * full-bleed canvas, scrubbed by scroll — the Lando-Norris-style opener.
 * The name tracks in letter by letter over the footage.
 */

const FRAME_COUNT = 96;
const framePath = (i: number) =>
  `/orbit/frame_${String(i + 1).padStart(3, "0")}.jpg`;

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number
) {
  const scale = Math.max(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}

const NAME_LINES = ["ADITYA", "SAHNI"];

export function OrbitHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    mass: 0.3,
  });

  // Preload the sequence; paint the first frame as soon as it exists.
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        if (cancelled) return;
        loaded++;
        if (i === 0) render(0);
        if (loaded >= FRAME_COUNT * 0.5) setReady(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
    return () => {
      cancelled = true;
    };
     
  }, []);

  const render = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    drawCover(ctx, img, w, h);
  };

  useMotionValueEvent(progress, "change", (v: number) => {
    if (reduced) return;
    const index = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(v * (FRAME_COUNT - 1)))
    );
    if (index !== frameRef.current) {
      frameRef.current = index;
      render(index);
    }
  });

  useEffect(() => {
    const onResize = () => render(frameRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
     
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        {/* readability washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-transparent to-transparent" />

        <div className="relative flex h-full flex-col justify-end pb-16 md:pb-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.22em] text-accent"
            >
              Full-stack developer — Hamilton, ON
            </motion.p>

            <h1 className="mt-4 font-condensed text-[clamp(4rem,15vw,13rem)] uppercase leading-[0.86] tracking-[0.01em]">
              {NAME_LINES.map((line, li) => (
                <span key={line} className="block overflow-hidden">
                  {line.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        delay: 0.35 + li * 0.3 + i * 0.045,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center justify-between gap-4"
            >
              <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
                I build systems that trade, optimize &amp; keep score — live
                products, autonomous agents, and worlds written from scratch.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-faint">
                {ready ? "Scroll — the camera follows" : "Scroll"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
