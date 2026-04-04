import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tabnotes — Your notes. Always on top.",
  description: "A floating note-taking app for macOS with projects, tabs, copy-blocks, full-text search, and encrypted storage.",
};

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-56 items-center justify-center rounded-lg bg-placeholder text-sm text-muted md:h-72">
      {label}
    </div>
  );
}

const features = [
  {
    title: "Floating Notes",
    desc: "Stays visible across all your macOS spaces. ⌘T to toggle.",
    img: "Tabnotes — Floating Window",
  },
  {
    title: "Projects & Tabs",
    desc: "Up to 6 projects, 9 tabs each. Drag-to-reorder.",
    img: "Tabnotes — Projects & Tabs",
  },
  {
    title: "Copy-blocks",
    desc: "<<text>> creates instant copy-blocks. ⌘1-9 to copy.",
    img: "Tabnotes — Copy-blocks",
  },
  {
    title: "Full-text Search",
    desc: "VS Code-style search across all notes. /project filters.",
    img: "Tabnotes — Full-text Search",
  },
  {
    title: "Encrypted Storage",
    desc: "AES-256-GCM encrypted vault. Touch ID support.",
    img: "Tabnotes — Encrypted Storage",
  },
  {
    title: "Export & Backup",
    desc: "Encrypted .tabvault or Markdown ZIP export.",
    img: "Tabnotes — Export & Backup",
  },
];

export default function TabnotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-5xl font-extrabold tracking-[-0.04em] leading-tight md:text-6xl">
            Tabnotes
          </h1>
          <p className="mt-4 text-xl text-white/50 font-body">
            Your notes. Always on top.
          </p>
          <a
            href="#"
            className="btn-press mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 font-heading font-semibold text-charcoal transition-all duration-200 hover:bg-white/90"
          >
            Buy on Mac App Store
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-24">
          {features.map((feature, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-10 md:flex-row ${
                  imageRight ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-3xl font-extrabold tracking-[-0.02em]">
                    {feature.title}
                  </h2>
                  <p className="text-white/50 font-body text-lg leading-relaxed">
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

      {/* Privacy link */}
      <section className="py-16 text-center">
        <Link
          href="/privacy/tabnotes"
          className="text-sm text-white/40 underline underline-offset-4 transition-colors duration-200 hover:text-white/70"
        >
          Privacy Policy
        </Link>
      </section>
    </>
  );
}
