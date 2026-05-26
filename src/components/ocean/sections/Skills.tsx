import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";

const domains = [
  { name: "Frontend", value: 92 },
  { name: "Backend", value: 74 },
  { name: "AI / ML", value: 86 },
  { name: "Cybersecurity", value: 70 },
  { name: "Databases", value: 78 },
  { name: "Blockchain", value: 65 },
  { name: "Problem Solving", value: 95 },
];

export function Skills() {
  return (
    <SectionShell id="skills" eyebrow="03 / Skills Map" title="Sonar of Capabilities">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="relative grid place-items-center overflow-visible rounded-3xl glass neon-border p-8">
          <Radar />
        </Reveal>
        <div className="space-y-4">
          {domains.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <Bar name={d.name} value={d.value} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Bar({ name, value }: { name: string; value: number }) {
  return (
    <div className="rounded-2xl glass p-4 neon-hover">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-display tracking-wider text-white">{name}</span>
        <span className="font-mono text-[#7FFFD4]">{value}<span className="text-[#5EF2FF]/60">%</span></span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-[#020B12] ring-1 ring-[#5EF2FF]/20">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: "linear-gradient(90deg, #149ebb, #5EF2FF, #7FFFD4)",
            boxShadow: "0 0 8px rgba(0,217,255,0.22), 0 0 18px rgba(94,242,255,0.1)",
          }}
        />
      </div>
    </div>
  );
}

function Radar() {
  const cx = 200, cy = 200, r = 150;
  const angle = (i: number) => (Math.PI * 2 * i) / domains.length - Math.PI / 2;
  const pt = (i: number, v: number) => {
    const rr = (r * v) / 100;
    return [cx + Math.cos(angle(i)) * rr, cy + Math.sin(angle(i)) * rr];
  };
  const polygon = domains.map((d, i) => pt(i, d.value).join(",")).join(" ");

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full max-w-[520px]">
      <defs>
        <radialGradient id="rfill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7FFFD4" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((s) => (
        <polygon
          key={s}
          points={domains.map((_, i) => pt(i, s * 100).join(",")).join(" ")}
          fill="none"
          stroke="#5EF2FF"
          strokeOpacity={0.08}
        />
      ))}
      {domains.map((_, i) => {
        const [x, y] = pt(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#5EF2FF" strokeOpacity="0.06" />;
      })}

      <polygon
        points={polygon}
        fill="url(#rfill)"
        stroke="#38c9df"
        strokeWidth="1.5"
        style={{ filter: "drop-shadow(0 0 4px rgba(0,217,255,0.24))" }}
      />

      {domains.map((d, i) => {
        const [x, y] = pt(i, 100);
        // position labels slightly closer to center to avoid clipping
        // (previously used 116 which pushed some labels outside the SVG/parent)
        const [px, py] = pt(i, 110);
        return (
          <g key={d.name}>
            <circle cx={x} cy={y} r="3" fill="#7FFFD4" style={{ filter: "drop-shadow(0 0 2px rgba(127,255,212,0.3))" }} />
            <text
              x={px}
              y={py}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fill="#B6EAF2"
              style={{ fontFamily: "Sora, sans-serif", letterSpacing: "0.1em" }}
            >
              {d.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r="3" fill="#00D9FF" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="#00D9FF" strokeOpacity="0.1" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="#7FFFD4" strokeOpacity="0.22" strokeDasharray="2 6" className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }} />
    </svg>
  );
}