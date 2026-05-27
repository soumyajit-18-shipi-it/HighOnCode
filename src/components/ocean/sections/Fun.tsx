import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";
import { Coffee, Music, Moon, Pizza, Terminal, Zap } from "lucide-react";

const quotes = [
  '"It works on my machine — therefore, deploy my machine."',
  '"console.log is a language, not a debugger."',
  '"The bug is a feature wearing a trench coat."',
];
const stats = [
  { icon: Coffee, label: "Cups / sprint", value: "47" },
  { icon: Moon, label: "Avg. sleep", value: "5.2 h" },
  { icon: Pizza, label: "Snack of choice", value: "Maggi" },
  { icon: Music, label: "BGM", value: "Lo-fi + synthwave" },
  { icon: Terminal, label: "Tabs open", value: "∞" },
  { icon: Zap, label: "Bug→fix latency", value: "<3h" },
];

export function Fun() {
  return (
    <SectionShell id="fun" eyebrow="07 / Fun Zone" title="The Soft Stuff Beneath the Hard Skills">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          <div className="rounded-3xl glass neon-hover p-6">
            <h4 className="font-display text-[10px] uppercase tracking-[0.34em] text-[#8bd8dc]/70">Team chemistry</h4>
            <p className="mt-3 text-sm leading-relaxed text-[#c3dadd]/85">
              Three brains, one shared terminal. We disagree loudly, ship quietly,
              and treat 2&nbsp;a.m. debugging sessions like underwater diving — slow
              breathing, sharp focus, no panic.
            </p>
          </div>
          <div className="rounded-3xl glass neon-hover p-6">
            <h4 className="font-display text-[10px] uppercase tracking-[0.34em] text-[#8bd8dc]/70">Late-night survivability</h4>
            <div className="mt-3 flex items-center gap-4">
              <Survivability label="Soumyajit" value={92} />
              <Survivability label="Abhinav" value={85} />
              <Survivability label="Aayush" value={97} />
            </div>
          </div>
          <div className="rounded-3xl glass neon-hover p-6">
            <h4 className="font-display text-[10px] uppercase tracking-[0.34em] text-[#8bd8dc]/70">Fun facts</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#c3dadd]/85">
              <li>· Once shipped a feature on a 18% battery laptop.</li>
              <li>· Our default rubber duck is a printed jellyfish.</li>
              <li>· We measure standups in cups, not minutes.</li>
            </ul>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass neon-hover p-4">
                  <s.icon className="h-4 w-4 text-[#a4e0cf]" strokeWidth={1.5} />
                  <div className="mt-3 font-display text-xl font-bold tracking-[0.03em] text-white text-glow-soft">{s.value}</div>
                  <div className="mt-1 font-display text-[10px] uppercase tracking-[0.26em] text-[#8bd8dc]/70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {quotes.map((q, i) => (
                <div key={i} className="rounded-2xl border border-[#8bd8dc]/12 bg-[#041822]/44 p-4 text-sm italic text-[#c3dadd]">
                  {q}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

function Survivability({ label, value }: { label: string; value: number }) {
  const radius = 28;
  const c = 2 * Math.PI * radius;
  const off = c - (c * value) / 100;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle cx="40" cy="40" r={radius} stroke="#062F3C" strokeWidth="6" fill="none" />
          <circle
            cx="40" cy="40" r={radius} stroke="url(#sv)" strokeWidth="6" fill="none"
            strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
            style={{ filter: "drop-shadow(0 0 6px #63d8e3)" }}
          />
          <defs>
            <linearGradient id="sv">
              <stop offset="0%" stopColor="#a4e0cf" />
              <stop offset="100%" stopColor="#63d8e3" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center font-display text-sm font-bold tracking-[0.04em] text-white">{value}%</div>
      </div>
      <div className="font-display text-[10px] uppercase tracking-[0.22em] text-[#a9c8cc]/80">{label}</div>
    </div>
  );
}