"use client";

import { Target, Eye } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <Card variant="bordered" hover={false} className="p-8 md:p-10 h-full">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-navy-300 leading-relaxed">
                To provide reliable, high-quality marine motor servicing that keeps
                our customers&apos; vessels operating at peak performance. We are
                committed to technical excellence, transparency, and building
                long-term relationships with every client.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Card variant="bordered" hover={false} className="p-8 md:p-10 h-full">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-navy-300 leading-relaxed">
                To be the most trusted marine motor service provider in India —
                recognized for technical expertise, uncompromising quality, and
                exceptional customer service across commercial, government, and
                recreational marine sectors.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
