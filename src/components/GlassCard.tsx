import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hoverEffect?: boolean;
  key?: any;
}

export default function GlassCard({
  children,
  className = "",
  id,
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      id={id}
      className={`
        bg-white/[0.04] backdrop-blur-xl
        border border-white/[0.08]
        rounded-2xl md:rounded-[24px]
        shadow-2xl shadow-black/40
        transition-all duration-300
        ${hoverEffect ? "hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-white/[0.02]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
