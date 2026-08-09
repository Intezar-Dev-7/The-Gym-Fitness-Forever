import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control scroll transparency
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show smart navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Programs", href: "#programs" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className={`
          fixed top-4 left-1/2 w-[92%] max-w-7xl z-50
          transition-all duration-500 ease-in-out
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
        `}
      >
        <div
          className={`
            w-full py-4 px-6 md:px-8 flex items-center justify-between
            transition-all duration-300 rounded-[20px] md:rounded-full
            ${
              isScrolled
                ? "bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60"
                : "bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
            }
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex flex-col select-none"
          >
            <span className="text-lg md:text-xl font-black tracking-widest text-white leading-none">
              THE GYM
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] font-extrabold text-amber-500 leading-none mt-1">
              FITNESS FOREVER
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors duration-200 tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="
                px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider
                bg-amber-500 hover:bg-amber-400 text-black
                border border-transparent hover:border-amber-300/30
                shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40
                transition-all duration-300 hover:scale-105 active:scale-95
                flex items-center gap-1.5
              "
            >
              Join Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 lg:hidden transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-40 lg:hidden"
          >
            <div className="w-full p-6 bg-neutral-950/95 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-base font-semibold text-gray-200 hover:text-amber-400 transition-colors duration-200 py-1.5 border-b border-white/[0.03]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="
                  w-full py-3 rounded-xl text-sm font-bold text-center uppercase tracking-wider
                  bg-amber-500 text-black shadow-lg shadow-amber-500/10 hover:bg-amber-400 transition-all duration-200
                  flex items-center justify-center gap-2
                "
              >
                Join Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
