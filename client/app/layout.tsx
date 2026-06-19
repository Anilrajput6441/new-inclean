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
    "HVAC company India",
    "industrial ventilation",
    "air handling units",
    "evaporative cooling",
    "exhaust systems",
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
