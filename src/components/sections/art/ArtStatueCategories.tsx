"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artStatueCategories } from "@/data/fiber-statues";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ArtStatueCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Sculpture Categories"
          subtitle="From majestic animal statues to intricate human figures — we craft it all in premium fiber materials."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artStatueCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.05}>
              <Card variant="default" className="group h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-navy-900">
                      {cat.count} Projects
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900">{cat.name}</h3>
                  <p className="text-navy-500 text-sm mt-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
