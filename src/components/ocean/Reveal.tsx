import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "fade" | "zoom" | "tilt";

const variantsMap: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
  },
  down: {
    hidden: { opacity: 0, y: -36, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
  },
  left: {
    hidden: { opacity: 0, x: -48, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
  },
  right: {
    hidden: { opacity: 0, x: 48, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
  },
  tilt: {
    hidden: { opacity: 0, y: 28, rotateX: -8, transformPerspective: 800 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.95, ease: [0.2, 0.8, 0.2, 1] } },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: any;
  variant?: RevealVariant;
}) {
  const MotionTag = (motion as any)[As] ?? motion.div;
  const variants = variantsMap[variant];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}