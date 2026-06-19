import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Inclean Technologies",
  description:
    "Contact Inclean Technologies in Surat, Gujarat for HVAC, ventilation, cooling, exhaust, and industrial air-quality projects.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
