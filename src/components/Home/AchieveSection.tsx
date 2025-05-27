"use client"
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Calendar, Rocket } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

const achievements: Achievement[] = [
 
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Clients who recommend our services'
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    number: 2,
    suffix: '+',
    label: 'Innovations Launched',
    description: 'Cutting-edge digital products brought to market',
  },
  {
    icon: <Award className="w-12 h-12 text-purple-600" />,
    number: 10,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects'
  },
  {
    icon: <Users className="w-12 h-12 text-orange-600" />,
    number: 5,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Successfully served applications to client'
  }
];

const CountUpNumber = ({ targetNumber, suffix, isVisible }: { targetNumber: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentCount = Math.min(currentStep * increment, targetNumber);
      setCount(Math.floor(currentCount));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(targetNumber);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetNumber, isVisible]);

  return (
    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className={`text-center p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                {achievement.icon}
              </div>
              <div className="mb-4">
                <CountUpNumber 
                  targetNumber={achievement.number} 
                  suffix={achievement.suffix}
                  isVisible={isVisible}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {achievement.label}
              </h3>
              <p className="text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
