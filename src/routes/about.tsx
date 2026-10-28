import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck, ThumbsUp, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { FinalCta } from "@/components/final-cta";
import technicianImage from "@/assets/about-technician.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${siteConfig.shortName}` },
      {
        name: "description",
        content:
          "Learn about Absolute Plumbing, Sewer and Rooter — dependable plumbing solutions, quality workmanship, and customer-first service.",
      },
      { property: "og:title", content: `About Us | ${siteConfig.shortName}` },
      {
        property: "og:description",
        content:
          "Dependable plumbing solutions, quality workmanship, and customer-first service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const chooseReasons = [
  {
    icon: ShieldCheck,
    title: "Dependability",
    text: "We keep our appointments, communicate clearly, and follow through on what we say.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    text: "Every repair and installation is done carefully, with the right materials for a lasting result.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Guidance",
    text: "We explain what we find and recommend only the work your plumbing actually needs.",
  },
  {
    icon: ThumbsUp,
    title: "Respect for Your Home",
    text: "We work cleanly, protect your space, and leave every job site tidy.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Absolute Plumbing, Sewer and Rooter"
        text="A plumbing team built around dependable solutions, quality workmanship, and genuinely helpful service."
      />

      {/* Introduction */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-600">
              Who We Are
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Plumbers who treat your home like their own
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {siteConfig.name} was built on a simple idea: plumbing problems
              are stressful enough without wondering whether the work will
              hold up. That's why we focus on doing things properly — careful
              diagnosis, clear explanations, and repairs made to last.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From a kitchen sink that won't drain to a sewer line that needs
              real attention, we show up prepared, work cleanly, and treat
              every home with respect. When we leave, you'll know exactly what
              was done and why.
            </p>
          </div>
          <div className="lg:col-span-2">
            <img
              src={technicianImage}
              alt="Professional plumbing technician holding a pipe wrench"
              width={1024}
              height={1280}
              loading="lazy"
              className="mx-auto max-w-sm rounded-2xl object-cover shadow-card lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Mission / Approach */}
      <section className="bg-navy-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-navy-100 bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To take the stress out of plumbing problems. We want every
              customer to feel confident that their drains, sewer lines, and
              plumbing are in good hands — and that the job was done right the
              first time.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Our Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We start by understanding the problem, not just the symptoms.
              Then we explain your options in plain language, recommend the
              solution that makes the most sense, and complete the work with
              care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Why customers choose us */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-600">
              Why Customers Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              What sets our service apart
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chooseReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-navy-100 bg-card p-6 shadow-card"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-cta-600/10 text-cta-600">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-600 px-7 py-3.5 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700"
            >
              Get in Touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
