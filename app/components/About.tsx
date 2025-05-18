"use client";

import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import WaveformCircle from "./ui/WaveformCircle";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const animationPlayed = useRef(false); // To avoid re-triggering

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationPlayed.current) {
            animationPlayed.current = true; // Prevent replays

            const tl = gsap.timeline({
              defaults: { ease: "power3.out", duration: 1 },
            });

            tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 });

            tl.fromTo(
              imageRef.current,
              { x: -100, opacity: 0 },
              { x: 0, opacity: 1 },
              "<0.3"
            );

            tl.fromTo(
              headingRef.current,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1 },
              "<0.3"
            );
            tl.fromTo(
              underlineRef.current,
              { scaleX: 0 },
              { scaleX: 1, transformOrigin: "left" },
              "<0.2"
            );

            tl.fromTo(
              textRef.current,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1 },
              "<0.2"
            );

            tl.fromTo(
              cardsRef.current,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.2 },
              "<0.2"
            );

            observer.disconnect(); // Stop observing once animated
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Helper for card refs
  const addCardRef = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-black text-white max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 opacity-0" // Initially hidden
    >
      {/* Left Image */}
      <div
        ref={imageRef}
        className="w-full h-full md:w-1/2 rounded-lg overflow-hidden shadow-lg flex justify-center items-center"
      >
        <video
          src="/videos/vecteezy_abstract-digital-particle-wave-and-lights-background_39007633.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-audiowide mb-4"
        >
          Who We Are
        </h2>
        <div
          ref={underlineRef}
          className="w-24 h-1 bg-purple-500 mb-6"
          style={{ transformOrigin: "left", transform: "scaleX(0)" }}
        />
        <p
          ref={textRef}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-lg"
        >
          At Shanti Audio, we deliver high-impact sound systems tailored for
          every event. We pride ourselves on professional setups, expert sound
          engineering, and creating unforgettable experiences that keep your
          guests dancing all night.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg">
          {[
            {
              title: "10+ Years Experience",
              desc: "Decade of expertise in sound engineering and event setups.",
              icon: "🎧",
            },
            {
              title: "Top Equipment",
              desc: "Industry-leading speakers, mixers, and DJ gear.",
              icon: "🔊",
            },
            {
              title: "Events Covered",
              desc: "Weddings, corporate events, parties, and festivals.",
              icon: "🎉",
            },
          ].map(({ title, desc, icon }, i) => (
            <div
              key={i}
              ref={addCardRef}
              className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
