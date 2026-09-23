import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vivana Privacy Policy · Liamiel",
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
          Effective date: July 11, 2026 · Last updated: September 23, 2026
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
              Your plan lives on your iPhone. The App has no accounts, no ads and no tracking
              that identifies you. Two kinds of data leave your device: the audio or text you
              deliberately submit through the optional AI planning feature, described below, and
              small anonymous usage events that tell us whether onboarding is working.
            </Section>

            <Section n={2} title="Your Plan Stays on Your Device">
              Everything you plan, including activities, blocks, routines, schedules, gongs and
              history, is stored in a local database on your device. Liamiel operates no cloud
              sync and cannot see your plan. If you use iCloud or device backups, your data is
              included in those backups under the Apple settings you control.
            </Section>

            <Section n={3} title="Voice and Text Commands (Optional)">
              The App can turn a spoken or typed sentence (“add 30 minutes reading tomorrow
              morning”) into planner blocks. The microphone is used only while you record,
              recordings are capped at 90 seconds, and the App asks for your consent before the
              first upload. A voice recording is sent over an encrypted connection (HTTPS) to our
              server and deleted from your device the moment it is sent. Along with a recording,
              we also send the names of your current activities and routines, so the AI can
              recognise them correctly. Typed commands go through the same pipeline and the same
              handling, but do not include your activity or routine names: only what you typed is
              sent. Nothing else about your plan is included: no
              blocks, no schedule, no history. Questions about your schedule, such as “what’s on
              Thursday”, are answered on your device; the server only classifies the question and
              never sees your blocks.
            </Section>

            <Section n={4} title="AI Processing by OpenAI">
              Our server forwards your audio to <strong>OpenAI</strong> for speech to text
              conversion, then forwards the resulting text to an OpenAI language model to turn it
              into planner actions. OpenAI processes this data as our service provider: under
              OpenAI’s API terms, API data is not used to train OpenAI’s models and is retained
              for a limited period (currently up to 30 days) for abuse monitoring. See{" "}
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
              and the resulting planner actions can appear briefly in our short lived operational
              logs, which we use only to keep the service working and which are not built to
              identify you.
            </Section>

            <Section n={6} title="Contact and Feedback">
              If you use Contact in Settings to send a bug report or a suggestion, your message
              goes to our server so the developer can read it. If you add your email
              address so we can reply, that goes with it too, along with your app version, iOS
              version and language. There is no device identifier. Unlike a voice recording, a
              message you send here is not deleted: we keep it so we can read and answer it.
            </Section>

            <Section n={7} title="No Identifiers">
              Requests to our server carry no account, device identifier, advertising ID or other
              personal details. A typed command sends only the app name and what you typed. A
              voice request sends the same plus the recording and the names of your current
              activities and routines, so the AI can recognise them; nothing else about your plan
              travels with it. We could not link a recording to you even if asked
              to.
            </Section>

            <Section n={8} title="Purchases">
              Vivana’s purchases, the Grow one-time unlock and the Bloom subscription, are handled
              entirely by Apple’s App Store. Apple processes all payments and renewals; we never
              receive your payment details. The free-trial state is stored on your device in the
              iOS Keychain.
            </Section>

            <Section n={9} title="Notifications">
              Gongs, reminders and trial notices are local notifications, scheduled and delivered
              on your device. No push-notification service is used.
            </Section>

            <Section n={10} title="Usage Signals and No Tracking">
              To understand whether onboarding works, the App sends small anonymous events, such
              as an event name (“onboarding step 3 shown”), a timestamp, an A/B test label that
              is one of two values and stays the same on this install, and a short random id that
              changes every launch. There is no device identifier, no
              advertising identifier and no way for us to tie these events to you. The App
              contains no advertising frameworks, we do not sell data or show ads, and we do not
              use the App Tracking Transparency framework because we track nothing it applies to.
            </Section>

            <Section n={11} title="Data Deletion and Your Rights">
              Because we keep no database, deletion is largely automatic: our operational logs are
              short lived, and OpenAI’s retention window closes after at most 30 days. The
              exception is Contact: a message you send us, and any email address you choose to
              give with it, is kept so the developer can read and reply. To exercise your privacy
              rights (including GDPR access, erasure or objection) or to request deletion sooner,
              email{" "}
              <a
                href="mailto:support@liamiel.dev"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                support@liamiel.dev
              </a>
              ; we respond within 30 days. You can also stop all uploads at any time by simply not
              using the voice and text feature; the rest of the App works fully offline.
            </Section>

            <Section n={12} title="Children’s Privacy">
              Vivana is not directed to children under 13.
            </Section>

            <Section n={13} title="Security">
              All traffic between the App, our server and OpenAI uses encrypted connections
              (HTTPS). Reasonable steps are taken to protect your data, but no software or storage
              method can guarantee absolute security.
            </Section>

            <Section n={14} title="Changes">
              If a future version changes what is collected or shared, this page and the in-app
              consent will change before the behavior does. The date at the top reflects the
              latest revision.
            </Section>

            <Section n={15} title="Contact">
              Liamiel. Email{" "}
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
