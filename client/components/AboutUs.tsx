import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";

const AboutUs = () => {
  return (
    <RevealOnScroll direction="up" delay={0.3}>
      <div className=" bg-[#F7F7F7] w-full h-full pt-10 px-9 md:px-20">
        <h1 className="lato-medium text-[40px] md:text-[100px]  text-center md:text-start md:pl-20 border-b-1  border-gray-400 mb-2">
          About us
        </h1>

        <div className="flex flex-col md:flex-row w-full mb-15 md:mb-0 h-screen">
          <div className="w-full md:w-[20%] h-full text-xl pt-10 text-center">
            <span className="border-b-1 px-3 ">Inclean </span>
            <br />
            <span className="text-sm ">We care about your air</span>
          </div>
          <div className="w-full md:w-[45%] h-full  flex flex-col gap-8 md:p-4">
            <h1 className="lato-medium text-4xl font-semibold ">
              <span className="lato-bold  transform rotate-270 md:-ml-5 pt-10 inline-block">
                WHO
              </span>
              <span className="lato-bold text-5xl md:text-8xl">WE ARE ?</span>
            </h1>
            <p>
              Inclean is one of the trusted HVAC companies offering heating,
              ventilation, air-conditioning, cooling, and exhaust solutions to
              industrial, residential, commercial, and government bodies.
            </p>
            <p>
              Founded around the growing need for high-quality indoor
              environments, Inclean focuses on fresh air, comfort, and reliable
              engineering. Our team designs and supplies axial flow fans,
              centrifugal blowers, fire rated fans, basement ventilation fans,
              fresh air units, and custom HVAC equipment.
            </p>
            <p>
              We also undertake turnkey industrial and commercial exhaust and
              ventilation projects, backed by consulting, project analysis, and
              one-window engineering support.
            </p>
          </div>
          <div className="w-[35%] hidden md:flex h-full p-5">
            <video
              src="/20250522_0248_Engineering Clean Air_simple_compose_01jvtbbzsnf5yshg80aag5ve6k.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-2xl "
            />
          </div>
        </div>
        <div className="h-[50vh] md:h-[70vh]   flex flex-col justify-center items-center gap-10 border-t-1 border-gray-400">
          <h1 className="lato-regular">Let’s work together</h1>
          <button className="relative overflow-hidden px-12 py-3  lato-medium text-[24px] rounded-full lato-medium bg-black text-white  hover:text-black group ">
            <span className="relative z-10">Say Hello →</span>

            <span className="absolute z-12 inset-0 flex justify-center items-center bg-cyan-400 lato-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out rounded-full text-black">
              → Bonjour
            </span>
          </button>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default AboutUs;
