"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PortraitTilt({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Defer image until client mount so WhatsApp doesn't scrape it for a large preview.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

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
      className="relative w-full max-w-[360px] mx-auto aspect-square transition-transform duration-300 ease-out"
    >
      {/* Soft background glows */}
      <div
        className="pointer-events-none absolute -top-[10%] -right-[15%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(183,109,255,0.4)_0%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[5%] -left-[10%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(5,102,217,0.25)_0%,transparent_70%)]"
        aria-hidden
      />

      {/* Gradient ring + portrait */}
      <div className="absolute inset-[8%] rounded-full bg-linear-to-br from-primary via-primary-container to-secondary-container p-[3px] shadow-[0_0_60px_rgba(183,109,255,0.25)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
          {ready ? (
            <Image
              src="/portrait.png"
              alt={alt}
              fill
              sizes="360px"
              className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              priority
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
