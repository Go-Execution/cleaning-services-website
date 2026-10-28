import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { PageHeader } from "@/components/page-header";
import { FinalCta } from "@/components/final-cta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Plumbing & Sewer Services | ${siteConfig.shortName}` },
      {
        name: "description",
        content:
          "Drain cleaning, clogged drain removal, sewer line cleaning & repair, rooter services, plumbing repairs, and sewer & plumbing inspections.",
      },
      { property: "og:title", content: `Plumbing & Sewer Services | ${siteConfig.shortName}` },
      {
        property: "og:description",
        content:
          "Drain cleaning, sewer line services, rooter services, plumbing repairs, and inspections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Plumbing & Sewer Services"
        text="Six core services covering everything from everyday clogs to complete sewer line care — all handled with the same care and attention to detail."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col rounded-2xl border border-navy-100 bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-navy-900">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.long}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-navy-800"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-cta-600"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-cta-600 px-5 py-2.5 text-sm font-bold text-cta-600 transition-colors hover:bg-cta-600 hover:text-white"
                  aria-label={`Request ${service.name} service`}
                >
                  Request Service
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Not sure which service you need?"
        text="That's what we're here for. Describe the problem and we'll point you in the right direction."
      />
    </>
  );
}
