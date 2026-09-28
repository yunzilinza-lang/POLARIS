import React from 'react';

export type PixelEmotion = 'normal' | 'happy' | 'thinking' | 'sleepy' | 'alert' | 'sos';

interface PixelRobotAvatarProps {
  emotion?: PixelEmotion;
  size?: number;
  className?: string;
  glow?: boolean;
}

export const PixelRobotAvatar: React.FC<PixelRobotAvatarProps> = ({
  emotion = 'normal',
  size = 48,
  className = '',
  glow = true,
}) => {
  const isSOS = emotion === 'sos';

  // Base colors
  const primaryColor = isSOS ? '#EF4444' : '#FFFFFF';
  const secondaryColor = isSOS ? '#FCA5A5' : '#FFDE70';
  const glowColor = isSOS ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 222, 112, 0.3)';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: size,
        height: size,
        filter: glow ? `drop-shadow(0 0 ${size * 0.15}px ${glowColor})` : undefined,
      }}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Antenna at top */}
        <rect x="22" y="3" width="4" height="6" rx="1" fill={primaryColor} />
        <circle cx="24" cy="3" r="3" fill={secondaryColor} />
        {isSOS && (
          <circle
            cx="24"
            cy="3"
            r="5"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="animate-ping"
            opacity="0.8"
          />
        )}

        {/* Outer Robot Head Chassis */}
        <rect
          x="7"
          y="9"
          width="34"
          height="32"
          rx="7"
          fill={isSOS ? '#7F1D1D' : '#0B1728'}
          stroke={primaryColor}
          strokeWidth="2.5"
        />

        {/* Small ears / side lugs */}
        <rect x="4" y="21" width="3" height="8" rx="1.5" fill={primaryColor} />
        <rect x="41" y="21" width="3" height="8" rx="1.5" fill={primaryColor} />

        {/* Robot Eyes / Facial Expressions */}
        {emotion === 'normal' && (
          <g fill={primaryColor}>
            {/* Left Eye */}
            <rect x="15" y="21" width="5" height="6" rx="1.5" />
            {/* Right Eye */}
            <rect x="28" y="21" width="5" height="6" rx="1.5" />
            {/* Cheeks */}
            <circle cx="14" cy="31" r="1.5" fill={secondaryColor} opacity="0.8" />
            <circle cx="34" cy="31" r="1.5" fill={secondaryColor} opacity="0.8" />
            {/* Mouth */}
            <rect x="22" y="28" width="4" height="2" rx="1" fill={primaryColor} />
          </g>
        )}

        {emotion === 'happy' && (
          <g stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round">
            {/* Left Eye Arch */}
            <path d="M14 24 Q17 19 20 24" />
            {/* Right Eye Arch */}
            <path d="M28 24 Q31 19 34 24" />
            {/* Smile Mouth */}
            <path d="M21 28 Q24 32 27 28" strokeWidth="2" />
            {/* Cheeks */}
            <circle cx="13" cy="27" r="2" fill="#F472B6" stroke="none" />
            <circle cx="35" cy="27" r="2" fill="#F472B6" stroke="none" />
          </g>
        )}

        {emotion === 'thinking' && (
          <g fill={primaryColor}>
            {/* Left Eye Looking Up Right */}
            <rect x="16" y="19" width="5" height="5" rx="1.5" />
            {/* Right Eye Looking Up Right */}
            <rect x="29" y="19" width="5" height="5" rx="1.5" />
            {/* Curious Mouth */}
            <circle cx="24" cy="29" r="2" stroke={primaryColor} strokeWidth="1.5" fill="none" />
            {/* Thinking Sparks top right */}
            <path
              d="M38 7 L40 9 M40 7 L38 9"
              stroke={secondaryColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {emotion === 'sleepy' && (
          <g stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round">
            {/* Left Eye Closed Line */}
            <path d="M14 24 L20 24" />
            {/* Right Eye Closed Line */}
            <path d="M28 24 L34 24" />
            {/* Sleepy Mouth */}
            <path d="M22 28 Q24 26 26 28" strokeWidth="1.5" />
            {/* ZZZ indicator */}
            <path
              d="M37 11 H41 L37 15 H41"
              stroke={secondaryColor}
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
          </g>
        )}

        {emotion === 'alert' && (
          <g fill={primaryColor}>
            {/* Left Eye Wide */}
            <circle cx="17.5" cy="23" r="4.5" fill="none" stroke={primaryColor} strokeWidth="2" />
            <circle cx="17.5" cy="23" r="2" fill={secondaryColor} />
            {/* Right Eye Wide */}
            <circle cx="30.5" cy="23" r="4.5" fill="none" stroke={primaryColor} strokeWidth="2" />
            <circle cx="30.5" cy="23" r="2" fill={secondaryColor} />
            {/* O Mouth */}
            <ellipse cx="24" cy="30" rx="2" ry="2.5" fill={primaryColor} />
          </g>
        )}

        {emotion === 'sos' && (
          <g fill="#EF4444">
            {/* Left Eye X */}
            <path
              d="M15 20 L21 26 M21 20 L15 26"
              stroke="#EF4444"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Right Eye X */}
            <path
              d="M27 20 L33 26 M33 20 L27 26"
              stroke="#EF4444"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Wavy SOS Mouth */}
            <path
              d="M20 30 Q22 28 24 30 T28 30"
              stroke="#FCA5A5"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Warning sound waves */}
            <path
              d="M6 13 Q3 17 6 21"
              stroke="#EF4444"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M42 13 Q45 17 42 21"
              stroke="#EF4444"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
