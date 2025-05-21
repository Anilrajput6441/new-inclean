import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";

const AboutUs = () => {
  return (
    <RevealOnScroll direction="up" delay={0.3}>
      <div className=" bg-[#F7F7F7] w-full h-full pt-10 px-9 md:px-20">
        <h1 className="lato-medium text-[40px] md:text-[100px]  text-center md:text-start md:pl-20 border-b-1  border-gray-400 mb-2">
          About us
        </h1>

        <div className="flex flex-col md:flex-row w-full h-screen">
          <div className="w-full md:w-[20%] h-full text-xl pt-10 text-center">
            <span className="border-b-1 px-3 ">Inclean </span>
            <br />
            <span className="text-sm ">Catch Beathe</span>
          </div>
          <div className="w-full md:w-[45%] h-full  flex flex-col gap-8 md:p-4">
            <h1 className="lato-medium text-4xl font-semibold ">
              <span className="lato-bold  transform rotate-270 md:-ml-5 pt-10 inline-block">
                WHO
              </span>
              <span className="lato-bold text-5xl md:text-8xl">WE ARE ?</span>
            </h1>
            <p>
              The harsh climate and fast-growing need for quality indoor
              environment serve as the foundation behind INCLEAN. One of the
              region&apos;s leading HVAC (Heating, Ventilation and Air
              Conditioning) solution provider to commercial, industrial and
              government bodies across India and Beyond
            </p>
            <p>
              INCLEAN excels in the field of Air Engineering, we have expertise
              in field Air engineering like designing & supplying of industrial
              / commercial Axial Flow Fans, Centrifugal Blowers, Fire Rated
              Fans, Basement Ventilation fans & Fresh Air units. Apart from
              these products, we also undertake turnkey projects in the field of
              Industrial / Commercial exhaust &Ventilation Systems
            </p>
            <p>
              INCLEAN is providing a complete engineering solutions in the field
              of ventilation and exhaust and also providing the extensive
              consulting after analyzing project with proper one window
              solution. We specialize in custom built HVAC Equipment
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
        <div className="h-[70vh] flex flex-col justify-center items-center gap-10 border-t-1 border-gray-400">
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
