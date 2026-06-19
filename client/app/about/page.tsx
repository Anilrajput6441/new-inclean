import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";
import React from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Inclean Technologies",
  description:
    "Learn about Inclean Technologies, our HVAC engineering expertise, ventilation solutions, project planning, equipment selection, and service support.",
  path: "/about",
});

const page = () => {
  return (
    <div className="pt-30 bg-[#F7F7F7]">
      <AboutUs />
    </div>
  );
};

export default page;
