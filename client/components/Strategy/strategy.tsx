import RevealOnScroll from "@/app/utils/RevealOnScroll";
import LazyVideo from "@/components/LazyVideo";
import React from "react";
// import Image from "next/image";

const Strategy = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-14 sm:px-8 sm:py-20 lg:px-5 lg:py-24">
      <h1 className="flex flex-col text-center font-['Lato',sans-serif] text-5xl font-normal leading-none sm:text-7xl lg:text-8xl xl:text-[8rem]">
        <RevealOnScroll direction="up" delay={0.2}>
          Our Strategy
        </RevealOnScroll>
      </h1>

      <div className="mx-auto flex w-full max-w-[1600px] pt-14 lg:pt-32">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-10">
            <div className="h-full w-full lg:w-1/2 lg:pt-10">
              <h2 className="lato-light text-2xl sm:text-3xl lg:pl-10 lg:text-[32px]">
                Designing & Planning
              </h2>
              <p className="lato-medium pt-4 text-base leading-relaxed sm:text-lg lg:pl-10 lg:pt-5 lg:text-[22px]">
                We create customized HVAC designs that ensure efficient airflow,
                energy savings, and long-term performance—tailored to meet every
                project&apos;s unique needs. Our planning process blends
                innovative engineering with practical solutions, focusing on
                system efficiency, layout optimization, and future scalability.
                From initial concept to execution, we design with precision to
                deliver reliable and high-performing HVAC systems for any
                environment.
              </p>
            </div>
            <div className="h-full w-full lg:w-1/2">
              <LazyVideo
                src="/strategydata/Untitled design (2).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] pt-20 lg:pt-32">
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
            <div className="h-full w-full lg:w-1/2">
              <LazyVideo
                src="/strategydata/Untitled design (3).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="h-full w-full lg:w-1/2 lg:pt-10">
              <h2 className="lato-light text-2xl sm:text-3xl lg:pl-10 lg:text-[32px]">
                Equipment Planning and Selection
              </h2>
              <p className="lato-medium pt-4 text-base leading-relaxed sm:text-lg lg:pl-10 lg:pt-5 lg:text-[22px]">
                We meticulously plan and select equipment tailored to the
                specific requirements of each project. Our focus is on choosing
                compact, high-performance machinery that ensures maximum
                efficiency, reliability, and optimal use of space. Every
                selection is made to enhance operational workflow, reduce
                downtime, and support long-term project success.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] pt-20 lg:pt-32">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-10">
            <div className="h-full w-full lg:w-1/2 lg:pt-10">
              <h2 className="lato-light text-2xl sm:text-3xl lg:pl-10 lg:text-[32px]">
                Installation and Service Support
              </h2>
              <p className="lato-medium pt-4 text-base leading-relaxed sm:text-lg lg:pl-10 lg:pt-5 lg:text-[22px]">
                Our experienced team guarantees seamless installation of all
                equipment, adhering to the highest standards of safety and
                precision. We go beyond just setup — offering comprehensive
                after-sales support to ensure systems continue to perform at
                their best over time. From initial calibration to routine
                maintenance and technical assistance, our goal is to maximize
                uptime, enhance operational reliability, and provide peace of
                mind throughout the equipment’s lifecycle.
              </p>
            </div>
            <div className="h-full w-full lg:w-1/2">
              <LazyVideo
                src="/strategydata/Untitled design (4).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Strategy;
