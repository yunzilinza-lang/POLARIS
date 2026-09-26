import React from 'react';

interface SparkleIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({
  className = '',
  size = 18,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
};

// Playful 4-pointed star outline
export const SparkleStarOutline: React.FC<SparkleIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
};

// Hand-drawn arrow curve SVGs
export const CurvedArrowDownRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 60 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-12 h-9 stroke-current ${className}`}
  >
    <path
      d="M8 8 C 30 5, 45 15, 42 35"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M34 29 L 42 36 L 47 27"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CurvedArrowUpLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 60 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-12 h-9 stroke-current ${className}`}
  >
    <path
      d="M52 38 C 30 38, 15 28, 18 10"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M26 16 L 18 9 L 13 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandDrawnLoopArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 70 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-14 h-10 stroke-current ${className}`}
  >
    <path
      d="M60 10 C 25 10, 15 35, 35 38 C 45 40, 52 32, 45 22 C 38 12, 10 32, 12 42"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M8 34 L 12 43 L 20 41"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
