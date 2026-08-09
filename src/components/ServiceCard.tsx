import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { Service } from "../types";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  service: Service;
  key?: any;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically select the Lucide icon, fallback to Activity if not found
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Activity;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full group"
    >
      <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.08] hover:border-amber-500/20 transition-colors duration-300">
        <div>
          {/* Animated Icon Container */}
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
            <IconComponent className="w-6 h-6 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
            {service.name}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="mt-6 flex items-center text-xs font-semibold text-amber-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More <LucideIcons.ArrowRight className="w-4.5 h-4.5 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </GlassCard>
    </motion.div>
  );
}
