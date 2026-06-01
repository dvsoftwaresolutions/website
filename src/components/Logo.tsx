import React from 'react';

export function Logo({ className = "h-10", variant = "dark" }: { className?: string, variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  
  const dGradColors = isDark 
    ? { start: "#ffffff", end: "#f1f5f9" } // white
    : { start: "#003366", end: "#001a33" }; // corporate blue

  const vGradColors = isDark
    ? { start: "#3b82f6", end: "#60a5fa" } // electric blue
    : { start: "#0055ff", end: "#003399" }; // dark blue
    
  const softwareColor = isDark ? "#ffffff" : "#001a33";
  const solutionsColor = isDark ? "#3b82f6" : "#0055ff";
  const tagColor = isDark ? "#3b82f6" : "#0055ff";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`dGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={dGradColors.start} />
            <stop offset="100%" stopColor={dGradColors.end} />
          </linearGradient>
          <linearGradient id={`vGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={vGradColors.start} />
            <stop offset="100%" stopColor={vGradColors.end} />
          </linearGradient>
        </defs>
        
        <g transform="translate(0, -30)">
          {/* The "D" */}
          <path d="M 90 90 L 200 90 C 270 90 300 130 300 180 C 300 230 270 270 200 270 L 90 270 L 90 230 L 200 230 C 240 230 260 210 260 180 C 260 150 240 130 200 130 L 130 130 L 90 90 Z" fill={`url(#dGrad-${variant})`} />
          
          {/* Bottom left of D */}
          <path d="M 90 140 L 130 140 L 130 270 L 90 270 Z" fill={`url(#dGrad-${variant})`} />
          
          {/* The "</>" inside the D */}
          <text x="175" y="215" fontSize="48" fontWeight="bold" fill={tagColor} fontFamily="Arial, monospace" textAnchor="middle">&lt;/&gt;</text>
          
          {/* The "V" part extending out of the D */}
          <path d="M 230 160 L 250 210 L 300 110 L 270 110 L 240 170 L 230 140 Z" fill={`url(#vGrad-${variant})`} />
          
          {/* Pixel shatter effect on top right of V */}
          <rect x="290" y="80" width="12" height="12" fill={solutionsColor} />
          <rect x="310" y="70" width="12" height="12" fill={vGradColors.end} />
          <rect x="280" y="100" width="12" height="12" fill={dGradColors.start} opacity={isDark ? 0.3 : 1} />
          <rect x="300" y="90" width="12" height="12" fill={vGradColors.start} />
          <rect x="320" y="60" width="12" height="12" fill={dGradColors.end} opacity={isDark ? 0.3 : 1} />
          <rect x="320" y="85" width="12" height="12" fill={solutionsColor} />
        </g>
        
        {/* TEXT: SOFTWARE */}
        <text x="200" y="320" fontSize="56" fontWeight="900" fill={softwareColor} fontFamily="Inter, sans-serif" letterSpacing="6" textAnchor="middle">SOFTWARE</text>
        
        {/* TEXT: SOLUTIONS with lines */}
        <line x1="50" y1="360" x2="110" y2="360" stroke={solutionsColor} strokeWidth="2" />
        <text x="200" y="370" fontSize="24" fontWeight="600" fill={solutionsColor} fontFamily="Inter, sans-serif" letterSpacing="8" textAnchor="middle">SOLUTIONS</text>
        <line x1="290" y1="360" x2="350" y2="360" stroke={solutionsColor} strokeWidth="2" />
      </svg>
    </div>
  );
}

