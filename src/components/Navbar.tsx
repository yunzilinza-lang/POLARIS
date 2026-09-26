import React, { useState } from 'react';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
  onOpenResearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleDark,
  onOpenResearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'about', label: 'About', href: '#the-challenge' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F6FAFF]/95 dark:bg-[#0B1526]/95 border-b border-[#D5E5F7] dark:border-[#1A2E4B]/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Polaris Brand Lockup */}
        <a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => setActiveNav('home')}
        >
          {/* Black Square/Rounded Badge matching uploaded reference */}
          <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center transition-all group-hover:scale-105 duration-300 shadow-md border border-neutral-800">
            <PolarisLogo size={26} color="#FFFFFF" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#102A4C] dark:text-white">
            Polaris
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[#102A4C] dark:text-white font-bold'
                    : 'text-[#3B5A7E] dark:text-[#9BB4D0] hover:text-[#102A4C] dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#102A4C] dark:bg-[#FFDE70] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Zone: Dark Mode Pill Switch & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Pill Light/Dark Toggle */}
          <button
            type="button"
            onClick={onToggleDark}
            aria-label="Toggle theme mode"
            className="relative flex items-center p-1 w-16 h-8 rounded-full bg-[#E1EEFB] dark:bg-[#1A2E4A] border border-[#BED6F3] dark:border-[#274066] transition-colors cursor-pointer"
          >
            <div
              className={`absolute w-6 h-6 rounded-full bg-white dark:bg-[#102035] shadow-xs flex items-center justify-center text-[#102A4C] dark:text-[#FFDE70] transition-transform duration-300 ease-spring ${
                isDark ? 'translate-x-8' : 'translate-x-0'
              }`}
            >
              {isDark ? <Moon size={14} className="fill-current" /> : <Sun size={14} />}
            </div>
            <div className="w-full flex justify-between items-center px-1.5 text-xs text-[#4A6D95] dark:text-[#7D9FBF]">
              <Sun size={13} className={!isDark ? 'opacity-0' : 'opacity-100'} />
              <Moon size={13} className={isDark ? 'opacity-0' : 'opacity-100'} />
            </div>
          </button>

          {/* Yellow CTA Button */}
          <button
            type="button"
            onClick={onOpenResearch}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFDE70] hover:bg-[#FCD34D] text-[#102A4C] font-bold text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full bg-[#E1EEFB] dark:bg-[#1A2E4A] text-[#102A4C] dark:text-[#FFDE70]"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl bg-[#E1EEFB] dark:bg-[#172B47] text-[#102A4C] dark:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#F6FAFF] dark:bg-[#0B1526] border-b border-[#D5E5F7] dark:border-[#1A2E4B] shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                  activeNav === link.id
                    ? 'bg-[#E1EEFB] dark:bg-[#1A2E4A] text-[#102A4C] dark:text-white font-bold'
                    : 'text-[#3B5A7E] dark:text-[#9BB4D0]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResearch();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFDE70] text-[#102A4C] font-bold text-base shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
