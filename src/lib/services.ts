import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  ShowerHead,
  Wrench,
  Settings,
  Hammer,
  ScanSearch,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  long: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    short:
      "Thorough drain cleaning that clears buildup and keeps water moving the way it should.",
    long: "Slow or recurring drain problems usually come from buildup deep in the line. We clean drains properly — not just poke a hole through the clog — so water flows freely and stays that way.",
    icon: Droplets,
    points: ["Kitchen, bath & laundry drains", "Buildup & grease removal", "Flow testing after every cleaning"],
  },
  {
    slug: "clogged-drain-removal",
    name: "Clogged Drain Removal",
    short:
      "Fast, careful removal of stubborn clogs in sinks, tubs, showers, and toilets.",
    long: "A clog always seems to happen at the worst time. We locate the blockage, remove it completely, and check that the line drains cleanly before we leave.",
    icon: ShowerHead,
    points: ["Sinks, tubs, showers & toilets", "Complete clog removal", "Line check after clearing"],
  },
  {
    slug: "sewer-line-cleaning-repair",
    name: "Sewer Line Cleaning & Repair",
    short:
      "Sewer line cleaning to restore flow, and repairs when a line needs more than a cleaning.",
    long: "From roots and debris to damaged pipe sections, we handle the full range of sewer line work — cleaning the line to restore flow and repairing or replacing sections when the pipe itself is the problem.",
    icon: Wrench,
    points: ["Root & debris removal", "Main line cleaning", "Section repair & replacement"],
  },
  {
    slug: "rooter-services",
    name: "Rooter Services",
    short:
      "Professional rooter service that cuts through roots and tough blockages in your lines.",
    long: "Root intrusion and hardened blockages need the right equipment and a steady hand. Our rooter service clears tough obstructions in drain and sewer lines and helps prevent them from coming right back.",
    icon: Settings,
    points: ["Root cutting & removal", "Tough blockage clearing", "Recurring clog solutions"],
  },
  {
    slug: "plumbing-repairs",
    name: "Plumbing Repairs",
    short:
      "Dependable repairs for leaks, fixtures, pipes, and everyday plumbing problems.",
    long: "Leaks, worn fixtures, and failing pipes don't fix themselves. We diagnose the real cause, make the repair correctly, and leave you with plumbing you can count on.",
    icon: Hammer,
    points: ["Leak detection & repair", "Fixture repair & replacement", "Pipe repairs"],
  },
  {
    slug: "sewer-plumbing-inspections",
    name: "Sewer & Plumbing Inspections",
    short:
      "Clear-eyed inspections that show you exactly what's going on inside your lines.",
    long: "Buying a home, planning a renovation, or chasing a mystery problem? An inspection gives you a clear picture of your sewer and plumbing condition so you can make decisions with confidence.",
    icon: ScanSearch,
    points: ["Camera line inspections", "Condition assessments", "Clear findings & recommendations"],
  },
];
