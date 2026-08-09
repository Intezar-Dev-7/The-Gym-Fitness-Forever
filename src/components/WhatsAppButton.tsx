import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip text bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block px-4 py-2 rounded-xl bg-neutral-950 border border-white/10 text-white font-bold text-xs uppercase tracking-wider shadow-2xl backdrop-blur-md"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated green button */}
      <motion.a
        href="https://wa.me/919422439614"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative w-14 h-14 rounded-full
          bg-green-500 text-neutral-950
          flex items-center justify-center
          shadow-[0_0_20px_rgba(34,197,94,0.3)]
          transition-all duration-300
        "
        aria-label="Chat with us on WhatsApp"
      >
        {/* Soft infinite pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        <MessageCircle className="w-7 h-7 fill-neutral-950" />
      </motion.a>
    </div>
  );
}
