"use client";

import { motion } from "framer-motion";
import { artStatueStats } from "@/data/fiber-statues";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ArtStatueStats() {
  return (
    <section className="gradient-navy section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {artStatueStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-500">
                  {stat.value}{stat.suffix || ""}
                </div>
                <div className="mt-2 text-navy-300 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
