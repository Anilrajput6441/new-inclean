import type { Metadata } from "next";

export const siteConfig = {
  name: "Inclean Technologies",
  shortName: "Inclean",
  url: "https://www.inclean.in",
  description:
    "Inclean Technologies is an HVAC company and contractor in India providing HVAC design, air handling units, industrial ventilation, evaporative cooling, exhaust, installation, and service.",
  locale: "en_IN",
};

export function createMetadata({
  title,
  description,
  path,
  images = ["/incleanlogo.png"],
}: {
  title: string;
  description: string;
  path: string;
  images?: string[];
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
