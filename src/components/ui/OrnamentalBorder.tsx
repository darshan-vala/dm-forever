import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  color?: string;
  variant?: 'simple' | 'diamond' | 'lotus' | 'grand';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  color = '#B89758',
  variant = 'diamond',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-400" />
      
      {variant === 'diamond' && (
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gold-500/80 shadow-sm" />
          <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70" />
        </div>
      )}

      {variant === 'lotus' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-500">
          <path
            d="M12 4C13.5 8 16 11 12 17C8 11 10.5 8 12 4Z"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M8 8C6 11 7 15 12 17C17 15 18 11 16 8"
            stroke={color}
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="12" cy="19" r="1" fill={color} />
        </svg>
      )}

      {variant === 'simple' && (
        <span className="w-2 h-2 rounded-full border border-gold-500/60" />
      )}

      {variant === 'grand' && (
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold-400" />
          <div className="w-3 h-3 rotate-45 border border-gold-500 flex items-center justify-center">
            <span className="w-1 h-1 bg-gold-500" />
          </div>
          <span className="w-1 h-1 rounded-full bg-gold-400" />
        </div>
      )}

      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-400" />
    </div>
  );
};

export const LuxuryCornerFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative p-6 sm:p-10 ${className}`}>
      {/* Top Left */}
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold-400/80 pointer-events-none" />
      {/* Top Right */}
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold-400/80 pointer-events-none" />
      {/* Bottom Left */}
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold-400/80 pointer-events-none" />
      {/* Bottom Right */}
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold-400/80 pointer-events-none" />
      {children}
    </div>
  );
};
