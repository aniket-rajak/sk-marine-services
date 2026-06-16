"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { maintenancePackages } from "@/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function MaintenancePackages() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Maintenance Packages
            </h2>
            <p className="mt-4 text-navy-500 text-lg max-w-2xl mx-auto">
              Choose a plan that fits your marine motor needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenancePackages.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-8 flex flex-col h-full ${
                  pkg.isPopular
                    ? "bg-navy-900 text-white border-2 border-gold-500 shadow-xl shadow-gold-500/10"
                    : "bg-white text-navy-900 border border-navy-200 shadow-lg"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold ${pkg.isPopular ? "text-white" : "text-navy-900"}`}>
                  {pkg.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${pkg.isPopular ? "text-gold-500" : "text-navy-900"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.isPopular ? "text-navy-300" : "text-navy-400"}`}>
                    / service
                  </span>
                </div>
                <p className={`mt-2 text-sm ${pkg.isPopular ? "text-navy-300" : "text-navy-500"}`}>
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${pkg.isPopular ? "text-gold-500" : "text-gold-600"}`} />
                      <span className={`text-sm ${pkg.isPopular ? "text-navy-200" : "text-navy-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link href="/contact">
                    <Button
                      variant={pkg.isPopular ? "primary" : "outline"}
                      className="w-full"
                    >
                      Get Started <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
