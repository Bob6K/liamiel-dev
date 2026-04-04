import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabnotes Privacy Policy — Liamiel",
  description: "Privacy policy for Tabnotes.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Tabnotes Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          Effective date: April 3, 2026 · Last updated: April 4, 2026
        </p>

        <div className="mt-12 space-y-8 leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          <p>
            Tabnotes (“the App”) is a note-taking application for macOS published by Liamiel.
          </p>
          <p>
            This page explains what the App stores, what it does not collect, and what happens if you choose to send feedback.
          </p>

          <div className="space-y-6">
            <Section n={1} title="Summary">
              Tabnotes stores your notes locally on your Mac. The App does not upload your notes to Liamiel servers.
            </Section>

            <Section n={2} title="Information the App Processes">
              The App may process note content, markdown files, project structure, preferences, copy-blocks, and the local search index. This data stays on your device unless you manually export it.
            </Section>

            <Section n={3} title="Clipboard">
              Tabnotes does not monitor your clipboard in the background. Content is stored only when you intentionally place it into the App.
            </Section>

            <Section n={4} title="Local Storage and Encryption">
              Notes are stored locally. Sensitive stored content is protected using encryption within the App. There is no cloud sync at this time.
            </Section>

            <Section n={5} title="Exports and Backups">
              Export is manual only. You control whether and where exported files are saved.
            </Section>

            <Section n={6} title="Feedback Form">
              If you choose to send feedback, it is currently processed via Formspree. Formspree may process the information you submit through that form. Please avoid sending sensitive personal information.
            </Section>

            <Section n={7} title="No Analytics, Advertising, or Tracking">
              Tabnotes does not include analytics SDKs, advertising trackers, telemetry, or hidden usage monitoring.
            </Section>

            <Section n={8} title="Data Sharing">
              Your notes are not shared with Liamiel or third parties. Feedback you intentionally submit may be processed by Formspree for delivery.
            </Section>

            <Section n={9} title="Data Retention">
              Your notes remain on your device until you delete them. Feedback submissions may remain in the feedback provider’s system according to that provider’s retention policies.
            </Section>

            <Section n={10} title="Security">
              Reasonable steps are taken to protect your data, but no software or storage method can guarantee absolute security.
            </Section>

            <Section n={11} title="Children’s Privacy">
              Tabnotes is not directed to children under 13.
            </Section>

            <Section n={12} title="International Users">
              If you send feedback, that submission may be processed outside your home country depending on the feedback provider.
            </Section>

            <Section n={13} title="Changes">
              This policy may be updated when the App or data practices materially change.
            </Section>

            <Section n={14} title="EU / EEA Rights">
              If you are in the EU or EEA, applicable privacy rights under GDPR may apply to any personal data you choose to submit through the feedback form.
            </Section>

            <Section n={15} title="Contact">
              A dedicated contact form and @liamiel.dev address are being set up. Until then, use the website contact placeholder or the in-app feedback route when available.
            </Section>
          </div>

          <p className="pt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">© Liamiel 2026</p>
        </div>

        <div className="mt-16">
          <Link
            href="/tabnotes"
            className="text-sm text-[var(--color-muted-light)] underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-[var(--color-muted-dark)] dark:hover:text-white/80"
          >
            ← Back to Tabnotes
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-base font-bold text-[var(--color-ink)] dark:text-white">
        {n}. {title}
      </h2>
      <p className="mt-1">{children}</p>
    </div>
  );
}
