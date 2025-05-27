import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Evaporation Cooling Unit <br />{" "}
            <span className="text-3xl">The Heart of HVAC Systems</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[40vw] h-full pt-25 flex  justify-center items-center">
            <Image
              src="/productimg/ecudouble.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-70 md:h-90 w-full object-cover drop-shadow-[5rem] rounded-3xl animate-float"
            />
          </div>
        </RevealOnScroll>
      </div>
      <div className="border-t-1 w-[90%] mx-auto border-gray-400"></div>
      <section className="py-10 px-4">
        <div className="  max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold lato-medium mb-6">
            Single-Stage Evaporative Cooling Unit (Air Washer)
          </h1>
          <div className="flex  justify-center items-center ">
            <Image
              src="/productimg/ecudouble.png"
              width={600}
              height={200}
              alt="Evaporative Cooling Unit"
              className="w-[40%] h-[40%] object-cover rounded-lg"
            />
          </div>

          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-gray-700 mb-6">
              A <strong>Single-Stage Evaporative Cooling Unit</strong>, commonly
              referred to as an <strong>Air Washer</strong>, is a highly
              efficient and environmentally friendly system that leverages the
              natural process of water evaporation to cool and ventilate air.
              Ideal for industrial plants, warehouses, workshops, and commercial
              settings, this system delivers high volumes of fresh air with low
              energy input and no chemical refrigerants.
            </p>

            <p className="text-gray-700 mb-8">
              Designed for maximum cooling performance and long-term
              reliability, our air washers feature rugged construction, smart
              water distribution, and low-maintenance operation. With airflow
              capacities ranging from 2,000 to 180,000 CFM, they are suitable
              for a wide range of applications requiring dependable, sustainable
              cooling.
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
                Capacity Range
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>2000 CFM to 180000 CFM</li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Efficient Cooling Performance
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Achieves 8–12°C temperature drop through natural evaporation.
                </li>
                <li>
                  High-performance cellulose pads for enhanced moisture
                  retention and durability.
                </li>
                <li>
                  Delivers consistent cooling without compressors or
                  refrigerants.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Robust Construction
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Powder-coated or galvanized steel casing for corrosion
                  resistance.
                </li>
                <li>
                  Single-skin or double-skin options based on application needs.
                </li>
                <li>
                  Weather-resistant design suitable for rooftop and ground
                  installations.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                High Airflow Capacity
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Available with axial or centrifugal fans for optimal air
                  distribution.
                </li>
                <li>Low-pressure drop design reduces fan power consumption.</li>
                <li>
                  Designed to handle large spaces with high ventilation demands.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Water Distribution System
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  PVC or stainless-steel spray headers for uniform water flow.
                </li>
                <li>
                  Efficient wetting of pads ensures consistent cooling
                  performance.
                </li>
                <li>
                  Includes sump tank with auto water level controller and drain
                  outlet.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Ease of Maintenance
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Large access panels for easy cleaning and inspection.</li>
                <li>
                  Optional washable or pre-filters for dust and particulate
                  control.
                </li>
                <li>
                  Simplified components reduce downtime and maintenance effort.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Eco-Friendly Operation
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Uses water as the cooling medium – no refrigerants or
                  chemicals involved.
                </li>
                <li>
                  Significantly lower operating costs and power consumption.
                </li>
                <li>
                  Supports sustainable design and green building initiatives.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold lato-medium mb-6">
            Double-Stage Evaporative Cooling Unit (Air Washer)
          </h1>
          <div className="flex  justify-center items-center ">
            <Image
              src="/productimg/ecudoublestage.png"
              width={600}
              height={200}
              alt="Evaporative Cooling Unit"
              className="w-[40%] h-[40%] object-cover rounded-lg"
            />
          </div>

          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-gray-700 mb-6">
              Our <strong>Double-Stage Evaporative Cooling Unit</strong> is an
              advanced, energy-efficient air cooling solution that combines both
              indirect and direct evaporative processes. Designed for large
              industrial and commercial spaces, this system delivers lower
              temperatures with better humidity control—offering superior
              performance over traditional and single-stage cooling units.
            </p>

            <p className="text-gray-700 mb-8">
              With no refrigerants or compressors involved, it ensures
              eco-friendly operation and minimal energy consumption. The unit is
              built for durability and high airflow, making it ideal for
              facilities requiring consistent thermal comfort, even in
              moderately humid climates.
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
                Two-Stage Cooling Process
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Stage 1 - Indirect Cooling:</strong> Air is first
                  cooled via a heat exchanger without adding moisture, keeping
                  humidity in check.
                </li>
                <li>
                  <strong>Stage 2 - Direct Cooling:</strong> Pre-cooled air then
                  passes through wetted cellulose pads for further temperature
                  reduction.
                </li>
                <li>
                  Enables more precise control of air conditions compared to
                  single-stage systems.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Superior Cooling Efficiency
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Achieves higher temperature drops (up to 12–18°C) depending on
                  ambient conditions.
                </li>
                <li>
                  Provides enhanced thermal comfort with lower indoor humidity.
                </li>
                <li>
                  Ideal for areas with moderately humid climates where
                  conventional systems underperform.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Energy Saving & Eco-Friendly
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Functions without refrigerants or compressors—just water and
                  air.
                </li>
                <li>
                  Consumes significantly less power than traditional HVAC
                  systems.
                </li>
                <li>
                  Supports sustainable, low-carbon cooling for green buildings.
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold lato-bold mb-2">
                Durable Construction
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Built with galvanized or powder-coated steel for corrosion
                  resistance.
                </li>
                <li>
                  Optional double-skin panels with PUF or rockwool insulation
                  for enhanced thermal and acoustic performance.
                </li>
                <li>
                  Modular and scalable design simplifies installation and future
                  expansion.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default page;
