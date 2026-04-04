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
      setMessage("You're in! We'll keep you posted.");
    } else {
      setStatus("error");
      setMessage(result.error || "Something went wrong.");
    }
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em]">
          Stay in the loop
        </h2>
        <p className="mt-3 text-white/50 font-body">
          Get notified about new apps and updates.
        </p>
        {status === "success" ? (
          <p className="mt-8 text-green-400 font-medium">{message}</p>
        ) : (
          <form action={handleSubmit} className="mt-8 flex items-center justify-center gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="h-11 w-72 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-press h-11 rounded-lg bg-white px-6 font-heading font-semibold text-charcoal text-sm transition-all duration-200 hover:bg-white/90 disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-400 text-sm">{message}</p>
        )}
      </div>
    </section>
  );
}
