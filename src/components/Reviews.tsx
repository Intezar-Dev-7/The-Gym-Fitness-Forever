import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "../data";
import ReviewCard from "./ReviewCard";
import AnimatedSection from "./AnimatedSection";
import GlassCard from "./GlassCard";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = REVIEWS.length;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  useEffect(() => {
    if (!isPaused) {
      autoScrollTimer.current = setInterval(() => {
        nextReview();
      }, 5000); // Progress every 5 seconds
    } else {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    }

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [isPaused, currentIndex]);

  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 border-t border-white/[0.03]"
    >
      {/* Background ambient circular highlights */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-amber-500/[0.015] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded" />
        </div>

        {/* Big Premium Scorecard Block */}
        <AnimatedSection className="mb-16">
          <GlassCard className="p-8 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 bg-white/[0.03] border-amber-500/20 text-center sm:text-left relative">
            {/* Soft gold glow backing */}
            <div className="absolute -inset-0.5 bg-amber-500/5 rounded-[24px] blur-md pointer-events-none" />
            
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1.5 mb-2 text-amber-400">
                <span className="text-3xl font-black text-white">4.9</span>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-200">
                Based on 315 Google Reviews
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Porvorim's absolute favorite premium fitness destination.
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-end border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8 shrink-0">
              <span className="text-2xl font-black text-amber-400">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Verified Users
              </span>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Carousel & Floating Stack Wrapper */}
        <div
          className="relative max-w-4xl mx-auto px-4 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel viewport container */}
          <div className="overflow-hidden relative py-6">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))`,
              }}
            >
              {REVIEWS.map((review, i) => (
                <div key={review.id} className="w-full shrink-0">
                  <ReviewCard review={review} floatDelay={i * 0.5} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevReview}
              className="
                w-11 h-11 rounded-full bg-white/[0.04] hover:bg-white/[0.08]
                border border-white/10 hover:border-white/20 text-white
                flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95
              "
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${currentIndex === i ? "w-8 bg-amber-500" : "w-2 bg-white/20"}
                  `}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="
                w-11 h-11 rounded-full bg-white/[0.04] hover:bg-white/[0.08]
                border border-white/10 hover:border-white/20 text-white
                flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95
              "
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
