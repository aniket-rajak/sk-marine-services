"use client";

import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`${centered ? "text-center" : ""} mb-12 md:mb-16`}>
        <div
          className={`inline-block w-16 h-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 mb-6`}
        />
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-lg max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-navy-300" : "text-navy-500"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
