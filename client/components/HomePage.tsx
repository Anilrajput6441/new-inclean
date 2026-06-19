"use client";

import AboutUs from "@/components/AboutUs";
import BrandMarquee from "@/components/BrandMarquee";
import Hero from "@/components/Hero/Hero";
import HorizontalSlider from "@/components/HorizontalSlider";
import RecentWork from "@/components/RecentWork";
import Stats from "@/components/Stats/Stats";
import Strategy from "@/components/Strategy/strategy";
import Thirddiv from "@/components/ThirdDiv/Thirddiv";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Thirddiv />
      <Strategy />
      <Stats />
      <BrandMarquee />
      <HorizontalSlider />
      <RecentWork />
      <AboutUs />
    </main>
  );
}
