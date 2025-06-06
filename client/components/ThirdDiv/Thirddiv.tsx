import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Link from "next/link";

const Thirddiv = () => {
  return (
    <div className="w-full  flex flex-col gap-y-20 md:p-20  bg-[#F7F7F7] ">
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="h-full w-full md:p-20 flex flex-col-reverse md:flex-row pb-10  bg-white rounded-3xl shadow-2xl">
          <div className="w-full md:w-[50%] h-full ">
            <h1 className="lato-light text-[32px] px-5  md:p-10">
              Air Handling Unit (AHU)
            </h1>
            <p className="lato-medium text-[22px] px-5 md:pl-10 ">
              Our Air Handling Units (AHUs) are designed to deliver efficient,
              clean, and reliable airflow for commercial, industrial, and
              healthcare environments. Engineered with precision, they regulate
              temperature, humidity, and air quality to ensure optimal indoor
              comfort and energy performance.
            </p>
            <Link
              href="/Product/ahu"
              className="flex items-center  cursor-pointer w-38 ml-10 mt-5 hover:text-blue-600 "
            >
              <button className=" lato-medium pr-5 cursor-pointer">
                Read More..
              </button>
              <Image
                src="/rightarrow.gif"
                width={100}
                height={100}
                alt="Cool animation"
                className="border-1 h-10 w-10 "
              />
            </Link>
          </div>
          <div className="w-full md:w-[50%] right-0 flex justify-end h-full animate-float">
            <Image
              src="/productimg/ahu unit.png"
              alt="ahu unit"
              height={500}
              width={500}
              className="drop-shadow-[5rem]"
            />
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="h-full w-full md:p-20 flex flex-col-reverse md:flex-row pb-10 bg-white rounded-3xl shadow-2xl">
          <div className="w-full md:w-[50%] h-full">
            <h1 className="lato-light text-[32px] px-5 md:p-10">
              EVAPORATION COOLING UNIT (Single & Double stage)
            </h1>
            <p className="lato-medium text-[22px] px-5 md:pl-10">
              Efficient and eco-friendly, these air washer systems provide
              powerful cooling using water-based evaporative technology.
              Available in single and double-stage models, they ensure high
              airflow, low energy use, and improved indoor comfort—ideal for
              industrial and commercial spaces seeking sustainable cooling
              solutions.
            </p>
            <Link
              href="/Product/ecu"
              className="flex items-center cursor-pointer w-38 ml-10 mt-5 hover:text-blue-600"
            >
              <button className="lato-medium pr-5 cursor-pointer">
                Read More..
              </button>
              <Image
                src="/rightarrow.gif"
                width={100}
                height={100}
                alt="Cool animation"
                className="border-1 h-10 w-10"
              />
            </Link>
          </div>
          <div className="w-full md:w-[50%] right-0 md:mt-15 flex justify-end h-full animate-float">
            <Image
              src="/productimg/ecudouble.png"
              alt="ahu unit"
              height={500}
              width={500}
              className="drop-shadow-[5rem]"
            />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Thirddiv;
