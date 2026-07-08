"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/data/site";

export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      className={`group inline-flex items-center gap-2 text-left text-sm text-muted transition-colors duration-200 hover:text-fg active:opacity-80 ${className}`}
      aria-label={`Copy email address ${site.email}`}
    >
      <span className="break-all">{site.email}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
      ) : (
        <Copy className="h-3.5 w-3.5 shrink-0 text-faint transition-colors duration-200 group-hover:text-accent" />
      )}
    </button>
  );
}
