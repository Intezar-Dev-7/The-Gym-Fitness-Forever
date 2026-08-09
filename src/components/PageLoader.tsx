import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant quick brand loader timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-100 bg-neutral-950 flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle gold grid backing in loader */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* Central Logo & Brand Reveal */}
          <div className="relative flex flex-col items-center">
            
            {/* Animated Icon Container with soft gold halo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1], 
                opacity: 1 
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_40px_rgba(245,158,11,0.15)]"
            >
              <Dumbbell className="w-8 h-8 animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border border-amber-500/30 animate-ping opacity-25" />
            </motion.div>

            {/* Typography entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-center select-none"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-widest text-white leading-none h-10">
                THE GYM
              </h2>
              <p className="text-xs tracking-[0.3em] font-extrabold text-amber-500 uppercase mt-2">
                FITNESS FOREVER
              </p>
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="w-40 h-[2px] bg-white/[0.06] rounded-full mt-8 overflow-hidden relative border border-white/[0.02]">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 1.8, 
                  repeat: 0, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_10px_#f59e0b]"
              />
            </div>

            {/* Loading text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-bold mt-4"
            >
              Initializing Premium Space
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
