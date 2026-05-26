import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "radial-gradient(ellipse at center, #041C24 0%, #020B12 60%, #000507 100%)" }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 animate-spin-slow rounded-full"
                   style={{ background: "conic-gradient(from 0deg, transparent, #00D9FF, transparent 70%)", filter: "blur(2px)" }} />
              <div className="absolute inset-1 grid place-items-center rounded-full bg-[#020B12]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <svg width="56" height="42" viewBox="0 0 80 36" fill="none">
                    <defs>
                      <linearGradient id="lf" x1="0" x2="1">
                        <stop offset="0%" stopColor="#7FFFD4" />
                        <stop offset="100%" stopColor="#00D9FF" />
                      </linearGradient>
                    </defs>
                    <path d="M2 18 Q20 4 50 18 Q20 32 2 18Z M50 18 L72 6 L68 18 L72 30 Z" fill="url(#lf)"
                          style={{ filter: "drop-shadow(0 0 6px #00D9FF)" }} />
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className="font-display text-[10px] uppercase tracking-[0.5em] text-[#5EF2FF]/80">
              Calibrating depth
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}