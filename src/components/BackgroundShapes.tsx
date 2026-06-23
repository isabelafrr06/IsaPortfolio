"use client";
import { useEffect, useRef } from "react";

const SHAPES = [
  // Large orbs
  {
    wrapper: "absolute top-[10%] right-[20%]",
    inner: "w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px]",
    animation: "float-a 30s ease-in-out infinite",
    mousDepth: 18, scrollDepth: 0.08,
  },
  {
    wrapper: "absolute top-[60%] left-[10%]",
    inner: "w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]",
    animation: "float-b 24s ease-in-out 5s infinite",
    mousDepth: 22, scrollDepth: -0.06,
  },
  {
    wrapper: "absolute top-[35%] left-[40%]",
    inner: "w-[300px] h-[300px] rounded-full bg-tertiary/5 blur-[100px]",
    animation: "float-a 20s ease-in-out 10s infinite",
    mousDepth: 28, scrollDepth: 0.12,
  },
  {
    wrapper: "absolute bottom-[15%] right-[15%]",
    inner: "w-[350px] h-[350px] rounded-full bg-primary/4 blur-[110px]",
    animation: "float-b 26s ease-in-out 3s infinite",
    mousDepth: 15, scrollDepth: -0.1,
  },
  {
    wrapper: "absolute top-[130%] left-[25%]",
    inner: "w-[450px] h-[450px] rounded-full bg-secondary/4 blur-[130px]",
    animation: "float-a 32s ease-in-out 7s infinite",
    mousDepth: 12, scrollDepth: 0.15,
  },
  {
    wrapper: "absolute top-[180%] right-[30%]",
    inner: "w-[380px] h-[380px] rounded-full bg-tertiary/4 blur-[110px]",
    animation: "float-b 28s ease-in-out 2s infinite",
    mousDepth: 20, scrollDepth: -0.13,
  },
  {
    wrapper: "absolute top-[250%] left-[50%]",
    inner: "w-[420px] h-[420px] rounded-full bg-primary/5 blur-[120px]",
    animation: "float-a 35s ease-in-out 6s infinite",
    mousDepth: 16, scrollDepth: 0.1,
  },
  // Spinning diamonds
  {
    wrapper: "absolute top-[20%] left-[15%]",
    inner: "w-28 h-28 border border-primary/10",
    animation: "float-b 40s linear infinite, spin-diamond 14s linear infinite",
    mousDepth: 40, scrollDepth: 0.22,
  },
  {
    wrapper: "absolute top-[150%] right-[10%]",
    inner: "w-20 h-20 border border-secondary/10",
    animation: "float-a 34s linear 8s infinite, spin-diamond 18s linear infinite reverse",
    mousDepth: 38, scrollDepth: -0.2,
  },
  {
    wrapper: "absolute top-[220%] left-[20%]",
    inner: "w-36 h-36 border border-tertiary/8",
    animation: "float-c 44s linear 4s infinite, spin-diamond 22s linear infinite",
    mousDepth: 35, scrollDepth: 0.18,
  },
  // Spinning squares
  {
    wrapper: "absolute top-[70%] right-[25%]",
    inner: "w-12 h-12 border border-outline-variant/20",
    animation: "float-a 22s ease-in-out 4s infinite, spin 8s linear infinite",
    mousDepth: 50, scrollDepth: -0.18,
  },
  {
    wrapper: "absolute top-[100%] left-[60%]",
    inner: "w-8 h-8 border border-primary/15",
    animation: "float-b 19s ease-in-out 9s infinite, spin 12s linear infinite reverse",
    mousDepth: 52, scrollDepth: 0.25,
  },
  {
    wrapper: "absolute top-[170%] left-[45%]",
    inner: "w-10 h-10 border border-tertiary/15",
    animation: "float-a 25s ease-in-out 1s infinite, spin 10s linear infinite",
    mousDepth: 48, scrollDepth: -0.22,
  },
  // Thin lines
  {
    wrapper: "absolute top-[40%] right-[5%]",
    inner: "w-px h-32 bg-primary/15",
    animation: "float-b 28s ease-in-out 3s infinite",
    mousDepth: 45, scrollDepth: 0.3,
  },
  {
    wrapper: "absolute top-[90%] left-[8%]",
    inner: "w-24 h-px bg-secondary/15",
    animation: "float-a 24s ease-in-out 6s infinite",
    mousDepth: 42, scrollDepth: -0.26,
  },
  {
    wrapper: "absolute top-[200%] right-[40%]",
    inner: "w-px h-20 bg-tertiary/20",
    animation: "float-c 20s ease-in-out 11s infinite",
    mousDepth: 50, scrollDepth: 0.2,
  },
  // Small dots
  {
    wrapper: "absolute top-[50%] right-[10%]",
    inner: "w-6 h-6 rounded-full bg-primary/20",
    animation: "float-c 16s ease-in-out 7s infinite",
    mousDepth: 60, scrollDepth: 0.28,
  },
  {
    wrapper: "absolute top-[80%] left-[35%]",
    inner: "w-4 h-4 rounded-full bg-tertiary/30",
    animation: "float-b 18s ease-in-out 12s infinite",
    mousDepth: 55, scrollDepth: -0.24,
  },
  {
    wrapper: "absolute top-[45%] left-[5%]",
    inner: "w-3 h-3 rounded-full bg-secondary/40",
    animation: "float-a 14s ease-in-out 2s infinite",
    mousDepth: 65, scrollDepth: 0.32,
  },
  {
    wrapper: "absolute top-[120%] right-[35%]",
    inner: "w-5 h-5 rounded-full bg-primary/25",
    animation: "float-c 17s ease-in-out 5s infinite",
    mousDepth: 58, scrollDepth: -0.3,
  },
  {
    wrapper: "absolute top-[160%] left-[70%]",
    inner: "w-3 h-3 rounded-full bg-secondary/35",
    animation: "float-a 13s ease-in-out 8s infinite",
    mousDepth: 70, scrollDepth: 0.35,
  },
  {
    wrapper: "absolute top-[210%] right-[20%]",
    inner: "w-4 h-4 rounded-full bg-tertiary/25",
    animation: "float-b 15s ease-in-out 3s infinite",
    mousDepth: 62, scrollDepth: -0.28,
  },
];

export default function BackgroundShapes() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const scrollSpring = useRef({ target: 0, current: 0, velocity: 0 });
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const onScroll = () => {
      scrollSpring.current.target = window.scrollY;
    };

    const tick = () => {
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.06;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.06;

      const s = scrollSpring.current;
      s.velocity += (s.target - s.current) * 0.08;
      s.velocity *= 0.82;
      s.current += s.velocity;

      wrapperRefs.current.forEach((el, i) => {
        if (!el) return;
        const { mousDepth, scrollDepth } = SHAPES[i];
        const tx = smoothMouse.current.x * mousDepth;
        const ty = smoothMouse.current.y * mousDepth + s.current * scrollDepth;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          ref={(el) => { wrapperRefs.current[i] = el; }}
          className={shape.wrapper}
        >
          <div className={shape.inner} style={{ animation: shape.animation }} />
        </div>
      ))}
    </div>
  );
}
