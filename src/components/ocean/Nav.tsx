import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import airIndiaTrack from "@/air_india.mp3";
import swechaLogo from "@/swecha_logo.png";

const links = [
  { id: "identity", label: "Identity" },
  { id: "team", label: "Crew" },
  { id: "skills", label: "Skills" },
  { id: "learn", label: "Learn" },
  { id: "workflow", label: "Workflow" },
  { id: "fun", label: "Fun Zone" },
];

export function Nav() {
  const [sound, setSound] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    if (sound) {
      void audio.play().catch(() => setSound(false));
    } else {
      audio.pause();
    }
  }, [sound]);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(96%,1100px)] -translate-x-1/2 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass-strong neon-border" : "glass"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <img src={swechaLogo} alt="Swecha logo" className="h-9 w-9 rounded-xl object-cover" />
          <span className="font-display text-sm font-bold tracking-[0.18em] text-glow-soft">
            HIGH<span className="gradient-text">ON</span>CODE
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="link-underline relative rounded-lg px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.28em] text-foreground-deep transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setSound((s) => !s)}
          className="group relative flex items-center gap-2 rounded-xl border border-[#8bd8dc]/14 bg-[#041822]/50 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.22em] text-[#c6dde0]/90 transition hover:border-[#8bd8dc]/30 hover:text-white"
          aria-label="Toggle ambient music"
        >
          {sound ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
          <span className="hidden sm:inline">{sound ? "Ambient" : "Muted"}</span>
          <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100" style={{ boxShadow: "0 0 16px rgba(99,216,227,0.14)" }} />
        </button>

        <audio ref={audioRef} src={airIndiaTrack} loop preload="auto" />
      </div>
    </header>
  );
}