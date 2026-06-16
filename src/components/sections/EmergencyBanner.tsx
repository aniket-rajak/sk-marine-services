"use client";

import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Emergency Marine Motor Support
              </h3>
              <p className="text-red-100 text-sm mt-1">
                24/7 emergency repair service — we respond within 2 hours
              </p>
            </div>
          </div>
          <a href={`tel:${siteConfig.phone}`}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white !text-red-700 hover:bg-red-50 border-none"
              icon={<Phone className="h-5 w-5" />}
            >
              Call Emergency Line
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
