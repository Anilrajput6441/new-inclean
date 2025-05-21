import RevealOnScroll from "@/app/utils/RevealOnScroll";
import React from "react";
// import Image from "next/image";

const Strategy = () => {
  return (
    <div>
      <h1 className="flex flex-col lato-regular2 text-center p-1 pt-10 bg-[#F7F7F7]">
        <RevealOnScroll direction="up" delay={0.2}>
          Our Strategy
        </RevealOnScroll>
      </h1>

      <div className="flex  w-full  bg-[#F7F7F7] md:p-5 pt-10 md:pt-40">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="w-full md:w-1/2 pt-10  h-full ">
              <h1 className="lato-light text-[32px] px-5 md:pl-10">
                Designing & Planning
              </h1>
              <p className="lato-medium text-[22px] p-5 md:pt-5 md:pl-10 ">
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
            <div className="w-full md:w-1/2 h-full p-2 ">
              <video
                src="/strategydata/Untitled design (2).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl "
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="flex w-full bg-[#F7F7F7] md:p-5 pt-10 md:pt-40">
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full p-2">
              <video
                src="/strategydata/Untitled design (3).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 pt-10 h-full">
              <h1 className="lato-light text-[32px] px-5 md:pl-10">
                Equipment Planning and Selection
              </h1>
              <p className="lato-medium text-[22px] p-5 md:pt-5 md:pl-10">
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

      <div className="flex w-full bg-[#F7F7F7] md:p-5 pt-10 md:pt-40">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 pt-10 h-full">
              <h1 className="lato-light text-[32px] px-5 md:pl-10">
                Installation and Service Support
              </h1>
              <p className="lato-medium text-[22px] p-5 md:pt-5 md:pl-10">
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
            <div className="w-full md:w-1/2 h-full p-2">
              <video
                src="/strategydata/Untitled design (4).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Strategy;
