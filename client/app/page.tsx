"use client";
import Hero from "@/components/Hero/Hero";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import Thirddiv from "@/components/ThirdDiv/Thirddiv";
import Strategy from "@/components/Strategy/strategy";

import Stats from "@/components/Stats/Stats";
import BrandMarquee from "@/components/BrandMarquee";
import HorizontalSlider from "@/components/HorizontalSlider";
import RecentWork from "@/components/RecentWork";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    let animationFrame = 0;

    function raf(time: number): void {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);
  return (
    <div className="">
      <Hero />
      <Thirddiv />
      {/* <Fourthdiv /> */}
      <Strategy />
      <Stats />
      <BrandMarquee />
      <HorizontalSlider />
      <RecentWork />
      <AboutUs />
    </div>
  );
}
