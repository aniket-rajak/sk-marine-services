"use client";

import { ContactForm } from "@/components/sections/ContactForm";
import { BusinessCard } from "@/components/sections/BusinessCard";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <section className="gradient-navy pt-28 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto">
            Get in touch for marine motor sales, servicing, or spare parts. We respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <BusinessCard />
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                <p className="text-navy-400 text-sm mt-1">
                  Fill out the form and we&apos;ll get back to you within 2 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-xl border border-navy-700">
            <div>
              <h3 className="text-white font-bold text-lg">Prefer to call or WhatsApp?</h3>
              <p className="text-navy-300 text-sm mt-1">We&apos;re available during business hours.</p>
            </div>
            <div className="flex gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-6 py-3 rounded-lg bg-gold-500 text-navy-900 font-semibold hover:bg-gold-400 transition-colors"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#22c35e] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="container-custom py-12">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
