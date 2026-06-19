import React from "react";
import Hamburger from "@/uicomponents/Menuicon";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-20 lg:py-10 xl:px-24">
        <Link href="/">
          <Image
            src="/incleanlogo.png"
            alt="Description of the image"
            width={90}
            height={90}
            loading="lazy"
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-[90px] lg:w-[90px]"
          />
        </Link>
        <div className="flex right-0 justify-end items-center">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;
