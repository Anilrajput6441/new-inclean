import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Industrial Fume Extraction Systems",
  description:
    "Source-capture fume extraction systems for welding fumes, industrial pollutants, dust, and airborne contaminants.",
  path: "/project/project7",
  images: ["/wp-content/uploads/2020/06/Welding_NEX_HD-2.jpg"],
});

const page = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-[100vh] w-[100vw] pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular w-full h-full md:w-[55vw] pl-10 pt-30 md:pl-20 md:text-[108px]">
            Fume Extraction System
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[45vw] h-full flex p-10 justify-center items-center">
            <Image
              src="/wp-content/uploads/2020/06/Welding_NEX_HD-2.jpg"
              width={800}
              height={600}
              alt="Fume extraction system"
              loading="lazy"
              className="h-full w-full object-cover drop-shadow-[5rem] rounded-3xl"
            />
          </div>
        </RevealOnScroll>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold lato-medium mb-6">
            Fume Extraction System
          </h1>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span>{" "}
              Manufacturing / Welding / Engineering / Fabrication
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span> Fume
              Extraction Design & Installation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                Inclean provides customized fume extraction systems designed to
                match Indian and international standards. These clean air
                solutions are easy to use and can be configured for different
                applications where fumes and airborne pollutants need to be
                captured at the source.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Welding fumes and airborne contaminants near operators</li>
                <li>Poor visibility and unhealthy air in production zones</li>
                <li>Need for source capture without disrupting workflow</li>
                <li>Compliance with air quality and worker safety standards</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                Inclean designs fume extraction systems based on each process,
                layout, and contaminant load. The solution can include capture
                hoods, extraction arms, ducting, filtration, fans, and clean air
                discharge.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Source-capture extraction at critical emission points</li>
                <li>Efficient duct layouts for steady airflow</li>
                <li>Filtration suitable for industrial fumes and dust</li>
                <li>Custom sizing for each shop floor or process line</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why Inclean?
              </h3>
              <p className="text-gray-600">
                Inclean is a one-stop solution for fume extraction system
                manufacturing, design, and installation. Each system is planned
                around the site&apos;s practical requirements so teams get safer
                air without compromising productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
