import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabnotes Privacy Policy — Liamiel",
  description: "Privacy policy for Tabnotes.",
};

export default function PrivacyPage() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em]">
          Tabnotes Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-white/40">
          Effective date: April 3, 2026 &middot; Last updated: April 3, 2026
        </p>

        <div className="mt-12 space-y-8 text-white/70 font-body leading-relaxed">
          <p>
            Tabnotes (&ldquo;the App&rdquo;) is a note-taking application for macOS
            developed by Bob Wijs.
          </p>
          <p>
            This Privacy Policy explains how Tabnotes handles information when you use
            the App.
          </p>

          <div className="space-y-6">
            <Section n={1} title="Summary">
              Tabnotes stores notes locally. The App does not send your notes to servers.
            </Section>

            <Section n={2} title="Information the App Processes">
              Note content, markdown files, project structure, preferences, and the search
              index. All stored locally on your Mac.
            </Section>

            <Section n={3} title="Clipboard">
              Tabnotes does not monitor the clipboard in the background. Content is stored
              only when you intentionally place it in the App.
            </Section>

            <Section n={4} title="Local Storage and Encryption">
              Notes are protected using 256-bit encryption. There is no cloud storage at
              this time.
            </Section>

            <Section n={5} title="Exports and Backups">
              Export is manual only. There is no automatic iCloud sync.
            </Section>

            <Section n={6} title="Feedback Form">
              Feedback submitted through the App is processed via Formspree. Formspree may
              store your email address and message. See Formspree&apos;s privacy policy for
              details.
            </Section>

            <Section n={7} title="No Analytics, Advertising, or Tracking">
              Tabnotes does not include any analytics SDKs, telemetry, crash reporting, or
              tracking of any kind.
            </Section>

            <Section n={8} title="Data Sharing">
              Your notes are not shared with anyone. Feedback you choose to send may be
              processed by Formspree.
            </Section>

            <Section n={9} title="Data Retention">
              Notes remain on your device until you delete them.
            </Section>

            <Section n={10} title="Security">
              We take reasonable steps to protect your data. No storage method is
              completely secure.
            </Section>

            <Section n={11} title="Children&rsquo;s Privacy">
              Tabnotes is not directed to children under 13.
            </Section>

            <Section n={12} title="International Users">
              Feedback is processed in accordance with this policy.
            </Section>

            <Section n={13} title="Changes">
              This policy will be updated when material changes occur.
            </Section>

            <Section n={14} title="EU/EEA Rights">
              If you are in the EU or EEA, GDPR rights apply. Contact us for any data
              requests.
            </Section>

            <Section n={15} title="Contact">
              Bob Wijs. Email:{" "}
              <a
                href="mailto:privacy@liamiel.dev"
                className="underline underline-offset-4 hover:text-white"
              >
                privacy@liamiel.dev
              </a>
              . We respond within 30 days.
            </Section>
          </div>

          <p className="pt-4 text-sm text-white/40">&copy; Bob Wijs 2026</p>
        </div>

        <div className="mt-16">
          <Link
            href="/tabnotes"
            className="text-sm text-white/40 underline underline-offset-4 transition-colors duration-200 hover:text-white/70"
          >
            &larr; Back to Tabnotes
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-base font-bold text-white/90">
        {n}. {title}
      </h2>
      <p className="mt-1">{children}</p>
    </div>
  );
}
