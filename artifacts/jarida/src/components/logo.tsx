import { Link } from "wouter";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="4" width="42" height="46" rx="12" fill="currentColor" />
      <circle cx="67" cy="33" r="9" fill="currentColor" />
      <rect x="6" y="56" width="42" height="40" rx="12" fill="currentColor" />
      <rect x="54" y="56" width="42" height="40" rx="12" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
  wordClassName = "text-2xl",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group text-primary ${className}`}
    >
      <LogoMark
        className={`${markClassName} group-hover:scale-105 transition-transform duration-500`}
      />
      <span
        className={`font-serif font-semibold tracking-tight leading-none ${wordClassName}`}
      >
        Jarida
      </span>
    </Link>
  );
}
