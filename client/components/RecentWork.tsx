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
    <section className="relative z-10 bg-[#F7F7F7] px-4 py-14 sm:px-8 sm:py-20 lg:p-20">
      <CustomCursor active={isHovering} />
      <h1 className="lato-medium mb-2 border-b border-gray-400 pb-3 text-center text-4xl sm:text-5xl lg:pl-25 lg:text-left lg:text-[60px]">
        Work Gallery!
      </h1>
      <div className="flex flex-col gap-10 pt-8 sm:pt-10 lg:gap-8">
        {[0, 2].map((start) => (
          <RevealOnScroll key={start} direction="up" delay={0.3}>
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
              {featuredProjects.slice(start, start + 2).map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="lato-medium group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl lg:h-[80vh]"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    if (window.matchMedia("(hover: hover)").matches) {
                      document.body.style.cursor = "none";
                    }
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    document.body.style.cursor = "auto";
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:h-[80%] lg:aspect-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      height={600}
                      width={900}
                      loading="lazy"
                      className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="px-2 pt-4 text-2xl sm:text-3xl">{project.title}</h2>
                  <p className="px-2 pt-1 leading-relaxed">{project.summary}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <div className="mt-12 flex w-full items-center justify-center lg:mt-16">
        <Link
          href="/Project"
          className="group relative overflow-hidden rounded-full bg-black px-8 py-3 text-lg text-white hover:text-black sm:px-12 sm:text-2xl"
        >
          <span className="relative z-10">View all work →</span>

          <span className="absolute z-12 inset-0 flex justify-center items-center bg-cyan-400 lato-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out rounded-full text-black">
            → Click to view
          </span>
        </Link>
      </div>
    </section>
  );
};

export default RecentWork;
