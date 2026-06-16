"use client";

import { motion } from "framer-motion";
import { Palette, Shapes, Paintbrush, HardHat, Wrench, Truck } from "lucide-react";
import { artStatueServices } from "@/data/fiber-statues";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-8 w-8" />,
  Shapes: <Shapes className="h-8 w-8" />,
  Paintbrush: <Paintbrush className="h-8 w-8" />,
  HardHat: <HardHat className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Truck: <Truck className="h-8 w-8" />,
};

export function ArtStatueServices() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="End-to-end fiber statue crafting services — from concept to installation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artStatueServices.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <Card variant="default" className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-4">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
                  <p className="text-navy-500 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-navy-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
