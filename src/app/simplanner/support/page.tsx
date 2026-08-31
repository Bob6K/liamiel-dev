import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vivana Support — Liamiel",
  description: "Support and FAQ for Vivana.",
};

export default function VivanaSupportPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Vivana Support
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          Vivana is a weekly planner for iPhone, built by Liamiel.
        </p>

        <div className="mt-12 space-y-8 leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          <p>
            Questions, bugs or feedback? The fastest route is the in-app form — Settings →
            “Send a bug or idea”. Or email{" "}
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
              No. Vivana works without any sign-up, and your plan is stored on your device.
            </Topic>

            <Topic title="Plans: Free, Grow and Bloom">
              Everyone starts with a 14-day trial of the full app — no payment details, no
              account. After it you’re on the plan you picked: Free (a lighter planner, always
              free), Grow (a one-time purchase that unlocks the full manual planner for good), or
              Bloom (a subscription — monthly or yearly — with everything plus the AI features).
              Exact prices are shown in the App and on the App Store.
            </Topic>

            <Topic title="AI planning and fair use">
              Turning spoken or typed sentences into planner blocks needs an internet connection
              (and microphone permission for voice). The App asks for your consent before
              anything is sent, and you can withdraw it any time in Settings — details in the{" "}
              <Link
                href="/simplanner/privacy"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                privacy policy
              </Link>
              . AI in Bloom is included under fair use: typical daily use never notices it, and
              Settings shows an honest usage meter — see the{" "}
              <Link
                href="/simplanner/terms"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                terms
              </Link>{" "}
              for how it works.
            </Topic>

            <Topic title="Purchases, subscriptions and restoring">
              All payments are handled by Apple. A Bloom subscription is cancelled in your Apple
              ID subscription settings (Settings app → your name → Subscriptions) — you keep
              access until the end of the period you paid for, and nothing you made is ever
              deleted. To restore a purchase on a new device, open Vivana’s Settings, tap your
              plan row, and use “Restore purchase”.
            </Topic>

            <Topic title="Deleting your data">
              Your plan lives only on your device — deleting the App deletes it. Our server keeps
              no accounts and no database; AI request logs age out within about 7 days. For
              anything sooner, email us and we’ll take care of it.
            </Topic>

            <Topic title="Reporting a bug">
              Use Settings → “Send a bug or idea” in the App (it attaches your app and iOS
              version automatically), or email{" "}
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
