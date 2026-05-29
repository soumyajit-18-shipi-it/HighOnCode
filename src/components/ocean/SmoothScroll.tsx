import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applyMotionDataAttributes, getMotionProfile } from "@/lib/motion";

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
    const profile = getMotionProfile();
    applyMotionDataAttributes(profile);
    if (profile.reduced) return;

    const lenis = new Lenis({
      duration: profile.lowPower ? 0.88 : 1.02,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: profile.lowPower ? 0.8 : 0.9,
      touchMultiplier: 1,
      syncTouch: true,
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
    gsap.ticker.lagSmoothing(600, 33);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      root.style.removeProperty("--scroll-velocity");
      root.style.removeProperty("--scroll-depth");
      delete root.dataset.motion;
      delete root.dataset.pointer;
    };
  }, []);

  return null;
}