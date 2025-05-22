"use client";
import { useState } from "react";
import styles from "./Hamburger.module.css";
import FlowingMenu from "./Menuitems";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const strokeColor = active ? "#fff" : "#000";
  const fillColor = active ? "#fff" : "#000";
  const demoItems = [
    {
      link: "/Project",
      text: "Projects",
      image:
        "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
    },
    {
      link: "/Product",
      text: "Products",
      image:
        "https://www.shutterstock.com/image-illustration/product-word-cloud-collage-business-260nw-755479927.jpg",
    },
    {
      link: "/About",
      text: "About Us",
      image:
        "https://cdn.vectorstock.com/i/500p/54/96/about-us-button-web-banner-templates-vector-54215496.jpg",
    },
    {
      link: "Contact",
      text: "Contact Us",
      image:
        "https://www.shutterstock.com/image-vector/contact-us-vector-banner-word-600nw-1084565024.jpg",
    },
  ];

  return (
    <>
      <div
        className={`${styles.container} ${
          active ? styles.active : ""
        } fixed top-6 right-6 z-[60]`}
        onClick={() => setActive(!active)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 200 200"
          className={`rounded-full transition-all duration-300 ${
            active ? "bg-[#393737]" : "bg-[#EBEBEB]"
          }`}
        >
          <g strokeWidth="9.5" strokeLinecap="round">
            <path
              d="M72 82.286h28.75"
              fill={fillColor}
              fillRule="evenodd"
              stroke={strokeColor}
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke={strokeColor}
            />
            <path
              d="M72 125.143h28.75"
              fill={fillColor}
              fillRule="evenodd"
              stroke={strokeColor}
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke={strokeColor}
            />
            <path
              d="M100.75 82.286h28.75"
              fill={fillColor}
              fillRule="evenodd"
              stroke={strokeColor}
            />
            <path
              d="M100.75 125.143h28.75"
              fill={fillColor}
              fillRule="evenodd"
              stroke={strokeColor}
            />
          </g>
        </svg>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#1f1f1f] text-white flex flex-col items-center justify-center z-50 transform transition-transform duration-500 ease-in-out ${
          active ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setActive(!active)}
      >
        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
};

export default Hamburger;
