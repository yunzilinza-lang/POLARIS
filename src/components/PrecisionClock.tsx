import React, { useEffect, useRef, useState } from 'react';
import { PolarisLogo } from './PolarisLogo';

interface PrecisionClockProps {
  pointerOffset?: { x: number; y: number };
  scrollProgress?: number;
  isReducedMotion?: boolean;
}

export const PrecisionClock: React.FC<PrecisionClockProps> = ({
  pointerOffset = { x: 0, y: 0 },
  scrollProgress = 0,
  isReducedMotion = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hourHandRef = useRef<SVGLineElement>(null);
  const minuteHandRef = useRef<SVGLineElement>(null);
  const secondHandRef = useRef<SVGGElement>(null);
  const dialGlowRef = useRef<SVGCircleElement>(null);
  const dateTextRef = useRef<SVGTextElement>(null);

  const [dateDisplay, setDateDisplay] = useState<{ day: string; date: string }>({
    day: 'MON',
    date: '28',
  });

  useEffect(() => {
    // Initial date string
    const updateDate = () => {
      const now = new Date();
      const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      setDateDisplay({
        day: dayNames[now.getDay()],
        date: String(now.getDate()).padStart(2, '0'),
      });
    };
    updateDate();

    let animationFrameId: number;
    let isVisible = document.visibilityState === 'visible';

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible) {
        updateDate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Frame-rate independent continuous mechanical clock engine
    const renderClock = () => {
      if (isVisible) {
        const now = new Date();
        const ms = now.getMilliseconds();
        const seconds = now.getSeconds() + ms / 1000;
        const minutes = now.getMinutes() + seconds / 60;
        const hours = (now.getHours() % 12) + minutes / 60;

        // Continuous angles
        const secondAngle = seconds * 6; // 360 / 60
        const minuteAngle = minutes * 6; // 360 / 60
        const hourAngle = hours * 30; // 360 / 12

        if (secondHandRef.current) {
          secondHandRef.current.setAttribute(
            'transform',
            `rotate(${secondAngle.toFixed(3)}, 150, 150)`
          );
        }

        if (minuteHandRef.current) {
          minuteHandRef.current.setAttribute(
            'transform',
            `rotate(${minuteAngle.toFixed(3)}, 150, 150)`
          );
        }

        if (hourHandRef.current) {
          hourHandRef.current.setAttribute(
            'transform',
            `rotate(${hourAngle.toFixed(3)}, 150, 150)`
          );
        }

        // Subtle dial breathing: gentle ~4.5s luminosity cycle
        if (dialGlowRef.current && !isReducedMotion) {
          const t = performance.now() / 1000;
          const breatheOpacity = 0.08 + Math.sin(t * 1.35) * 0.035;
          dialGlowRef.current.setAttribute('opacity', breatheOpacity.toFixed(3));
        }
      }

      animationFrameId = requestAnimationFrame(renderClock);
    };

    animationFrameId = requestAnimationFrame(renderClock);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isReducedMotion]);

  // Generate 60 precision bezel tick marks
  const tickMarks = [];
  for (let i = 0; i < 60; i++) {
    const isHour = i % 5 === 0;
    const angle = i * 6;
    const rad = (angle * Math.PI) / 180;
    const rOuter = 132;
    const rInner = isHour ? 122 : 127;
    const x1 = 150 + rOuter * Math.sin(rad);
    const y1 = 150 - rOuter * Math.cos(rad);
    const x2 = 150 + rInner * Math.sin(rad);
    const y2 = 150 - rInner * Math.cos(rad);

    tickMarks.push({
      key: i,
      x1,
      y1,
      x2,
      y2,
      isHour,
      angle,
    });
  }

  // Scroll transformation: scale 1 -> 0.94, translateY 0 -> -20px, opacity 1 -> 0.96
  const scrollScale = isReducedMotion ? 1 : 1 - 0.06 * scrollProgress;
  const scrollTranslateY = isReducedMotion ? 0 : -20 * scrollProgress;
  const scrollOpacity = isReducedMotion ? 1 : 1 - 0.04 * scrollProgress;

  // Pointer depth parallax: max 4px horizontal, 3px vertical
  const pointerX = isReducedMotion ? 0 : pointerOffset.x * 4;
  const pointerY = isReducedMotion ? 0 : pointerOffset.y * 3;

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] sm:w-[360px] md:w-[410px] aspect-square flex items-center justify-center select-none"
      style={{
        transform: `translate3d(${pointerX.toFixed(2)}px, ${(
          pointerY + scrollTranslateY
        ).toFixed(2)}px, 0) scale(${scrollScale.toFixed(3)})`,
        opacity: scrollOpacity,
        willChange: 'transform, opacity',
      }}
    >
      {/* Precision Instrument Shadow Pedestal */}
      <div className="absolute -bottom-4 w-[75%] h-12 bg-[#0B1A30]/30 dark:bg-black/60 rounded-full blur-2xl pointer-events-none transition-transform duration-700" />

      {/* Main Clock Instrument Casing */}
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-[0_25px_50px_rgba(7,18,36,0.6)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Titanium Bezel Gradient */}
          <linearGradient id="titaniumBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E5C82" />
            <stop offset="25%" stopColor="#1B3150" />
            <stop offset="50%" stopColor="#10233B" />
            <stop offset="75%" stopColor="#25426B" />
            <stop offset="100%" stopColor="#0B1728" />
          </linearGradient>

          {/* Precision Golden Chamfer Ring */}
          <linearGradient id="goldChamfer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D88C" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#FFEAA7" />
            <stop offset="100%" stopColor="#9C7A1D" />
          </linearGradient>

          {/* Deep Sunray Dial Gradient */}
          <radialGradient id="dialRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#142C4E" />
            <stop offset="55%" stopColor="#0A182D" />
            <stop offset="85%" stopColor="#061120" />
            <stop offset="100%" stopColor="#040A14" />
          </radialGradient>

          {/* Sapphire Glass Reflection */}
          <linearGradient id="sapphireGlare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
            <stop offset="25%" stopColor="#A3C4EB" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Dial Lume Glow */}
          <radialGradient id="dialBreathe" cx="50%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#1D70E2" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B1526" stopOpacity="0" />
          </radialGradient>

          {/* Gold Hand Fill Gradient */}
          <linearGradient id="handGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE885" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* 1. Outer Aerospace Bezel (Brushed Titanium) */}
        <circle
          cx="150"
          cy="150"
          r="147"
          fill="url(#titaniumBezel)"
          stroke="#476894"
          strokeWidth="1.5"
        />

        {/* 2. Precision Warm Gold Chamfer Ring */}
        <circle
          cx="150"
          cy="150"
          r="142"
          fill="none"
          stroke="url(#goldChamfer)"
          strokeWidth="1.8"
          strokeOpacity="0.85"
        />

        {/* 3. Deep Beveled Chapter Step */}
        <circle
          cx="150"
          cy="150"
          r="137"
          fill="#060F1A"
          stroke="#1E3A5F"
          strokeWidth="1.2"
        />

        {/* 4. Main Cosmic Sunray Dial Face */}
        <circle
          cx="150"
          cy="150"
          r="134"
          fill="url(#dialRadial)"
        />

        {/* 5. Breathing Ambient Light Layer */}
        <circle
          ref={dialGlowRef}
          cx="150"
          cy="150"
          r="130"
          fill="url(#dialBreathe)"
          opacity="0.08"
          pointerEvents="none"
        />

        {/* 6. Concentric Guilloché Accent Rings */}
        <circle cx="150" cy="150" r="116" stroke="rgba(163, 196, 235, 0.07)" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="92" stroke="rgba(163, 196, 235, 0.05)" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="68" stroke="rgba(163, 196, 235, 0.06)" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="42" stroke="rgba(163, 196, 235, 0.05)" strokeWidth="0.8" fill="none" />

        {/* 7. Precision Tick Marks (60 Minutes & 12 Luminous Hour Batons) */}
        {tickMarks.map((tick) =>
          tick.isHour ? (
            <g key={tick.key}>
              {/* Outer Golden Hour Marker Base */}
              <line
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="url(#goldChamfer)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              {/* Luminous Core Insert */}
              <line
                x1={tick.x1 + (tick.x2 - tick.x1) * 0.2}
                y1={tick.y1 + (tick.y2 - tick.y1) * 0.2}
                x2={tick.x2 - (tick.x2 - tick.x1) * 0.2}
                y2={tick.y2 - (tick.y2 - tick.y1) * 0.2}
                stroke="#E0F2FE"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>
          ) : (
            <line
              key={tick.key}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke="#688AB5"
              strokeWidth="0.85"
              strokeOpacity="0.45"
            />
          )
        )}

        {/* 8. 12 O'Clock: Signature Polaris Compass Star */}
        <g transform="translate(150, 48)">
          <path
            d="M0 -10 L2.2 -2.5 L9.5 0 L2.2 2.5 L0 10 L-2.2 2.5 L-9.5 0 L-2.2 -2.5 Z"
            fill="url(#goldChamfer)"
            filter="drop-shadow(0 0 3px rgba(255, 222, 112, 0.6))"
          />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>

        {/* 9. Dial Typography & Precision Markings */}
        {/* Brand Name */}
        <text
          x="150"
          y="82"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
          letterSpacing="4"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="drop-shadow-sm select-none"
        >
          POLARIS
        </text>

        {/* Subtitle Instrument Class */}
        <text
          x="150"
          y="93"
          textAnchor="middle"
          fill="#8BAFD4"
          fontSize="5.2"
          fontWeight="600"
          letterSpacing="2.2"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="select-none opacity-80"
        >
          CHRONOMETER
        </text>

        {/* Sub-Dial Aperture (Date & Time Harmony Window at 6 o'clock) */}
        <g transform="translate(150, 204)">
          {/* Recessed Frame */}
          <rect
            x="-25"
            y="-9"
            width="50"
            height="18"
            rx="5"
            fill="#050B14"
            stroke="#1D3556"
            strokeWidth="1.2"
          />
          {/* Inner Accent Line */}
          <line x1="-2" y1="-5" x2="-2" y2="5" stroke="#1F3D63" strokeWidth="0.8" />
          {/* Day */}
          <text
            x="-13"
            y="3.5"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="6.8"
            fontWeight="700"
            fontFamily="monospace"
          >
            {dateDisplay.day}
          </text>
          {/* Date */}
          <text
            ref={dateTextRef}
            x="11"
            y="3.5"
            textAnchor="middle"
            fill="#FFDE70"
            fontSize="7.8"
            fontWeight="800"
            fontFamily="monospace"
          >
            {dateDisplay.date}
          </text>
        </g>

        {/* Automatic Precision Cadence Print */}
        <text
          x="150"
          y="226"
          textAnchor="middle"
          fill="#6488B0"
          fontSize="5"
          fontWeight="600"
          letterSpacing="1.5"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="select-none opacity-70"
        >
          AUTOMATIC • 28,800 VPH
        </text>

        {/* 10. REAL-TIME CONTINUOUS MECHANICAL CLOCK HANDS */}

        {/* HOUR HAND (Smooth, continuous rotation) */}
        <line
          ref={hourHandRef}
          x1="150"
          y1="164"
          x2="150"
          y2="92"
          stroke="#E2E8F0"
          strokeWidth="5"
          strokeLinecap="round"
          filter="drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7))"
        />
        {/* Hour Hand Inner Gold Trench */}
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="98"
          stroke="url(#handGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          pointerEvents="none"
          opacity="0"
        />

        {/* MINUTE HAND (Long, elegant sword hand) */}
        <line
          ref={minuteHandRef}
          x1="150"
          y1="168"
          x2="150"
          y2="58"
          stroke="#FFFFFF"
          strokeWidth="3.4"
          strokeLinecap="round"
          filter="drop-shadow(0 3px 8px rgba(0, 0, 0, 0.75))"
        />

        {/* SECOND HAND (Ultra-slim continuous mechanical sweep needle) */}
        <g ref={secondHandRef} filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))">
          {/* Main Needle */}
          <line
            x1="150"
            y1="178"
            x2="150"
            y2="42"
            stroke="#FFDE70"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          {/* Electric Cyan Accent Tip */}
          <line
            x1="150"
            y1="48"
            x2="150"
            y2="42"
            stroke="#38BDF8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Circular Polaris Counterweight */}
          <circle
            cx="150"
            cy="166"
            r="4.2"
            fill="none"
            stroke="#FFDE70"
            strokeWidth="1.4"
          />
        </g>

        {/* 11. Center Pinion Cap (Multi-tier Polished Jewel Cap) */}
        <circle cx="150" cy="150" r="8" fill="#142B4B" stroke="#E2E8F0" strokeWidth="1.2" />
        <circle cx="150" cy="150" r="5" fill="url(#goldChamfer)" />
        <circle cx="150" cy="150" r="2.2" fill="#0C192C" />
        <circle cx="149" cy="149" r="0.8" fill="#FFFFFF" opacity="0.8" />

        {/* 12. Curved 2.5D Sapphire Glass Glare (Upper Crescent Reflection) */}
        <path
          d="M 50 120 A 134 134 0 0 1 230 65 A 130 110 0 0 0 50 120 Z"
          fill="url(#sapphireGlare)"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
};
