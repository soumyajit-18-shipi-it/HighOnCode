import { motion } from "framer-motion";
import { ChevronDown, Anchor } from "lucide-react";
import swechaLogo from "@/swecha_logo.png";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24">
      {/* center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
           style={{ background: "radial-gradient(circle, rgba(0,217,255,0.12), transparent 64%)", filter: "blur(52px)" }} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-8"
        >
          <img src={swechaLogo} alt="Swecha logo" className="h-28 w-28 rounded-full object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#5EF2FF]/70"
        >
          <span className="h-px w-10 bg-[#5EF2FF]/50" />
          Submerged Research Collective
          <span className="h-px w-10 bg-[#5EF2FF]/50" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white text-glow sm:text-7xl md:text-8xl"
        >
          High<span className="gradient-text">On</span>Code
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-6 max-w-2xl text-base font-light leading-relaxed text-[#B6EAF2] sm:text-lg md:text-xl"
        >
          We build intelligent systems beneath the surface of innovation —
          where deep code meets deeper currents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#team">
            <Anchor className="h-4 w-4" />
            Meet the Crew
          </MagneticButton>
          <a
            href="#identity"
              className="rounded-full border border-[#5EF2FF]/18 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#9EE9F2] transition hover:border-[#5EF2FF]/36 hover:text-[#E6FBFF]"
          >
            Dive Deeper
          </a>
        </motion.div>

        {/* telemetry strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-[#5EF2FF]/10 rounded-2xl glass px-2 py-4 text-[10px] uppercase tracking-[0.25em] text-[#9EE9F2]/76"
        >
          <Stat label="Depth" value="−2,400m" />
          <Stat label="Pressure" value="240 bar" />
          <Stat label="Salinity" value="3.5 %" />
        </motion.div>
      </div>

      <a
        href="#identity"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#5EF2FF]/60 transition hover:text-[#7FFFD4]"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Descend</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-2">
      <span className="text-[9px] text-[#5EF2FF]/60">{label}</span>
      <span className="font-display text-sm font-semibold text-white sm:text-base">{value}</span>
    </div>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#020B12] transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(135deg, #87e8d2, #5EF2FF 50%, #2bbfd6)",
        boxShadow: "0 0 0 1px rgba(0,217,255,0.22), 0 10px 26px -14px rgba(0,217,255,0.35)",
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
        style={{ mixBlendMode: "overlay" }}
      />
    </a>
  );
}

// Emblem replaced by swecha logo image above