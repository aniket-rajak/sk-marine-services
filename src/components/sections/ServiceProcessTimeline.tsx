"use client";

import { motion } from "framer-motion";
import { Search, Stethoscope, Wrench, CheckCircle, Truck } from "lucide-react";
import { serviceProcessSteps } from "@/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap = [Search, Stethoscope, Wrench, CheckCircle, Truck];

export function ServiceProcessTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Our Service Process
            </h2>
            <p className="mt-4 text-navy-500 text-lg max-w-2xl mx-auto">
              A systematic approach to ensure every motor is serviced to the highest standard.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {serviceProcessSteps.map((step, i) => {
            const Icon = iconMap[i];
            return (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-navy-50 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                      <Icon className="h-9 w-9 text-navy-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {i < serviceProcessSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[calc(80%)] h-0.5 border-t-2 border-dashed border-navy-200" />
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="inline-block text-xs font-bold text-gold-600 bg-gold-50 px-2 py-1 rounded-full mb-2">
                      Step {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                    <p className="text-navy-500 text-sm mt-1">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
