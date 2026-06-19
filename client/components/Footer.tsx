import Image from "next/image";
import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { contactInfo } from "@/data/siteContent";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7F7F7] px-5 py-8 sm:px-8 lg:min-h-[35vh] lg:px-20">
      <div className="w-full pb-8 lg:pb-12 lg:pl-5">
        <div className="p-1 rounded-full w-13 h-13 animate-float flex justify-center items-center text-3xl  font-semibold font-mono bg-[#EAEAEA] ">
          ↑
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-7 border-t border-gray-300 pt-7 sm:flex-row">
        <Image
          src="/incleanlogo.png"
          alt="inclean logo"
          width={80}
          height={80}
          loading="lazy"
          className=""
        />
        <div className="max-w-lg text-center text-sm text-gray-700 sm:text-left">
          <p>{contactInfo.address}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
    </footer>
  );
};

export default Footer;
