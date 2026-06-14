export function MeasurementDecor({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg
        className="absolute top-20 left-8 w-24 opacity-40"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <line x1="0" y1="30" x2="100" y2="30" />
        <line x1="10" y1="25" x2="10" y2="35" />
        <line x1="30" y1="27" x2="30" y2="33" />
        <line x1="50" y1="25" x2="50" y2="35" />
        <line x1="70" y1="27" x2="70" y2="33" />
        <line x1="90" y1="25" x2="90" y2="35" />
        <text x="50" y="55" textAnchor="middle" fontSize="8" fill="currentColor">
          026%
        </text>
      </svg>

      <svg
        className="absolute top-20 right-8 w-24 opacity-40"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <line x1="0" y1="30" x2="100" y2="30" />
        <line x1="10" y1="25" x2="10" y2="35" />
        <line x1="50" y1="25" x2="50" y2="35" />
        <line x1="90" y1="25" x2="90" y2="35" />
        <text x="50" y="55" textAnchor="middle" fontSize="8" fill="currentColor">
          026%
        </text>
      </svg>

      <div className="absolute bottom-24 left-8 flex flex-col gap-1 opacity-30">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path d="M6 0 L12 6 L6 12 L0 6 Z" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </svg>
        ))}
      </div>

      <div className="absolute bottom-24 right-8 flex flex-col gap-1 opacity-30">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path d="M6 0 L12 6 L6 12 L0 6 Z" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </svg>
        ))}
      </div>
    </div>
  );
}
