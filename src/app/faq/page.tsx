import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Liamiel",
  description: "Frequently asked questions about Tabnotes.",
};

const faqs = [
  {
    q: "Is Tabnotes free?",
    a: "Tabnotes is a paid app available on the Mac App Store.",
  },
  {
    q: "Does Tabnotes sync to the cloud?",
    a: "No — your notes stay on your device, encrypted locally.",
  },
  {
    q: "What macOS version is required?",
    a: "macOS 13 Ventura or later.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Notes are encrypted with AES-256-GCM and never leave your device.",
  },
  {
    q: "How do I back up my notes?",
    a: "Use Export → .tabvault for an encrypted backup, or Markdown ZIP for plain text.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-heading text-4xl font-extrabold tracking-[-0.04em]">
          Frequently Asked Questions
        </h1>

        <div className="mt-14 space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h2 className="font-heading text-lg font-bold">{faq.q}</h2>
              <p className="mt-2 font-body leading-relaxed text-[var(--color-brand)] dark:text-white/60">{faq.a}</p>
            </div>
          ))}

          <div>
            <h2 className="font-heading text-lg font-bold">
              Where is the privacy policy?
            </h2>
            <p className="mt-2 font-body leading-relaxed text-[var(--color-brand)] dark:text-white/60">
              <Link
                href="/privacy/tabnotes"
                className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-accent)] dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
