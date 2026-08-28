import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vivana Terms of Use — Liamiel",
  description: "Terms of use for Vivana, including plans, subscriptions and the AI fair-use policy.",
};

export default function VivanaTermsPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
          Vivana Terms of Use
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          Effective date: September 1, 2026 · Last updated: August 28, 2026
        </p>

        <div className="mt-12 space-y-8 leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
          <p>
            Vivana (“the App”) is a weekly planner for iPhone published by Liamiel (“we”, “us”).
            By downloading or using the App you agree to these terms. They supplement Apple’s
            standard Licensed Application End User License Agreement, which also applies; where
            the two differ, these terms govern your relationship with us.
          </p>

          <div className="space-y-6">
            <Section n={1} title="Your License">
              We grant you a personal, non-transferable license to use the App on Apple devices
              you own or control. You may not resell the App, rent it out, or use it in ways that
              break the law or these terms.
            </Section>

            <Section n={2} title="Plans">
              The App offers a free tier (“Free”), a one-time purchase (“Grow”) and an
              auto-renewing subscription (“Bloom”, billed monthly or yearly). What each plan
              includes, and its price, is shown in the App and on the App Store at the moment of
              purchase. Prices marked as introduction prices are launch prices and may rise for
              new purchases later; a price you already pay only changes under Apple’s
              subscription rules, which require notice and — where the law says so — your
              consent.
            </Section>

            <Section n={3} title="Grow — What the One-Time Purchase Includes">
              Grow unlocks the full manual planner — unlimited activities, routines, gongs and
              sounds — in its current state and form as of the date of purchase, plus bug fixes
              and compatibility updates, for as long as we distribute the App. New features we
              build after your purchase — in particular AI planning and AI coaching — are not
              part of Grow and are not promised to Grow owners; AI features belong to the Bloom
              subscription because they carry a running cost per use. We will never remove
              functionality you paid for.
            </Section>

            <Section n={4} title="Bloom — Subscription and Renewal">
              Bloom includes everything in Grow plus the App’s AI features. New subscribers get a
              14-day free trial; after it, the subscription renews automatically at the price
              shown at purchase until you cancel. Billing, renewal, cancellation and refunds are
              handled entirely by Apple: you can cancel any time in your Apple ID subscription
              settings, you keep access until the end of the period you paid for, and refund
              requests go to Apple under Apple’s policies.
            </Section>

            <Section n={5} title="AI Fair Use Policy">
              Bloom’s AI features — turning spoken or typed sentences into planner blocks, Siri
              adds, asking questions about your week, and AI coaching when it arrives — are
              included in your subscription under fair use. Each AI request costs us real money
              with the AI providers, so fair-use thresholds exist to protect the large majority
              of normal users from the costs of extreme use. Typical daily use — including using
              voice planning many times a day — stays far below these thresholds. If an account’s
              use goes far beyond typical levels, the App may first switch to a more economical
              AI model and, in extreme cases, pause AI features until your next billing cycle;
              the planner itself always keeps working. Allowances reset with every billing cycle.
              We may adjust the thresholds as real usage and AI prices develop; the current
              policy always lives on this page.
            </Section>

            <Section n={6} title="Free Trial and What Happens After">
              The App’s 14-day trial unlocks everything, with no account and no payment details.
              When it ends you move to the plan you chose — or simply to Free if you chose
              nothing. Nothing you created is ever deleted when a trial or subscription ends:
              your plan stays on your device and stays yours, with Free-tier limits applying only
              to creating new items.
            </Section>

            <Section n={7} title="Your Content and Data">
              Your plan lives on your device and belongs to you. What data leaves your device
              when you use AI features — and how to withdraw that consent — is described in the{" "}
              <Link
                href="/simplanner/privacy"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
              >
                Privacy Policy
              </Link>
              , which is part of these terms.
            </Section>

            <Section n={8} title="Warranty and Liability">
              The App is provided “as is”. We work hard to keep it reliable, but we cannot
              promise it is free of errors or always available, and the App is a planning aid —
              not medical, financial or professional advice. To the extent the law allows, our
              liability is limited to the amount you paid for the App in the twelve months before
              the claim. Nothing in these terms limits rights that consumer law gives you and
              that cannot be waived.
            </Section>

            <Section n={9} title="Changes to These Terms">
              We may update these terms as the App evolves. Meaningful changes are announced in
              the App or on this page before they take effect; continuing to use the App after
              that means you accept the updated terms. If you do not agree, stop using the App
              and — for subscriptions — cancel via your Apple ID settings.
            </Section>

            <Section n={10} title="Contact">
              Questions about these terms:{" "}
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
