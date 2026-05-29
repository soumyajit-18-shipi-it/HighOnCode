import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { ChevronDown, Anchor } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import swechaLogo from "@/swecha_logo.png";
import { getMotionProfile } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const profile = getMotionProfile();
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll<HTMLSpanElement>("[data-char]");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 32, rotateX: -16 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.95,
            ease: "power3.out",
            stagger: { each: 0.028, from: "center" },
            delay: 0.14,
          },
        );
      }

      gsap.fromTo(
        "[data-hero-reveal]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.08,
        },
      );

      if (logoRef.current && !profile.lowPower) {
        gsap.to(logoRef.current, {
          y: -4,
          duration: 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -60,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: 64,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24">
      {/* center glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,216,227,0.08), rgba(52,75,115,0.04) 48%, transparent 72%)",
          filter: "blur(28px)",
          willChange: "transform, opacity",
        }}
      />

      <div ref={contentRef} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div data-hero-reveal className="mb-8">
          <img ref={logoRef} src={swechaLogo} alt="Swecha logo" className="h-28 w-28 rounded-full object-cover" />
        </div>

        <p data-hero-reveal className="mb-5 flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.42em] text-[#8bd8dc]/72">
          <span className="h-px w-10 bg-[#8bd8dc]/40" />
          Submerged Research Collective
          <span className="h-px w-10 bg-[#8bd8dc]/40" />
        </p>

        <h1
          ref={headlineRef}
          className="font-display text-5xl font-extrabold leading-[0.92] tracking-[0.03em] text-white text-glow sm:text-7xl md:text-[7.5rem]"
          style={{ perspective: "1000px" }}
        >
          {"HighOnCode".split("").map((c, i) => (
            <span
              key={i}
              data-char
              className={`inline-block ${i >= 4 && i < 6 ? "gradient-text" : ""}`}
              style={{ willChange: "transform, opacity" }}
            >
              {c}
            </span>
          ))}
        </h1>

        <p data-hero-reveal className="mt-6 max-w-2xl text-base font-light leading-relaxed tracking-[0.01em] text-[#c3dadd] sm:text-lg md:text-xl">
          We build intelligent systems beneath the surface of innovation —
          where deep code meets deeper currents.
        </p>

        <div data-hero-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#team">
            <Anchor className="h-4 w-4" />
            Meet the Crew
          </MagneticButton>
          <a
            href="#identity"
            className="rounded-full border border-[#8bd8dc]/16 px-6 py-3 font-display text-[10px] uppercase tracking-[0.28em] text-[#a9c8cc] transition hover:border-[#8bd8dc]/32 hover:text-white"
          >
            Dive Deeper
          </a>
        </div>

        {/* telemetry strip */}
        <div data-hero-reveal className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-[#8bd8dc]/10 rounded-2xl glass px-2 py-4 text-[10px] uppercase tracking-[0.25em] text-[#a9c8cc]/76">
          <Stat label="Depth" value="−2,400m" />
          <Stat label="Pressure" value="240 bar" />
          <Stat label="Salinity" value="3.5 %" />
        </div>
      </div>

      <a
        href="#identity"
        data-hero-reveal
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#8bd8dc]/60 transition hover:text-[#a4e0cf]"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.35em]"></span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-2">
      <span className="font-display text-[9px] text-[#8bd8dc]/60">{label}</span>
      <span className="font-display text-sm font-semibold tracking-[0.08em] text-white sm:text-base">{value}</span>
    </div>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const xToRef = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const yToRef = useRef<((value: number) => gsap.core.Tween) | null>(null);
  const scaleToRef = useRef<((value: number) => gsap.core.Tween) | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    xToRef.current = gsap.quickTo(ref.current, "x", { duration: 0.24, ease: "power2.out" });
    yToRef.current = gsap.quickTo(ref.current, "y", { duration: 0.24, ease: "power2.out" });
    scaleToRef.current = gsap.quickTo(ref.current, "scale", { duration: 0.22, ease: "power2.out" });
  }, []);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element || !xToRef.current || !yToRef.current || !scaleToRef.current) return;

    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.1;
    const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.12;

    xToRef.current(x);
    yToRef.current(y);
    scaleToRef.current(1.01);
  };

  const handleLeave = () => {
    if (!xToRef.current || !yToRef.current || !scaleToRef.current) return;
    xToRef.current(0);
    yToRef.current(0);
    scaleToRef.current(1);
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 font-display text-[10px] uppercase tracking-[0.28em] text-[#020B12] transition-transform duration-300"
      style={{
        background: "linear-gradient(135deg, #b2e6df, #8bd8dc 52%, #63d8e3)",
        boxShadow: "0 0 0 1px rgba(99,216,227,0.18), 0 12px 28px -16px rgba(99,216,227,0.28)",
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