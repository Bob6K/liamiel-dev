import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Liamiel — Sharp tools for the perfectionist.",
  description:
    "Liamiel builds focused Mac apps for people who live on shortcuts, structure, and clean workflows.",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#10181d]/78">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg font-extrabold tracking-[-0.04em] text-[var(--color-ink)] dark:text-white"
        >
          Liamiel
        </Link>
        <div className="flex items-center gap-3 md:gap-6 text-sm">
          <Link
            href="/tabnotes"
            className="font-heading font-medium tracking-[0.02em] text-[var(--color-muted-light)] transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-white/70 dark:hover:text-white"
          >
            Tabnotes
          </Link>
          <Link
            href="/changelog"
            className="font-heading font-medium tracking-[0.02em] text-[var(--color-muted-light)] transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-white/70 dark:hover:text-white"
          >
            Changelog
          </Link>
          <Link
            href="/faq"
            className="font-heading font-medium tracking-[0.02em] text-[var(--color-muted-light)] transition-colors duration-200 hover:text-[var(--color-brand)] dark:text-white/70 dark:hover:text-white"
          >
            FAQ
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2H21l-6.02 6.88L22 22h-5.49l-4.3-6.27L6.72 22H4l6.44-7.36L2 2h5.63l3.89 5.67L18.244 2Zm-.96 18h1.52L6.8 3.9H5.17l12.114 16.1Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-[var(--color-muted-light)] dark:text-white/45 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Liamiel. Built by Liamiel.</span>
        <div className="flex items-center gap-5">
          <Link
            href="/privacy/tabnotes"
            className="transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
          >
            Privacy Policy
          </Link>
          <a
            href="https://x.com/Liamiel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[var(--color-brand)] dark:hover:text-white/80"
          >
            <XIcon />
            <span>@Liamiel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
