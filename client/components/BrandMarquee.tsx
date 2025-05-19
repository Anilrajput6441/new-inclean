// components/BrandMarquee.tsx
"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/Brandlogo/llyoed.svg",
  "/Brandlogo/saint gobain.png",
  "/Brandlogo/packman.png",
  "/Brandlogo/ipg.png",
  "/Brandlogo/hitachi.png",
  "/Brandlogo/goel.webp",
  "/Brandlogo/frontier.png",
  "/Brandlogo/db583b1c-179b-49da-b783-49ba646c0df2.png",
  "/Brandlogo/burger king.png",
  "/Brandlogo/b7f0f0ef-581d-41ef-86ce-3edc33ec2a46.png",
  "/Brandlogo/499c3ed0-e0f4-4900-a980-05d747852281.png",
  "/Brandlogo/6cc9c8c6-51de-4e9a-b37e-a5441a3c1b69.png",
  "/Brandlogo/3df10950-2ff1-4c72-8abf-139a053ba0e9.png",

  // Add more logos as needed
];

const BrandMarquee = () => {
  return (
    <div className="py-6 bg-[#F7F7F7] ">
      <Marquee
        pauseOnHover
        gradient={false}
        speed={40} // adjust scroll speed
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image src={logo} alt={`brand-${index}`} width={120} height={70} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
