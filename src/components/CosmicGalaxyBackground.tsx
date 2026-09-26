import React from 'react';
import { PolarisLogo } from './PolarisLogo';
import { SparkleIcon } from './SparkleIcon';

interface CosmicGalaxyBackgroundProps {
  isDark: boolean;
}

export const CosmicGalaxyBackground: React.FC<CosmicGalaxyBackgroundProps> = ({ isDark }) => {
  // Pre-calculated fixed positions for scattered micro-stars
  const stars = [
    // Top quadrant / Hero zone
    { top: '6%', left: '12%', size: 2.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-85' : 'opacity-55' },
    { top: '9%', left: '28%', size: 1.5, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-70' : 'opacity-40' },
    { top: '4%', left: '68%', size: 2, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-85' : 'opacity-55' },
    { top: '14%', left: '85%', size: 3, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-90' : 'opacity-65' },
    { top: '18%', left: '42%', size: 1.5, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-60' : 'opacity-35' },
    { top: '22%', left: '7%', size: 2, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-75' : 'opacity-45' },
    { top: '25%', left: '92%', size: 1.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-65' : 'opacity-40' },

    // Middle quadrant / Challenges & Solution
    { top: '34%', left: '18%', size: 2, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-80' : 'opacity-50' },
    { top: '38%', left: '78%', size: 2.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-85' : 'opacity-55' },
    { top: '44%', left: '5%', size: 1.5, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-60' : 'opacity-35' },
    { top: '48%', left: '88%', size: 2, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-75' : 'opacity-45' },
    { top: '53%', left: '32%', size: 1.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-70' : 'opacity-40' },
    { top: '57%', left: '65%', size: 3, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-90' : 'opacity-60' },

    // Lower quadrant / Features & Wearable
    { top: '64%', left: '12%', size: 2, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-80' : 'opacity-50' },
    { top: '69%', left: '94%', size: 1.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-65' : 'opacity-35' },
    { top: '75%', left: '45%', size: 2.5, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-85' : 'opacity-55' },
    { top: '81%', left: '82%', size: 2, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-75' : 'opacity-45' },
    { top: '86%', left: '8%', size: 1.5, anim: 'animate-twinkle-1', opacity: isDark ? 'opacity-60' : 'opacity-35' },
    { top: '91%', left: '62%', size: 2.5, anim: 'animate-twinkle-3', opacity: isDark ? 'opacity-80' : 'opacity-50' },
    { top: '95%', left: '25%', size: 2, anim: 'animate-twinkle-2', opacity: isDark ? 'opacity-70' : 'opacity-40' },
  ];

  // Golden Shooting Stars config (Enriched with warm golden and amber streaks in Light Mode)
  const shootingStars = [
    {
      id: 'ss-1',
      top: '7%',
      right: '16%',
      animation: 'animate-shooting-star-1',
      width: 'w-28 sm:w-36',
    },
    {
      id: 'ss-2',
      top: '19%',
      left: '24%',
      animation: 'animate-shooting-star-2',
      width: 'w-24 sm:w-32',
    },
    {
      id: 'ss-3',
      top: '36%',
      right: '20%',
      animation: 'animate-shooting-star-3',
      width: 'w-32 sm:w-40',
    },
    {
      id: 'ss-4',
      top: '52%',
      left: '14%',
      animation: 'animate-shooting-star-4',
      width: 'w-24 sm:w-32',
    },
    {
      id: 'ss-5',
      top: '70%',
      right: '25%',
      animation: 'animate-shooting-star-5',
      width: 'w-28 sm:w-36',
    },
    {
      id: 'ss-6',
      top: '87%',
      left: '30%',
      animation: 'animate-shooting-star-6',
      width: 'w-24 sm:w-36',
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-opacity duration-700"
    >
      {/* 1. Subtle Ethereal Nebula Glow Washes */}
      <div
        className={`absolute top-[-10%] left-[-5%] w-[650px] h-[650px] rounded-full blur-[130px] animate-nebula ${
          isDark
            ? 'bg-gradient-to-br from-[#1E3A8A]/35 via-[#4C1D95]/20 to-transparent'
            : 'bg-gradient-to-br from-[#CDE2FC]/60 via-[#FEF3C7]/30 to-transparent'
        }`}
      />

      <div
        className={`absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] animate-nebula ${
          isDark
            ? 'bg-gradient-to-bl from-[#0369A1]/30 via-[#312E81]/25 to-transparent'
            : 'bg-gradient-to-bl from-[#DCEAFC]/50 via-[#FDE68A]/25 to-transparent'
        }`}
        style={{ animationDelay: '-6s' }}
      />

      <div
        className={`absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] animate-nebula ${
          isDark
            ? 'bg-gradient-to-tr from-[#1E1B4B]/40 via-[#0C4A6E]/20 to-transparent'
            : 'bg-gradient-to-tr from-[#E2EDFB]/50 via-[#FEF3C7]/35 to-transparent'
        }`}
        style={{ animationDelay: '-11s' }}
      />

      {/* 2. Micro-Stars Scattered across the Galaxy Viewport */}
      {stars.map((star, idx) => (
        <div
          key={`star-${idx}`}
          className={`absolute rounded-full ${star.anim} ${star.opacity}`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: isDark
              ? idx % 3 === 0
                ? '#FDE047' // Golden shimmer
                : idx % 4 === 0
                ? '#7DD3FC' // Cyan celestial starlight
                : '#FFFFFF' // Crisp starlight
              : idx % 2 === 0
              ? '#F59E0B' // Warm golden star in light mode
              : idx % 3 === 0
              ? '#D97706' // Deep amber star in light mode
              : '#1E3A5F', // Deep navy stardust
            boxShadow: isDark
              ? idx % 3 === 0
                ? '0 0 6px 1px rgba(253, 224, 71, 0.7)'
                : '0 0 4px 1px rgba(255, 255, 255, 0.5)'
              : idx % 2 === 0
              ? '0 0 4px 1px rgba(245, 158, 11, 0.4)'
              : 'none',
          }}
        />
      ))}

      {/* 3. Delicate Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40 dark:opacity-50">
        {/* Constellation Group 1 (Top Left) */}
        <g stroke={isDark ? '#38BDF8' : '#FBBF24'} strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="12%" y1="6%" x2="16%" y2="11%" />
          <line x1="16%" y1="11%" x2="28%" y2="9%" />
        </g>
        <circle cx="16%" cy="11%" r="1.5" fill={isDark ? '#BAE6FD' : '#F59E0B'} />

        {/* Constellation Group 2 (Top Right) */}
        <g stroke={isDark ? '#818CF8' : '#F59E0B'} strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="68%" y1="4%" x2="74%" y2="10%" />
          <line x1="74%" y1="10%" x2="85%" y2="14%" />
        </g>
        <circle cx="74%" cy="10%" r="1.5" fill={isDark ? '#C7D2FE' : '#D97706'} />

        {/* Constellation Group 3 (Mid Right) */}
        <g stroke={isDark ? '#38BDF8' : '#93C5FD'} strokeWidth="0.75" strokeDasharray="4 4">
          <line x1="78%" y1="38%" x2="84%" y2="43%" />
          <line x1="84%" y1="43%" x2="88%" y2="48%" />
        </g>
        <circle cx="84%" cy="43%" r="1.5" fill={isDark ? '#BAE6FD' : '#3B82F6'} />

        {/* Constellation Group 4 (Bottom Left) */}
        <g stroke={isDark ? '#FDE047' : '#F59E0B'} strokeWidth="0.75" strokeDasharray="3 3" opacity={0.7}>
          <line x1="12%" y1="64%" x2="19%" y2="70%" />
          <line x1="19%" y1="70%" x2="25%" y2="76%" />
        </g>
        <circle cx="19%" cy="70%" r="1.5" fill={isDark ? '#FEF08A' : '#D97706'} />
      </svg>

      {/* 4. Delicate Polaris Stardust Insignias */}
      <div
        className={`absolute top-[12%] right-[6%] animate-float-slow ${
          isDark ? 'text-[#7DD3FC]/40' : 'text-[#F59E0B]/35'
        }`}
      >
        <PolarisLogo size={18} />
      </div>

      <div
        className={`absolute top-[52%] left-[3%] animate-float-gentle ${
          isDark ? 'text-[#FDE047]/35' : 'text-[#D97706]/30'
        }`}
      >
        <SparkleIcon size={14} />
      </div>

      <div
        className={`absolute top-[82%] right-[4%] animate-float-slow ${
          isDark ? 'text-[#A78BFA]/35' : 'text-[#F59E0B]/30'
        }`}
      >
        <PolarisLogo size={16} />
      </div>

      <div
        className={`absolute top-[93%] left-[14%] animate-pulse-subtle ${
          isDark ? 'text-[#38BDF8]/40' : 'text-[#D97706]/30'
        }`}
      >
        <SparkleIcon size={12} />
      </div>

      {/* 5. Rich Golden Shooting Stars (Bintang Jatuh Kuning Emas) */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className={`absolute shooting-star-item ${ss.animation} pointer-events-none flex items-center`}
          style={{
            top: ss.top,
            left: ss.left,
            right: ss.right,
          }}
        >
          {/* Glowing head of shooting star */}
          <div
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              isDark
                ? 'bg-white shadow-[0_0_8px_2px_#FDE047]'
                : 'bg-[#F59E0B] shadow-[0_0_6px_2px_#F59E0B]'
            }`}
          />
          {/* Elegant golden gradient trail */}
          <div
            className={`h-[2px] ${ss.width} rounded-full -ml-0.5 ${
              isDark
                ? 'bg-gradient-to-l from-transparent via-[#FDE047] to-white shadow-[0_0_8px_#FDE047]'
                : 'bg-gradient-to-l from-transparent via-[#FBBF24] to-[#F59E0B] shadow-[0_0_5px_rgba(245,158,11,0.5)]'
            }`}
          />
        </div>
      ))}
    </div>
  );
};
