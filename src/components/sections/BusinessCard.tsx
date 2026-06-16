"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const details = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Working Hours", value: siteConfig.hours },
];

export function BusinessCard() {
  return (
    <ScrollReveal direction="left">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
        <p className="text-navy-300">
          Have a question or need marine motor service? Reach out to us and we&apos;ll
          respond within 2 hours during business hours.
        </p>
        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <d.icon className="h-5 w-5 text-gold-500" />
              </div>
              <div>
                <p className="text-navy-400 text-xs font-medium uppercase tracking-wider">
                  {d.label}
                </p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-white font-medium hover:text-gold-500 transition-colors"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{d.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
