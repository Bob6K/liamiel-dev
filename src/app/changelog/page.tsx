import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabnotes Changelog — Liamiel",
  description: "What's new in Tabnotes.",
};

export default function ChangelogPage() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Tabnotes Changelog
        </h1>

        <article className="mt-14">
          <div className="flex items-baseline gap-4">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-ink)] dark:text-white">v1.0</h2>
            <span className="text-sm text-[var(--color-brand)]/70 dark:text-white/40">April 2026</span>
          </div>
          <p className="mt-3 font-body text-[var(--color-brand)] dark:text-white/50">Initial release.</p>
          <ul className="mt-4 space-y-2 font-body text-[var(--color-accent)] dark:text-white/70">
            {[
              "Floating window (⌘T toggle)",
              "Projects + tabbed notes",
              "Copy-blocks (<<text>>)",
              "Full-text search",
              "AES-256-GCM encrypted storage",
              "Touch ID",
              "Export/Import (.tabvault + Markdown ZIP)",
              "Bin with auto-purge",
              "Formatting toolbar",
              "Light/dark/system themes",
              "Keyboard shortcuts overlay (⌘/)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]/30 dark:bg-white/30" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
