"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const milestones = [
  { year: "2010", title: "Founded in Kolkata", description: "Dibyendu Sarkar established Shree Krishna Marine with a single service bay." },
  { year: "2012", title: "Yamaha Certification", description: "Became an authorized Yamaha outboard motor service center." },
  { year: "2014", title: "Expanded Facility", description: "Moved to a larger workshop to accommodate growing customer demand." },
  { year: "2016", title: "Mercury & Suzuki Certification", description: "Added Mercury and Suzuki authorized servicing capabilities." },
  { year: "2018", title: "Government Projects", description: "Began servicing marine motors for government-related contracts." },
  { year: "2021", title: "Pan-India Service Network", description: "Extended service coverage to 10+ states with mobile support." },
  { year: "2023", title: "1,200+ Projects", description: "Crossed 1,200 completed marine motor service projects." },
  { year: "2025", title: "Industry Leader", description: "Recognized as one of Eastern India's premier marine service providers." },
];

export function ExperienceTimeline() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Our Journey
            </h2>
            <p className="mt-4 text-navy-500 text-lg max-w-2xl mx-auto">
              From a small workshop to a trusted marine service partner.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-navy-200 hidden md:block" />
          <div className="space-y-8 md:space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative md:flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2" />
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-navy-50" />
                </div>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} p-6`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-sm font-bold mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{m.title}</h3>
                  <p className="text-navy-500 mt-1">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
