"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "./Lightbox";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);
  const prevLightbox = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev <= 0 ? filtered.length - 1 : prev - 1
      ),
    [filtered.length]
  );
  const nextLightbox = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev >= filtered.length - 1 ? 0 : prev + 1
      ),
    [filtered.length]
  );

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Gallery"
          subtitle="A glimpse into our workshop, repairs, and completed projects."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-navy-900 text-white shadow-lg"
                  : "bg-white text-navy-600 hover:bg-navy-100 border border-navy-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative w-full rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300 flex items-center justify-center">
                    <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex >= 0}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      </div>
    </section>
  );
}
