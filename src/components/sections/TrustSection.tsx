"use client";

import { motion } from "framer-motion";
import { Shield, Award, BadgeCheck, Building2, Users, Anchor } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const trustPoints = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 15 years of marine motor servicing experience across commercial and government sectors.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    description: "Factory-trained professionals certified in Yamaha, Mercury, and Suzuki marine technologies.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality checks and testing protocols on every service and repair we deliver.",
  },
  {
    icon: Building2,
    title: "Government Trusted",
    description: "Supporting marine operations across commercial and government sectors with reliable maintenance solutions.",
  },
  {
    icon: Users,
    title: "Pan-India Coverage",
    description: "Serving marine operators across 10+ states with comprehensive mobile and workshop-based services.",
  },
  {
    icon: Anchor,
    title: "Genuine Parts",
    description: "Authorized dealer of genuine OEM parts for all major outboard motor brands.",
  },
];

export function TrustSection() {
  return (
    <section className="gradient-navy section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1742325646195-28f86af5bc26?w=1920&q=80')] bg-cover bg-center opacity-5" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
              <Shield className="h-4 w-4 text-gold-500" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">
                Trusted Marine Service Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Supporting Marine Operations Across{" "}
              <span className="text-gradient">Commercial &amp; Government</span>{" "}
              Sectors
            </h2>
            <p className="mt-4 text-navy-300 text-lg max-w-3xl mx-auto">
              Experienced in government-related marine maintenance projects. Reliable,
              professional, and technically capable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-6 rounded-xl bg-navy-800/60 border border-navy-700 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <point.icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
