interface TechnicalFrameProps {
  children: React.ReactNode;
  className?: string;
  showMeasurements?: boolean;
}

export function TechnicalFrame({
  children,
  className = "",
  showMeasurements = true,
}: TechnicalFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Background Frame Lines */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Top Technical Bar */}
        <div className="absolute top-0 left-0 right-0 flex h-10 items-center justify-between border-b border-border px-4 font-mono text-[10px] tracking-wider text-text-primary uppercase">
          <div className="flex items-center gap-6">
            <span>MUSIC PLAYER HF-S 800</span>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 w-2 rounded-full border border-accent flex items-center justify-center">
                  <div className="h-0.5 w-0.5 bg-accent rounded-full" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>RECORD START</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor">
              <path d="M20 6 L4 6 M8 2 L4 6 L8 10" strokeWidth="1.5" />
            </svg>
            <span className="font-display text-lg tracking-widest lowercase border-x border-border px-4">devtinder?</span>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor">
              <path d="M4 6 L20 6 M16 2 L20 6 L16 10" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <span>TYPE 1 NORMAL POSITION</span>
              <div className="flex gap-0.5 ml-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2 w-2 rounded-full border border-accent flex items-center justify-center">
                    <div className="h-0.5 w-0.5 bg-accent rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            <span className="hover:underline cursor-pointer">BUY NOW</span>
          </div>
        </div>

        {/* Global Corner Brackets */}
        <CornerBracket position="top-left" className="top-12 left-4" />
        <CornerBracket position="top-right" className="top-12 right-4" />
        <CornerBracket position="bottom-left" className="bottom-12 left-4" />
        <CornerBracket position="bottom-right" className="bottom-12 right-4" />

        {/* Side Measurement Lines */}
        <div className="absolute top-1/2 left-0 h-40 w-12 -translate-y-1/2 flex items-center">
          <div className="h-px w-8 bg-border" />
          <div className="absolute left-10 flex flex-col items-center gap-1">
             <div className="h-4 w-px bg-border" />
             <span className="font-mono text-[9px] rotate-90 text-text-secondary/60">026%</span>
             <div className="h-4 w-px bg-border" />
          </div>
        </div>

        <div className="absolute top-1/2 right-0 h-40 w-12 -translate-y-1/2 flex items-center justify-end">
          <div className="absolute right-10 flex flex-col items-center gap-1">
             <div className="h-4 w-px bg-border" />
             <span className="font-mono text-[9px] -rotate-90 text-text-secondary/60">026%</span>
             <div className="h-4 w-px bg-border" />
          </div>
          <div className="h-px w-8 bg-border" />
        </div>

        {showMeasurements && (
          <>
            <span className="absolute top-14 left-20 font-mono text-[9px] tracking-wider text-text-secondary/50">
              37.7
            </span>
            <span className="absolute top-14 right-20 font-mono text-[9px] tracking-wider text-text-secondary/50">
              134.8
            </span>
            <div className="absolute left-6 top-40 h-20 border-l border-border flex flex-col justify-between py-1">
               <span className="font-mono text-[8px] -rotate-90 text-text-secondary/40 origin-left">5,166.88</span>
            </div>
            <div className="absolute right-6 top-40 h-20 border-r border-border flex flex-col justify-between py-1">
               <span className="font-mono text-[8px] rotate-90 text-text-secondary/40 origin-right ml-1">5,278.21</span>
            </div>
          </>
        )}

        {/* Bottom Technical Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-border flex items-center justify-between px-8">
           <div className="flex gap-2">
              <div className="h-1.5 w-1.5 bg-accent" />
              <div className="h-1.5 w-1.5 bg-accent" />
              <div className="h-1.5 w-1.5 bg-accent" />
           </div>
           <div className="h-1 w-32 bg-border/30 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-accent/40" />
           </div>
        </div>
      </div>

      <div className="pt-12 pb-12">
        {children}
      </div>
    </div>
  );
}

function CornerBracket({
  position,
  className = "",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  return (
    <svg
      className={`absolute w-6 h-6 text-accent/80 ${rotations[position]} ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <path d="M2 30 L2 2 L30 2" />
      <circle cx="2" cy="2" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
