import { SERVICES } from "../data";
import AnimatedSection from "./AnimatedSection";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 border-t border-white/[0.03]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
            OUR OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            PROFESSIONAL FITNESS SERVICES
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            From rhythmic high-energy dance sessions to heavy resistance weight training, we provide specialized classes and spaces tailored for every goal.
          </p>
        </div>

        {/* Services Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
