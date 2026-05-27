import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height] duration-500"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, rgba(0,217,255,0.09) 0%, rgba(127,255,212,0.04) 32%, rgba(255,179,167,0.03) 55%, transparent 72%)",
          filter: "blur(22px)",
        }}
      />
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          background: "rgba(127,255,212,0.85)",
          boxShadow: "0 0 8px rgba(0,217,255,0.35), 0 0 18px rgba(94,242,255,0.18)",
        }}
      />
    </div>
  );
}