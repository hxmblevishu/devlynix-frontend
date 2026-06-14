"use client";

import { Navbar } from "@/components/theme/Navbar";
import { TechnicalFrame } from "@/components/theme/TechnicalFrame";
import { HeroSection } from "@/components/landing/HeroSection";
import { CassettePlayerIllustration } from "@/components/theme/CassettePlayerIllustration";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar variant="landing" />

      <TechnicalFrame className="mx-auto max-w-7xl px-4 md:px-8">
        <HeroSection />

        <section className="border-t border-border py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-2 font-mono text-[10px] tracking-widest text-text-secondary">
                PRODUCT SPECIFICATION
              </p>
              <h2 className="font-display text-4xl tracking-wide text-accent md:text-5xl">
                BUILT FOR
                <br />
                DEVELOPERS
              </h2>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-text-secondary">
                Swipe through developer profiles styled like cassette labels.
                Match on tech stack, experience, and project vibes. Ship together.
              </p>
            </motion.div>

            <CassettePlayerIllustration className="mx-auto w-full max-w-md opacity-80" />
          </div>
        </section>

        <footer className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="font-mono text-[10px] text-text-secondary">
              DEVLYNIX v1.0 — TYPE 1 NORMAL POSITION
            </span>
            <span className="font-body text-[10px] tracking-widest text-text-secondary uppercase">
              Code. Match. Ship.
            </span>
          </div>
        </footer>
      </TechnicalFrame>
    </main>
  );
}
