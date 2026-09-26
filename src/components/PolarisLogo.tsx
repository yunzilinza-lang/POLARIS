import React from 'react';

interface PolarisLogoProps {
  className?: string;
  size?: number;
  color?: string; // If undefined, uses currentColor
  variant?: 'standalone' | 'black-badge' | 'inverted-badge';
}

/**
 * 100% exact vector replica of the official Polaris brand insignia from the reference image:
 * - 4 elongated cardinal compass spikes (N, S, E, W)
 * - 4 intermediate diagonal spikes (NE, NW, SE, SW)
 * - 4-arc segmented circular ring behind the star
 * - Central 4-point concave star cutout
 */
export const PolarisLogo: React.FC<PolarisLogoProps> = ({
  className = '',
  size = 36,
  color = 'currentColor',
  variant = 'standalone',
}) => {
  const logoSvg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Polaris Official Compass Logo"
    >
      {/* 4 Outer Ring Arcs */}
      <g stroke={variant === 'black-badge' ? '#FFFFFF' : color} strokeWidth="6" strokeLinecap="round">
        {/* Top-Right Arc */}
        <path d="M 116 43 A 58 58 0 0 1 157 84" />
        {/* Bottom-Right Arc */}
        <path d="M 157 116 A 58 58 0 0 1 116 157" />
        {/* Bottom-Left Arc */}
        <path d="M 84 157 A 58 58 0 0 1 43 116" />
        {/* Top-Left Arc */}
        <path d="M 43 84 A 58 58 0 0 1 84 43" />
      </g>

      {/* 8-Point Compass Star with Central Star Cutout */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`
          M 100 12
          L 114 80
          L 132 68
          L 120 86
          L 188 100
          L 120 114
          L 132 132
          L 114 120
          L 100 188
          L 86 120
          L 68 132
          L 80 114
          L 12 100
          L 80 86
          L 68 68
          L 86 80
          Z
          M 100 78
          C 100 89.5 89.5 100 78 100
          C 89.5 100 100 110.5 100 122
          C 100 110.5 110.5 100 122 100
          C 110.5 100 100 89.5 100 78
          Z
        `}
        fill={variant === 'black-badge' ? '#FFFFFF' : color}
      />
    </svg>
  );

  if (variant === 'black-badge') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-black rounded-xl p-1.5 shadow-md ${className}`}
        style={{ width: size, height: size }}
      >
        {logoSvg}
      </div>
    );
  }

  if (variant === 'inverted-badge') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-[#102A4C] dark:bg-white rounded-xl p-1 text-white dark:text-[#102A4C] shadow-sm ${className}`}
        style={{ width: size, height: size }}
      >
        {logoSvg}
      </div>
    );
  }

  return logoSvg;
};
