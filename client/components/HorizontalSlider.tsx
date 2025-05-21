"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import products from "@/ProductData.json";
import RevealOnScroll from "@/app/utils/RevealOnScroll";

export default function HorizontalRevealScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    const text = textRef.current;

    if (!section || !track || !text) return;

    const totalScroll = track.scrollWidth - window.innerWidth * 0.5;

    const ctx = gsap.context(() => {
      // Horizontal scroll
      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Fade out text as cards move over
      gsap.to(text, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll * 0.5}`,
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black  text-white"
    >
      <div className="flex h-screen">
        {/* LEFT TEXT COLUMN */}
        <div className="w-[70%] md:w-1/2  h-full flex items-center justify-center sticky top-0 bg-black">
          <div ref={textRef} className="space-y-6 text-center px-10">
            <h2 className="text-5xl font-semibold leading-tight text-gray-200">
              Our
              <br />
              Products
            </h2>
            <p className="text-gray-400 text-sm">
              INCLEAN is proud of itsequipments that works efficiently in
              various geographic location
            </p>
            <button className="text-orange-500 font-bold text-lg inline-flex items-center gap-2 hover:text-zinc-500 cursor-pointer border-b-1 pl-4 ">
              Read More <span className="text-2xl">↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT SCROLLING CARDS */}
        <div
          ref={trackRef}
          className="flex w-[30%] md:w-[40vw]  items-center gap-10 md:pl-20 pr-10 will-change-transform"
        >
          {products.map((product) => (
            <RevealOnScroll key={product.id} direction="up" delay={0.3}>
              <div className="w-[300px] h-[400px] shrink-0 bg-[#F7F7F7]  text-black rounded-3xl p-6 shadow-lg  flex flex-col items-center justify-center hover:scale-[1.03] transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="mb-4"
                />
                <p className="text-xl font-semibold">{product.name}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
