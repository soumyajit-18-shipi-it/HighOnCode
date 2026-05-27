import { Reveal } from "../Reveal";
import { Compass, Sparkles, Quote } from "lucide-react";

export function Identity() {
  return (
    <SectionShell id="identity" eyebrow="01 / Identity" title="A Hidden Research Squad">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-3xl glass-strong neon-border p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,217,255,0.3), transparent 60%)" }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">
              <Compass className="h-3.5 w-3.5" /> Codename
            </span>
            <h3 className="mt-3 font-display text-5xl font-bold tracking-tight text-white text-glow sm:text-6xl">
              High<span className="gradient-text">On</span>Code
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm italic text-[#7FFFD4]">
              <Quote className="h-4 w-4 opacity-60" />
              “Compiled with precision. Engineered for depth.”
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Block title="Who We Are">
                We are a team of three engineering students from BITS Pilani, driven by a shared interest in building thoughtful, scalable, and impactful technology. Our combined interests span frontend engineering, intelligent systems, software architecture, cybersecurity, and modern product development.
                <br />
                <br />
                We enjoy working at the intersection of design, engineering, and problem solving — transforming ideas into reliable systems with strong technical foundations.
              </Block>

              <Block title="Why “HighOnCode”">
                The name reflects our enthusiasm for building and exploring technology beyond the surface level. It represents long collaborative sessions, deep technical discussions, iterative problem-solving, and the satisfaction of creating systems that are both elegant and efficient.
                <br />
                <br />
                For us, coding is not just implementation — it is experimentation, creativity, and continuous learning.
              </Block>

              <Block title="Mission">
                To build software that combines simplicity in experience with depth in engineering — systems that appear seamless to users while being robust, scalable, and intelligently designed underneath.
              </Block>

              <Block title="Fun Fact">
                Our shared workspace runs on equal parts curiosity, late-night debugging sessions, and an ever-growing lo-fi playlist that has become the unofficial soundtrack of our development process.
              </Block>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl glass neon-hover p-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">Squad Readout</span>
            <ul className="mt-4 space-y-3 text-sm">
              <Stat label="Crew" value="3 Engineering Students" />
              <Stat label="Institution" value="BITS Pilani" />
              <Stat
                label="Core Domains"
                value="Web Development · Artificial Intelligence · Cybersecurity · Software Systems"
              />
              <Stat label="Current Status" value="Internship Onboarding Team" tone="live" />
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="relative overflow-hidden rounded-3xl glass neon-hover p-6">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">
              <Sparkles className="h-3.5 w-3.5" /> Operating Principles
            </span>
            <div className="mt-4 grid gap-3 text-sm">
              <Block title="Build with Purpose">
                We focus on creating solutions that are functional, scalable, and meaningful rather than over-engineered.
              </Block>
              <Block title="Learn Continuously">
                Every project is an opportunity to explore new technologies, improve collaboration, and strengthen engineering fundamentals.
              </Block>
              <Block title="Collaborate Transparently">
                We value open communication, peer reviews, documentation, and knowledge sharing throughout the development process.
              </Block>
              <Block title="Question Assumptions">
                We believe strong systems emerge from curiosity, experimentation, and critical thinking.
              </Block>
              <Block title="Support the Team">
                We prioritize reliability, accountability, and helping one another grow both technically and professionally.
              </Block>
              <Block title="Stay Adaptable">
                Technology evolves rapidly, and we aim to remain flexible, curious, and ready to learn.
              </Block>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#7FFFD4]">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[#C7EEF4]/90">{children}</p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "live" }) {
  return (
    <li className="flex items-center justify-between border-b border-[#5EF2FF]/10 pb-2 last:border-none">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#5EF2FF]/70">{label}</span>
      <span className={`font-display text-sm ${tone === "live" ? "text-[#7FFFD4]" : "text-white"}`}>
        {tone === "live" && (
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
        )}
        {value}
      </span>
    </li>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
      <Reveal variant="left">
        <p className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#FFB3A7]/80">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#FF7A8A]/60" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal variant="up" delay={0.1}>
        <h2 className="mb-12 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title.split(" ").map((w, i, arr) => (
            <span key={i} className={i === arr.length - 1 ? "gradient-text-coral" : ""}>
              {w}{i < arr.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}