import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { siteConfig, serviceOptions } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${siteConfig.shortName}` },
      {
        name: "description",
        content:
          "Get in touch with our plumbing team. Request a free quote for drain cleaning, sewer line services, rooter services, or plumbing repairs.",
      },
      { property: "og:title", content: `Contact Us | ${siteConfig.shortName}` },
      {
        property: "og:description",
        content:
          "Get in touch with our plumbing team for drain, sewer, and plumbing services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+\d(\s\-).]{7,25}$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  service: z.string().min(1, "Please choose the service you need."),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us a little about the problem.")
    .max(1000, "Message must be under 1000 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cta-600 focus:ring-2 focus:ring-cta-600/25 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive/25";

function ContactPage() {
  // NOTE: The form validates and captures the request, but it is NOT connected
  // to a backend yet — no message is actually delivered. Wire a real endpoint
  // in handleSubmit below (e.g. a server function or form service), then this
  // confirmation can honestly say the message was sent.
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function handleSubmitValid(values: ContactFormValues) {
    // TODO: send `values` to a real backend endpoint here.
    setSubmitted(values);
  }

  return (
    <>
      <PageHeader
        title="Get in Touch With Our Plumbing Team"
        text="Tell us what's going on and we'll take it from there. We're happy to answer questions and schedule a visit that works for you."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-5 lg:gap-12 lg:px-8">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-navy-100 bg-card p-8 shadow-card sm:p-10">
                <span className="flex size-14 items-center justify-center rounded-full bg-cta-600/10 text-cta-600">
                  <CheckCircle2 className="size-8" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
                  Thanks, {submitted.fullName.split(" ")[0]} — your request is
                  ready.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We've captured the details of your request for{" "}
                  <strong className="text-navy-900">{submitted.service}</strong>
                  . This form isn't connected to message delivery yet, so the
                  fastest way to reach us right now is to call{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="font-bold text-cta-600 hover:underline"
                  >
                    {siteConfig.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-bold text-cta-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(null);
                    reset();
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-lg border border-navy-200 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:bg-navy-50"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(handleSubmitValid)}
                className="rounded-2xl border border-navy-100 bg-card p-6 shadow-card sm:p-8"
                noValidate
              >
                <h2 className="font-display text-xl font-bold text-navy-900">
                  Request Service
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form and we'll get back to you.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-sm font-semibold text-navy-900"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.fullName}
                      {...register("fullName")}
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-navy-900"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-navy-900"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-semibold text-navy-900"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      aria-invalid={!!errors.service}
                      {...register("service")}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-navy-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell us what's going on — for example, 'Kitchen sink drains very slowly.'"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                      className={`${inputClass} resize-y`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta-600 px-6 py-3.5 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700 sm:w-auto"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-navy-900 p-8 shadow-card">
              <h2 className="font-display text-xl font-bold text-white">
                Contact Information
              </h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-start gap-3"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-cta-500 transition-colors group-hover:bg-cta-600 group-hover:text-white">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                        Phone
                      </span>
                      <span className="block font-bold text-white transition-colors group-hover:text-cta-400">
                        {siteConfig.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-cta-500">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block font-bold text-white transition-colors hover:text-cta-400"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-cta-500">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                      Service Area
                    </span>
                    <span className="block font-bold text-white">
                      {siteConfig.serviceArea}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-navy-100 bg-card p-8 shadow-card">
              <h2 className="flex items-center gap-3 font-display text-xl font-bold text-navy-900">
                <Clock className="size-5 text-cta-600" aria-hidden="true" />
                Business Hours
              </h2>
              <dl className="mt-5 space-y-3 text-sm">
                {siteConfig.hours.map((entry) => (
                  <div
                    key={entry.label}
                    className="flex items-center justify-between gap-4 border-b border-navy-100 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-semibold text-navy-900">
                      {entry.label}
                    </dt>
                    <dd className="text-muted-foreground">{entry.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={siteConfig.phoneHref}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-cta-600 px-6 py-4 text-base font-bold text-white shadow-cta transition-colors hover:bg-cta-700"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call Now: {siteConfig.phone}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
