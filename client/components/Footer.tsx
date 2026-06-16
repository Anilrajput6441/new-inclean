import Image from "next/image";
import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { contactInfo } from "@/data/siteContent";

const Footer = () => {
  return (
    <div className="h-[25vh] md:h-[35vh] w-full  bg-[#F7F7F7] ">
      <div className="h-[40%] pt-7   w-full pl-10 md:pl-25">
        <div className="p-1 rounded-full w-13 h-13 animate-float flex justify-center items-center text-3xl  font-semibold font-mono bg-[#EAEAEA] ">
          ↑
        </div>
      </div>
      <div className="h-[60%] w-full flex justify-between px-10 md:px-20 items-center">
        <Image
          src="/incleanlogo.png"
          alt="inclean logo"
          width={80}
          height={80}
          className=""
        />
        <div className="hidden max-w-lg text-sm text-gray-700 md:block">
          <p>{contactInfo.address}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
        <div className="flex gap-4">
          <a href={`mailto:${contactInfo.email}`} aria-label="Email Inclean">
            <Mail className="w-8 h-8 text-gray-600 hover:text-cyan-500" />
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
            aria-label="Call Inclean"
          >
            <Phone className="w-8 h-8 text-gray-600 hover:text-cyan-500" />
          </a>
          <Instagram className="w-8 h-8 text-gray-600 hover:text-pink-500" />
          <Linkedin className="w-8 h-8 text-gray-600 hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
