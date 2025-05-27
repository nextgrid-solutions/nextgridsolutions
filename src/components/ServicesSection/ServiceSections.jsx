// components/ServicesSection.jsx
"use client"
import { FaMobileAlt, FaLaptopCode, FaCode, FaPaintBrush  } from 'react-icons/fa';
import { IoShareSocial } from "react-icons/io5";
import Link from 'next/link';

const services = [
    {
      title: 'Mobile App Development',
      description:
        'Developing engaging mobile apps that meet your unique business requirements effectively.',
      icon: <FaMobileAlt size={40} />,
    },
    {
      title: 'Web Development',
      description:
        'Creating responsive websites that enhance user experience and elevate your online presence.',
      icon: <FaLaptopCode size={40} />,
    },
    {
      title: 'Software Development',
      description:
        'Delivering customized software solutions that address your specific business needs efficiently.',
      icon: <FaCode size={40} />,
    },
    {
      title: 'Logo Designing',
      description:
        'Crafting unique and memorable logos to establish and strengthen your brand identity.',
      icon: <FaPaintBrush size={40} />,
    },
    {
      title: 'Social Media Management',
      description:
        'Advanced AI technologies to optimize processes and support intelligent solutions.',
      icon: <IoShareSocial size={40} />,
    },
  ];

export default function ServicesSection() {
  return (
    <section className="bg-purple-50 py-20">
  <div className="max-w-7xl mx-auto text-center">
    <h4 className="text-blue-600 font-semibold text-sm mb-2">What We Provide</h4>
    <h2 className="text-4xl font-bold mb-10">
      We Provide clients with Award Winning{' '}
      <span className="text-blue-600 underline decoration-wavy">Features</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          tabIndex="0" // Makes the div focusable
          role="link" // Semantically indicates it behaves like a link
          aria-label={`Learn more about ${service.title}`} // Good for screen readers
          className={`group relative shadow-md px-6 py-12 h-[320px] flex flex-col justify-start text-left transition duration-300 cursor-pointer focus:outline-none  focus:ring-opacity-50 ${
            service.active
              ? 'bg-blue-700 text-white'
              : 'bg-white text-gray-900 hover:bg-black hover:text-white focus:bg-black focus:text-white'
          }`}
          // Optional: Add an onClick to navigate directly if the whole card should be clickable
          // onClick={() => window.location.href = '/services'} // Or use Next.js router.push('/services')
        >
          {/* Icon */}
          <div className="mb-4 text-4xl group-hover:text-white group-focus:text-white">{service.icon}</div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 mt-4 group-hover:text-white group-focus:text-white">{service.title}</h3>

          {/* Description */}
          <p className="text-sm group-hover:text-white group-focus:text-white mb-12">{service.description}</p>

          {/* Read More button - revealed on hover/focus and slides in from left */}
          <Link
            href="/services"
            tabIndex="-1" // Makes the Link not part of the natural tab order if the parent div handles navigation
            className="absolute bottom-6 left-0 group-hover:left-6 group-focus:left-6 group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-all duration-300 ease-out text-sm font-semibold text-blue-400 hover:underline focus:underline"
          >
            Read More <span className="ml-1">→</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
