import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[50vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Industrial Ventilation Systems <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[50vw] h-full flex  justify-center items-center">
            <Image
              src="/productimg/indven.png"
              width={700}
              height={730}
              alt="Cool animation"
              className="h-full border-2 w-full object-cover drop-shadow-[25rem] rounded-3xl "
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="industrial-ventilation-project">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold lato-medium  mb-6">
            Industrial Ventilation Systems
          </h1>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span>{" "}
              Manufacturing / Engineering / Heavy Industry
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span> Industry
              Ventilation System Design & Installation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean was contracted by multiple industrial clients to assess
                and address critical air quality issues in their production
                facilities. These environments faced challenges including
                airborne dust, chemical fumes, high humidity, and inadequate air
                circulation. The goal was to implement robust, custom-designed
                ventilation systems that would ensure compliance, improve
                working conditions, and enhance overall facility efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  High levels of dust, fumes, and mist in production zones
                </li>
                <li>
                  Poor airflow and temperature regulation in enclosed areas
                </li>
                <li>Increased health risks and discomfort for workers</li>
                <li>
                  Difficulty meeting health and safety standards (OSHA, ISO,
                  etc.)
                </li>
                <li>
                  Frequent equipment failures due to airborne contaminants
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean delivered a complete, end-to-end ventilation system
                tailored to each facility&apos;s layout and air quality
                requirements. We combined both general and local exhaust
                solutions to create a balanced, efficient airflow system that
                tackled pollutants at the source and improved the entire working
                environment.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Local Exhaust Ventilation (LEV):</strong>{" "}
                  Source-capture systems at critical emission points
                </li>
                <li>
                  <strong>General Ventilation:</strong> For temperature and
                  humidity control across large spaces
                </li>
                <li>
                  <strong>Filtration Units:</strong> Multi-stage filters and
                  scrubbers for clean air discharge
                </li>
                <li>
                  <strong>Smart Controls:</strong> Real-time airflow and air
                  quality monitoring
                </li>
                <li>
                  <strong>Energy-Efficient Fans & Ducting:</strong> Optimized
                  for low power consumption and high performance
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Up to <strong>70% improvement</strong> in indoor air quality
                </li>
                <li>Reduction in respiratory complaints and worker fatigue</li>
                <li>Lower maintenance costs and extended equipment lifespan</li>
                <li>
                  Compliance with national and international safety regulations
                </li>
                <li>Improved comfort and morale across all facility staff</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean is trusted for its deep understanding of environmental
                control in industrial settings. Our team of engineers,
                technicians, and support staff ensure each solution is not just
                installed, but optimized for long-term performance. With a
                commitment to quality, compliance, and service, InClean
                continues to set the standard for industrial ventilation across
                India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
