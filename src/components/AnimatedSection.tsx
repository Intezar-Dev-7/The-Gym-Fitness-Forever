import { ReactNode } from "react";
import { motion } from "motion/react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: "-100px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
