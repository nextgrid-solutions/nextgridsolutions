"use client"// components/OurProcess.jsx (or whatever your component file is named)
import React, { useState, useRef, useEffect } from 'react';

const phases = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'We start by understanding your goals, target audience, and market landscape to lay a strong foundation.',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description: 'Based on research, we craft a detailed plan and strategy tailored to achieve your objectives.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Our team brings the vision to life through creative design and robust development.',
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures a flawless product, followed by a strategic launch.',
  },
  {
    number: '05',
    title: 'Maintenance & Support',
    description: 'We provide ongoing support and maintenance to ensure long-term success and continuous improvement.',
  },
];

const OurProcess = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(null); // null means no phase is active
  const phaseRefs = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null); // Ref for the flex container to get its offset

  // Initialize phaseRefs array
  useEffect(() => {
    phaseRefs.current = phases.map((_, i) => phaseRefs.current[i] ?? React.createRef());
  }, []);

  // Effect to update the animated background div
  useEffect(() => {
    const updateAnimationBox = () => {
      if (activePhaseIndex !== null && phaseRefs.current[activePhaseIndex] && animationRef.current && containerRef.current) {
        const activeEl = phaseRefs.current[activePhaseIndex].current;
        const containerEl = containerRef.current;

        // Get relative position to the container
        const containerRect = containerEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        animationRef.current.style.opacity = '1';
        animationRef.current.style.transform = `translateY(${activeRect.top - containerRect.top}px)`;
        animationRef.current.style.height = `${activeRect.height}px`;
        animationRef.current.style.width = `${activeRect.width}px`;
      } else if (animationRef.current) {
        // Hide the animation box when no phase is active
        animationRef.current.style.opacity = '0';
      }
    };

    updateAnimationBox(); // Call initially and on index change

    // Add resize listener to re-calculate positions
    window.addEventListener('resize', updateAnimationBox);
    return () => window.removeEventListener('resize', updateAnimationBox);
  }, [activePhaseIndex]);

  const handleMouseEnter = (index) => {
    setActivePhaseIndex(index);
  };

  const handleMouseLeave = () => {
    setActivePhaseIndex(null);
  };

  const handleFocus = (index) => {
    setActivePhaseIndex(index);
  };

  const handleBlur = () => {
    // We can't immediately set to null on blur, as moving focus between elements
    // within the list would momentarily hide the background.
    // A common pattern is to use a timeout to check if focus moved to another
    // item in the same list. For simplicity here, we'll keep it active on blur
    // until another item is explicitly focused or mouse leaves the whole container.
    // For robust mobile behavior, the tap will keep it focused until another tap occurs.
    // If you want it to disappear on tap *outside* the list, you'd need a click listener on document.
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-gray-600">
          We follow a structured approach to every project, ensuring quality, efficiency,
          and client satisfaction at every step.
        </p>
      </section>

      <div className="relative flex flex-col"
           ref={containerRef}
           onMouseLeave={handleMouseLeave} // Hide animation when mouse leaves the whole container
      >
        {/* The animated black background layer */}
        <div
          ref={animationRef}
          className="absolute top-0 left-0 bg-black transition-all duration-500 ease-in-out z-0 opacity-0" // Increased duration for a slower flow
          style={{
            // Initial styles, will be overridden by JS.
            // opacity: 0; is important to keep it hidden until activePhaseIndex is set
          }}
        ></div>

        {phases.map((phase, index) => (
          <div
            key={index}
            ref={phaseRefs.current[index]}
            tabIndex="0" // Makes the div focusable for mobile taps and keyboard navigation
            onMouseEnter={() => handleMouseEnter(index)}
            onFocus={() => handleFocus(index)}
            // onMouseLeave and onBlur for individual items are handled by the container's onMouseLeave
            // For blur, you need to handle it carefully to avoid flickering when tabbing between items.
            // A more robust solution might involve checking if the next focused element is within the list.
            className={`
              relative w-full min-h-[30vh] text-center flex flex-col items-center justify-center
              p-6 z-10 // Ensure content is above the animation layer
              cursor-pointer
              focus:outline-none 
              ${activePhaseIndex === index ? 'text-white' : 'text-gray-900'} // Apply text color based on active state
              transition-colors duration-300 // For text color transition
            `}
            // Important: We remove bg-white and hover:bg-black here. The animationRef handles the background.
          >
            {/* Number - text color changes based on active state */}
            <div className={`absolute top-4 right-4 text-5xl font-bold transition-colors duration-300
                            ${activePhaseIndex === index ? 'text-gray-400' : 'text-gray-200'}`}>
              {phase.number}
            </div>
            {/* Title - text color changes based on active state */}
            <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300
                            ${activePhaseIndex === index ? 'text-white' : 'text-gray-900'}`}>
              {phase.title}
            </h3>
            {/* Description - text color changes based on active state */}
            <p className={`max-w-xl text-sm transition-colors duration-300
                           ${activePhaseIndex === index ? 'text-gray-100' : 'text-gray-600'}`}>
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OurProcess;