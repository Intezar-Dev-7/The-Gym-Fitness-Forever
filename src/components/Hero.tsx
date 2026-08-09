import { motion } from "motion/react";
import { Star, Clock, ChevronDown, Dumbbell, ShieldCheck } from "lucide-react";
import GlassCard from "./GlassCard";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_gym_dark_1786252017507.jpg"
          alt="Premium Dark Gym Interior"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
          >
            <Dumbbell className="w-4 h-4 text-amber-500 animate-pulse" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
              Goa's Top Rated Fitness Club
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight mb-6"
          >
            BUILD YOUR <br />
            <span className="text-amber-500 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              STRONGEST
            </span>{" "}
            SELF.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="text-lg sm:text-xl font-bold text-gray-200 tracking-wide mb-4"
          >
            Train stronger. Move better. Live healthier.
          </motion.p>

          {/* Detailed Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
          >
            The Gym – Fitness Forever offers premium coaching, state-of-the-art strength and conditioning equipment, elite personal training, dynamic group fitness, and functional fitness for all experience levels in Porvorim, Goa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="
                px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider
                bg-amber-500 hover:bg-amber-400 text-black
                shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40
                transition-all duration-300 hover:scale-105 active:scale-95
              "
            >
              JOIN THE GYM
            </button>
            <button
              onClick={() => handleScrollTo("#services")}
              className="
                px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider
                bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white
                backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95
              "
            >
              EXPLORE SERVICES
            </button>
          </motion.div>
        </div>

        {/* Right column: Interactive Premium Floating Cards */}
        <div className="lg:col-span-5 relative h-72 md:h-96 w-full flex items-center justify-center">
          {/* Glowing background behind cards */}
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-[80px]" />

          {/* Floating Card 1: Google Rating */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="absolute top-4 left-2 sm:top-8 sm:left-4 md:left-12 z-20 scale-90 sm:scale-100 origin-left"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard className="p-4 sm:p-5 flex items-center gap-3 sm:gap-4 border-amber-500/25 bg-white/[0.05]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 text-amber-500 shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg sm:text-xl font-black text-white">4.9</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                    315+ Google Reviews
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Floating Card 2: Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="absolute bottom-4 right-2 sm:bottom-8 sm:right-4 md:right-12 z-20 scale-90 sm:scale-100 origin-right"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard className="p-4 sm:p-5 flex items-center gap-3 sm:gap-4 border-white/[0.08] bg-white/[0.03]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 text-amber-500 shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold text-white block">
                    Open from 6:00 AM
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                    Early Morning Access
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Decorative central circle item */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2.5 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white/5 bg-white/[0.02] backdrop-blur-2xl flex flex-col items-center justify-center shadow-inner scale-90 sm:scale-100"
          >
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/80 mb-1" />
            <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-gray-400 uppercase">
              100% PRO
            </span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 select-none pointer-events-none opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
}
