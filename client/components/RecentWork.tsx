"use Client";
import React from "react";

import Image from "next/image";
import { useState } from "react";
import CustomCursor from "@/app/utils/CustomCursorHover";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Link from "next/link";
import { projects } from "@/data/siteContent";

const RecentWork = () => {
  const [isHovering, setIsHovering] = useState(false);
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="relative z-10 p-5 md:p-20 bg-[#F7F7F7] pt-20">
      <CustomCursor active={isHovering} />
      <h1 className="lato-medium text-[40px] md:text-[60px]  text-center md:text-start md:pl-25 border-b-1  border-gray-400 mb-2">
        Work Gallery!
      </h1>
      <div className=" pt-10 flex flex-col gap-8">
        {[0, 2].map((start) => (
          <RevealOnScroll key={start} direction="up" delay={0.3}>
            <div className="w-full flex flex-col md:flex-row gap-8">
              {featuredProjects.slice(start, start + 2).map((project) => (
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
      <div className="mt-5 md:mt-0 w-full flex justify-center  items-center">
        <Link
          href="/Project"
          className="relative  overflow-hidden px-12 py-3  lato-medium text-[24px] rounded-full lato-medium bg-black text-white  hover:text-black group "
        >
          <span className="relative z-10">View all work →</span>

          <span className="absolute z-12 inset-0 flex justify-center items-center bg-cyan-400 lato-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out rounded-full text-black">
            → Click to view
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
