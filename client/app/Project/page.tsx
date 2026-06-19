"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomCursor from "@/app/utils/CustomCursorHover";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import { projects } from "@/data/siteContent";
const Page = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div className="h-[100vh] bg-[#F7F7F7] pt-35">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="lato-regular w-full md:w-[82%] pl-10 pt-30 md:pl-20  md:text-[128px]">
            Check Out our recent work
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="w-[300px] h-auto ml-10  md:ml-20 mt-15 md:mt-5">
            <svg
              viewBox="0 0 50 50"
              className="h-[50px] w-[50px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 12.5 25 28.5 41 12.5" />
              <path d="M9 23.5 25 39.5 41 23.5" />
            </svg>
          </div>
        </RevealOnScroll>
      </div>
      <div className="relative z-10 p-5 md:p-20  md:pt-40 bg-[#F7F7F7] pt-40 ">
        <CustomCursor active={isHovering} />
        <h1 className="lato-medium text-[40px] md:text-[60px]  text-center md:text-start md:pl-25 border-b-1  border-gray-400 mb-2">
          Work Gallery!
        </h1>
        <div className=" pt-10 flex flex-col gap-8">
          {[0, 2, 4, 6].map((start) => (
            <RevealOnScroll key={start} direction="up" delay={0.3}>
              <div className="w-full flex flex-col md:flex-row gap-8">
                {projects.slice(start, start + 2).map((project) => (
                  <Link
                    key={project.title}
                    href={project.href}
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
                        src={project.image}
                        alt={project.title}
                        height={600}
                        width={900}
                        loading="lazy"
                        className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h1 className="text-3xl pl-5">{project.title}</h1>
                    <p className="pl-5">{project.summary}</p>
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          ))}
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
    </>
  );
};

export default Page;
