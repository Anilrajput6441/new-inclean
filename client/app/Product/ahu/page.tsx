import React from "react";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Air Handling Units <br />{" "}
            <span className="text-3xl">The Heart of HVAC Systems</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[40vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/ahu unit.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem] rounded-3xl animate-float"
            />
          </div>
        </RevealOnScroll>
      </div>
      <section className=" py-10 px-4">
        <div className="max-w-5xl mx-auto ">
          <h1 className="text-5xl font-bold lato-medium  mb-6">
            Energy-Efficient Air Handling Unit (AHU)
          </h1>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-gray-700 mb-6">
              An <strong>Air Handling Unit (AHU)</strong> is a vital component
              of modern HVAC systems, designed to regulate and circulate air as
              part of the heating, ventilation, and air conditioning process.
              Our <strong>Energy-Efficient AHU</strong> models combine
              intelligent design, premium materials, and smart control systems
              to deliver optimal performance with minimal energy consumption.
              Whether you&apos;re managing air quality in a hospital, data
              center, office complex, or industrial facility, our AHUs provide
              clean, conditioned air while maintaining compliance with indoor
              air quality (IAQ) standards.
            </p>

            <p className="text-gray-700 mb-8">
              Built with flexibility and efficiency in mind, these AHUs support
              modular configurations, advanced filtration, and optional
              IoT-based monitoring for remote diagnostics. Their design ensures
              lower operational costs, reduced carbon footprint, and enhanced
              comfort — making them ideal for both new installations and
              retrofits.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Energy Efficiency
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  EC/IE5 efficiency class fans with variable speed drives.
                </li>
                <li>
                  Optimized air flow design to reduce pressure drops and energy
                  usage.
                </li>
                <li>
                  Integrated heat recovery wheels or plates for reclaiming
                  exhaust energy.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Coil Arrangement
              </h3>
              <p className="text-gray-700">
                Featuring a dual coil system suitable for complex applications
                such as precision cooling, humidity control, and energy
                recovery. These coils are designed to handle extreme climate
                variations and work efficiently under both partial and full
                loads.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold  mb-2">
                Customized Filtration
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Modular filtration with G4 to H14 grade filters (Pre, Fine,
                  HEPA).
                </li>
                <li>
                  Easy-access filter frames for quick maintenance and
                  replacement.
                </li>
                <li>
                  Optional UV-C light modules and activated carbon filters for
                  odor and pathogen control.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold  mb-2">
                Construction & Material
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Double-skin panels with galvanized steel and polyester powder
                  coating.
                </li>
                <li>
                  PUF or rockwool insulation (25–50mm) for thermal and acoustic
                  performance.
                </li>
                <li>
                  Available in horizontal and vertical layouts to suit any
                  installation site.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold  mb-2">
                Control & Monitoring
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Integrated BMS-compatible control panel with intuitive HMI.
                </li>
                <li>
                  Monitoring of temperature, humidity, airflow, and filter
                  status.
                </li>
                <li>
                  IoT-based dashboard for remote diagnostics and predictive
                  maintenance.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold  mb-2">
                Mounting & Configurations
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Floor-mounted and ceiling-suspended options for flexible
                  deployment.
                </li>
                <li>
                  Expandable modular design allows future upgrades without full
                  replacement.
                </li>
                <li>
                  Ideal for both indoor and outdoor installation with
                  weatherproofing options.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="h-[80vh]  w-[100vw]   flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] h-[80%] flex flex-col  justify-center items-center">
            <h1 className="text-6xl lato-medium text-center pt-10">
              Floor Mounted AHU{" "}
            </h1>
            <p className="text-2xl lato-medium text-center pt-10">
              Capacity Range:
              <br />
              1000 CFM to 12000 CFM
            </p>
            <Image
              src="/productimg/ahu21.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full md:h-[80%] w-full md:w-[80%] object-cover drop-shadow-[5rem] rounded-3xl animate-float"
            />
          </div>
          <div className="w-full md:w-[50%] h-[80%] flex flex-col  justify-center items-center">
            <h1 className="text-6xl lato-medium text-center pt-10">
              Floor Mounted AHU{" "}
            </h1>
            <p className="text-2xl lato-medium text-center pt-10">
              Capacity Range:
              <br />
              800 CFM to 8000 CFM
            </p>
            <Image
              src="/productimg/ahufloor.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full md:h-[80%] w-full md:w-[80%] object-cover drop-shadow-[5rem] rounded-3xl animate-float"
            />
          </div>
        </div>
      </RevealOnScroll>
      <div className=" max-w-6xl mx-auto text-lg px-4 py-10 mt-100 md:mt-0 text-gray-800">
        <h1 className="font-semibold lato-bold text-3xl text-black">
          Applications:
        </h1>
        <p className="mb-4 mt-5">
          Air Handling Units (AHUs) are critical for maintaining indoor air
          quality and thermal comfort. They&apos;re widely used in various
          environments:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Office Buildings:</strong> Clean, comfortable air for health
            and productivity.
          </li>
          <li>
            <strong>Hospitals:</strong> Sterile air with HEPA filters and
            climate control.
          </li>
          <li>
            <strong>Laboratories:</strong> Controlled conditions to prevent
            contamination.
          </li>
          <li>
            <strong>Industrial Facilities:</strong> Manage heat and pollutants
            efficiently.
          </li>
          <li>
            <strong>Cleanrooms:</strong> Ultra-clean air using HEPA/ULPA
            filtration.
          </li>
          <li>
            <strong>Data Centers:</strong> Heat and humidity control for
            equipment safety.
          </li>
          <li>
            <strong>Commercial Spaces:</strong> Consistent comfort in malls,
            airports, etc.
          </li>
        </ul>
        <p className="mt-4">
          AHUs are the backbone of HVAC systems in any setting that demands high
          air quality and environmental control.
        </p>
      </div>
    </div>
  );
};

export default page;
