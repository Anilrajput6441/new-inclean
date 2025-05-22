"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import CustomCursor from "@/app/utils/CustomCursorHover";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
const Page = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="relative z-10 p-5 md:p-20  md:pt-40 bg-[#F7F7F7] pt-40 ">
      <CustomCursor active={isHovering} />
      <h1 className="lato-medium text-[40px] md:text-[100px]  text-center md:text-start md:pl-25 border-b-1  border-gray-400 mb-2">
        Work Gallery!
      </h1>
      <div className=" pt-10 flex flex-col gap-8">
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div
              className="w-full md:w-1/2 h-full md:h-[80vh] rounded-2xl overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2x pb-2">
                <Image
                  src="/projectimg/industry.png"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h1 className="text-3xl pl-5">Industrial Ventilation System</h1>
              <p className="pl-5">
                Advanced systems to control air quality, temperature, and
                humidity in large industrial spaces
              </p>
            </div>

            <div
              className="w-full md:w-1/2 h-full md:h-[80vh]  rounded-2xl overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2xl pb-2">
                <Image
                  src="/projectimg/kitchensystem.png"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full  rounded-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h1 className="text-3xl pl-5">Kitchen Exhaust Ventilation</h1>
              <p className="pl-5">
                Removes grease, smoke, and odors from commercial kitchens for a
                clean and compliant setup.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="w-full flex flex-col md:flex-row gap-8 ">
            <div
              className="w-full md:w-1/2 h-full md:h-[80vh] rounded-2xl overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2xl pb-2">
                <Image
                  src="/projectimg/cetralizedimg.jpeg"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full  rounded-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h1 className="text-3xl pl-5">Centralized Air Conditioning</h1>
              <p className="pl-5">
                Reliable cooling and heating system for multi-zone temperature
                control across large buildings.
              </p>
            </div>
            <div
              className="w-full md:w-1/2 h-full md:h-[80vh] overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2xl pb-2">
                <Image
                  src="/projectimg/aircrraft.png"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full  rounded-2xl transition-transform duration-500 hover:scale-110 "
                />
              </div>
              <h1 className="text-3xl pl-5">Aircraft Hanger Ventilation</h1>
              <p className="pl-5">
                Custom ventilation systems for large hangars to handle high air
                volumes and ensure safe operations.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="w-full flex flex-col md:flex-row gap-8 ">
            <div
              className="w-full md:w-1/2 h-full md:h-[80vh] rounded-2xl overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2xl pb-2">
                <Image
                  src="/projectimg/parking.png"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full  rounded-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h1 className="text-3xl pl-5">Parking Ventilation</h1>
              <p className="pl-5">
                Reliable cooling and heating system for multi-zone temperature
                control across large buildings.
              </p>
            </div>
            <div
              className="w-full md:w-1/2 h-full md:h-[80vh] overflow-hidden lato-medium"
              onMouseEnter={() => {
                setIsHovering(true);
                document.body.style.cursor = "none";
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                document.body.style.cursor = "auto";
              }}
            >
              <div className="overflow-hidden h-[80%] rounded-2xl pb-2">
                <Image
                  src="/projectimg/lift1.png"
                  alt="industry"
                  height={300}
                  width={300}
                  className="h-full w-full  rounded-2xl transition-transform duration-500 hover:scale-110 "
                />
              </div>
              <h1 className="text-3xl pl-5">Lift-well Pressurization</h1>
              <p className="pl-5">
                Maintains positive pressure in lift shafts to prevent smoke
                ingress during fire emergencies.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      {/* <div className="mt-5 md:mt-0 w-full flex justify-center items-center">
        <button className="relative overflow-hidden px-12 py-3  lato-medium text-[24px] rounded-full lato-medium bg-black text-white  hover:text-black group ">
          <span className="relative z-10">View all work →</span>

          <span className="absolute z-12 inset-0 flex justify-center items-center bg-cyan-400 lato-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out rounded-full text-black">
            → Click to view
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default Page;
