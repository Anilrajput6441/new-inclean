"use client";

import React, { useLayoutEffect, useRef } from "react";
import RevealOnScroll from "@/app/utils/RevealOnScroll";

const Hero = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const strokes = Array.from(
      svg.querySelectorAll<SVGGeometryElement>("rect,line,circle,path")
    );

    strokes.forEach((stroke, index) => {
      const length = Math.ceil(stroke.getTotalLength());
      stroke.style.strokeDasharray = `${length}`;
      stroke.style.strokeDashoffset = `${length}`;
      stroke.style.opacity = "0";

      stroke.animate(
        [
          {
            strokeDashoffset: length,
            opacity: 0,
          },
          {
            strokeDashoffset: 0,
            opacity: 1,
          },
        ],
        {
          duration: 2600,
          delay: index * 140,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          fill: "forwards",
        }
      );
    });

    const finalTimer = window.setTimeout(() => {
      strokes.forEach((stroke) => {
        stroke.style.strokeDashoffset = "0";
        stroke.style.opacity = "1";
      });
    }, 2600 + strokes.length * 140);

    return () => window.clearTimeout(finalTimer);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#F7F7F7] px-5 pb-10 pt-28 sm:px-10 sm:pt-36 lg:justify-center lg:px-20 lg:pb-14 lg:pt-40">
      <svg
        ref={svgRef}
        width="1200"
        height="720"
        viewBox="0 0 1200 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.8] opacity-18 sm:scale-150 lg:scale-100 [&_circle]:opacity-0 [&_line]:opacity-0 [&_path]:opacity-0 [&_rect]:opacity-0"
        aria-hidden="true"
      >
        <g
          stroke="#CBD5E1"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M90 470 C220 390 315 395 430 455 C530 508 610 510 730 450" />
          <path d="M75 535 C235 450 350 465 475 535 C585 598 680 590 805 520" />
          <path d="M110 405 C260 318 380 322 515 395 C610 446 690 445 790 392" />

          <path d="M385 455 L425 455 L410 438" />
          <path d="M510 535 L550 535 L535 518" />
          <path d="M590 395 L630 395 L615 378" />

          <rect x="720" y="188" width="380" height="300" rx="16" />
          <line x1="805" y1="188" x2="805" y2="488" />
          <line x1="910" y1="188" x2="910" y2="488" />
          <line x1="995" y1="188" x2="995" y2="488" />
          <line x1="720" y1="268" x2="1100" y2="268" />
          <line x1="720" y1="408" x2="1100" y2="408" />
          <line x1="735" y1="204" x2="790" y2="204" />
          <line x1="735" y1="422" x2="790" y2="422" />
          <line x1="825" y1="204" x2="890" y2="204" />
          <line x1="930" y1="204" x2="975" y2="204" />
          <line x1="1015" y1="204" x2="1080" y2="204" />
          <rect x="737" y="286" width="48" height="92" rx="6" />
          <rect x="1018" y="286" width="58" height="92" rx="6" />
          <circle cx="775" cy="300" r="4" />
          <circle cx="775" cy="365" r="4" />
          <circle cx="1062" cy="300" r="4" />
          <circle cx="1062" cy="365" r="4" />

          <path d="M745 224 L780 224" />
          <path d="M745 240 L780 240" />
          <path d="M745 256 L780 256" />
          <path d="M744 292 L783 372" />
          <path d="M754 292 L783 352" />
          <path d="M764 292 L783 332" />
          <path d="M783 292 L744 372" />
          <path d="M773 292 L744 352" />
          <path d="M763 292 L744 332" />

          <path d="M830 220 L885 255" />
          <path d="M855 220 L885 240" />
          <path d="M830 252 L885 220" />
          <path d="M855 256 L885 238" />
          <path d="M828 294 L888 374" />
          <path d="M848 294 L888 350" />
          <path d="M868 294 L888 326" />
          <path d="M888 294 L828 374" />
          <path d="M868 374 L828 318" />
          <path d="M848 374 L828 342" />

          <circle cx="952" cy="338" r="48" />
          <circle cx="952" cy="338" r="20" />
          <circle cx="952" cy="338" r="6" />
          <path d="M952 318 C978 305 990 330 972 346" />
          <path d="M934 348 C910 362 895 336 916 321" />
          <path d="M968 354 C970 382 936 386 930 360" />
          <path d="M952 290 V312" />
          <path d="M952 364 V386" />
          <path d="M904 338 H926" />
          <path d="M978 338 H1000" />
          <path d="M918 304 L934 320" />
          <path d="M970 356 L986 372" />
          <path d="M986 304 L970 320" />
          <path d="M934 356 L918 372" />

          <path d="M1026 226 L1070 226" />
          <path d="M1026 244 L1070 244" />
          <path d="M1026 326 L1070 326" />
          <path d="M1026 344 L1070 344" />
          <path d="M1026 362 L1070 362" />
          <path d="M1026 430 L1070 430" />
          <path d="M1026 448 L1070 448" />
          <path d="M1028 302 H1068" />
          <path d="M1028 316 H1068" />
          <path d="M1028 376 H1068" />
          <path d="M1028 390 H1068" />
          <circle cx="736" cy="204" r="3" />
          <circle cx="790" cy="204" r="3" />
          <circle cx="825" cy="204" r="3" />
          <circle cx="890" cy="204" r="3" />
          <circle cx="930" cy="204" r="3" />
          <circle cx="975" cy="204" r="3" />
          <circle cx="1015" cy="204" r="3" />
          <circle cx="1080" cy="204" r="3" />
          <circle cx="736" cy="472" r="3" />
          <circle cx="790" cy="472" r="3" />
          <circle cx="825" cy="472" r="3" />
          <circle cx="890" cy="472" r="3" />
          <circle cx="930" cy="472" r="3" />
          <circle cx="975" cy="472" r="3" />
          <circle cx="1015" cy="472" r="3" />
          <circle cx="1080" cy="472" r="3" />

          <path d="M645 284 H720" />
          <path d="M645 392 H720" />
          <path d="M520 284 H645 V392 H520" />
          <path d="M520 306 H498" />
          <path d="M520 370 H498" />
          <rect x="518" y="270" width="128" height="136" rx="8" />
          <path d="M540 306 H625" />
          <path d="M540 328 H625" />
          <path d="M540 350 H625" />
          <path d="M540 372 H625" />
          <path d="M552 284 V392" />
          <path d="M576 284 V392" />
          <path d="M600 284 V392" />
          <path d="M624 284 V392" />

          <path d="M1100 280 H1140 V170 H1020" />
          <path d="M1100 388 H1160 V570 H940" />
          <path d="M1000 170 C940 130 870 130 815 170" />
          <path d="M940 570 C850 620 745 615 665 560" />
          <path d="M1120 280 V388" />
          <path d="M1140 190 H1085" />
          <path d="M1140 210 H1085" />
          <path d="M1140 230 H1085" />
          <path d="M1140 250 H1085" />
          <path d="M1125 520 H1035" />
          <path d="M1125 540 H1035" />
          <path d="M1125 560 H1035" />
          <path d="M1040 170 L1020 156" />
          <path d="M1040 170 L1020 184" />
          <path d="M960 570 L940 556" />
          <path d="M960 570 L940 584" />

          <rect x="148" y="178" width="220" height="86" rx="12" />
          <line x1="180" y1="203" x2="336" y2="203" />
          <line x1="180" y1="223" x2="336" y2="223" />
          <line x1="180" y1="243" x2="336" y2="243" />
          <line x1="166" y1="193" x2="166" y2="249" />
          <line x1="350" y1="193" x2="350" y2="249" />
          <circle cx="168" cy="194" r="3" />
          <circle cx="348" cy="194" r="3" />
          <circle cx="168" cy="248" r="3" />
          <circle cx="348" cy="248" r="3" />
          <path d="M368 220 H520 V284" />

          <rect x="160" y="560" width="310" height="72" rx="12" />
          <line x1="195" y1="582" x2="435" y2="582" />
          <line x1="195" y1="604" x2="435" y2="604" />
          <line x1="184" y1="570" x2="184" y2="622" />
          <line x1="446" y1="570" x2="446" y2="622" />
          <circle cx="184" cy="571" r="3" />
          <circle cx="446" cy="571" r="3" />
          <circle cx="184" cy="621" r="3" />
          <circle cx="446" cy="621" r="3" />
          <path d="M470 596 H665 V560" />

          <path d="M120 320 H310" />
          <path d="M120 345 H310" />
          <path d="M120 370 H310" />
          <path d="M136 306 V384" />
          <path d="M168 306 V384" />
          <path d="M200 306 V384" />
          <path d="M232 306 V384" />
          <path d="M264 306 V384" />
          <path d="M296 306 V384" />
          <path d="M330 320 C390 320 430 340 470 380" />
          <path d="M330 370 C395 370 430 385 470 420" />
          <circle cx="484" cy="400" r="16" />
          <path d="M476 400 H492" />
          <path d="M484 392 V408" />
          <path d="M706 560 H665" />
          <path d="M706 560 L690 548" />
          <path d="M706 560 L690 572" />
        </g>
      </svg>

      <RevealOnScroll direction="up" delay={0.2}>
        <h1 className="relative z-10 max-w-[9ch] font-['Lato',sans-serif] text-[clamp(4.5rem,19vw,5.5rem)] font-light leading-[0.9] tracking-[-0.055em] sm:text-[clamp(5rem,13vw,6rem)] lg:text-[clamp(6rem,8.5vw,8rem)] lg:leading-[0.98] lg:tracking-[-0.04em]">
          Mastering Air With Precision
        </h1>
      </RevealOnScroll>
      <RevealOnScroll direction="down" delay={0.2}>
        <div className="relative z-10 flex w-full max-w-5xl items-end justify-between gap-6 lg:mt-8">
          <div className="flex flex-col items-center justify-center text-sm sm:text-base">
            <svg
              viewBox="0 0 50 50"
              className="h-12 w-12 sm:h-15 sm:w-15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 12.5 25 28.5 41 12.5" />
              <path d="M9 23.5 25 39.5 41 23.5" />
            </svg>
            Scroll Down
          </div>

          <a
            href="/incleandoc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-sm sm:text-base"
          >
            <div className="flex cursor-pointer flex-col items-center justify-center">
              <svg
                viewBox="0 0 50 50"
                className="h-11 w-11 sm:h-[50px] sm:w-[50px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M25 6v26" />
                <path d="m16.5 23.5 8.5 8.5 8.5-8.5" />
                <path d="M14 17H8.5v26h33V17H36" />
              </svg>
              HVAC Guide
            </div>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;
