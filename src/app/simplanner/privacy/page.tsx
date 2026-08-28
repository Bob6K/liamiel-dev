import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vivana Privacy Policy — Liamiel",
  description: "Privacy policy for Vivana.",
};

export default function SimplannerPrivacyPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Vivana Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          Effective date: July 11, 2026 · Last updated: August 28, 2026
        </p>

        <div className="mt-12 space-y-8 leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          <p>
            Vivana (“the App”) is a weekly planner for iPhone published by Liamiel.
          </p>
          <p>
            This page explains what stays on your device, what leaves it when you use the
            optional AI planning feature, and how to reach us about your data.
          </p>

          <div className="space-y-6">
            <Section n={1} title="Summary">
              Your plan lives on your iPhone. The App has no accounts, no ads, no analytics and
              no tracking. The only data that ever leaves your device is the audio or text you
              deliberately submit when using the optional AI planning feature, described below.
            </Section>

            <Section n={2} title="Your Plan Stays on Your Device">
              Everything you plan — activities, blocks, routines, schedules, gongs and history —
              is stored in a local database on your device. Liamiel operates no cloud sync and
              cannot see your plan. If you use iCloud or device backups, your data is included in
              those backups under the Apple settings you control.
            </Section>

            <Section n={3} title="Voice and Text Commands (Optional)">
              The App can turn a spoken or typed sentence (“add 30 minutes reading tomorrow
              morning”) into planner blocks. The microphone is used only while you record,
              recordings are capped at 90 seconds, and the App asks for your consent before the
              first upload. The recording or typed text is sent over an encrypted connection
              (HTTPS) to our server, and the audio file is deleted from your device after upload.
              No name, email, account or device identifier is sent with it.
            </Section>

            <Section n={4} title="AI Processing by OpenAI">
              Our server forwards your audio to <strong>OpenAI</strong> for speech-to-text
              (Whisper) and forwards the resulting transcript to an OpenAI language model
              (GPT-4o family) to convert it into planner actions. OpenAI processes this data as
              our service provider: under OpenAI’s API terms, API data is not used to train
              OpenAI’s models and is retained for a limited period (currently up to 30 days) for
              abuse monitoring. See{" "}
              <a
                href="https://openai.com/enterprise-privacy"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                OpenAI’s API privacy commitments
              </a>
              .
            </Section>

            <Section n={5} title="What Our Server Keeps">
              Nothing, permanently. There are no user accounts and no database. Our server (hosted
              on Vercel) processes your audio in memory and never writes it to disk. Transcripts
              and the resulting planner actions appear briefly in operational logs that delete
              automatically after roughly 7 days; we use those logs only to keep the service
              working.
            </Section>

            <Section n={6} title="Parse-Improvement Feedback">
              When you correct an AI-suggested plan before saving it, the App may send the
              transcript together with your correction so we can improve parsing quality. This
              feedback carries no identifiers and lives in the same auto-expiring operational
              logs.
            </Section>

            <Section n={7} title="No Identifiers">
              Requests to our server carry no account, device identifier, advertising ID or
              personal details — only the audio or text itself, the app name, and your timezone
              (used to resolve words like “tonight”). We could not link a recording to you even
              if asked to.
            </Section>

            <Section n={8} title="Purchases">
              Vivana’s purchases — the Grow one-time unlock and the Bloom subscription — are handled
              entirely by Apple’s App Store. Apple processes all payments and renewals; we never
              receive your payment details. The free-trial state is stored on your device in the
              iOS Keychain.
            </Section>

            <Section n={9} title="Notifications">
              Gongs, reminders and trial notices are local notifications, scheduled and delivered
              on your device. No push-notification service is used.
            </Section>

            <Section n={10} title="No Analytics, Advertising, or Tracking">
              The App contains no analytics SDKs, advertising frameworks or trackers. If we ever
              add anonymous usage statistics, this policy will be updated first and the App Store
              privacy label will reflect it.
            </Section>

            <Section n={11} title="Data Deletion and Your Rights">
              Because we keep no database, deletion is largely automatic: our operational logs
              self-delete after roughly 7 days, and OpenAI’s retention window closes after at
              most 30 days. To exercise your privacy rights (including GDPR access, erasure or
              objection) or to request deletion sooner, email{" "}
              <a
                href="mailto:support@liamiel.dev"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                support@liamiel.dev
              </a>{" "}
              — we respond within 30 days. You can also stop all uploads at any time by simply
              not using the voice and text feature; the rest of the App works fully offline.
            </Section>

            <Section n={12} title="Children’s Privacy">
              Vivana is not directed to children under 13.
            </Section>

            <Section n={13} title="Security">
              All traffic between the App, our server and OpenAI uses encrypted connections
              (HTTPS). Reasonable steps are taken to protect your data, but no software or
              storage method can guarantee absolute security.
            </Section>

            <Section n={14} title="Changes">
              This policy may be updated when the App or its data practices materially change.
              The date at the top reflects the latest revision.
            </Section>

            <Section n={15} title="Contact">
              Liamiel —{" "}
              <a
                href="mailto:support@liamiel.dev"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                support@liamiel.dev
              </a>
              . For general help, see the{" "}
              <Link
                href="/simplanner/support"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                support page
              </Link>
              .
            </Section>
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
