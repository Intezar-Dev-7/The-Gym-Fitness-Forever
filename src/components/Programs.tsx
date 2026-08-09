import { PROGRAMS } from "../data";
import AnimatedSection from "./AnimatedSection";
import GlassCard from "./GlassCard";
import { ArrowUpRight } from "lucide-react";

export default function Programs() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="programs"
      className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 border-t border-white/[0.03]"
    >
      {/* Decorative backdrop light */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
              FEATURED GOALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              TARGET YOUR FITNESS
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
            Whether you want to build raw physical power, enhance cardiorespiratory stamina, or enjoy shared energy in group classes, we have a focused structure.
          </p>
        </div>

        {/* Programs Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => handleScrollTo("#contact")}
              className="group cursor-pointer relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-[3/4] border border-white/10 shadow-xl transition-all duration-500 hover:border-amber-500/30"
            >
              {/* Card Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-amber-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Float Glass Title Badge & Details */}
              <div className="absolute inset-x-5 bottom-5">
                <GlassCard className="p-4 bg-black/40 backdrop-blur-md border-white/10 group-hover:border-amber-500/20 group-hover:bg-black/65 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-lg font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                      {program.title}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-amber-500/20 flex items-center justify-center border border-white/10 group-hover:border-amber-500/30 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {program.description}
                  </p>
                </GlassCard>
              </div>
            </div>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
}
