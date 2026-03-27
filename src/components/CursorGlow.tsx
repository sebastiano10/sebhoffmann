"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9996] -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,160,0.05) 0%, transparent 65%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}
