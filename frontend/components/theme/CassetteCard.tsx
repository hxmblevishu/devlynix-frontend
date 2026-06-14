"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface CassetteCardProps {
  name: string;
  role?: string;
  photoUrl?: string;
  techStack?: string[];
  experience?: string;
  skills?: string[];
  matchPercentage?: number;
  className?: string;
}

export function CassetteCard({
  name,
  role,
  photoUrl,
  techStack = [],
  experience,
  skills = [],
  matchPercentage,
  className = "",
}: CassetteCardProps) {
  return (
    <motion.div
      className={`relative h-[480px] w-full max-w-[340px] rounded-[12px] border-2 border-accent bg-olive-light/40 p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] ${className}`}
      whileHover={{ scale: 1.02, translate: "-4px, -4px", boxShadow: "12px 12px 0 0 rgba(0,0,0,1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Tape Reels Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-32 w-32 rounded-full border-[8px] border-accent" />
         <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-32 w-32 rounded-full border-[8px] border-accent" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between border-b-2 border-accent pb-3 mb-4">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] text-text-secondary/60 leading-none mb-1">INDEX NO: {name.slice(0, 3).toUpperCase()}-2024</span>
            <h3 className="font-display text-4xl leading-none tracking-tight text-accent uppercase">
              {name}
            </h3>
          </div>
          {matchPercentage !== undefined && (
            <div className="flex flex-col items-end">
               <span className="font-mono text-[10px] font-bold text-accent">{matchPercentage}%</span>
               <span className="font-mono text-[8px] text-text-secondary/40">COMPAT</span>
            </div>
          )}
        </div>

        {/* Profile Image Frame */}
        <div className="relative flex-1 mb-4 border border-accent/40 rounded-sm overflow-hidden bg-olive-dark/20 p-1">
           <div className="relative h-full w-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
             {photoUrl ? (
               <Image
                 src={photoUrl}
                 alt={name}
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 300px"
               />
             ) : (
               <div className="flex h-full items-center justify-center bg-olive-dark/10">
                 <svg viewBox="0 0 80 80" className="h-20 w-20 opacity-20" aria-hidden>
                   <rect x="20" y="20" width="40" height="40" stroke="currentColor" fill="none" />
                   <path d="M10 70 L70 70 M40 10 L40 30" stroke="currentColor" fill="none" />
                 </svg>
               </div>
             )}
             <div className="absolute top-2 left-2 flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-accent/20" />
             </div>
           </div>
        </div>

        {/* Labels Content */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-text-secondary/40">EXPERIENCE // {role || "DEVELOPER"}</span>
            <p className="font-heading text-lg tracking-widest text-text-primary uppercase leading-tight">
              {experience || "3+ YEARS EXP"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-accent/20 pt-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-text-secondary/40">STACK</span>
              <div className="flex flex-wrap gap-1">
                {techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="border border-accent/30 px-1.5 py-0.5 font-heading text-[10px] text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-text-secondary/40">SKILLS</span>
              <div className="flex flex-wrap gap-1">
                {skills.slice(0, 2).map((skill) => (
                  <span key={skill} className="bg-accent/10 px-1.5 py-0.5 font-body text-[10px] text-text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-4 flex items-center justify-between border-t-2 border-accent pt-2">
          <span className="font-display text-xl tracking-widest text-accent/30">SIDE A</span>
          <div className="flex gap-4">
             <div className="h-1 w-8 bg-accent/20" />
             <div className="h-1 w-4 bg-accent" />
          </div>
        </div>
      </div>

      {/* Industrial corner dots */}
      <div className="absolute top-1 right-1 flex gap-0.5">
         <div className="h-0.5 w-0.5 bg-accent/20" />
         <div className="h-0.5 w-0.5 bg-accent/20" />
      </div>
    </motion.div>
  );
}
