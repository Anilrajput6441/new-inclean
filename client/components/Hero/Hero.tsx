import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/app/utils/RevealOnScroll";

const Hero = () => {
  return (
    <div className="h-[100vh] 2 pt-35">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="lato-regular w-[62%] pt-30 pl-20 text-[128px]">
          Mastering Air With Precision
        </div>
      </RevealOnScroll>
      <RevealOnScroll direction="down" delay={0.2}>
        <div className="w-[300px] h-auto ml-20 mt-5">
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
