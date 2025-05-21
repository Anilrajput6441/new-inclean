"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // longer scroll
          scrub: true,
          pin: true,
        },
      });

      tl.to(videoRef.current, {
        scale: 0.8,
        transformOrigin: "top center",
        ease: "power1.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative  md:h-screen w-[100vw] overflow-hidden bg-[#F7F7F7]"
    >
      <div className="relative h-[100vh] w-full md:h-screen">
        <video
          ref={videoRef}
          src="/Mastering Air Quality with Inclean_free.mp4"
          autoPlay
          muted
          loop
          className="absolute z-1 w-full h-full bg-[#F7F7F7] md:rounded-2xl object-cover will-change-transform"
        />
      </div>
    </div>
  );
}
