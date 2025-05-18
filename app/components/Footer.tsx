"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-10 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400">Shanti Audio</h2>
          <p className="mt-2 text-sm text-gray-400">
            Elevating events with premium sound, light, and stage design.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="text-gray-300 hover:text-purple-400">
            Home
          </Link>
          <Link
            href="/#services"
            className="text-gray-300 hover:text-purple-400"
          >
            Services
          </Link>
          <Link
            href="/#projects"
            className="text-gray-300 hover:text-purple-400"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-gray-300 hover:text-purple-400"
          >
            Contact
          </Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-300 hover:text-purple-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-gray-300 hover:text-purple-400" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="text-gray-300 hover:text-purple-400" />
            </a>
            <a href="mailto:info@shantiaudio.com">
              <Mail className="text-gray-300 hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shanti Audio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
