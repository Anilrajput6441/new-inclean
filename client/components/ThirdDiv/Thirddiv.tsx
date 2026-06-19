import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Link from "next/link";

const Thirddiv = () => {
  return (
    <section className="flex w-full flex-col gap-8 bg-[#F7F7F7] px-4 py-12 sm:px-8 sm:py-16 lg:gap-20 lg:p-20">
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col-reverse rounded-3xl bg-white p-5 shadow-2xl sm:p-8 lg:flex-row lg:p-16 xl:p-20">
          <div className="h-full w-full lg:w-1/2">
            <h2 className="lato-light pt-4 text-2xl sm:text-3xl lg:p-10 lg:text-[32px]">
              Air Handling Unit (AHU)
            </h2>
            <p className="lato-medium mt-4 text-base leading-relaxed sm:text-lg lg:mt-0 lg:pl-10 lg:text-[22px]">
              Our Air Handling Units (AHUs) are designed to deliver efficient,
              clean, and reliable airflow for commercial, industrial, and
              healthcare environments. Engineered with precision, they regulate
              temperature, humidity, and air quality to ensure optimal indoor
              comfort and energy performance.
            </p>
            <Link
              href="/product/ahu"
              className="mt-6 flex w-fit cursor-pointer items-center hover:text-blue-600 lg:ml-10"
            >
              <button className=" lato-medium pr-5 cursor-pointer">
                Read More..
              </button>
              <Image
                src="/rightarrow.gif"
                width={100}
                height={100}
                alt="Cool animation"
                loading="lazy"
                className="border-1 h-10 w-10 "
              />
            </Link>
          </div>
          <div className="animate-float flex h-full w-full justify-center lg:w-1/2 lg:justify-end">
            <Image
              src="/productimg/ahu unit.png"
              alt="ahu unit"
              height={500}
              width={500}
              loading="lazy"
              className="h-auto w-full max-w-[500px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col-reverse rounded-3xl bg-white p-5 shadow-2xl sm:p-8 lg:flex-row lg:p-16 xl:p-20">
          <div className="h-full w-full lg:w-1/2">
            <h2 className="lato-light pt-4 text-2xl sm:text-3xl lg:p-10 lg:text-[32px]">
              EVAPORATION COOLING UNIT (Single & Double stage)
            </h2>
            <p className="lato-medium mt-4 text-base leading-relaxed sm:text-lg lg:mt-0 lg:pl-10 lg:text-[22px]">
              Efficient and eco-friendly, these air washer systems provide
              powerful cooling using water-based evaporative technology.
              Available in single and double-stage models, they ensure high
              airflow, low energy use, and improved indoor comfort—ideal for
              industrial and commercial spaces seeking sustainable cooling
              solutions.
            </p>
            <Link
              href="/product/ecu"
              className="mt-6 flex w-fit cursor-pointer items-center hover:text-blue-600 lg:ml-10"
            >
              <button className="lato-medium pr-5 cursor-pointer">
                Read More..
              </button>
              <Image
                src="/rightarrow.gif"
                width={100}
                height={100}
                alt="Cool animation"
                loading="lazy"
                className="border-1 h-10 w-10"
              />
            </Link>
          </div>
          <div className="animate-float flex h-full w-full justify-center lg:mt-15 lg:w-1/2 lg:justify-end">
            <Image
              src="/productimg/ecudouble.png"
              alt="ahu unit"
              height={500}
              width={500}
              loading="lazy"
              className="h-auto w-full max-w-[500px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Thirddiv;
