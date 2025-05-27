import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {" "}
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Kitechen Exhaust Ventilation <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[40vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/kitchenvent.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem] rounded-3xl animate-float"
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="kitchen-exhaust-ventilation" className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold lato-medium  mb-6">
            Kitchen Exhaust Ventilation Systems
          </h2>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span> Commercial
              Kitchens / Hotels / Restaurants / Food Processing Units
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span>{" "}
              Commercial Kitchen Exhaust & Ventilation Design + Installation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean has successfully delivered high-performance kitchen
                exhaust ventilation systems for a wide range of commercial
                clients. From small restaurants to large hotel chains and
                industrial food preparation units, we ensure proper extraction
                of heat, smoke, grease-laden vapors, and odors—creating safe,
                compliant, and comfortable cooking environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Excessive heat and humidity inside commercial kitchen areas
                </li>
                <li>
                  Accumulation of grease and oil particles on walls, ceilings,
                  and ducts
                </li>
                <li>Unpleasant odors escaping into dining and common areas</li>
                <li>
                  Non-compliance with fire safety and ventilation standards
                  (FSSAI, NFPA, etc.)
                </li>
                <li>Risk of fire from improperly ventilated cooking fumes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean delivered complete kitchen ventilation systems
                customized to match each client’s layout and cooking volume. Our
                systems are built to maintain hygiene, reduce fire hazards, and
                meet all ventilation code requirements.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Stainless Steel Hoods:</strong> Grease filters and
                  canopy hoods tailored for different cooking stations
                </li>
                <li>
                  <strong>Ductwork Design:</strong> Fire-rated, grease-resistant
                  ducting with minimal bends for smooth airflow
                </li>
                <li>
                  <strong>Powerful Exhaust Fans:</strong> Sizing based on
                  kitchen load to remove smoke and vapors effectively
                </li>
                <li>
                  <strong>Make-Up Air Systems:</strong> Balanced fresh air
                  intake to improve ventilation efficiency
                </li>
                <li>
                  <strong>Access Panels & Cleanouts:</strong> For easy
                  inspection and regular cleaning
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Drastic reduction in heat, smoke, and odor inside kitchen
                  areas
                </li>
                <li>
                  Improved air quality and working conditions for chefs and
                  staff
                </li>
                <li>
                  Minimized fire risk due to proper grease filtration and
                  ducting
                </li>
                <li>
                  Compliance with FSSAI, NFPA, and local fire department
                  regulations
                </li>
                <li>Extended lifespan of kitchen interiors and equipment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean brings years of expertise in kitchen exhaust system
                design, combining functionality with safety and hygiene. From
                hotels and food courts to cloud kitchens and canteens, we help
                you meet fire safety norms while delivering reliable,
                low-maintenance ventilation systems that perform efficiently
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
