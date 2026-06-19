import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "HVAC & Ventilation Projects",
  description:
    "Explore Inclean industrial ventilation, kitchen exhaust, centralized air conditioning, parking ventilation, pressurization, and fume extraction projects.",
  path: "/project",
});

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
