"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import RecentWork from "@/components/RecentWork";
import { contactInfo } from "@/data/siteContent";

const page = () => {
  return (
    <div className="pt-40 pb-10 bg-[#F7F7F7] flex flex-col justify-center items-center">
      <h1 className="lato-regular w-[80%]">Say hello</h1>
      <div className="w-[90%] md:w-[80%] h-[40vh] flex">
        <div className="w-1/2 h-full flex items-center ">
          <h1 className="lato-medium text-2xl md:text-3xl">Contact us</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="lato-medium text-2xl md:text-3xl">Surat, Gujarat</h1>
          <p className="pt-4 text-gray-700">{contactInfo.address}</p>
          <div className="group flex items-center pt-5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="underline group-hover:text-cyan-500 lato-light md:text-3xl"
            >
              {contactInfo.email}
            </a>
            <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 group-hover:text-cyan-500 text-black" />
          </div>
        </div>
      </div>
      {/* --------div2--------- */}
      <div className="w-[90%] md:w-[80%] h-[40vh] flex">
        <div className="w-1/2 h-full flex items-center ">
          <h1 className="lato-medium text-2xl md:text-3xl">New business</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="lato-medium text-2xl md:text-3xl">
            If you have a new project we’d love to chat.
          </h1>
          <div className="group flex items-center pt-5">
            <a
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
              className="underline group-hover:text-cyan-500 lato-light md:text-3xl"
            >
              {contactInfo.phone}
            </a>
            <ArrowUpRight className="w-4 md:w-10 h-4md:h-10 group-hover:rotate-45 group-hover:text-cyan-500 text-black" />
          </div>
        </div>
      </div>
      {/* ------------div3------------- */}
      <div className="w-[90%] md:w-[80%] h-[40vh] flex">
        <div className="w-1/2 h-full flex items-center ">
          <h1 className="lato-medium text-2xl md:text-3xl">Join us</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="lato-medium text-2xl md:text-3xl">
            We&apos;re always hunting for talented specialists.
          </h1>
          <div className="group flex items-center pt-5">
            <a
              href="https://www.inclean.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-500 md:text-3xl font-light"
            >
              {contactInfo.website}
            </a>
            <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 group-hover:text-cyan-500 text-black" />
          </div>
        </div>
      </div>
      <RecentWork />
    </div>
  );
};

export default page;
