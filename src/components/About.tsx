import AnimatedSection from "./AnimatedSection";
import GlassCard from "./GlassCard";
import { CheckCircle2, Award, Shield, Users } from "lucide-react";
import aboutImage from "../assets/images/about_gym_community_1786252033276.jpg";

export default function About() {
  const stats = [
    { value: "4.9 ★", label: "Google Rating", icon: Award },
    { value: "315+", label: "Reviews", icon: Users },
    { value: "6 AM", label: "Opening Time", icon: CheckCircle2 },
    { value: "100%", label: "Commitment", icon: Shield },
  ];

  const highlights = [
    "Experienced & supportive trainers",
    "Quality, modern strength & cardio equipment",
    "Multiple training styles & fitness disciplines",
    "Friendly & hygienic community environment",
    "Personal attention to form & safety",
    "Structured workouts for all experience levels",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4">
      {/* Decorative radial gradients for ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium Gym Image Container */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient gold glow card border backup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            <div className="relative rounded-[28px] overflow-hidden aspect-video md:aspect-[4/5] border border-white/10 shadow-2xl">
              <img
                src={aboutImage}
                alt="Strength Athlete Training at The Gym Porvorim"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <GlassCard className="p-4 bg-black/40 border-white/10 backdrop-blur-md">
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">
                    ESTABLISHED FITNESS BRAND
                  </p>
                  <p className="text-sm text-gray-200">
                    Dedicated to transforming lives through robust coaching and community progress in North Goa.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Content & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
              MORE THAN A GYM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              A COMMUNITY BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                FOR PROGRESS.
              </span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-3xl">
              At **The Gym – Fitness Forever**, we provide a spacious, clean, and motivating environment where anyone—from absolute beginners to competitive athletes—can train, refine their conditioning, and build healthy habits. We believe fitness is a lifetime journey.
            </p>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <GlassCard
                    key={i}
                    className="p-4 flex flex-col items-center text-center hover:bg-white/[0.06] border-white/[0.08]"
                  >
                    <StatIcon className="w-5 h-5 text-amber-500 mb-2 opacity-80" />
                    <span className="text-2xl font-black text-white leading-none mb-1 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </GlassCard>
                );
              })}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
