import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import RevealOnScroll from "./utils/RevealOnScroll";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | HVAC & Ventilation Solutions`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "best HVAC company in India",
    "best HVAC contractor in India",
    "HVAC contractor India",
    "HVAC company India",
    "HVAC company in Surat",
    "HVAC contractor Surat",
    "HVAC company Gujarat",
    "HVAC contractor Gujarat",
    "commercial HVAC company",
    "industrial HVAC contractor",
    "HVAC consultants India",
    "HVAC system design",
    "HVAC installation services",
    "HVAC maintenance services",
    "industrial ventilation",
    "industrial ventilation company",
    "industrial ventilation contractor",
    "factory ventilation system",
    "warehouse ventilation system",
    "air handling units",
    "air handling unit manufacturer",
    "AHU manufacturer India",
    "custom AHU manufacturer",
    "fan coil unit manufacturer",
    "fresh air unit manufacturer",
    "evaporative cooling",
    "evaporative cooling unit manufacturer",
    "industrial air cooler manufacturer",
    "air washer unit manufacturer",
    "exhaust systems",
    "industrial exhaust system",
    "kitchen exhaust ventilation",
    "commercial kitchen exhaust",
    "fume extraction system",
    "dust extraction system",
    "wet scrubber manufacturer",
    "dry scrubber manufacturer",
    "parking ventilation system",
    "basement ventilation system",
    "lift well pressurization",
    "smoke extraction system",
    "axial flow fan manufacturer",
    "centrifugal blower manufacturer",
    "HVLS fan supplier",
    "air quality solutions",
    "HVAC Surat",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/incleanlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/incleanlogo.png`,
    image: `${siteConfig.url}/incleanlogo.png`,
    email: "info@inclean.in",
    telephone: "+91-9871348767",
    address: {
      "@type": "PostalAddress",
      streetAddress: "166, Ground Floor, Godadara Road",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395210",
      addressCountry: "IN",
    },
    areaServed: "India",
    priceRange: "$$",
    knowsAbout: [
      "HVAC design",
      "Industrial ventilation",
      "Air handling units",
      "Evaporative cooling",
      "Kitchen exhaust ventilation",
      "Fume extraction",
      "Parking ventilation",
      "Air pollution control",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC and Ventilation Services",
      itemListElement: [
        "HVAC Design and Consulting",
        "Air Handling Unit Manufacturing",
        "Industrial Ventilation Systems",
        "Evaporative Cooling Systems",
        "Kitchen Exhaust Systems",
        "Fume and Dust Extraction",
        "HVAC Installation and Service",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        },
      })),
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased bg-[#F7F7F7]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <RevealOnScroll direction="up" delay={0.2}>
          <Header />
        </RevealOnScroll>
        {children}
        <Footer />
      </body>
    </html>
  );
}
