import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

interface SocialIconProps {
  platform: "instagram" | "facebook" | "youtube" | "whatsapp";
  href?: string;
  className?: string;
}

const config = {
  instagram: {
    icon: Instagram,
    colorClass: "hover:text-pink-500 hover:border-pink-500/50 hover:shadow-pink-500/20",
    label: "Follow us on Instagram",
  },
  facebook: {
    icon: Facebook,
    colorClass: "hover:text-blue-500 hover:border-blue-500/50 hover:shadow-blue-500/20",
    label: "Follow us on Facebook",
  },
  youtube: {
    icon: Youtube,
    colorClass: "hover:text-red-500 hover:border-red-500/50 hover:shadow-red-500/20",
    label: "Subscribe on YouTube",
  },
  whatsapp: {
    icon: MessageCircle,
    colorClass: "hover:text-green-500 hover:border-green-500/50 hover:shadow-green-500/20",
    label: "Chat on WhatsApp",
  },
};

export default function SocialIcon({ platform, href = "#", className = "" }: SocialIconProps) {
  const item = config[platform];
  const IconComponent = item.icon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-10 h-10 md:w-11 md:h-11 rounded-full
        flex items-center justify-center
        bg-white/[0.04] backdrop-blur-md
        border border-white/10
        text-gray-400 transition-all duration-300
        shadow-lg hover:shadow-xl
        ${item.colorClass}
        ${className}
      `}
    >
      <IconComponent className="w-5 h-5" />
    </motion.a>
  );
}
