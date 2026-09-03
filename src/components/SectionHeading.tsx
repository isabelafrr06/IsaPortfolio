import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <header className={`mb-16 md:mb-20 ${className}`}>
      {eyebrow ? (
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-primary" />
          <span className="font-mono text-tertiary uppercase tracking-[0.3em] text-xs">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter leading-[0.95] text-on-surface">
        {children}
      </h2>
    </header>
  );
}
