"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function MorphingWaveCircle() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Path variants
    const path1 =
      "M100,20 C130,20 150,50 150,100 C150,150 130,180 100,180 C70,180 50,150 50,100 C50,50 70,20 100,20 Z";
    const path2 =
      "M100,20 C140,30 160,60 160,100 C160,140 130,170 100,180 C60,170 40,140 40,100 C40,60 60,30 100,20 Z";
    const path3 =
      "M100,20 C120,10 170,50 170,100 C170,150 120,190 100,180 C60,160 30,130 30,100 C30,60 70,30 100,20 Z";

    tl.to(pathRef.current, {
      duration: 3,
      morphSVG: path2,
      ease: "power1.inOut",
    })
      .to(pathRef.current, {
        duration: 3,
        morphSVG: path3,
        ease: "power1.inOut",
      })
      .to(pathRef.current, {
        duration: 3,
        morphSVG: path1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg width="300" height="300" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="waveGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#0f0" />
            <stop offset="50%" stopColor="#0ff" />
            <stop offset="100%" stopColor="#f0f" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M100,20 C130,20 150,50 150,100 C150,150 130,180 100,180 C70,180 50,150 50,100 C50,50 70,20 100,20 Z"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
