import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simplanner Support — Liamiel",
  description: "Support and FAQ for Simplanner.",
};

export default function SimplannerSupportPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Simplanner Support
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          Simplanner is a weekly planner for iPhone, built by Liamiel.
        </p>

        <div className="mt-12 space-y-8 leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          <p>
            Questions, bugs or feedback? Email{" "}
            <a
              href="mailto:support@liamiel.dev"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
            >
              support@liamiel.dev
            </a>{" "}
            and you’ll hear back from the developer.
          </p>

          <div className="space-y-6">
            <Topic title="Do I need an account?">
              No. Simplanner works without any sign-up, and your plan is stored on your device.
            </Topic>

            <Topic title="Voice planning">
              The AI voice and text feature needs an internet connection and microphone
              permission. The App asks for your consent before the first upload, and you can read
              exactly what happens to recordings in the{" "}
              <Link
                href="/simplanner/privacy"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                privacy policy
              </Link>
              .
            </Topic>

            <Topic title="Purchases and restoring">
              Simplanner Pro is a one-time purchase — no subscription. To restore it on a new
              device, open the paywall (Settings → Simplanner Pro) and tap “Restore Purchases”.
            </Topic>

            <Topic title="Deleting your data">
              Your plan lives only on your device — deleting the App deletes it. Our server keeps
              no accounts and no database; voice transcripts age out of operational logs within
              about 7 days. For anything sooner, email us and we’ll take care of it.
            </Topic>

            <Topic title="Reporting a bug">
              Email a short description of what happened (plus your iOS version) to{" "}
              <a
                href="mailto:support@liamiel.dev"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                support@liamiel.dev
              </a>
              . Screenshots help a lot.
            </Topic>
          </div>

          <p className="pt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">© Liamiel 2026</p>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="text-sm text-[var(--color-muted-light)] underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-[var(--color-muted-dark)] dark:hover:text-white/80"
          >
            ← Back to Liamiel
          </Link>
        </div>
      </div>
    </section>
  );
}

function Topic({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-base font-bold text-[var(--color-ink)] dark:text-white">
        {title}
      </h2>
      <p className="mt-1">{children}</p>
    </div>
  );
}
