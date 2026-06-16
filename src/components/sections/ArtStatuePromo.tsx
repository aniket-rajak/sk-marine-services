"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Palette, ArrowRight } from "lucide-react";

export function ArtStatuePromo() {
  return (
    <section className="section-padding bg-white border-t border-navy-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative h-[350px] md:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1767473450776-ac89428b7e10?w=800&h=900&fit=crop"
                  alt="Fiber sculpture crafted by SK Marine Art & Statues Division"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-gold-500 p-6 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-3xl font-bold">200+</p>
                <p className="font-medium text-sm text-navy-300">Artworks Delivered</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <Palette className="h-4 w-4 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold">Also from SK Marine</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                We Also Craft{" "}
                <span className="text-gold-600">Premium Fiber Statues</span>
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Beyond marine motor services, SK Marine operates a dedicated fiber statue
                  crafting division. We create high-quality animal statues, human figures,
                  decorative sculptures, and custom fiber artworks for clients across India.
                </p>
                <p>
                  From government memorials to luxury resort installations, our artisans bring
                  every vision to life using premium materials and time-tested techniques.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/art-statues">
                  <Button variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                    Explore Art & Statues Division
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
