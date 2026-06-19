import Link from "next/link";

const services = [
  "HVAC Design",
  "Air Handling Units",
  "Industrial Ventilation",
  "Evaporative Cooling",
  "Kitchen Exhaust",
  "Fume Extraction",
];

export default function HvacSeoContent() {
  return (
    <section
      aria-labelledby="hvac-solutions-heading"
      className="relative overflow-hidden bg-[#F7F7F7] px-4 py-14 sm:px-8 sm:py-20 lg:px-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-gray-300/70 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-24 h-44 w-44 rounded-full border border-gray-300/70 sm:h-64 sm:w-64"
      />

      <div className="relative mx-auto max-w-[1500px] border-y border-gray-300">
        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-20">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Engineered air solutions
              </div>

              <p className="mt-8 max-w-md text-lg leading-8 text-gray-600">
                From concept and equipment selection to installation and
                support, Inclean delivers practical HVAC systems for demanding
                spaces.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="border-b border-gray-300 py-3 text-sm text-gray-700 sm:text-base"
                >
                  <span className="mr-2 text-xs text-cyan-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-gray-300 lg:pl-16 xl:pl-24">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-700">
              HVAC company · Surat · India
            </p>

            <h2
              id="hvac-solutions-heading"
              className="mt-5 max-w-[13ch] font-['Lato',sans-serif] text-[clamp(2.75rem,8vw,6.5rem)] font-light leading-[0.92] tracking-[-0.055em]"
            >
              Better air,
              <br />
              built with
              <br />
              precision.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              Inclean Technologies is an HVAC contractor and ventilation
              company providing air handling units, industrial ventilation,
              evaporative cooling, exhaust systems and air-quality solutions
              for commercial and industrial projects across India.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/product"
                className="rounded-full bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-cyan-400 hover:text-black sm:text-base"
              >
                Explore products ↗
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black px-6 py-3 text-sm transition-colors hover:bg-black hover:text-white sm:text-base"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
