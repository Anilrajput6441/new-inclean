import Image from "next/image";
import Link from "next/link";
import React from "react";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import { products } from "@/data/siteContent";

const page = () => {
  return (
    <div className="bg-[#F7F7F7] min-h-screen pt-35 pb-20">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="px-8 md:px-20">
          <h1 className="lato-regular max-w-6xl text-[54px] leading-tight md:text-[118px]">
            Reliable, Effective & Technically Advanced Products
          </h1>
          <p className="mt-6 max-w-3xl lato-medium text-lg text-gray-700 md:text-2xl">
            Migrated from the original Inclean portfolio: HVAC, ventilation,
            cooling, scrubbing, and air movement products built for industrial,
            commercial, and residential environments.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mx-auto mt-16 grid w-[90%] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <RevealOnScroll key={product.slug} direction="up" delay={0.2}>
            <Link
              href={`/Product/${product.slug}`}
              className="group block h-full overflow-hidden bg-white shadow-xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="lato-medium text-3xl">{product.name}</h2>
                <p className="mt-4 text-gray-700">{product.summary}</p>
                <span className="mt-6 inline-block lato-medium text-cyan-700">
                  Read more
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default page;
