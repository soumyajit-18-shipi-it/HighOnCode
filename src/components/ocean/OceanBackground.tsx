import { useEffect, useState } from "react";

export function OceanBackground() {
  const [bubbles, setBubbles] = useState<
    { id: number; left: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 10,
      duration: 18 + Math.random() * 28,
      delay: Math.random() * 20,
    }));
    setBubbles(arr);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #0A3440 0%, #041C24 28%, #020B12 62%, #000507 100%)",
        }}
      />

      {/* god rays */}
      <div
        className="absolute inset-0 opacity-24 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg at 50% -10%, transparent 0deg, rgba(0,217,255,0.1) 18deg, transparent 36deg, rgba(94,242,255,0.07) 60deg, transparent 90deg, rgba(127,255,212,0.05) 130deg, transparent 170deg)",
          filter: "blur(52px)",
        }}
      />

      {/* caustic glows */}
      <div
        className="absolute -top-40 left-1/3 h-[36rem] w-[36rem] rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(0,217,255,0.9) 0%, transparent 62%)", opacity: 0.08 }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[32rem] w-[32rem] rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(127,255,212,0.85) 0%, transparent 62%)", opacity: 0.06, animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[36rem] w-[36rem] rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(10,74,90,0.85) 0%, transparent 62%)", opacity: 0.18, animationDelay: "4s" }}
      />

      <div className="ocean-vignette absolute inset-0" />
      <div className="ocean-fog absolute inset-0 animate-float-slow opacity-80" />

      {/* noise/fog */}
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,242,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,242,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 82%)",
        }}
      />

      {/* bubbles */}
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bottom-[-40px] rounded-full animate-bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(94,242,255,0.2) 40%, rgba(0,217,255,0.02) 80%)",
            boxShadow: "0 0 4px rgba(94,242,255,0.18)",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* jellyfish silhouettes */}
      <Jellyfish className="left-[8%] top-[18%]" delay={0} />
      <Jellyfish className="right-[12%] top-[55%]" delay={1.4} scale={0.8} />
      <Jellyfish className="left-[55%] bottom-[12%]" delay={2.6} scale={1.2} />

      {/* drifting fish */}
      <FishLane top="20%" duration={45} delay={0} reverse={false} />
      <FishLane top="42%" duration={62} delay={6} reverse={true} scale={0.7} />
      <FishLane top="70%" duration={55} delay={2} reverse={false} scale={0.9} />
      <FishLane top="85%" duration={70} delay={14} reverse={true} scale={0.5} />
    </div>
  );
}

function Jellyfish({
  className,
  delay = 0,
  scale = 1,
}: { className?: string; delay?: number; scale?: number }) {
  return (
    <div
      className={`absolute animate-float-slow ${className ?? ""}`}
      style={{ animationDelay: `${delay}s`, transform: `scale(${scale})` }}
    >
      <div className="animate-jelly" style={{ animationDelay: `${delay}s` }}>
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none" className="opacity-28">
          <defs>
            <radialGradient id={`jg${delay}`} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#7FFFD4" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#00D9FF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#062F3C" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M10 60 Q60 -10 110 60 Q110 80 90 78 Q60 75 30 78 Q10 80 10 60Z" fill={`url(#jg${delay})`} />
          <g stroke="#5EF2FF" strokeOpacity="0.24" strokeWidth="1" fill="none">
            <path d="M30 78 Q28 110 35 140 Q30 160 38 175" />
            <path d="M50 80 Q48 115 55 145 Q50 165 58 178" />
            <path d="M70 80 Q72 115 65 145 Q70 165 62 178" />
            <path d="M90 78 Q92 110 85 140 Q90 160 82 175" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FishLane({
  top,
  duration,
  delay,
  reverse,
  scale = 1,
}: { top: string; duration: number; delay: number; reverse: boolean; scale?: number }) {
  return (
    <div
      className={`absolute ${reverse ? "animate-drift-rev" : "animate-drift"}`}
      style={{ top, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <svg
        width="80"
        height="36"
        viewBox="0 0 80 36"
        fill="none"
        style={{ transform: `scale(${scale})`, opacity: 0.3 }}
      >
        <defs>
          <linearGradient id={`fg${duration}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7FFFD4" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path
          d="M2 18 Q20 4 50 18 Q20 32 2 18Z M50 18 L72 6 L68 18 L72 30 Z"
          fill={`url(#fg${duration})`}
        />
        <circle cx="20" cy="16" r="1.4" fill="#020B12" />
      </svg>
    </div>
  );
}