"use client";
import Hero from "@/components/Hero/Hero";
import VideoScrollSection from "@/components/VideoScrollSection";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import Thirddiv from "@/components/ThirdDiv/Thirddiv";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="">
      <Hero />
      <VideoScrollSection />
      <Thirddiv />
    </div>
  );
}
