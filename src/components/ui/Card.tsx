"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "bordered" | "dark";
}

const cardVariants = {
  default: "bg-white text-navy-900 shadow-lg shadow-navy-900/5",
  bordered: "bg-navy-800 border border-navy-600 text-white",
  dark: "bg-navy-900/80 border border-navy-700 text-white backdrop-blur-sm",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, variant = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" } : {}}
        transition={hover ? { duration: 0.3, ease: "easeOut" } : undefined}
        className={cn(
          "rounded-xl overflow-hidden transition-shadow duration-300",
          hover && "cursor-pointer",
          cardVariants[variant],
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
