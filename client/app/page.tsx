import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "HVAC & Industrial Ventilation Solutions in India",
  description:
    "Explore engineered HVAC, air handling, evaporative cooling, exhaust, ventilation, and air-quality solutions from Inclean Technologies.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
