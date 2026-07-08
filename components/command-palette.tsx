"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  FileText,
  FolderGit2,
  Navigation,
} from "lucide-react";
import { navLinks, projects, site } from "@/data/site";

interface Action {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
    setCopied(false);
  }, []);

  const actions = useMemo<Action[]>(
    () => [
      ...navLinks.map((l) => ({
        id: `nav-${l.href}`,
        group: "Navigate",
        label: l.label,
        hint: l.href,
        run: () => router.push(l.href),
      })),
      ...projects.map((p) => ({
        id: `project-${p.slug}`,
        group: "Projects",
        label: p.title,
        hint: p.year,
        run: () => router.push(`/projects/${p.slug}`),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: copied ? "Copied!" : "Copy email address",
        hint: site.email,
        run: () => {
          navigator.clipboard.writeText(site.email);
          setCopied(true);
          setTimeout(close, 600);
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Download resume",
        hint: "PDF",
        run: () => window.open(site.resume, "_blank"),
      },
      ...site.socials.map((s) => ({
        id: `social-${s.label}`,
        group: "Actions",
        label: `Open ${s.label}`,
        hint: s.href.replace("https://www.", "").replace("https://", ""),
        run: () => window.open(s.href, "_blank"),
      })),
    ],
    [router, close, copied]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.group.toLowerCase().includes(q) ||
        a.hint?.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk-open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk-open", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[index]) {
      const action = filtered[index];
      action.run();
      if (action.id !== "copy-email") close();
    }
  };

  const groupIcon = (group: string) =>
    group === "Navigate" ? (
      <Navigation className="h-3.5 w-3.5" />
    ) : group === "Projects" ? (
      <FolderGit2 className="h-3.5 w-3.5" />
    ) : group === "Actions" ? (
      <Copy className="h-3.5 w-3.5" />
    ) : (
      <FileText className="h-3.5 w-3.5" />
    );

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-bg/70 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full max-w-lg overflow-hidden rounded-lg border border-line-bright bg-surface shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <span className="font-mono text-sm text-accent">›</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Type a command or search…"
                className="h-12 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-faint"
              />
              <kbd className="rounded-sm border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">
                esc
              </kbd>
            </div>

            <div className="max-h-[46vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center font-mono text-xs text-faint">
                  no results for “{query}”
                </p>
              )}
              {filtered.map((action, i) => {
                const showGroup = action.group !== lastGroup;
                lastGroup = action.group;
                return (
                  <div key={action.id}>
                    {showGroup && (
                      <p className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-faint first:pt-1">
                        {action.group}
                      </p>
                    )}
                    <button
                      onClick={() => {
                        action.run();
                        if (action.id !== "copy-email") close();
                      }}
                      onMouseEnter={() => setIndex(i)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-100 ${
                        i === index
                          ? "bg-elevated text-fg"
                          : "text-muted"
                      }`}
                    >
                      <span
                        className={
                          i === index ? "text-accent" : "text-faint"
                        }
                      >
                        {groupIcon(action.group)}
                      </span>
                      <span className="flex-1">{action.label}</span>
                      {action.hint && (
                        <span className="max-w-[45%] truncate font-mono text-[10px] text-faint">
                          {action.hint}
                        </span>
                      )}
                      {i === index && (
                        <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2 font-mono text-[10px] text-faint">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
