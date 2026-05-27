import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, #7FFFD4, #5EF2FF, #FFB3A7)",
        boxShadow: "0 0 6px rgba(0,217,255,0.55), 0 0 14px rgba(255,179,167,0.25)",
      }}
    />
  );
}