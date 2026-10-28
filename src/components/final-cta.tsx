import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Final call-to-action band shown at the bottom of every page.
 */
export function FinalCta({
  title = "Need a plumber you can count on?",
  text = "Tell us what's going on and we'll get it handled — from a slow drain to a full sewer line.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-200">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cta-600 px-6 py-3.5 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700"
            >
              Get a Free Quote
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-600 bg-navy-800/60 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-navy-800"
            >
              <Phone className="size-5 text-cta-500" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
