// src/components/AnimatedLogo.jsx
import React from "react";

const Loader = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-48" // Adjust size as needed
    >
      <defs>
        {/* Gradient Definitions */}
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6a00" />
          <stop offset="100%" stopColor="#ee0979" />
        </linearGradient>

        {/* Mask for Stroke Drawing */}
        <mask id="strokeMask">
          <rect width="100%" height="100%" fill="white" />
          <path
            id="logoPath"
            d="M50 150 L50 50 L150 50 L150 150 L100 150 L100 100 L60 100 L60 150 Z"
            fill="none"
            stroke="black"
            strokeWidth="4"
          />
        </mask>
      </defs>

      {/* Background Circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="url(#gradient)"
        strokeWidth="5"
        fill="none"
        className="animate-pulse"
      />

      {/* Animated Stroke */}
      <path
        d="M50 150 L50 50 L150 50 L150 150 L100 150 L100 100 L60 100 L60 150 Z"
        stroke="url(#gradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        className="animate-draw"
      />

      {/* Animated Inner Circle */}
      <circle
        cx="100"
        cy="100"
        r="40"
        fill="url(#gradient)"
        className="animate-scale"
      />

      {/* Optional: Additional Elements or Text */}
      {/* You can add text or other SVG elements here */}
    </svg>
  );
};

export default Loader;

