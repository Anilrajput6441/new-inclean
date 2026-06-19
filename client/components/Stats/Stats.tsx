import React from "react";
import CountUp from "@/components/AnimatedTime";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
const Stats = () => {
  return (
    <RevealOnScroll direction="up" delay={0.3}>
      <section className="grid grid-cols-1 bg-[#F7F7F7] px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-3 lg:px-20 xl:px-30">
        <div className="flex w-full flex-col items-center justify-center border-y border-gray-400 px-3 py-8 text-center lg:border-r">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-['Lato',sans-serif] text-6xl font-light sm:text-7xl lg:text-6xl xl:text-7xl"
            />
            <span className="lato-medium mb-2 text-6xl sm:text-7xl lg:text-6xl xl:text-7xl">+</span>
          </div>
          <h2 className="lato-medium text-xl sm:text-2xl xl:text-3xl">Years in Business</h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-b border-gray-400 px-3 py-8 text-center lg:border-y lg:border-r">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={59}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-['Lato',sans-serif] text-6xl font-light sm:text-7xl lg:text-6xl xl:text-7xl"
            />
            <span className="lato-medium mb-2 text-6xl sm:text-7xl lg:text-6xl xl:text-7xl">+</span>
          </div>
          <h2 className="lato-medium text-xl sm:text-2xl xl:text-3xl">Projects Completed</h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-b border-gray-400 px-3 py-8 text-center lg:border-y">
          <div className="flex items-center justify-center">
            <CountUp
              from={0}
              to={32}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text font-['Lato',sans-serif] text-6xl font-light sm:text-7xl lg:text-6xl xl:text-7xl"
            />
            <span className="lato-medium mb-2 text-6xl sm:text-7xl lg:text-6xl xl:text-7xl">+</span>
          </div>
          <h2 className="lato-medium text-xl sm:text-2xl xl:text-3xl">Serving Countries</h2>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Stats;
