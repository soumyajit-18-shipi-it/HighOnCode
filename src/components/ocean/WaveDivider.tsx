export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="pointer-events-none relative h-24 w-full overflow-hidden"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-[200%] animate-wave"
      >
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0%" stopColor="#63d8e3" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#8bd8dc" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#a4e0cf" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 Q180 10 360 60 T720 60 T1080 60 T1440 60 V120 H0 Z M1440 60 Q1620 10 1800 60 T2160 60 T2520 60 T2880 60 V120 H1440 Z"
          fill="url(#wg)"
          opacity="0.35"
        />
        <path
          d="M0 80 Q180 40 360 80 T720 80 T1080 80 T1440 80 V120 H0 Z M1440 80 Q1620 40 1800 80 T2160 80 T2520 80 T2880 80 V120 H1440 Z"
          fill="url(#wg)"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}