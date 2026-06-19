"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import Link from "next/link";
import { products } from "@/data/siteContent";

export default function HorizontalRevealScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    const text = textRef.current;

    if (!section || !track || !text) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const totalScroll = () =>
        Math.max(0, track.scrollWidth - window.innerWidth * 0.5);

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -totalScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll()}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(text, {
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll() * 0.5}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }, section);

      const refresh = () => ScrollTrigger.refresh();
      const resizeObserver = new ResizeObserver(refresh);

      resizeObserver.observe(track);
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);
      requestAnimationFrame(refresh);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("load", refresh);
        ctx.revert();
      };
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white lg:h-screen"
    >
      <div className="flex flex-col py-16 sm:py-20 lg:h-screen lg:flex-row lg:py-0">
        {/* LEFT TEXT COLUMN */}
        <div className="flex w-full items-center justify-center bg-black lg:sticky lg:top-0 lg:h-full lg:w-1/2">
          <div ref={textRef} className="max-w-xl space-y-5 px-6 text-center sm:space-y-6 sm:px-10">
            <h2 className="text-4xl font-semibold leading-tight text-gray-200 sm:text-5xl xl:text-6xl">
              Our
              <br />
              Products
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              INCLEAN is proud of its equipment that works efficiently across
              various geographic locations.
            </p>
            <Link
              href="/product"
              className="text-orange-500 font-bold text-lg inline-flex items-center gap-2 hover:text-zinc-500 cursor-pointer border-b-1 pl-4 "
            >
              Read More <span className="text-2xl">↗</span>
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 lg:hidden">
              Swipe to explore
            </p>
          </div>
        </div>

        {/* RIGHT SCROLLING CARDS */}
        <div
          ref={trackRef}
          aria-label="Product carousel"
          className="mt-10 flex w-full touch-pan-x snap-x snap-mandatory items-center gap-4 overflow-x-auto overscroll-x-contain px-[9vw] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-[12vw] lg:mt-0 lg:w-[40vw] lg:gap-10 lg:overflow-visible lg:px-0 lg:pb-0 lg:pl-20 lg:pr-10 lg:will-change-transform"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center sm:w-[56vw] sm:max-w-[380px] lg:w-[300px] lg:max-w-none lg:snap-none"
            >
              <RevealOnScroll direction="up" delay={0.3}>
                <Link
                  href={`/product/${product.slug}`}
                  className="flex h-[360px] w-full flex-col items-center justify-center rounded-3xl bg-[#F7F7F7] p-5 text-center text-black shadow-lg transition sm:h-[400px] sm:p-6 lg:hover:scale-[1.03]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    loading="lazy"
                    className="mb-4 h-[190px] w-[190px] object-cover sm:h-[220px] sm:w-[220px]"
                  />
                  <p className="text-xl font-semibold">{product.name}</p>
                </Link>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
