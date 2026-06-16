"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { artStatuePortfolio } from "@/data/fiber-statues";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const categories = [
  { id: "all", label: "All Works" },
  { id: "animal", label: "Animal" },
  { id: "human", label: "Human" },
  { id: "decorative", label: "Decorative" },
  { id: "custom", label: "Custom" },
  { id: "government", label: "Government" },
  { id: "institutional", label: "Institutional" },
];

export function ArtStatuePortfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? artStatuePortfolio
    : artStatuePortfolio.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Portfolio"
          subtitle="A selection of our completed fiber statue projects — each one a testament to our craftsmanship."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="default" className="group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900/80 text-white uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="text-navy-500 text-sm mt-2 line-clamp-2 flex-1">
                      {item.description}
                    </p>
                    {item.dimensions && (
                      <p className="text-xs text-navy-400 mt-2">
                        Dimensions: {item.dimensions}
                      </p>
                    )}
                    {item.client && (
                      <p className="text-xs text-gold-600 font-medium mt-1">
                        Client: {item.client}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-navy-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
