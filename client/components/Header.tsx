import React from "react";
import Hamburger from "@/uicomponents/Menuicon";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 z-50 w-full pl-25 pr-20  p-10">
        <div>
          <Image
            src="/incleanlogo.png"
            alt="Description of the image"
            width={90}
            height={90}
          />
        </div>
        <div className="flex right-0">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;
