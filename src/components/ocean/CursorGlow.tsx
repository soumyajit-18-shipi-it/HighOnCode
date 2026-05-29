import { useEffect, useRef } from "react";
import { getMotionProfile } from "@/lib/motion";

export function CursorGlow() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const profile = getMotionProfile();

    if (profile.coarsePointer || profile.reduced) return;

    const root = rootRef.current;
    const cursor = cursorRef.current;

    if (!root || !cursor) return;

    let rafId = 0;

    let targetX = -200;
    let targetY = -200;

    let currentX = -200;
    let currentY = -200;

    let rotation = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      const dx = targetX - currentX;
      const dy = targetY - currentY;

      rotation = Math.atan2(dy, dx) * (180 / Math.PI);

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
        translate(-50%, -50%)
        rotate(${rotation}deg)
      `;

      rafId = requestAnimationFrame(render);
    };

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      root.style.opacity = "1";
    };

    const leave = () => {
      root.style.opacity = "0";
    };

    rafId = requestAnimationFrame(render);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[999] opacity-0 transition-opacity duration-300"
    >
      <div
        ref={cursorRef}
        className="absolute will-change-transform"
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="src/fish.png"
          alt="cursor"
          draggable={false}
          className="
            w-14
            h-14
            object-contain
            select-none
            opacity-95
          "
          style={{
            filter:
              "drop-shadow(0 0 10px rgba(94,242,255,0.22))",
          }}
        />
      </div>
    </div>
  );
}