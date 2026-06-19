import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Best HVAC Contractor & HVAC Company in India | Inclean",
  description:
    "Inclean is an HVAC company and contractor in India offering HVAC design, AHU manufacturing, industrial ventilation, evaporative cooling, exhaust, installation, and service.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
