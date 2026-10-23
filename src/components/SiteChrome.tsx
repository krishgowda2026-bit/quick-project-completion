import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Shinemax Pharma home">
          <img src={logo} alt="Shinemax Pharma" width={256} height={91} className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a href={SITE.whatsapp} className="bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-ink">
            Partner enquiry
          </a>
        </nav>
        <button className="md:hidden text-sm font-semibold" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background px-6 py-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Shinemax Pharma</p>
          <p className="mt-3 text-sm opacity-70">Quality medicines at affordable cost — since {SITE.founded}, Mysuru.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-3">Office</p>
          <p>{SITE.address}</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Reach us</p>
          <a className="block hover:underline" href={SITE.whatsapp}>WhatsApp {SITE.phoneDisplay}</a>
          <a className="mt-2 block hover:underline" href={SITE.maps}>Open in Maps</a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>}
      </div>
    </section>
  );
}
