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
        <span className="font-display text-[#a4e0cf]">{value}<span className="text-[#8bd8dc]/60">%</span></span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-[#020B12] ring-1 ring-[#5EF2FF]/20">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: "linear-gradient(90deg, #0f3f4a, #63d8e3, #a4e0cf)",
            boxShadow: "0 0 8px rgba(99,216,227,0.16), 0 0 18px rgba(99,216,227,0.08)",
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
          <stop offset="0%" stopColor="#a4e0cf" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#63d8e3" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((s) => (
        <polygon
          key={s}
          points={domains.map((_, i) => pt(i, s * 100).join(",")).join(" ")}
          fill="none"
          stroke="#8bd8dc"
          strokeOpacity={0.08}
        />
      ))}
      {domains.map((_, i) => {
        const [x, y] = pt(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#8bd8dc" strokeOpacity="0.06" />;
      })}

      <polygon
        points={polygon}
        fill="url(#rfill)"
        stroke="#63d8e3"
        strokeWidth="1.5"
        style={{ filter: "drop-shadow(0 0 4px rgba(99,216,227,0.18))" }}
      />

      {domains.map((d, i) => {
        const [x, y] = pt(i, 100);
        // position labels slightly closer to center to avoid clipping
        // (previously used 116 which pushed some labels outside the SVG/parent)
        const [px, py] = pt(i, 110);
        const labelOffset =
          d.name === "AI / ML"
            ? { x: -18, y: 14, anchor: "end" as const }
            : d.name === "Blockchain"
              ? { x: 18, y: -10, anchor: "start" as const }
              : { x: 0, y: 0, anchor: "middle" as const };
        return (
          <g key={d.name}>
            <circle cx={x} cy={y} r="3" fill="#7FFFD4" style={{ filter: "drop-shadow(0 0 2px rgba(127,255,212,0.3))" }} />
            <text
              x={px + labelOffset.x}
              y={py + labelOffset.y}
              textAnchor={labelOffset.anchor}
              dominantBaseline="middle"
              fontSize="11"
              fill="#B6EAF2"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.1em" }}
            >
              {d.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r="3" fill="#63d8e3" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="#63d8e3" strokeOpacity="0.08" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="#a4e0cf" strokeOpacity="0.18" strokeDasharray="2 6" className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }} />
    </svg>
  );
}