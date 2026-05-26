import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";
import { Sunrise, Users, GitMerge, FileSearch, Presentation, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const nodes = [
  {
    id: "NODE_01",
    title: "Daily Engineering Sync",
    desc: "Short focused discussions to align priorities, blockers, and daily objectives without unnecessary overhead.",
    visual: "sonar",
    icon: Sunrise,
  },
  {
    id: "NODE_02",
    title: "Collaborative Development",
    desc: "Frequent pair programming and shared debugging sessions to improve code quality and accelerate learning.",
    visual: "linked",
    icon: Users,
  },
  {
    id: "NODE_03",
    title: "Structured Git Workflow",
    desc: "Feature branches, pull requests, peer reviews, and organized version control practices across all projects.",
    visual: "gitgraph",
    icon: GitMerge,
  },
  {
    id: "NODE_04",
    title: "Constructive Code Reviews",
    desc: "Detailed yet respectful review practices focused on readability, scalability, maintainability, and learning.",
    visual: "scan",
    icon: FileSearch,
  },
  {
    id: "NODE_05",
    title: "Weekly Product Demos",
    desc: "Consistent demonstrations of visible progress, new features, prototypes, and technical experiments.",
    visual: "projection",
    icon: Presentation,
  },
  {
    id: "NODE_06",
    title: "Atomic Task Management",
    desc: "Tasks are broken into manageable units for faster iteration, cleaner collaboration, and transparent execution.",
    visual: "tasks",
    icon: ListTodo,
  },
];

export function Workflow() {
  const [utc, setUtc] = useState<string>(() => new Date().toISOString());

  useEffect(() => {
    const t = setInterval(() => setUtc(new Date().toISOString()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <SectionShell id="workflow" eyebrow="03 / Operations" title="How HighOnCode Operates">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong neon-border p-6 sm:p-10">
          {/* top status bar */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#5EF2FF]/80">
              <span className="relative inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                <span className="animate-pulse text-[#7FFFD4]">LIVE</span>
                <span className="ml-2 text-[#9EE9F2]/60">· highoncode/operations</span>
              </span>
              <span className="hidden sm:inline">
                <span className="ml-4 inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#5EF2FF] shadow-[0_0_6px_#00D9FF]" />
                  SYNC STATUS · <strong className="ml-1 text-white">ACTIVE</strong>
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-[12px] text-[#9EE9F2]/70">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em]">UTC</span>
                <div className="font-mono text-sm text-white">{utc.replace("T", " ").replace("Z", " UTC")}</div>
              </div>
              <div className="hidden sm:block text-[10px] text-[#7FFFD4]/70">Systems evolve faster when knowledge is shared.</div>
            </div>
          </div>

          {/* floating particles & sonar lines */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent opacity-30 animate-pulse" />
            <div className="absolute right-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#7FFFD4]/30 to-transparent opacity-20 animate-pulse delay-200" />
          </div>

          {/* nodes grid */}
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* connecting svg / glowing links */}
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" preserveAspectRatio="none">
              <defs>
                <linearGradient id="conn2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#7FFFD4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 12% 30% Q 50% 50% 88% 30%" stroke="url(#conn2)" strokeWidth="1" fill="none" />
              <path d="M 12% 70% Q 50% 50% 88% 70%" stroke="url(#conn2)" strokeWidth="1" fill="none" />
              <path d="M 50% 10% Q 50% 50% 50% 90%" stroke="url(#conn2)" strokeWidth="1" fill="none" />
            </svg>

            {nodes.map((n, i) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl border border-[#5EF2FF]/12 bg-[#041C24]/40 p-5 transition hover:scale-[1.01] hover:shadow-[0_10px_40px_-12px_rgba(0,217,255,0.35)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#5EF2FF]/20 bg-[#020B12]" style={{ boxShadow: "inset 0 0 18px rgba(0,217,255,0.08)" }}>
                      <n.icon className="h-5 w-5 text-[#7FFFD4]" strokeWidth={1.5} />
                    </span>
                    {/* visual accents */}
                    {n.visual === "sonar" && (
                      <span className="absolute -left-3 -top-3 inline-block h-8 w-8 rounded-full bg-[#00D9FF]/10 blur-sm" />
                    )}
                  </div>

                  <span className="font-mono text-[10px] text-[#5EF2FF]/60">{n.id}</span>
                </div>

                <h4 className="mt-3 font-display text-sm font-semibold text-white">{n.title}</h4>
                <p className="mt-1 text-xs text-[#B6EAF2]/85">{n.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] text-[#5EF2FF]/70">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FFFD4]/50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7FFFD4]" />
                    </span>
                    ACTIVE
                  </div>

                  {/* small visual preview */}
                  <div className="flex items-center gap-2">
                    {n.visual === "gitgraph" && (
                      <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4 L20 4 L28 12 L44 12" stroke="#7FFFD4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="4" cy="4" r="2" fill="#00D9FF" />
                        <circle cx="20" cy="4" r="2" fill="#7FFFD4" />
                        <circle cx="28" cy="12" r="2" fill="#7FFFD4" />
                        <circle cx="44" cy="12" r="2" fill="#00D9FF" />
                      </svg>
                    )}
                    {n.visual === "scan" && (
                      <div className="h-6 w-16 overflow-hidden rounded bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent">
                        <div className="h-full w-8 animate-[scan_1.8s_linear_infinite] bg-gradient-to-r from-transparent via-[#7FFFD4] to-transparent" />
                      </div>
                    )}
                    {n.visual === "projection" && (
                      <div className="h-6 w-6 rounded border border-[#7FFFD4]/20 bg-[#011419]/40 shadow-[0_4px_18px_-6px_rgba(0,217,255,0.25)]" />
                    )}
                    {n.visual === "tasks" && (
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#7FFFD4] animate-bounce" />
                        <span className="h-2 w-2 rounded-full bg-[#00D9FF] opacity-80" />
                        <span className="h-2 w-2 rounded-full bg-[#7FFFD4] opacity-60" />
                      </div>
                    )}
                    {n.visual === "sonar" && (
                      <div className="h-6 w-6 rounded-full border border-[#7FFFD4]/20 relative">
                        <span className="absolute inset-0 m-1 rounded-full border border-[#7FFFD4]/40 animate-ping" />
                        <span className="absolute inset-0 m-2 rounded-full bg-[#7FFFD4]/30" />
                      </div>
                    )}
                    {n.visual === "linked" && (
                      <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7 C12 2, 24 12, 34 7" stroke="#7FFFD4" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Engineering Principles */}
          <div className="mt-8">
            <h3 className="mb-3 text-xs uppercase tracking-[0.35em] text-[#5EF2FF]/70">Core Engineering Principles</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Ship with purpose",
                "Keep systems scalable",
                "Readable code over clever code",
                "Document important decisions",
                "Learn continuously",
                "Review before merge",
                "Build together",
                "Stay adaptable",
              ].map((p) => (
                <motion.div key={p} whileHover={{ y: -4 }} className="rounded-full border border-[#5EF2FF]/10 bg-[#011419]/40 px-4 py-2 text-sm text-[#B6EAF2] shadow-[0_8px_30px_-16px_rgba(0,217,255,0.12)]">
                  {p}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Live Team Telemetry removed per request */}
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* Note: kept Tel component removed in favor of custom telemetry cards above */