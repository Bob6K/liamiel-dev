import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import Link from "next/link";
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
  title: "Liamiel — Build smarter. Ship faster.",
  description: "Liamiel is a small studio building focused, privacy-first Mac apps.",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-charcoal/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg font-extrabold tracking-[-0.04em] text-white"
        >
          Liamiel
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/tabnotes"
            className="font-heading font-medium tracking-[0.02em] text-white/70 transition-colors duration-200 hover:text-white"
          >
            Tabnotes
          </Link>
          <Link
            href="/changelog"
            className="font-heading font-medium tracking-[0.02em] text-white/70 transition-colors duration-200 hover:text-white"
          >
            Changelog
          </Link>
          <Link
            href="/faq"
            className="font-heading font-medium tracking-[0.02em] text-white/70 transition-colors duration-200 hover:text-white"
          >
            FAQ
          </Link>
          <a
            href="#"
            className="btn-press rounded-full bg-white px-4 py-1.5 font-heading font-semibold text-charcoal transition-all duration-200 hover:bg-white/90"
          >
            Buy on Mac App Store
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/40">
        <span>&copy; 2026 Liamiel.</span>
        <Link
          href="/privacy/tabnotes"
          className="transition-colors duration-200 hover:text-white/70"
        >
          Privacy Policy
        </Link>
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
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
