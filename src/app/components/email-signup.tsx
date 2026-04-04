"use client";

import { useState } from "react";
import { submitEmail } from "../actions/signup";

export function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitEmail(formData);
    if (result.success) {
      setStatus("success");
      setMessage("You’re in. Updates will go to your inbox when there’s something worth sending.");
    } else {
      setStatus("error");
      setMessage(result.error || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
          Contact placeholder
        </p>
        <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Proper contact is coming.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          The dedicated contact form and @liamiel.dev email are not live yet. For now, this signup box is just a temporary way to hear when the site, apps, and contact setup are ready.
        </p>
        {status === "success" ? (
          <p className="mt-8 font-medium text-[var(--color-brand)] dark:text-[#92bdcd]">{message}</p>
        ) : (
          <form action={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="h-12 w-full max-w-sm rounded-xl border border-black/10 bg-white/80 px-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] outline-none focus:border-[var(--color-brand)] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[var(--color-muted-dark)]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-press btn-primary h-12 rounded-xl px-6 font-heading text-sm font-semibold transition-all duration-200 disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Stay updated"}
            </button>
          </form>
        )}
        {status === "error" && <p className="mt-3 text-sm text-red-500 dark:text-red-400">{message}</p>}
      </div>
    </section>
  );
}
