import swechaLogo from "@/swecha_logo.png";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 -translate-y-1/2 overflow-hidden opacity-70">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-[200%] animate-wave">
          <defs>
            <linearGradient id="fw" x1="0" x2="1">
              <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#7FFFD4" stopOpacity="0.24" />
            </linearGradient>
          </defs>
          <path d="M0 60 Q180 10 360 60 T720 60 T1080 60 T1440 60 V120 H0 Z M1440 60 Q1620 10 1800 60 T2160 60 T2520 60 T2880 60 V120 H1440 Z" fill="url(#fw)" />
        </svg>
      </div>

      <div
        className="mx-auto mb-6 h-px max-w-7xl"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.7), transparent)", boxShadow: "0 0 8px rgba(0,217,255,0.16)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#5EF2FF]/30 bg-[#041C24]">
              <img src={swechaLogo} alt="Swecha logo" className="h-5 w-5 object-cover" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.2em] text-glow-soft">
              HIGH<span className="gradient-text">ON</span>CODE
            </span>
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#9EE9F2]/80">
            A submerged research collective from BITS Pilani. We build calm
            interfaces over deep systems.
          </p>
        </div>

        <FootCol title="Navigate" links={["Identity", "Crew", "Skills", "Learn"]} ids={["identity", "team", "skills", "learn"]} />
        <FootCol title="Signals" links={["Workflow", "Fun Zone"]} ids={["workflow", "fun"]} />

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/70">Surface</h5>
          <div />
        </div>
      </div>

      <div className="border-t border-[#5EF2FF]/10 py-5 text-center text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/50">
        © {new Date().getFullYear()} HighOnCode · Built underwater with caffeine & cyan light
      </div>
    </footer>
  );
}

function FootCol({ title, links, ids }: { title: string; links: string[]; ids: string[] }) {
  return (
    <div>
      <h5 className="text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/70">{title}</h5>
      <ul className="mt-4 space-y-2 text-sm text-[#B6EAF2]">
        {links.map((l, i) => (
          <li key={l}>
            <a href={`#${ids[i]}`} className="transition hover:text-[#7FFFD4]">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Social icons removed per request