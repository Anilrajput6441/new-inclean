import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[65vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Centralized Air Conditioning Systems <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[35vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/centvent.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem] rounded-3xl "
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="centralized-air-conditioning" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xlfont-bold lato-medium  mb-6">
            Centralized Air Conditioning Systems
          </h2>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span> Corporate
              Offices / Commercial Buildings / Industrial Facilities / Data
              Centers
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span> Central
              HVAC System Design, Supply & Installation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean was engaged by various clients requiring modern,
                energy-efficient centralized air conditioning systems for large
                commercial and industrial spaces. The goal was to ensure even
                temperature distribution, humidity control, and year-round
                comfort with minimal energy waste and low maintenance
                requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  High cooling demands due to large open spaces and equipment
                  heat loads
                </li>
                <li>
                  Uneven temperature distribution across multiple floors/zones
                </li>
                <li>Excessive energy consumption in older HVAC systems</li>
                <li>
                  Integration challenges with existing building management
                  systems (BMS)
                </li>
                <li>
                  Need for silent operation in office and work environments
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean designed and installed fully customized centralized air
                conditioning systems tailored to the structure, layout, and
                thermal load of each client’s facility. Our solutions focus on
                reliability, zoning efficiency, and sustainable energy usage.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Chiller & VRV/VRF Systems:</strong> Depending on the
                  application scale and cooling load
                </li>
                <li>
                  <strong>AHUs & FCUs:</strong> Air Handling Units and Fan Coil
                  Units for space-specific cooling
                </li>
                <li>
                  <strong>Duct Design & Air Distribution:</strong> Engineered
                  for minimal loss and maximum coverage
                </li>
                <li>
                  <strong>Thermostatic Zoning:</strong> Individual control
                  panels for energy optimization
                </li>
                <li>
                  <strong>Integrated Control Systems:</strong> BMS-ready for
                  automation and monitoring
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Balanced, comfortable indoor climate throughout the premises
                </li>
                <li>
                  Significant reduction in energy costs (up to 30% savings)
                </li>
                <li>
                  Low-noise operation and high user satisfaction in corporate
                  settings
                </li>
                <li>
                  Scalable and maintainable HVAC systems ready for future
                  expansion
                </li>
                <li>
                  Compliance with green building and energy efficiency standards
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean is a trusted partner for precision-engineered HVAC
                systems. Our centralized air conditioning projects are designed
                to deliver consistent comfort, reduce operational costs, and
                meet sustainability goals. With expert consultation, modern
                equipment, and end-to-end execution, we ensure cooling solutions
                that truly perform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
