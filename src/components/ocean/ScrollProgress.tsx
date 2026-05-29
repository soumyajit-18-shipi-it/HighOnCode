import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, #a4e0cf, #63d8e3, #7fa9a8)",
        boxShadow: "0 0 4px rgba(99,216,227,0.18)",
      }}
    />
  );
}