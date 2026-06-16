"use client";

import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-navy-200"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border bg-navy-800/50 px-4 py-3 text-white placeholder-navy-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 min-h-[120px] resize-y",
            error
              ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
              : "border-navy-600 hover:border-navy-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
