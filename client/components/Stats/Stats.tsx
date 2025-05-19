import React from "react";
import CountUp from "@/components/AnimatedTime";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
const Stats = () => {
  return (
    <RevealOnScroll direction="up" delay={0.3}>
      <div className="flex p-30 bg-[#F7F7F7] ">
        <div className="w-1/3 border-t-1 border-b-1 border-gray-400 pb-10 pt-5 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text lato-regular text-[64px]"
            />
            <span className="lato-medium text-[6rem] mb-2">+</span>
          </div>
          <h1 className="lato-medium text-3xl">Years in Business</h1>
        </div>
        <div className="w-1/3  border-t-1 border-b-1 border-gray-400   pb-10 pt-5 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={59}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text lato-regular text-[64px]"
            />
            <span className="lato-medium text-[6rem] mb-2">+</span>
          </div>
          <h1 className="lato-medium text-3xl">Projects Completed</h1>
        </div>
        <div className="w-1/3 border-t-1 border-b-1 border-gray-400  pb-10 pt-5 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={32}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text lato-regular text-[64px]"
            />
            <span className="lato-medium text-[6rem] mb-2">+</span>
          </div>
          <h1 className="lato-medium text-3xl">Serving Countries</h1>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Stats;
