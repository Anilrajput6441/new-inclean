import RevealOnScroll from "@/app/utils/RevealOnScroll";
import LazyVideo from "@/components/LazyVideo";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <RevealOnScroll direction="up" delay={0.3}>
      <section className="h-full w-full bg-[#F7F7F7] px-4 py-14 sm:px-8 sm:py-20 lg:px-20">
        <h1 className="lato-medium mb-2 border-b border-gray-400 pb-3 text-center text-4xl sm:text-6xl lg:pl-20 lg:text-left lg:text-[100px]">
          About us
        </h1>

        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 py-10 sm:py-14 lg:min-h-screen lg:grid-cols-[20%_45%_35%] lg:gap-0">
          <div className="w-full text-center text-xl lg:pt-10">
            <span className="border-b-1 px-3 ">Inclean </span>
            <br />
            <span className="text-sm ">We care about your air</span>
          </div>
          <div className="flex w-full flex-col gap-5 sm:gap-7 lg:p-4">
            <h2 className="lato-medium flex flex-wrap items-end justify-center gap-x-2 text-4xl font-semibold sm:text-5xl lg:justify-start">
              <span className="lato-bold inline-block lg:-ml-5 lg:rotate-270 lg:pt-10">
                WHO
              </span>
              <span className="lato-bold text-5xl sm:text-7xl lg:text-8xl">WE ARE?</span>
            </h2>
            <p className="leading-relaxed">
              Inclean is one of the trusted HVAC companies offering heating,
              ventilation, air-conditioning, cooling, and exhaust solutions to
              industrial, residential, commercial, and government bodies.
            </p>
            <p className="leading-relaxed">
              Founded around the growing need for high-quality indoor
              environments, Inclean focuses on fresh air, comfort, and reliable
              engineering. Our team designs and supplies axial flow fans,
              centrifugal blowers, fire rated fans, basement ventilation fans,
              fresh air units, and custom HVAC equipment.
            </p>
            <p className="leading-relaxed">
              We also undertake turnkey industrial and commercial exhaust and
              ventilation projects, backed by consulting, project analysis, and
              one-window engineering support.
            </p>
          </div>
          <div className="hidden h-full p-5 lg:flex">
            <LazyVideo
              src="/20250522_0248_Engineering Clean Air_simple_compose_01jvtbbzsnf5yshg80aag5ve6k.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full max-h-[760px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="flex min-h-[45vh] flex-col items-center justify-center gap-8 border-t border-gray-400 py-16 text-center sm:min-h-[55vh] lg:min-h-[70vh] lg:gap-10">
          <h2 className="max-w-[12ch] font-['Lato',sans-serif] text-[clamp(3rem,10vw,8rem)] font-light leading-[0.95] tracking-[-0.04em]">
            Let’s work together
          </h2>
          <Link
            href="/Contact"
            className="group relative overflow-hidden rounded-full bg-black px-8 py-3 text-lg text-white hover:text-black sm:px-12 sm:text-2xl"
          >
            <span className="relative z-10">Say Hello →</span>

            <span className="absolute z-12 inset-0 flex justify-center items-center bg-cyan-400 lato-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out rounded-full text-black">
              → Bonjour
            </span>
          </Link>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default AboutUs;
