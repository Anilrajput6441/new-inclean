"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "down":
        return { opacity: 0, y: -50 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
