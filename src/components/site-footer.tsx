import { Link } from "@tanstack/react-router";
import { Clock, Droplet, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-navy-800 text-white">
                <Droplet className="size-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[15px] font-bold tracking-tight text-white">
                  Absolute Plumbing
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-cta-500">
                  Sewer &amp; Rooter
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Dependable drain, sewer, and plumbing services — done right,
              with clear communication from the first call to the final
              walkthrough.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-navy-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="font-semibold text-cta-500 transition-colors hover:text-cta-400"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    className="text-navy-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-300">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-cta-400"
                >
                  <Phone className="size-4 shrink-0 text-cta-500" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-cta-500" aria-hidden="true" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cta-500" aria-hidden="true" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-cta-500" aria-hidden="true" />
                <span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.label} className="block">
                      {h.label}: {h.value}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6 text-center text-xs text-navy-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
