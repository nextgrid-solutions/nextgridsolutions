"use client"
import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AchievementsSection from './AchieveSection';
import ClientsSection from './ClientSction';
import Header from './Header';

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <HeroSection />
      <AchievementsSection />
      <ClientsSection />
      
    </div>
  );
};

export default Index;