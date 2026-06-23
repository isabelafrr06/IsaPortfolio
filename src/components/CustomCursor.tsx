"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const smooth = useRef({ x: -200, y: -200 });
  const raf = useRef<number | undefined>(undefined);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsFine(true);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) setHovered(false);
    };

    const tick = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${smooth.current.x}px`;
        ringRef.current.style.top = `${smooth.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (!isFine) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ willChange: "left, top" }}
      />
      <div
        ref={ringRef}
        className={`fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 transition-all duration-200 ${hovered ? "w-10 h-10 bg-primary/10 border-primary" : "w-6 h-6"} ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ willChange: "left, top" }}
      />
    </>
  );
}
