import React from 'react';

interface AshokaChakraProps {
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

export const AshokaChakra: React.FC<AshokaChakraProps> = ({
  className = '',
  size = 24,
  color = '#000080',
  animate = false,
}) => {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${animate ? 'animate-[spin_30s_linear_infinite]' : ''} ${className}`}
      aria-label="Ashoka Chakra"
      role="img"
    >
      {/* Outer circular rim */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="4" />
      {/* Inner circular hub */}
      <circle cx="50" cy="50" r="10" fill={color} />
      <circle cx="50" cy="50" r="4" fill="#ffffff" />
      {/* 24 Spoke rays representing the 24 hours / dharma principles */}
      {spokes.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 50 + 44 * Math.sin(rad);
        const y2 = 50 - 44 * Math.cos(rad);
        return (
          <line
            key={angle}
            x1="50"
            y1="50"
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};
