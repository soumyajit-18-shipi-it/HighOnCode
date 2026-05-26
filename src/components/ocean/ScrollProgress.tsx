import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, #7FFFD4, #5EF2FF, #00D9FF)",
        boxShadow: "0 0 12px #00D9FF, 0 0 24px #5EF2FF",
      }}
    />
  );
}