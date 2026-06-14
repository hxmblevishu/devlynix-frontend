"use client";

import { motion } from "framer-motion";
import { RetroButton } from "@/components/theme/RetroButton";
import { FloatingCassette } from "@/components/theme/FloatingCassette";
import { WaveformBackground } from "@/components/theme/WaveformBackground";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      <WaveformBackground />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]"
        aria-hidden
      >
        <span className="font-display whitespace-nowrap text-[25vw] leading-none tracking-tighter text-accent">
          DEVMATCH
        </span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
             <span className="h-px w-8 bg-accent/30" />
             <p className="font-mono text-[10px] tracking-[0.5em] text-text-secondary uppercase">
               Product Catalog 2024
             </p>
          </div>

          <h1 className="font-display text-[14vw] leading-[0.8] tracking-tighter text-accent sm:text-[10vw] lg:text-[8vw]">
            FIND YOUR
            <br />
            <span className="text-outline">DEV MATCH</span>
          </h1>

          <div className="mt-8 flex flex-col gap-2">
             <p className="font-heading text-2xl tracking-[0.4em] text-text-primary uppercase md:text-3xl">
               CODE. MATCH. SHIP.
             </p>
             <div className="h-1 w-24 bg-accent lg:mx-0 mx-auto" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-md">
             <TechnicalSpec label="STK" value="FULL STACK" />
             <div className="hidden md:block">
                <TechnicalSpec label="REV" value="V1.0.4" />
             </div>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <RetroButton href="/login" variant="primary" className="px-12 py-4 text-lg">
              LOGIN
            </RetroButton>
            <RetroButton href="/register" variant="secondary" className="px-12 py-4 text-lg">
              REGISTER
            </RetroButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
             <div className="absolute -inset-20 border border-accent/10 rounded-full animate-slow-spin" />
             <div className="absolute -inset-10 border border-accent/5 rounded-full" />
             
             <FloatingCassette size="lg" />
             
             <div className="absolute -top-12 -right-12 hidden lg:block">
                <div className="flex items-start gap-2">
                   <div className="h-px w-12 bg-accent mt-2" />
                   <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-text-secondary uppercase">Hardware Match</span>
                      <span className="font-heading text-xs text-accent">98% COMPATIBLE</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 lg:left-auto lg:right-12 lg:translate-x-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-end">
           <span className="font-mono text-[9px] text-text-secondary uppercase">Scroll to explore</span>
           <div className="mt-1 h-8 w-[0.5px] bg-accent/40" />
        </div>
      </motion.div>
    </section>
  );
}

function TechnicalSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 border-l border-accent/20 pl-4 text-left">
      <span className="font-mono text-[10px] text-text-secondary/60">{label}:</span>
      <span className="font-heading text-sm tracking-widest text-accent">{value}</span>
    </div>
  );
}
