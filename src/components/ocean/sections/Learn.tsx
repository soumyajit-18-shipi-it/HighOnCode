import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";
import { Bot, Cloud, Cog, Shield, Layers, Brain, ServerCog, GitBranch } from "lucide-react";

const goals = [
  { icon: Bot, title: "AI Agents", desc: "Tool-using agents, planning loops, retrieval pipelines and evals." },
  { icon: Cloud, title: "Cloud Computing", desc: "Distributed compute, serverless edges, and infra-as-code patterns." },
  { icon: Cog, title: "DevOps", desc: "CI/CD, observability, container orchestration, on-call rituals." },
  { icon: Shield, title: "Cybersecurity", desc: "Threat modeling, secure SDLC, cryptography fundamentals." },
  { icon: Layers, title: "Advanced Full-Stack", desc: "Realtime UIs, type-safe APIs, design systems at scale." },
  { icon: Brain, title: "Machine Learning Systems", desc: "Training infra, feature stores, model serving and drift." },
  { icon: ServerCog, title: "Backend Architecture", desc: "Event-driven systems, data modeling, performance budgets." },
  { icon: GitBranch, title: "Open Source Collaboration", desc: "Triage, RFCs, code review etiquette, contributing upstream." },
];

export function Learn() {
  return (
    <SectionShell id="learn" eyebrow="04 / Trajectory" title="What We Want to Learn Next">
      <div className="relative">
        {/* glowing path */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
             style={{ background: "linear-gradient(180deg, transparent, rgba(0,217,255,0.8), rgba(127,255,212,0.5), transparent)", boxShadow: "0 0 10px rgba(0,217,255,0.18)" }} />

        <div className="grid gap-6 md:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <div className={`relative md:${i % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <div className="group relative overflow-hidden rounded-2xl glass neon-hover p-6">
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-40 transition group-hover:opacity-75"
                    style={{ background: "radial-gradient(circle, rgba(0,217,255,0.18), transparent 62%)", filter: "blur(14px)" }}
                  />
                  <div className={`flex items-start gap-4 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#5EF2FF]/22 bg-[#020B12]/60"
                        style={{ boxShadow: "inset 0 0 14px rgba(0,217,255,0.08)" }}>
                      <g.icon className="h-5 w-5 text-[#7FFFD4]" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.35em] text-[#5EF2FF]/70">Mission {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-white">{g.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#C7EEF4]/85">{g.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}