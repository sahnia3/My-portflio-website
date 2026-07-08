"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { emailjs } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors duration-200 placeholder:text-faint hover:border-line-bright focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailjs.serviceId,
          template_id: emailjs.templateId,
          user_id: emailjs.publicKey,
          template_params: {
            from_name: data.get("name"),
            from_email: data.get("email"),
            subject: data.get("subject"),
            message: data.get("message"),
            to_name: "Aditya Sahni",
          },
        }),
      });
      if (!res.ok) throw new Error(`EmailJS responded ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs uppercase tracking-[0.14em] text-faint"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs uppercase tracking-[0.14em] text-faint"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-faint"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-faint"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, idea, or opportunity…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-bright active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "sent" && (
          <p className="text-sm text-accent" role="status">
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-amber" role="status">
            Something went wrong. Email me directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
