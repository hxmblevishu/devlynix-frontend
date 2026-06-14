interface RetroInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function RetroInput({
  label,
  error,
  className = "",
  id,
  ...props
}: RetroInputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="flex items-center gap-2">
           <div className="h-1 w-1 bg-accent" />
           <label
             htmlFor={inputId}
             className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary"
           >
             {label}
           </label>
        </div>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={`w-full border-b border-accent/30 bg-transparent px-0 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/40 outline-none transition-all focus:border-accent focus:bg-olive-light/20 ${className}`}
          {...props}
        />
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 peer-focus:w-full" />
      </div>
      {error && (
        <span className="font-mono text-[9px] text-accent uppercase tracking-tighter">! ERROR: {error}</span>
      )}
    </div>
  );
}
