"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "DJ Sound Setup",
    desc: "Premium DJ sound systems with customizable configurations for events and venues.",
    image: "/images/services/dj-setup.jpeg",
  },
  {
    title: "Live Event Coverage",
    desc: "Audio systems for weddings, parties, and cultural programs with live mixing.",
    image: "/images/services/live-event.webp",
  },
  {
    title: "Lighting Solutions",
    desc: "Dynamic lighting rigs for stages, dance floors, and ambient environments.",
    image: "/images/services/lightning.jpg",
  },
  {
    title: "Stage Design",
    desc: "Customizable stage setups tailored for performance and audience engagement.",
    image: "/images/services/stage.webp",
  },
  {
    title: "Live Event Coverage",
    desc: "Audio systems for weddings, parties, and cultural programs with live mixing.",
    image: "/images/services/live-event.webp",
  },
  {
    title: "DJ Sound Setup",
    desc: "Premium DJ sound systems with customizable configurations for events and venues.",
    image: "/images/services/dj-setup.jpeg",
  },
  {
    title: "Stage Design",
    desc: "Customizable stage setups tailored for performance and audience engagement.",
    image: "/images/services/stage.webp",
  },
  {
    title: "Lighting Solutions",
    desc: "Dynamic lighting rigs for stages, dance floors, and ambient environments.",
    image: "/images/services/lightning.jpg",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 bg-black text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-purple-400"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore our professional sound and event services tailored for
          unforgettable experiences.
        </motion.p>

        {/* Collage Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
