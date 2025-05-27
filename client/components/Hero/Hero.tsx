import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/app/utils/RevealOnScroll";

const Hero = () => {
  return (
    <div className="h-[100vh]  pt-35">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="lato-regular w-full md:w-[62%] pl-10 pt-30 md:pl-20  md:text-[128px]">
          Mastering Air With Precision
        </div>
      </RevealOnScroll>
      <RevealOnScroll direction="down" delay={0.2}>
        <div className="w-[85%] flex justify-between  h-auto ml-10  md:ml-20 mt-15 md:mt-5">
          <div className="flex flex-col justify-center items-center ">
            {" "}
            <Image
              src="/icons8-double-down.gif"
              width={500}
              height={500}
              alt="Cool animation"
              className="h-15 w-15"
            />
            Scroll Down
          </div>

          <a href="/incleandoc.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <Image
                src="/icons8-download.gif"
                width={50}
                height={50}
                alt="Cool animation"
              />
              HVAC Guide
            </div>
          </a>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Hero;
