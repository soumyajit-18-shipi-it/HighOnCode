import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global cinematic scroll engine.
 * - Lenis-driven smooth, weighted, "submerged" scrolling.
 * - Exposes `--scroll-velocity` (0..1) and `--scroll-depth` (0..1) on <html>
 *   so any element can react to inertia / depth without React re-renders.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    const root = document.documentElement;
    let velSmoothed = 0;

    lenis.on("scroll", ({ velocity, scroll, limit }: { velocity: number; scroll: number; limit: number }) => {
      const v = Math.min(Math.abs(velocity) / 60, 1);
      velSmoothed = velSmoothed + (v - velSmoothed) * 0.18;
      root.style.setProperty("--scroll-velocity", velSmoothed.toFixed(3));
      const depth = limit > 0 ? Math.min(scroll / limit, 1) : 0;
      root.style.setProperty("--scroll-depth", depth.toFixed(3));
      ScrollTrigger.update();
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      root.style.removeProperty("--scroll-velocity");
      root.style.removeProperty("--scroll-depth");
    };
  }, []);

  return null;
}