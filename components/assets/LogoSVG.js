"use client";

import { useTheme } from "next-themes";

const Logo = ({ size = 32 }) => {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const bracketColor = isDark ? "#7F77DD" : "#534AB7";   // purple ramp 400/600
  const textColor   = isDark ? "#ffffff" : "#282c33";
  const dotColor    = isDark ? "#5DCAA5" : "#1D9E75";    // teal accent

  // All geometry is designed on a 64×64 canvas
  const scale = size / 64;

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="sidmcodes logo"
    >
      {/* Left brace */}
      <path
        d="M22,10 Q14,10 14,18 L14,28 Q14,36 8,32 Q14,28 14,36 L14,46 Q14,54 22,54"
        fill="none"
        stroke={bracketColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right brace */}
      <path
        d="M42,10 Q50,10 50,18 L50,28 Q50,36 56,32 Q50,28 50,36 L50,46 Q50,54 42,54"
        fill="none"
        stroke={bracketColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* s/ monogram */}
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="20"
        fontWeight="700"
        fill={textColor}
      >
        s/
      </text>

      {/* Teal dot accent */}
      <circle cx="32" cy="56" r="2.5" fill={dotColor} />
    </svg>
  );
};

export default Logo;