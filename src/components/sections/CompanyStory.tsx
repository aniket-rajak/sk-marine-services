"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Anchor } from "lucide-react";

export function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1741441029254-cf3165b12a85?w=800&h=1000&fit=crop"
                  alt="Boats on the Hooghly River, Kolkata"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 p-6 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="font-medium text-sm">Years Experience</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <Anchor className="h-4 w-4 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                Serving Marine Operators Since{" "}
                <span className="text-gold-600">2010</span>
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Shree Krishna Marine Motor Servicing was founded by Dibyendu Sarkar with a
                  vision to provide world-class marine motor servicing in Kolkata. What started
                  as a small workshop has grown into one of Eastern India&apos;s most trusted
                  marine motor service centers.
                </p>
                <p>
                  Over the years, we have serviced thousands of outboard motors across all
                  major brands — Yamaha, Mercury, Suzuki, Honda, and Tohatsu. Our commitment
                  to quality, precision, and customer satisfaction has earned us the trust of
                  commercial fishing fleets, government contractors, and recreational boaters.
                </p>
                <p>
                  Every motor that enters our workshop receives the same meticulous attention —
                  thorough diagnostics, expert repairs using genuine parts, and comprehensive
                  testing before delivery.
                </p>
                <p>
                  In addition to our marine operations, we also run a dedicated{" "}
                  <strong>Art &amp; Statues Division</strong> specializing in high-quality
                  fiber statue crafting. From animal sculptures and human figures to decorative
                  artworks and large government projects, our artisans bring creative visions
                  to life using premium fiber materials.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
