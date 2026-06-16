"use client";

import { useCounter } from "@/hooks/use-counter";
import { stats } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function AnimatedStat({
  value,
  label,
  suffix,
  prefix,
}: {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-4xl md:text-5xl font-bold text-gold-500">
        {prefix ? `${count}${suffix || ""} ${prefix}` : `${count}${suffix || ""}`}
      </span>
      <span className="text-navy-300 text-sm md:text-base mt-2 block">{label}</span>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="gradient-navy border-y border-navy-700">
      <div className="container-custom py-12 md:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
