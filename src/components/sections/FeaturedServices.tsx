"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Anchor, Ship, Zap, Waves, Package } from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-8 w-8" />,
  Anchor: <Anchor className="h-8 w-8" />,
  Ship: <Ship className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Waves: <Waves className="h-8 w-8" />,
  Package: <Package className="h-8 w-8" />,
};

export function FeaturedServices() {
  return (
    <section className="bg-navy-50 section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Marine Services"
          subtitle="Comprehensive marine motor sales, repair, and maintenance solutions trusted by operators across India."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 6).map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <Card variant="default" className="group h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-gold-500/90 p-2.5 rounded-lg w-fit mb-2">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
