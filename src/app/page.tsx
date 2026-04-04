import Link from "next/link";
import { EmailSignup } from "./components/email-signup";

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-lg bg-placeholder text-sm text-muted">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-5xl font-extrabold tracking-[-0.04em] leading-tight md:text-6xl">
            Build smarter.<br />Ship faster.
          </h1>
          <p className="mt-6 text-lg text-white/50 font-body leading-relaxed max-w-xl mx-auto">
            Liamiel is a small studio building focused, privacy-first Mac apps
            that stay out of your way.
          </p>
          <Link
            href="/tabnotes"
            className="btn-press mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 font-heading font-semibold text-charcoal transition-all duration-200 hover:bg-white/90"
          >
            Discover Tabnotes
          </Link>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card overflow-hidden">
            <Placeholder label="Tabnotes — screenshot or video coming soon" />
            <div className="p-8">
              <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em]">
                Tabnotes
              </h2>
              <p className="mt-1 font-heading text-sm font-medium tracking-[0.02em] text-white/50">
                Your notes. Always on top.
              </p>
              <p className="mt-4 text-white/60 font-body leading-relaxed">
                A floating note-taking app for macOS. Organize thoughts across projects
                and tabs, create instant copy-blocks, and search everything — all in a
                window that stays visible across every space.
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/tabnotes"
                  className="btn-press rounded-full border border-white/20 px-5 py-2 font-heading text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                >
                  Learn More
                </Link>
                <a
                  href="#"
                  className="btn-press rounded-full bg-white px-5 py-2 font-heading text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-white/90"
                >
                  Buy on Mac App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.04em]">
            How it works
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Launch & pin",
                desc: "Open Tabnotes and it floats above everything. Toggle with ⌘T.",
              },
              {
                step: "02",
                title: "Organize",
                desc: "Create projects, add tabs, drag to reorder. Everything stays tidy.",
              },
              {
                step: "03",
                title: "Copy & go",
                desc: "Use copy-blocks to store snippets. ⌘1-9 copies instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6">
                <span className="font-heading text-xs font-bold tracking-[0.1em] text-white/30 uppercase">
                  Step {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </>
  );
}
