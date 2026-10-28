import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Droplet, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Text-based logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-navy-800 text-white">
            <Droplet className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-navy-900">
              Absolute Plumbing
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-cta-600">
              Sewer &amp; Rooter
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(item.to)
                  ? "text-navy-900"
                  : "text-muted-foreground hover:text-navy-900"
              }`}
              aria-current={isActive(item.to) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-md border border-navy-200 px-3 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 sm:inline-flex"
          >
            <Phone className="size-4 text-cta-600" aria-hidden="true" />
            <span className="hidden lg:inline">{siteConfig.phone}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <Link
            to="/contact"
            className="hidden rounded-md bg-cta-600 px-4 py-2 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-cta-700 sm:inline-flex"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-navy-900 transition-colors hover:bg-navy-50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-navy-100 bg-background px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block rounded-md px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                isActive(item.to)
                  ? "bg-navy-50 text-navy-900"
                  : "text-muted-foreground hover:bg-navy-50 hover:text-navy-900"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-cta-600 px-4 py-2.5 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-cta-700"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
            >
              <Phone className="size-4 text-cta-600" aria-hidden="true" />
              Call {siteConfig.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
