"use client";

import { motion } from "framer-motion";

interface FloatingCassetteProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function FloatingCassette({
  className = "",
  size = "md",
}: FloatingCassetteProps) {
  const dimensions = {
    sm: "w-32 h-20",
    md: "w-48 h-28 md:w-56 md:h-32",
    lg: "w-64 h-36 md:w-72 md:h-40",
  };

  return (
    <motion.div
      className={`relative ${dimensions[size]} ${className}`}
      animate={{
        y: [0, -14, -6, 0],
        rotate: [0, 1.5, -1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 280 180"
        fill="none"
        className="w-full h-full drop-shadow-lg"
        aria-hidden
      >
        <rect
          x="10"
          y="10"
          width="260"
          height="160"
          rx="8"
          stroke="#000"
          strokeWidth="2"
          fill="rgba(176,179,143,0.3)"
        />
        <rect
          x="20"
          y="20"
          width="240"
          height="50"
          rx="2"
          stroke="#000"
          strokeWidth="1.5"
          fill="#B5B88F"
        />
        <text
          x="140"
          y="52"
          textAnchor="middle"
          fill="#111"
          fontSize="16"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          devlynix
        </text>
        <rect
          x="30"
          y="85"
          width="220"
          height="70"
          rx="4"
          stroke="#000"
          strokeWidth="1.5"
          fill="rgba(255,255,255,0.15)"
        />
        <circle cx="80" cy="120" r="28" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="80" cy="120" r="8" fill="#000" />
        <circle cx="200" cy="120" r="28" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="200" cy="120" r="8" fill="#000" />
        <rect x="115" y="105" width="50" height="30" rx="2" stroke="#000" strokeWidth="1" fill="#111" opacity="0.8" />
        <line x1="10" y1="10" x2="30" y2="10" stroke="#000" strokeWidth="1" />
        <line x1="10" y1="10" x2="10" y2="30" stroke="#000" strokeWidth="1" />
        <line x1="270" y1="10" x2="250" y2="10" stroke="#000" strokeWidth="1" />
        <line x1="270" y1="10" x2="270" y2="30" stroke="#000" strokeWidth="1" />
        <line x1="10" y1="170" x2="30" y2="170" stroke="#000" strokeWidth="1" />
        <line x1="10" y1="170" x2="10" y2="150" stroke="#000" strokeWidth="1" />
        <line x1="270" y1="170" x2="250" y2="170" stroke="#000" strokeWidth="1" />
        <line x1="270" y1="170" x2="270" y2="150" stroke="#000" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
