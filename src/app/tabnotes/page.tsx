import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabnotes — Simple notes that stay where you need them.",
  description:
    "A floating, keyboard-first note app for macOS with projects, tabs, copy-blocks, search, and encrypted local storage.",
};

function Placeholder({ label }: { label: string }) {
  return (
    <div className="placeholder-card flex h-56 items-center justify-center rounded-[20px] px-6 text-center text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)] md:h-72">
      {label}
    </div>
  );
}

const features = [
  {
    title: "Floating, not buried",
    desc: "Tabnotes stays visible across your macOS spaces, so your working note remains close instead of vanishing behind a stack of windows.",
    img: "Floating window demo / screenshot placeholder",
  },
  {
    title: "Keyboard-first workflow",
    desc: "Built for people who move fast with shortcuts. Quick toggles, fast switching, and minimal pointer gymnastics.",
    img: "Keyboard workflow placeholder",
  },
  {
    title: "Side assistant energy",
    desc: "Use it like a side companion for prompts, snippets, checklists, rough notes, and temporary working context while the main app stays center stage.",
    img: "Side-assistant layout placeholder",
  },
  {
    title: "Organized simple notes",
    desc: "Projects and tabs keep notes tidy without trying to become your life operating system. This is not Notion. It is not Apple Notes with delusions of grandeur either.",
    img: "Projects and tabs placeholder",
  },
  {
    title: "Copy-paste built in",
    desc: "Store reusable text, prompts, boilerplate, and fragments in copy-blocks, then fire them out fast when you need them.",
    img: "Copy-blocks placeholder",
  },
  {
    title: "Private and local-first",
    desc: "Your notes live on your Mac. Search is local. Storage is encrypted. No cloud circus unless you explicitly export your own data.",
    img: "Encryption and export placeholder",
  },
];

export default function TabnotesPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
            macOS app
          </p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-tight tracking-[-0.05em] text-[var(--color-ink)] md:text-6xl dark:text-white">
            Tabnotes
          </h1>
          <p className="mt-4 text-xl text-[var(--color-brand)] dark:text-[#92bdcd] font-heading">
            Simple notes that stay where you need them.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
            Tabnotes is for active working notes — the stuff you need beside you while you write,
            research, code, or juggle tasks. It is built for focus, shortcuts, snippets, and fast
            structure. Not for giant databases. Not for wiki cosplay.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
            {[
              "Floating window",
              "Keyboard-first",
              "Copy-blocks",
              "Projects + tabs",
              "Local-first",
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
      </section>

      <section className="pb-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-card p-5 md:p-6">
            <Placeholder label="Hero screenshot / CleanShot-style motion demo placeholder" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-24">
          {features.map((feature, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-10 md:flex-row ${imageRight ? "" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-3xl font-extrabold tracking-[-0.02em] text-[var(--color-ink)] dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
                    {feature.desc}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <Placeholder label={feature.img} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card p-8 md:p-10">
            <p className="section-kicker font-heading text-sm font-bold uppercase tracking-[0.18em]">
              What Tabnotes is not
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-ink)] dark:text-white">
              Not a second brain cathedral
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted-light)] dark:text-[var(--color-muted-dark)]">
              Tabnotes is not trying to replace Notion, Apple Notes, Obsidian, or whatever else you already use for deep storage.
              It exists for quick access, clean structure, reusable text, and notes that stay close while you work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Link
          href="/privacy/tabnotes"
          className="text-sm text-[var(--color-muted-light)] underline underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-[var(--color-muted-dark)] dark:hover:text-white/80"
        >
          Privacy Policy
        </Link>
      </section>
    </>
  );
}
