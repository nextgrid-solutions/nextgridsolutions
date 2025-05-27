"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const images = {
  "app development": "/assets/app-developmet.webp",
  "web development": "/assets/web-development.webp",
  "software development": "/assets/software-devlopment.webp",
  "social media management": "/assets/social-media-management.webp",
  "logo design": "/assets/logo-designing.webp"
};

const Service = ({ title, description, items, color, icon, onVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(color);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [color, onVisible]);

  const imageKey = title.toLowerCase();

  return (
    <div ref={ref} className="py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block p-4 rounded-full mb-6" style={{ backgroundColor: color }}>
            <img src={icon} alt={title} className="w-12 h-12" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
          <p className="text-lg mb-8 text-gray-700">{description}</p>
          <ul className="space-y-4 mb-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-black flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/get-a-qoute"
            className="inline-block px-8 py-3 bg-none text-black font-semibold rounded-3xl border-2 transition"
          >
            Get a Quote
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[imageKey] || "https://source.unsplash.com/800x600/?technology"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  const handleServiceVisible = (color) => {
    setBackgroundColor(color);
    const isLight = ['#FEF7CD', '#C0F6EF', '#fecc79', '#a0d9ef'].includes(color);
    setTextColor(isLight ? 'black' : 'white');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundColor('white');
          setTextColor('black');
        }
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <main
      className="pt-24"
      style={{
        backgroundColor,
        color: textColor,
        transition: 'background-color 0.7s ease, color 0.7s ease'
      }}
    >
      <section ref={heroRef} className="py-36">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-10 tracking-tight leading-tight">What We Do?</h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium max-w-3xl mx-auto">
            <strong className="text-black">NextGridSolutions</strong> is an innovative media agency based in India,
            <br />
            specializing in <strong>branding</strong>, <strong>design</strong>, and <strong>digital marketing</strong> solutions.
            <br />
            We fuse creativity with strategic thinking to produce <strong>impactful results</strong>
            <br />
            for clients spanning diverse industries.
          </p>

          <hr className="mt-16 border-t border-gray-300 w-full" />
        </div>
      </section>

      <div className="container mx-auto px-6">

        <Service
          title="App Development"
          description="Our mobile app development team creates native and cross-platform applications that deliver exceptional user experiences."
          items={[
            "iOS and Android native applications",
            "Cross-platform development for wider reach",
            "User-friendly interfaces with intuitive navigation",
            "Integration with device hardware features",
            "Ongoing maintenance and support packages",
          ]}
          color="#C0F6EF"
          icon="/assets/app-icon.png"
          onVisible={handleServiceVisible}
        />
          <Service
          title="Web Development"
          description="We create custom websites and web applications that are fast, responsive, and built with modern technologies."
          items={[
            "Responsive websites that work on all devices",
            "E-commerce solutions with secure payment processing",
            "Custom web applications with robust backends",
            "Content management systems for easy updates",
            "Performance optimization for lightning-fast load times",
          ]}
          color="#BB86DE"
          icon="/assets/web-icon.png"
          onVisible={handleServiceVisible}
        />
        <Service
  title="Software Development"
  description="We build powerful software solutions tailored to your business needs, ensuring scalability, security, and performance."
  items={[
    "Custom software tailored for specific business workflows",
    "Desktop applications for Windows, macOS, and Linux",
    "API development and integration with third-party systems",
    "Scalable cloud-based solutions with modern architectures",
    "Continuous support and maintenance for software updates",
  ]}
  color="#ff7cad" // A nice contrast to #BB86DE, feel free to adjust
  icon="/assets/software-icon.png" // Replace with the actual path to your software icon
  onVisible={handleServiceVisible}
/>

        <Service
          title="Social Media Management"
          description="We help brands build and maintain a strong presence across social media platforms to engage with their audience effectively."
          items={[
            "Content strategy and calendar planning",
            "Regular posting and community engagement",
            "Performance analytics and reporting",
            "Paid social media advertising campaigns",
            "Crisis management and reputation monitoring",
          ]}
          color="#fecc79"
          icon="/assets/social-icon.png"
          onVisible={handleServiceVisible}
        />

        <Service
          title="Logo Design"
          description="Our design team creates memorable and distinctive logos and brand identities that help businesses stand out in their industry."
          items={[
            "Custom logo design with multiple concepts",
            "Complete brand identity development",
            "Style guides and brand standards documentation",
            "Print and digital asset creation",
            "Brand strategy consultation",
          ]}
          color="#a0d9ef"
          icon="/assets/design-icon.png"
          onVisible={handleServiceVisible}
        />
      </div>
    </main>
  );
};

export default Services;
