"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-development": "In development",
  research: "Research",
  archived: "Archived",
};

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 gap-y-4 border-t border-line py-9 last:border-b md:grid-cols-[auto_1fr_240px_auto] md:gap-x-10"
      >
        <span className="self-start pt-2 font-display text-sm font-bold text-faint transition-colors duration-200 group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-accent md:text-4xl">
              {project.title}
            </h3>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
              {statusLabel[project.status]}
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <p className="mt-3 text-xs text-faint">
            {project.stack.slice(0, 5).join(" · ")}
          </p>
        </div>

        {project.cover ? (
          <div className="relative hidden aspect-[16/10] overflow-hidden border border-line md:block">
            <Image
              src={project.cover}
              alt=""
              fill
              sizes="240px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div className="hidden items-center justify-center border border-line bg-surface text-xs text-faint md:flex md:aspect-[16/10]">
            {project.year}
          </div>
        )}

        <div className="col-start-3 row-start-1 flex flex-col items-end gap-2 self-start md:col-start-4">
          <span className="text-xs text-faint">{project.year}</span>
          <ArrowUpRight className="h-5 w-5 text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100" />
        </div>
      </Link>
    </motion.div>
  );
}
