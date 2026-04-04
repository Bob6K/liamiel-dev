import Link from "next/link";
import { EmailSignup } from "./components/email-signup";

function Placeholder({ label }: { label: string }) {
  return (
    <div className="placeholder-card flex h-72 items-center justify-center rounded-[20px] px-6 text-center text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
              Focused Mac software
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold leading-tight tracking-[-0.05em] text-[var(--color-ink)] md:text-6xl dark:text-white">
              Sharp tools for the perfectionist.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
              Liamiel builds clean, keyboard-first Mac apps for people who care about speed,
              structure, and staying in flow. No bloated workspace circus. Just focused tools
              that do their job properly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tabnotes"
                className="btn-press btn-primary inline-flex h-12 items-center rounded-full px-8 font-heading font-semibold transition-all duration-200"
              >
                Explore Tabnotes
              </Link>
              <a
                href="#contact"
                className="btn-press btn-secondary inline-flex h-12 items-center rounded-full px-8 font-heading font-semibold transition-all duration-200"
              >
                Contact placeholder
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
              {[
                "Keyboard-first",
                "Privacy-first",
                "Mac-native workflows",
                "Built for focused people",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white/60 px-4 py-2 dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 md:p-5">
            <Placeholder label="Tabnotes product preview — screenshots and motion demo come later today" />
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
                Current app
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-ink)] dark:text-white">
                Tabnotes
              </h2>
              <p className="mt-2 font-heading text-base font-medium text-[var(--color-brand)] dark:text-[#92bdcd]">
                Simple notes. Floating when you need them. Gone when you don’t.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
                A floating note app for macOS built around fast capture, clean organization,
                and zero nonsense. Keep notes visible across spaces, split work into projects
                and tabs, and store snippets you reuse all day.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/tabnotes"
                  className="btn-press btn-primary rounded-full px-5 py-3 font-heading text-sm font-semibold transition-all duration-200"
                >
                  View Tabnotes
                </Link>
                <span className="btn-secondary rounded-full px-5 py-3 font-heading text-sm font-semibold">
                  Mac App Store link later
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Always there", "Floats above your workspace so the note stays in view while you do actual work."],
                ["Keyboard-heavy", "Built for shortcuts, quick switching, and low-friction capture."],
                ["Copy-paste friendly", "Store snippets, boilerplate, prompts, and reusable text without digging around."],
                ["Organized, not bloated", "Projects and tabs keep things tidy without turning into a giant second brain monster."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-black/8 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <h3 className="font-heading text-lg font-bold text-[var(--color-ink)] dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
              Why it feels different
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white">
              Built for real workflow friction
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Keep it visible",
                desc: "Open Tabnotes and keep it floating while you work in other apps. No alt-tabbing every ten seconds.",
              },
              {
                step: "02",
                title: "Keep it sorted",
                desc: "Projects and tabs give you just enough structure to stay sane without turning notes into admin work.",
              },
              {
                step: "03",
                title: "Keep it moving",
                desc: "Save common text, copy it fast, and get back to work. Less digging. Less clutter. Less faffing around.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6">
                <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)] dark:text-[#92bdcd]">
                  Step {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-[var(--color-ink)] dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
