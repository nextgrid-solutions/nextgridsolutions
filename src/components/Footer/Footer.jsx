"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set isVisible based on whether the footer is currently intersecting the viewport
          // Now, it will become true only when 50% or more of the footer is visible
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the footer is visible
        // You can experiment with other values:
        // 0.25 for 25% visible
        // 0.75 for 75% visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden" ref={footerRef}>
      {/* Animated Background Text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none // ensures text doesn't block clicks
                    text-gray-700 // very dark gray to appear as a subtle background
                    transition-all duration-1000 ease-out // animation properties
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        style={{ zIndex: 0 }}
      >
        <span className="font-extrabold text-5xl md:text-7xl lg:text-[10rem] xl:text-[10rem] leading-none mb-2">
          NextGridSolutions
        </span>
        {/* <span className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-none">
          Solutions
        </span> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <Link href="/" className="text-white font-bold text-xl tracking-tighter mb-6 block">
              NextGrid<span className="text-gray-400">Solutions</span>
            </Link>
            <p className="text-gray-400 mb-6">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nextgrid.solutions?igsh=MTM2dHh5YmRhM2VkcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/676849"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Whatsapp"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/get-a-qoute" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:nextgrid.solutions@gmail.com" className="hover:text-white transition-colors">
                  nextgrid.solutions@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919664245743" className="hover:text-white transition-colors">
                  +91 96642 45743
                </a>
                <span> / </span>
                <a href="tel:+919321581121" className="hover:text-white transition-colors">
                  +91 93215 81121
                </a>
              </li>
              <li>
                {/* Plot 15 Room 4 Line M */}
                <br />
                Shivaji Nagar,Govandi
                <br />
                Mumbai 400 043
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NextGridSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;