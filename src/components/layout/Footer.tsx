"use client";

import Link from "next/link";
import {
  Ship,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <Ship className="h-8 w-8 text-gold-500" />
              <span className="font-bold text-lg text-white">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed">
              {siteConfig.tagline}. Based in Kolkata, serving marine operators
              across India with professional outboard motor sales and servicing.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-navy-300 text-sm hover:text-gold-500 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Gallery", href: "/gallery" },
                { label: "Art & Statues", href: "/art-statues" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 text-sm hover:text-gold-500 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-500 transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-500 transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-navy-400 text-sm">
            <span>Proudly Design and Develop by <a href="https://fouri.in/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-2">FOURI Team</a> with Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
