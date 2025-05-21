"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  active: boolean;
};

export default function CustomCursor({ active }: Props) {
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    setVisible(true);

    const handleMove = (e: MouseEvent) => {
      targetPos.current = {
        x: e.clientX - 32, // adjust for centering
        y: e.clientY - 32,
      };
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      const distX = targetPos.current.x - currentPos.current.x;
      const distY = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += distX * 0.1; // <– controls smoothness
      currentPos.current.y += distY * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      setVisible(false);
    };
  }, [active]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none w-26 h-26 bg-cyan-400 text-black flex items-center justify-center rounded-full"
    >
      <ArrowRight size={34} />
    </div>
  );
}
