"use client";

import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MapEmbed() {
  return (
    <ScrollReveal direction="right">
      <div className="rounded-2xl overflow-hidden border border-navy-700 h-[400px]">
        <iframe
          src={siteConfig.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shree Krishna Marine Location"
        />
      </div>
    </ScrollReveal>
  );
}
