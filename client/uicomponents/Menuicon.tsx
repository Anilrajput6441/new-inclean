"use client";
import { useState } from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  // Change colors based on state
  const strokeColor = active ? "#fff" : "#000";
  const fillColor = active ? "#fff" : "#000";

  return (
    <div
      className={`${styles.container} ${active ? styles.active : ""} `}
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
  );
};

export default Hamburger;
