"use client";

import { motion, AnimatePresence } from "framer-motion";

interface RetroModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function RetroModal({ isOpen, onClose, title, children }: RetroModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-accent/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="tech-panel relative w-full max-w-lg p-6 md:p-8"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <TechnicalFrameHeader />
              {title && (
                <h2 className="mb-4 font-heading text-xl uppercase tracking-widest text-text-primary">
                  {title}
                </h2>
              )}
              {children}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 font-mono text-sm text-text-secondary hover:text-accent"
                aria-label="Close"
              >
                [X]
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function TechnicalFrameHeader() {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-border pb-2">
      <span className="font-mono text-[10px] text-text-secondary">SPEC SHEET</span>
      <span className="font-mono text-[10px] text-text-secondary">REV. 01</span>
    </div>
  );
}
