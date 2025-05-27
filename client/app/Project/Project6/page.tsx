import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]  pt-15 flex flex-col md:flex-row">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular  w-full h-full md:w-[60vw] pl-10 pt-30 md:pl-20  md:text-[108px]">
            Lift Well Pressurization Systems <br />{" "}
            {/* <span className="text-3xl">The Heart of HVAC Systems</span> */}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-full md:w-[42vw] h-full flex p-15 justify-center items-center">
            <Image
              src="/productimg/liftwellven.png"
              width={200}
              height={200}
              alt="Cool animation"
              className="h-full w-full object-cover drop-shadow-[5rem] "
            />
          </div>
        </RevealOnScroll>
      </div>
      <section id="lift-well-pressurization" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lato-medium font-bold text-gray-800 mb-6">
            Lift Well Pressurization Systems
          </h2>

          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">Client Industry:</span> High-Rise
              Buildings / Hospitals / Hotels / Malls / IT Parks
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Pan India
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Category:</span> Fire
              Safety Ventilation & Pressurization Systems
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Project Overview
              </h3>
              <p className="text-gray-600">
                InClean was commissioned to install lift well pressurization
                systems in high-rise buildings where occupant safety and fire
                code compliance are critical. These systems are designed to
                prevent smoke from entering lift shafts during a fire, enabling
                safe evacuation and access for emergency responders.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Challenge
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Maintaining positive air pressure inside lift shafts during
                  fire events
                </li>
                <li>
                  Preventing smoke ingress from multiple entry points (lobbies,
                  doors, etc.)
                </li>
                <li>
                  Balancing pressure without interfering with elevator door
                  function
                </li>
                <li>Adhering to NBC and NFPA fire safety standards</li>
                <li>Integration with building fire alarm systems and BMS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                InClean designed and executed an intelligent lift well
                pressurization solution that activates automatically in the
                event of a fire. Our system maintains a controlled overpressure
                inside the shaft using industrial-grade fans, dampers, and
                pressure relief mechanisms, ensuring both performance and safety
                compliance.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>High Static Pressure Blowers:</strong> Engineered for
                  rapid pressurization
                </li>
                <li>
                  <strong>Motorized Dampers:</strong> Automated airflow
                  regulation for pressure stability
                </li>
                <li>
                  <strong>Pressure Relief Dampers:</strong> Prevents
                  over-pressurization beyond code limits
                </li>
                <li>
                  <strong>Fire Alarm Integration:</strong> System activates upon
                  fire signal trigger
                </li>
                <li>
                  <strong>Low Noise Operation:</strong> Minimally intrusive in
                  commercial/residential settings
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                The Results
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Ensured smoke-free lift shafts for safe evacuation and rescue
                  access
                </li>
                <li>Fully compliant with NBC, IS, and NFPA standards</li>
                <li>
                  Seamless coordination with fire alarms and emergency protocols
                </li>
                <li>Reliable performance during safety drills and audits</li>
                <li>Long-lasting infrastructure with minimal maintenance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Why InClean?
              </h3>
              <p className="text-gray-600">
                InClean specializes in life safety systems tailored for modern
                structures. Our lift well pressurization solutions are trusted
                by builders, safety engineers, and facility managers across
                India. From design to commissioning, we deliver compliant,
                efficient, and robust systems that prioritize occupant
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
