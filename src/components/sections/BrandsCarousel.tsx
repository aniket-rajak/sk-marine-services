"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandLogos } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BrandsCarousel() {
  return (
    <section className="bg-white py-16 border-y border-navy-100">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-center text-navy-400 text-sm uppercase tracking-widest font-medium mb-8">
            Brands We Service
          </p>
        </ScrollReveal>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 items-center overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...brandLogos, ...brandLogos].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} marine motor`}
                    width={brand.width}
                    height={brand.height}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
