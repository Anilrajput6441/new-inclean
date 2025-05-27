import React from "react";
import Hamburger from "@/uicomponents/Menuicon";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 z-50 w-full md:pl-25 md:pr-20  p-10 ">
        <Link href="/">
          <Image
            src="/incleanlogo.png"
            alt="Description of the image"
            width={90}
            height={90}
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
