"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Palette, ArrowDown } from "lucide-react";
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

export function ArtStatueHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1721009714211-a4d1da7d05f4?w=1920&h=1080&fit=crop"
          alt="Skilled sculptor crafting a fiber statue"
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
        className="container-custom relative z-10 pt-28 pb-16"
      >
        <div className="max-w-3xl">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <Palette className="h-6 w-6 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-widest">
              SK Marine — Art & Statues Division
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Expert{" "}
            <span className="text-gradient">Fiber Statue</span>{" "}
            Crafting &amp; Sculpture Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-navy-200 max-w-2xl leading-relaxed"
          >
            High-quality animal statues, human figures, decorative sculptures, and custom fiber
            artworks for government, institutional, and private projects across India.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="primary" size="lg" icon={<Phone className="h-5 w-5" />}>
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg" icon={<MessageSquare className="h-5 w-5" />}>
                Enquire About a Project
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6 text-navy-300"
          >
            {["Custom Designs", "Pan-India Delivery", "Installation Service"].map((badge) => (
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
