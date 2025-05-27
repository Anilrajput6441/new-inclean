import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Parking Ventilation Systems <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[40vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/parkvent.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem]"
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="parking-ventilation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lato-medium font-bold text-gray-800 mb-6">
            Parking Ventilation Systems
          </h2>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span>{" "}
              Residential Apartments / Commercial Complexes / Malls / IT Parks
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span> Basement
              & Enclosed Parking Ventilation System Design + Installation
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean was approached to design and implement robust
                ventilation systems for basement and enclosed parking areas
                where air quality can quickly deteriorate due to vehicle
                exhaust. We engineered a solution to ensure proper air
                circulation, removal of harmful gases like CO and NO₂, and
                compliance with fire and safety norms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  High buildup of vehicle exhaust gases in enclosed parking
                  zones
                </li>
                <li>Stagnant air, especially in large underground basements</li>
                <li>Fire and smoke evacuation compliance requirements</li>
                <li>
                  Limited natural ventilation due to underground architecture
                </li>
                <li>Need for 24/7 reliable operation with energy efficiency</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean deployed intelligent parking ventilation systems with a
                focus on air quality, fire safety, and operational
                cost-efficiency. Using both ducted and jet fan-based solutions,
                we ensured rapid extraction of exhaust gases and proper airflow
                distribution throughout the basement.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>CO Sensor Integration:</strong> Automatic activation
                  of fans based on gas levels
                </li>
                <li>
                  <strong>Jet Fans:</strong> Energy-efficient airflow without
                  ducting in large open spaces
                </li>
                <li>
                  <strong>Exhaust & Fresh Air Fans:</strong> Strategically
                  placed for effective push-pull ventilation
                </li>
                <li>
                  <strong>Fire Mode Operation:</strong> Integrated system to
                  assist smoke extraction during fire emergencies
                </li>
                <li>
                  <strong>Low Noise Design:</strong> Ideal for residential and
                  commercial buildings
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Maintained CO levels well within safety limits at all times
                </li>
                <li>Enhanced indoor air quality in enclosed parking zones</li>
                <li>Fire safety compliance (NBC, IS codes) achieved</li>
                <li>
                  Lower power consumption through sensor-based smart control
                </li>
                <li>Hassle-free operation with minimal maintenance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean brings engineering expertise and regulatory
                understanding to every parking ventilation project. Our systems
                are built for safety, reliability, and efficiency—whether
                you&apos;re managing a basement in a residential complex or a
                multilevel parking structure in a shopping mall. Trust us to
                keep your air clean, always.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
