"use client";

import { motion } from "framer-motion";

interface WaveformBackgroundProps {
  className?: string;
}

export function WaveformBackground({ className = "" }: WaveformBackgroundProps) {
  const bars = Array.from({ length: 80 }, (_, i) => {
    const height = 20 + Math.sin(i * 0.4) * 30 + Math.cos(i * 0.7) * 15;
    const animScale = 0.5 + ((i * 7 + 3) % 10) * 0.08;
    return { height, animScale };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-20 ${className}`}
      aria-hidden
    >
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
      >
        {bars.map(({ height, animScale }, i) => (
          <motion.rect
            key={i}
            x={i * 15}
            y={60 - height / 2}
            width={8}
            height={height}
            fill="#000"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, animScale, 1] }}
            transition={{
              duration: 1.5 + (i % 5) * 0.3,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: `${i * 15 + 4}px 60px` }}
          />
        ))}
      </svg>
    </div>
  );
}
