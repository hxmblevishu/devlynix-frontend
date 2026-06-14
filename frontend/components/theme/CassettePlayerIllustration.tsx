"use client";

import { motion } from "framer-motion";

export function CassettePlayerIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`${className}`}
      viewBox="0 0 450 450"
      fill="none"
      stroke="#000"
      strokeWidth="1.2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden
    >
      {/* Top Lid Layer */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: -40 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <path d="M100 120 L350 120 L330 200 L80 200 Z" fill="rgba(176,179,143,0.3)" />
        <rect x="150" y="140" width="150" height="40" rx="2" strokeDasharray="4 2" />
        <text x="360" y="145" fontSize="9" className="font-mono" fill="#000">THE UPPER LID</text>
        <line x1="330" y1="140" x2="355" y2="140" />
      </motion.g>

      {/* Cassette Layer */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
      >
        <rect x="110" y="210" width="220" height="120" rx="4" fill="rgba(255,255,255,0.1)" />
        <circle cx="165" cy="270" r="25" />
        <circle cx="165" cy="270" r="8" fill="#000" />
        <circle cx="275" cy="270" r="25" />
        <circle cx="275" cy="270" r="8" fill="#000" />
        <rect x="195" y="260" width="50" height="20" rx="2" fill="#000" opacity="0.8" />
      </motion.g>

      {/* Main Body Layer */}
      <motion.g>
        <path d="M70 340 L380 340 L360 420 L50 420 Z" fill="rgba(176,179,143,0.5)" />
        <line x1="120" y1="360" x2="330" y2="360" />
        <line x1="120" y1="380" x2="330" y2="380" />
        
        <text x="30" y="370" fontSize="9" className="font-mono" fill="#000">POWER AND PROCESSOR</text>
        <line x1="120" y1="370" x2="110" y2="370" />
        <circle cx="115" cy="370" r="2" fill="#000" />
      </motion.g>

      {/* Decorative Blueprint Markers */}
      <path d="M20 20 L40 20 M20 20 L20 40" strokeWidth="0.5" />
      <path d="M430 430 L410 430 M430 430 L430 410" strokeWidth="0.5" />
      
      <circle cx="30" cy="30" r="1.5" fill="#000" />
      <circle cx="420" cy="420" r="1.5" fill="#000" />
    </motion.svg>
  );
}
