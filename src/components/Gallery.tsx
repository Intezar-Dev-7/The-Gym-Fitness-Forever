import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import AnimatedSection from "./AnimatedSection";
import GlassCard from "./GlassCard";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Strength", "Classes", "Cardio", "Personal Training"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (src: string) => {
    const index = GALLERY_ITEMS.findIndex((item) => item.src === src);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden px-4 border-t border-white/[0.03]"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-amber-500 mb-3 block">
            OUR STUDIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            THE GYM GALLERY
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Take a visual tour of our professional strength floor, cardiovascular lines, energetic group classes, and pristine recovery zones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.07] border border-white/[0.05]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.src)}
              className="group cursor-pointer relative overflow-hidden rounded-[20px] aspect-square border border-white/[0.08] shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with zoom icon and details */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-3 scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                  {item.category}
                </span>
                <p className="text-[11px] text-gray-300 text-center font-medium mt-1 select-none leading-normal">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Lightweight Fullscreen Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-55">
              <span className="text-xs font-semibold text-gray-500 select-none">
                {selectedImageIndex + 1} / {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Interactive content container */}
            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="
                  absolute left-2 md:-left-16 p-3 rounded-full bg-white/5 border border-white/10
                  text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95 z-55
                "
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <img
                src={GALLERY_ITEMS[selectedImageIndex].src}
                alt={GALLERY_ITEMS[selectedImageIndex].alt}
                className="max-w-[82vw] md:max-w-full max-h-[60vh] md:max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl select-none"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                onClick={showNext}
                className="
                  absolute right-2 md:-right-16 p-3 rounded-full bg-white/5 border border-white/10
                  text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95 z-55
                "
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption bar */}
            <div
              className="mt-6 text-center max-w-xl px-4 pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-1">
                {GALLERY_ITEMS[selectedImageIndex].category}
              </span>
              <p className="text-sm text-gray-300">
                {GALLERY_ITEMS[selectedImageIndex].alt}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
