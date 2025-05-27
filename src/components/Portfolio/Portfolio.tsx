"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModel";
import Link from 'next/link';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set<number>());
  const [hydrated, setHydrated] = useState(false);
  const projectRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const projects = [
    {
      id: 1,
      title: "NextGen E-Commerce Platform",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "A high-performance e-commerce platform designed to enhance user experience and boost conversions.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
      details: "Redesigned a major e-commerce site, resulting in a 40% increase in conversions and 60% improvement in user engagement.",
    },
    {
      id: 2,
      title: "Smart Gym Management System",
      category: "Software Development",
      image: "https://www.weblineindia.com/wp-content/uploads/2018/09/gym-management-app.jpg",
      description: "A powerful management system for gyms and fitness centers with real-time analytics and membership tracking.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      details: "Built an analytics dashboard and management suite to track user activity and optimize business performance.",
    },
    {
      id: 3,
      title: "Web Applications",
      category: "Web Development",
      image: "https://axiomq.com/wp-content/uploads/2021/11/UX-Design-2_.jpg",
      description: "A secure, intuitive banking application with real-time transactions and biometric authentication.",
      technologies: ["React.js", "Next.js", "Node.js", "MongoDB"],
      details: "Delivered a responsive and secure mobile banking solution with seamless navigation and biometric login.",
    },
    {
      id: 4,
      title: "Creative Brand Identity Design",
      category: "UI/UX Design",
      image: "https://www.andacademy.com/resources/wp-content/uploads/2023/10/image2-1024x607.webp",
      description: "Logo and branding solutions tailored to express brand personality and boost visual recognition.",
      technologies: ["Figma", "Illustrator", "Canva"],
      details: "Designed modern logos and brand elements for startups, ensuring consistent and memorable visual identity.",
    },
    
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (!id) return;

          const numericId = Number(id);

          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(numericId));
          } else {
            setVisibleProjects((prev) => {
              const newSet = new Set(prev);
              newSet.delete(numericId);
              return newSet;
            });
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    Object.values(projectRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hydrated]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
     <section className="pt-32 pb-24">
  <div className="max-w-7xl mx-auto px-6 pt-12">
    <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 animate-fade-in">
    Featured Projects
    </h1>
    <div className="w-24 h-1 bg-black mb-12 animate-fade-in"></div>
    <p className="text-xl text-gray-600 max-w-3xl animate-fade-in">
        Explore our most impactful projects—crafted with innovation, precision, and a passion for design.
        From high-performance web applications to immersive UI/UX experiences, these highlights reflect our commitment
        to excellence and creative problem-solving.
      </p>
      <p className="text-lg text-gray-500 mt-6 max-w-3xl animate-fade-in">
        Whether working with ambitious startups or global enterprises, we deliver tailor-made digital solutions
        that inspire and perform. Scroll down to see the ideas we've brought to life.
      </p>
  </div>
</section>


      {/* Projects List */}
      <section className="pb-24 ">
        <div className="max-w-7xl mx-auto px-6 space-y-24 ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              data-id={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="flex flex-col md:flex-row items-center md:items-start gap-10 cursor-pointer shadow-xl p-2"
              
              initial={{ opacity: 0, y: 40 }}
              animate={
                hydrated && visibleProjects.has(project.id)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              suppressHydrationWarning
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden  shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 uppercase">
                  {project.category}
                </p>
                <p className="text-gray-600">{project.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800 mt-4">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      {tech}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800" onClick={() => setSelectedProject(project)}>
                  View Details
                </button>
                <Link
            href="/get-a-qoute"
            className="inline-block px-8 py-3 bg-none text-black font-semibold rounded-3xl border-2 transition ml-4"
          >
            Get a Quote
          </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {hydrated && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
