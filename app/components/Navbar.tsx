"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // GSAP animation on mount
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const navLinks = ["Home", "Services", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        ref={navRef}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 text-white shadow-md"
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-purple-400">Shanti</span> Audio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 text-white backdrop-blur-md py-6 px-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-lg hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
