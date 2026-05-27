import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Anchor } from "lucide-react";
import swechaLogo from "@/swecha_logo.png";
import { Reveal } from "../Reveal";

export function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end end"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.6, 0.9]);

  return (
    <footer ref={ref} className="relative mt-32 overflow-hidden">
      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 -translate-y-1/2 overflow-hidden opacity-60">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-[200%] animate-wave">
          <defs>
            <linearGradient id="fw" x1="0" x2="1">
              <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#7FFFD4" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FF7A8A" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path d="M0 60 Q180 10 360 60 T720 60 T1080 60 T1440 60 V120 H0 Z M1440 60 Q1620 10 1800 60 T2160 60 T2520 60 T2880 60 V120 H1440 Z" fill="url(#fw)" />
        </svg>
      </div>

      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 footer-grid-bg" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[-30%] h-[60vmin] w-[60vmin] -translate-x-1/2 rounded-full"
        style={{
          y: glowY,
          opacity: glowOpacity,
          background:
            "radial-gradient(circle, rgba(99,216,227,0.16) 0%, rgba(164,224,207,0.08) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(52,75,115,0.16), transparent 65%)", filter: "blur(80px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(127,169,168,0.12), transparent 65%)", filter: "blur(80px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        {/* CTA capsule */}
        <Reveal variant="zoom">
          <div className="relative mb-20 overflow-hidden rounded-[32px] border border-[#5EF2FF]/15 bg-gradient-to-br from-[#04151C]/85 via-[#031018]/85 to-[#06222B]/85 px-8 py-14 backdrop-blur-xl sm:px-14">
            <div className="absolute inset-0 shimmer-line opacity-30" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(99,216,227,0.14), transparent 65%)", filter: "blur(20px)" }} />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(127,169,168,0.12), transparent 65%)", filter: "blur(20px)" }} />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="mb-3 font-display text-[10px] uppercase tracking-[0.42em] text-[#8bd8dc]/70">Open Channel</p>
                <h3 className="font-display text-3xl font-bold leading-[0.96] tracking-[0.02em] sm:text-4xl">
                  Surface a project with <span className="gradient-text">our crew</span>.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#aac1c6] sm:text-base">
                  Internships, research collaborations, campus-tech, indie experiments — we read every signal.
                </p>
              </div>
              <MagneticButton href="mailto:f20240002@pilani.bits-pilani.ac.in">
                <Mail className="h-4 w-4" />
                Open Transmission
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-[#5EF2FF]/25 bg-[#041C24]">
                  <img src={swechaLogo} alt="Swecha logo" className="h-6 w-6 object-cover" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-[#5EF2FF]/0 transition group-hover:ring-[#5EF2FF]/40" />
                </span>
                <span className="font-display text-sm font-bold tracking-[0.18em] text-glow-soft">
                  HIGH<span className="gradient-text">ON</span>CODE
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#aac1c6]">
                A submerged research collective from BITS Pilani. We build calm
                interfaces over deep systems — engineered for depth, compiled with precision.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a href="https://github.com/soumyajit-18-shipi-it" target="_blank" rel="noreferrer" className="icon-bubble" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/soumyajit-rout-4a5aa1337" target="_blank" rel="noreferrer" className="icon-bubble" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:f20240002@pilani.bits-pilani.ac.in" className="icon-bubble" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              {/* Status row */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#8bd8dc]/12 bg-[#041822]/55 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.3em] text-foreground-muted">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7FFFD4]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#a4e0cf]/60" />
                </span>
                Signal · Stable
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <FootCol
              title="Navigate"
              items={[
                { label: "Identity", href: "#identity" },
                { label: "Crew", href: "#team" },
                { label: "Skills", href: "#skills" },
                { label: "Learn", href: "#learn" },
              ]}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <FootCol
              title="Signals"
              items={[
                { label: "Workflow", href: "#workflow" },
                { label: "Fun Zone", href: "#fun" },
                { label: "Back to Top", href: "#top" },
              ]}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h5 className="font-display text-[10px] uppercase tracking-[0.34em] text-[#8bd8dc]/70">Coordinates</h5>
              <ul className="mt-5 space-y-3 text-sm text-[#aac1c6]">
                <li className="flex items-start gap-2">
                  <Anchor className="mt-0.5 h-3.5 w-3.5 text-[#a4e0cf]/70" />
                  <span>BITS Pilani · Pilani Campus</span>
                </li>
                <li className="text-xs text-foreground-muted">28.36°N · 75.59°E</li>
                <li className="text-xs text-foreground-muted">UTC +5:30 · Active</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Display lockup */}
        <Reveal variant="fade" delay={0.2}>
          <div className="relative mt-20 select-none overflow-visible px-2 py-2 sm:px-4">
            <div
              aria-hidden
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,216,227,0.28), transparent)" }}
            />
            <h2
              className="pointer-events-none whitespace-nowrap text-center font-display text-[13vw] font-extrabold leading-none tracking-[0.04em] text-transparent sm:text-[11vw] md:text-[9vw] lg:text-[7rem]"
              style={{
                WebkitTextStroke: "1px rgba(99,216,227,0.14)",
                backgroundImage: "linear-gradient(180deg, rgba(99,216,227,0.12), rgba(155,190,194,0.06) 55%, transparent 80%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              HIGHONCODE
            </h2>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#8bd8dc]/8 pt-6 text-[10px] uppercase tracking-[0.3em] text-foreground-muted sm:flex-row">
          <p>© {new Date().getFullYear()} HighOnCode · Built underwater</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#a4e0cf]/60" />
            Caffeine & Cyan Light
            <span className="h-1 w-1 rounded-full bg-[#7fa9a8]/60" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h5 className="font-display text-[10px] uppercase tracking-[0.34em] text-[#8bd8dc]/70">{title}</h5>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="link-underline group inline-flex items-center gap-1.5 text-[#aac1c6] transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-3 bg-[#8bd8dc]/30 transition-all duration-500 group-hover:w-5 group-hover:bg-[#a4e0cf]/70" />
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className="relative inline-block">
      <a
        ref={ref}
        href={href}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-4 font-display text-[10px] uppercase tracking-[0.28em] text-[#031018] transition-[transform,box-shadow] duration-500 ease-out"
        style={{
          background: "linear-gradient(135deg, #b2e6df 0%, #8bd8dc 55%, #63d8e3 100%)",
          boxShadow:
            "0 0 0 1px rgba(99,216,227,0.22), 0 14px 40px -16px rgba(99,216,227,0.34)",
        }}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full"
          style={{ mixBlendMode: "overlay" }}
        />
      </a>
    </div>
  );
}