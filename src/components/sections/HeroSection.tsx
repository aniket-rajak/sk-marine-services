"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ArrowDown, Ship } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1702365202240-ecf532732c76?w=1920&h=1080&fit=crop"
          alt="Fishing boats at Sassoon Dock, Mumbai harbour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 pt-24 pb-16"
      >
        <div className="max-w-3xl">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <Ship className="h-6 w-6 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-widest">
              {siteConfig.shortName}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Trusted Marine Motor{" "}
            <span className="text-gradient">Sales &amp; Servicing</span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-navy-200 max-w-2xl leading-relaxed"
          >
            Professional service for Yamaha, Mercury &amp; Suzuki Outboard Motors.
            Kolkata&apos;s premier marine motor servicing facility trusted by
            commercial operators and government projects.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="primary"
                size="lg"
                icon={<Phone className="h-5 w-5" />}
              >
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg" icon={<MessageSquare className="h-5 w-5" />}>
                Get Quote
              </Button>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center gap-4 sm:gap-8 text-navy-300"
          >
            {[
              "Yamaha Authorized",
              "Mercury Certified",
              "Suzuki Specialist",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.5 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-gold-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
