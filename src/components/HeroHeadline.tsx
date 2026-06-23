"use client";

const LINES = ["Isabela", "Rodríguez", "Rocha"];

export default function HeroHeadline() {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-glow font-[family-name:var(--font-headline)]">
      {LINES.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <span
            className="block"
            style={{ animation: `slideUp 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms both` }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
