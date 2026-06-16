"use client";

import Image from "next/image";
import { Award, Wrench, BookOpen, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const qualifications = [
  { icon: Award, label: "15+ Years Experience in Marine Motor Servicing" },
  { icon: Wrench, label: "Certified Yamaha, Mercury & Suzuki Technician" },
  { icon: BookOpen, label: "Advanced Marine Engineering Diploma" },
  { icon: Users, label: "Trained 20+ Junior Technicians" },
];

export function TechnicianProfile() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <Award className="h-4 w-4 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold">Meet Our Founder</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                Dibyendu Sarkar
              </h2>
              <p className="text-gold-600 font-semibold text-lg mt-2">
                Founder &amp; Chief Marine Technician
              </p>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  With over 15 years of hands-on experience in marine motor engineering,
                  Dibyendu Sarkar leads the technical team at Shree Krishna Marine. His
                  expertise spans across all major outboard brands and marine systems.
                </p>
                <p>
                  Dibyendu&apos;s passion for marine engineering and commitment to excellence
                  drives every aspect of the business — from diagnostics to final testing.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {qualifications.map((q) => (
                  <div key={q.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <q.icon className="h-5 w-5 text-gold-600" />
                    </div>
                    <span className="text-navy-700 font-medium">{q.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=800&fit=crop"
                  alt="Dibyendu Sarkar - Marine Technician"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
