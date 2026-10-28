import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Phone,
  ShieldCheck,
  ThumbsUp,
  UserCheck,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { FinalCta } from "@/components/final-cta";
import heroImage from "@/assets/hero.jpg";
import teamImage from "@/assets/home-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.shortName} | Reliable Plumbing, Sewer & Rooter Services` },
      {
        name: "description",
        content:
          "Drain cleaning, clogged drain removal, sewer line cleaning & repair, rooter services, plumbing repairs, and inspections. Get a free quote or call today.",
      },
      { property: "og:title", content: `${siteConfig.shortName} | Reliable Plumbing, Sewer & Rooter Services` },
      {
        property: "og:description",
        content:
          "Professional drain, sewer, and plumbing services. Get a free quote or call today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "We show up when we say we will, and we don't consider the job done until your plumbing works the way it should.",
  },
  {
    icon: Wrench,
    title: "Professional Workmanship",
    text: "Careful diagnosis, quality materials, and repairs done properly the first time — no shortcuts.",
  },
  {
    icon: ThumbsUp,
    title: "Customer-Focused Solutions",
    text: "Clear explanations, straightforward recommendations, and solutions built around your home and your budget.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Contact Us",
    text: "Call or send us a message and tell us what's going on with your drains, sewer line, or plumbing.",
  },
  {
    icon: CalendarCheck,
    step: "Step 2",
    title: "Schedule Service",
    text: "We'll find a time that works for you and arrive ready to take care of the job.",
  },
  {
    icon: UserCheck,
    step: "Step 3",
    title: "Get It Fixed",
    text: "We diagnose the problem, do the work right, and walk you through what was done before we leave.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <img
          src={heroImage}
          alt="Professional plumber repairing pipes under a kitchen sink"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/55" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <span className="animate-fade-up inline-flex items-center rounded-full border border-navy-600 bg-navy-900/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cta-500">
              Plumbing &middot; Sewer &middot; Rooter
            </span>
            <h1 className="animate-fade-up mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Plumbing, Sewer &amp; Rooter Services
            </h1>
            <p className="animate-fade-up mt-5 text-lg leading-relaxed text-navy-100 sm:text-xl">
              From stubborn clogs to full sewer line work, our team delivers
              professional plumbing solutions done right the first time — with
              clear communication at every step.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-cta-600 px-7 py-3.5 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700"
              >
                Get a Free Quote
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-500 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="size-5 text-cta-500" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-600">
              Who We Are
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Your local team for drains, sewer lines &amp; plumbing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {siteConfig.name} focuses on one thing: dependable plumbing done
              properly. Whether it's a slow kitchen drain, a backed-up sewer
              line, or a repair you've been putting off, we bring the right
              equipment, careful workmanship, and honest recommendations to
              every job.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {siteConfig.serviceArea}.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-800 transition-colors hover:text-cta-600"
            >
              Learn more about us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="Two plumbers performing a sewer line inspection in a residential yard"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-600">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Services built around your plumbing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Six core services covering everything from everyday clogs to
              complete sewer line care.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services"
                className="group rounded-2xl border border-navy-100 bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-cta-600">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cta-600">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-600">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Plumbing service you can trust
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-card p-7 text-center shadow-card"
              >
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-cta-600/10 text-cta-600">
                  <item.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-cta-500">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Getting it fixed is simple
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-navy-700 bg-navy-800/60 p-7"
              >
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-cta-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {step.step}
                </span>
                <step.icon className="size-8 text-cta-500" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  {step.text}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute right-4 top-6 hidden size-5 text-navy-500 md:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cta-600 px-7 py-3.5 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700"
            >
              Start with a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
