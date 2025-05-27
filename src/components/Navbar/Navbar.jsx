"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about  " },
  // { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/get-a-qoute" },
];

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Show navbar only when at the top
        setShowNavbar(true);
      } else {
        // Hide navbar if scrolled down even a little
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run on mount in case user is not at top initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sliding navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[98] bg-white shadow-md px-6 py-4 flex items-center justify-between transition-all duration-300"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/navbar-logo.png"
            alt="NextGridSolution Logo"
            width={160}
            height={60}
          />
        </Link>
      </motion.div>

      {/* Fixed Menu Button - always visible */}
      {!isOpen && (
        <motion.button
          key="menu-toggle"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-6 z-[99] bg-black text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
        >
          Menu
        </motion.button>
      )}

      {/* Animated Menu Panel */}
      <div className="fixed top-6 right-6 z-[100]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0, y: -20, width: 100, height: 40 }}
              animate={{ opacity: 1, y: 0, width: 320, height: 360 }}
              exit={{ opacity: 0, y: -20, width: 100, height: 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-black text-white rounded-3xl shadow-2xl overflow-hidden relative text-sm"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-black bg-white text-sm font-semibold px-6 py-2 rounded-xl"
              >
                Close
              </button>

              <motion.div
                className="flex flex-col items-start gap-6 w-full px-6 pt-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl font-light hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
