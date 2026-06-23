"use client";
import Image from "next/image";
import { useRef } from "react";

export default function PortraitTilt({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transform = `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-[280px] mx-auto aspect-square transition-transform duration-300 ease-out"
      style={{ maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 75%)" }}
    >
      <Image
        src="/portrait.png"
        alt={alt}
        fill
        sizes="280px"
        className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
        priority
      />
    </div>
  );
}
