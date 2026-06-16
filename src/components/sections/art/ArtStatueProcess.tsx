"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artStatueProcessSteps } from "@/data/fiber-statues";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtStatueProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Crafting Process"
          subtitle="From concept to installation — a meticulous 5-step process that ensures every sculpture meets the highest standards."
        />
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 -translate-x-1/2" />
          <div className="space-y-12">
            {artStatueProcessSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <motion.div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center relative`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900">{step.title}</h3>
                    </div>
                    <p className="text-navy-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
