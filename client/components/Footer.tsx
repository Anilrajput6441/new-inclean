import Image from "next/image";
import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="h-[30vh] w-full bg-[#F7F7F7] ">
      <div className="h-[40%] w-full pl-25">
        <div className="p-1 rounded-full w-13 h-13 animate-float flex justify-center items-center text-3xl  font-semibold font-mono bg-[#EAEAEA] ">
          ↑
        </div>
      </div>
      <div className="h-[60%] w-full flex justify-between px-20 items-center">
        <Image
          src="/incleanlogo.png"
          alt="inclean logo"
          width={80}
          height={80}
          className=""
        />
        <div className="flex gap-4">
          <Instagram className="w-8 h-8 text-gray-600 hover:text-pink-500" />
          <Twitter className="w-8 h-8 text-gray-600 hover:text-blue-400" />
          <Linkedin className="w-8 h-8 text-gray-600 hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
