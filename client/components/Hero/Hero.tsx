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
        <div className="w-[300px] h-auto ml-10  md:ml-20 mt-15 md:mt-5">
          <Image
            src="/icons8-double-down.gif"
            width={50}
            height={50}
            alt="Cool animation"
          />
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Hero;
