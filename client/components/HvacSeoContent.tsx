import Link from "next/link";

const services = [
  "HVAC design and consulting",
  "Industrial ventilation systems",
  "Air handling units (AHU)",
  "Evaporative cooling systems",
  "Kitchen exhaust ventilation",
  "Fume and dust extraction",
  "Parking ventilation systems",
  "Fresh-air and exhaust systems",
];

export default function HvacSeoContent() {
  return (
    <section className="bg-[#F7F7F7] px-5 py-16 sm:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] gap-10 border-y border-gray-300 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            HVAC Company in India
          </p>
          <h2 className="max-w-3xl font-['Lato',sans-serif] text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            HVAC, ventilation and air-quality solutions engineered for real
            buildings
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Inclean Technologies is an HVAC contractor and ventilation company
            serving industrial, commercial, institutional and residential
            projects. From Surat, Gujarat, our team supports projects across
            India with HVAC system design, equipment selection, manufacturing,
            installation and service.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            For organizations comparing the best HVAC companies in India,
            practical engineering, equipment quality and service support matter
            more than a label. Businesses searching for a dependable HVAC
            company, AHU manufacturer, industrial ventilation contractor or
            exhaust-system specialist can work with one team from planning
            through commissioning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/product"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-cyan-500 hover:text-black"
            >
              Explore HVAC products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
            >
              Discuss your project
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Core HVAC services</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {services.map((service) => (
              <li
                key={service}
                className="border-b border-gray-300 py-3 text-gray-700"
              >
                {service}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-gray-600">
            Service coverage includes Surat, Gujarat and project locations
            across India.
          </p>
        </div>
      </div>
    </section>
  );
}
