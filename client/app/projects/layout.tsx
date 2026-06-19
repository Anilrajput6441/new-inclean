import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "HVAC & Ventilation Projects",
  description:
    "Explore Inclean industrial ventilation, kitchen exhaust, centralized air conditioning, parking ventilation, pressurization, and fume extraction projects.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
