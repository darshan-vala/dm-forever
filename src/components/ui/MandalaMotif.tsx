import React from 'react';

interface MandalaMotifProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export const MandalaMotif: React.FC<MandalaMotifProps> = ({
  className = '',
  size = 64,
  color = '#B89758',
  opacity = 0.8,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer concentric decorative ring */}
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="0.75" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="41" stroke={color} strokeWidth="0.5" />
      
      {/* 8-petal central sacred lotus geometry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 12 C53 26, 62 35, 50 48 C38 35, 47 26, 50 12 Z"
            stroke={color}
            strokeWidth="0.75"
            fill="none"
          />
          <circle cx="50" cy="18" r="1.5" fill={color} />
          <line x1="50" y1="28" x2="50" y2="40" stroke={color} strokeWidth="0.5" />
        </g>
      ))}

      {/* Inner geometric core */}
      <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="0.75" strokeDasharray="1.5 2" />
      <circle cx="50" cy="50" r="7" stroke={color} strokeWidth="0.75" />
      <circle cx="50" cy="50" r="2.5" fill={color} />
    </svg>
  );
};
