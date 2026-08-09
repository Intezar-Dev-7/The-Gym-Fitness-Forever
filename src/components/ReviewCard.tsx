import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Review } from "../types";
import GlassCard from "./GlassCard";

interface ReviewCardProps {
  review: Review;
  floatDelay?: number;
}

export default function ReviewCard({ review, floatDelay = 0 }: ReviewCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className="w-full shrink-0"
    >
      <GlassCard className="p-6 md:p-8 flex flex-col justify-between h-full hover:bg-white/[0.06] border-white/[0.08] hover:border-amber-500/25 transition-colors duration-300">
        <div>
          {/* Header with stars and Google logo color accents */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              Verified Review
            </span>
          </div>

          {/* Quote text */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6">
            "{review.text}"
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
          <div>
            <span className="text-sm font-semibold text-white block">
              {review.author}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Via Google Maps • {review.date}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-bold bg-white/5 px-2 py-1 rounded">
            <span className="text-red-500">G</span>
            <span className="text-blue-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-green-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
