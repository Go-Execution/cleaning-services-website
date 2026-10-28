/**
 * Central site configuration.
 *
 * Edit the placeholder values below (phone, email, service area, hours)
 * and the whole website — header, footer, "Call Now" buttons and the
 * contact page — updates automatically. Nothing else needs to change.
 */

export const siteConfig = {
  name: "Absolute Plumbing, Sewer and Rooter",
  shortName: "Absolute Plumbing",
  tagline: "Reliable Plumbing, Sewer & Rooter Services",

  // TODO: replace with the real phone number — used for all tel: links.
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",

  // TODO: replace with the real email address.
  email: "hello@exampleplumbing.com",

  // TODO: replace with the real service area description.
  serviceArea: "Serving your local area and surrounding communities",

  // TODO: replace with the real business hours.
  hours: [
    { label: "Monday – Friday", value: "8:00 AM – 6:00 PM" },
    { label: "Saturday", value: "9:00 AM – 4:00 PM" },
    { label: "Sunday", value: "Closed" },
  ],

  address: {
    // TODO: replace with the real address lines (or remove if not wanted).
    line1: "123 Main Street",
    line2: "Your City, ST 00000",
  },
} as const;

export const serviceOptions = [
  "Drain Cleaning",
  "Clogged Drain Removal",
  "Sewer Line Cleaning & Repair",
  "Rooter Services",
  "Plumbing Repairs",
  "Sewer & Plumbing Inspections",
  "Other / Not Sure",
] as const;
