"use client";

import Link from "next/link";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="gradient-navy section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Get Your Marine Motor{" "}
              <span className="text-gradient">Serviced?</span>
            </h2>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              Get a free quote today. Our team will diagnose your marine motor and
              provide a detailed service plan with transparent pricing.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.phone}`}>
                <Button variant="primary" size="lg" icon={<Phone className="h-5 w-5" />}>
                  Call {siteConfig.phone}
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" icon={<MessageSquare className="h-5 w-5" />}>
                  Get Free Quote
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-navy-400 text-sm flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4 text-gold-500" />
              Response within 2 hours during business hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
