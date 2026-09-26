/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheChallenge } from './components/TheChallenge';
import { OurSolution } from './components/OurSolution';
import { CoreFeatures } from './components/CoreFeatures';
import { HowItWorks } from './components/HowItWorks';
import { WearableShowcase } from './components/WearableShowcase';
import { Footer } from './components/Footer';
import { UserResearchModal } from './components/UserResearchModal';
import { CosmicGalaxyBackground } from './components/CosmicGalaxyBackground';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('polaris_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-[#F6FAFF]', 'text-[#173B64]');
      document.body.classList.add('bg-[#0B1526]', 'text-slate-100');
      localStorage.setItem('polaris_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#0B1526]', 'text-slate-100');
      document.body.classList.add('bg-[#F6FAFF]', 'text-[#173B64]');
      localStorage.setItem('polaris_theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Subtle Cosmic Galaxy Background (Tailored for Dark & Light modes) */}
      <CosmicGalaxyBackground isDark={isDark} />

      {/* Sticky Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleDark={toggleDarkMode}
        onOpenResearch={() => setIsResearchModalOpen(true)}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenResearch={() => setIsResearchModalOpen(true)}
          onExploreClick={handleScrollToFeatures}
        />

        {/* 2. The Challenge */}
        <TheChallenge />

        {/* 3. Our Solution */}
        <OurSolution onExploreClick={handleScrollToFeatures} />

        {/* 4. Core Features */}
        <CoreFeatures />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Wearable Showcase */}
        <WearableShowcase />
      </main>

      {/* Footer */}
      <Footer onOpenResearch={() => setIsResearchModalOpen(true)} />

      {/* User Research & Early Access Modal */}
      <UserResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
    </div>
  );
}
