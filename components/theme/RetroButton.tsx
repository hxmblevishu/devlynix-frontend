import Link from "next/link";

type RetroButtonVariant = "primary" | "secondary" | "outline";

interface RetroButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: RetroButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles: Record<RetroButtonVariant, string> = {
  primary:
    "bg-accent text-olive border border-accent hover:bg-olive hover:text-accent shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none translate-y-[-2px] hover:translate-y-0",
  secondary:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-olive shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none translate-y-[-2px] hover:translate-y-0",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent",
};

export function RetroButton({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: RetroButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 font-heading text-sm font-bold uppercase tracking-[0.2em] transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none active:translate-y-0 active:shadow-none";

  const combined = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === "primary" || variant === "secondary") && (
        <div className="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition-opacity">
           <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
              <rect width="2" height="2" />
              <rect x="4" y="4" width="2" height="2" />
           </svg>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group relative ${combined}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group relative ${combined}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
