"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "../lib/gsap";

export default function Hero() {
  const [mount, setMount] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const waveRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    setMount(true);
    // Hero entrance animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate sound bars
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        gsap.to(bar, {
          scaleY: 2,
          repeat: -1,
          yoyo: true,
          duration: 0.3 + i * 0.1,
          ease: "sine.inOut",
        });
      }
    });

    // Animate sound wave
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        scale: 1.3,
        opacity: 0.2,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }

    // Animate particles
    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        gsap.to(particle, {
          y: "-=20",
          x: "+=10",
          repeat: -1,
          yoyo: true,
          duration: 2 + Math.random() * 2,
          ease: "sine.inOut",
        });
      }
    });

    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.2,
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1,
      });
    }
  }, []);

  //   if (!mount) {
  //     return null; // Prevent rendering until mounted
  //   }

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6"
    >
      {/* Sound Bars */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1 z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              barsRef.current[i] = el!;
            }}
            className="w-2 h-10 bg-purple-500 origin-bottom transform scale-y-50 rounded"
          />
        ))}
      </div>

      {/* Sound Wave */}
      <div
        ref={pulseRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500 opacity-20 blur-3xl z-0"
      ></div>

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            particlesRef.current[i] = el!;
          }}
          className="absolute w-2 h-2 bg-purple-300 rounded-full z-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-audiowide">
          Shanti Audio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-6">
          Premium DJ Sound Setup for Weddings, Events & Parties
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Explore Our Sound
        </button>
      </div>
    </section>
  );
}
