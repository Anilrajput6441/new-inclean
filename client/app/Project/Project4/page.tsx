import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Air Hangar Ventilation Systems <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[40vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/airvent.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem] rounded-3xl "
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="air-hangar-ventilation" className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold lato-medium text-gray-800 mb-6">
            Air Hangar Ventilation Systems
          </h2>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span> Aviation /
              Aerospace / Defense Facilities
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span>{" "}
              Large-Scale Hangar Ventilation Design & Implementation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean was chosen to provide custom-designed ventilation
                solutions for large-scale aircraft hangars used by aviation
                maintenance facilities, defense units, and aerospace companies.
                These vast, enclosed structures required high-capacity air
                handling to maintain safe working conditions while managing
                heat, fumes, and dust generated during aircraft servicing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Extremely large enclosed volumes requiring uniform air
                  circulation
                </li>
                <li>High heat buildup during aircraft servicing operations</li>
                <li>
                  Hazardous fumes from fuels, lubricants, and maintenance
                  activities
                </li>
                <li>
                  Need for rapid air exchange without compromising energy
                  efficiency
                </li>
                <li>Strict safety compliance (DGCA, MoD, ASHRAE standards)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean engineered and deployed a fully integrated ventilation
                system tailored to each hangar&apos;s structure and operation
                type. With advanced airflow simulation and industrial-grade
                components, we created systems that provide robust air
                circulation, fume extraction, and temperature control while
                minimizing energy use.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>High-Capacity Axial & Centrifugal Fans:</strong>{" "}
                  Designed for large air volume movement
                </li>
                <li>
                  <strong>Zoned Ventilation:</strong> Sectional airflow design
                  for multiple service bays
                </li>
                <li>
                  <strong>Fume Extraction Points:</strong> Targeted systems to
                  remove hazardous vapors at source
                </li>
                <li>
                  <strong>Natural + Mechanical Ventilation Hybrid:</strong> For
                  optimized performance and cost savings
                </li>
                <li>
                  <strong>Smart Monitoring Systems:</strong> Real-time control
                  over temperature, humidity, and air quality
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Safe, breathable environment for ground crew and technicians
                </li>
                <li>Compliance with aviation and defense safety norms</li>
                <li>Temperature drop of up to 8°C in peak summer conditions</li>
                <li>
                  Efficient air dilution to manage volatile chemical fumes
                </li>
                <li>
                  Low-maintenance, long-lasting ventilation infrastructure
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean understands the complexity and critical nature of air
                hangar ventilation. With a proven track record in high-volume
                airflow projects, we deliver custom-engineered systems that
                ensure safety, reliability, and energy efficiency. Whether for
                military or civil aviation needs, we offer solutions that scale
                with your operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
