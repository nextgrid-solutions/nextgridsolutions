"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Video scale and opacity during scroll
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.5, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between bg-white text-black px-12 overflow-hidden">
  {/* Left Content */}
  <div className="z-10 max-w-2xl text-left">
    <h1 className="text-6xl sm:text-7xl font-extrabold mb-8 leading-tight">
      Innovation
      <br />
      <span className="text-blue-400">Delivered</span>
    </h1>
    <p className="text-xl text-gray-700 max-w-lg mb-6">
      Empowering businesses to grow and adapt through transformative digital solutions,
      intelligent design, and cutting-edge technology.
    </p>
    <p className="text-lg text-gray-600 max-w-xl mb-6">
      We build scalable, high-performance software—tailored to help startups and enterprises alike
      thrive in a fast-changing digital landscape.
    </p>

    {/* Hidden SEO text */}
    <p className="sr-only">
      Leading software development company specializing in innovative digital solutions, enterprise cloud services, 
      UI/UX design, web and mobile app development, and technology consulting for businesses around the globe.
    </p>
    <Link
            href="/get-a-qoute"
            className="inline-block px-8 py-3 bg-none text-black font-semibold rounded-3xl hover:bg-[#51a2ff] border-2 transition"
          >
            Get a Quote
          </Link>
  </div>

  {/* Right Image Wrapper */}
  <div className="relative w-full max-w-xl animate-float-slow">
    {/* Main Image */}
    <img
      src="/assets/mask-home4.png"
      alt="Team designing and coding interface"
      className="w-full h-auto z-10 relative r-30"
    />
    
    {/* Overlapping Image */}
    <img
  src="/assets/mask-home4.jpg"
  alt="Mobile UI mockup"
  className="absolute right-[-20px] top-30 w-28 sm:w-36 lg:w-40 z-20 animate-slide-left-right"
/>

  </div>
</section>





      {/* Scroll-based Video Section */}
      {/* <section ref={containerRef} className="relative h-[300vh]">
       
        <div className="sticky top-0 h-screen w-full z-10 flex items-center justify-center bg-black overflow-hidden">
          <motion.video
            style={{ scale, opacity }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/home-video.mp4" type="video/mp4" />
          </motion.video>
        </div>
      </section> */}

      {/* Next Section: Achievements */}
      {/* <section className="relative z-20 bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
            <div>
              <p className="text-5xl font-bold text-blue-600">1M+</p>
              <p>Revenue Generated</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">99%</p>
              <p>Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">500+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HeroSection;
