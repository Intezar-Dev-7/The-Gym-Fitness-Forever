import { Phone, MessageSquare, Dumbbell } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import heroImage from "../assets/images/hero_gym_dark_1786252017507.jpg";

export default function CTA() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-28 md:py-36 w-full flex items-center justify-center overflow-hidden px-4">
      {/* Background Image with strong dark vignette overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gym conditioning floor background"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-950/85 md:bg-neutral-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <AnimatedSection className="flex flex-col items-center">

          {/* Centered Icon Accent */}
          <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8 shadow-xl">
            <Dumbbell className="w-6 h-6 animate-bounce" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight mb-6">
            READY TO GET STRONGER?
          </h2>

          <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide mb-3">
            Your fitness journey starts with one decision.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg leading-relaxed mb-10">
            Join a community dedicated to real physical progress, professional training excellence, and lifelong wellness in Porvorim, Goa.
          </p>

          {/* Action Button cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo("#contact")}
              className="
                w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider
                bg-amber-500 hover:bg-amber-400 text-black
                shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40
                transition-all duration-300 hover:scale-105 active:scale-95
              "
            >
              JOIN THE GYM
            </button>

            <a
              href="tel:+919422439614"
              className="
                w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider
                bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white
                backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              "
            >
              <Phone className="w-4 h-4 text-amber-500" /> CALL NOW
            </a>

            <a
              href="https://wa.me/919422439614"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider
                bg-green-600/10 border border-green-500/30 hover:bg-green-600/20 hover:border-green-400 text-green-400
                backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95
                flex items-center justify-center gap-2
              "
            >
              <MessageSquare className="w-4 h-4" /> WHATSAPP US
            </a>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
