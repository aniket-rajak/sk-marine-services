"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 left-4 md:bottom-6 md:right-6 md:left-auto z-[100] flex items-center gap-3 rounded-xl px-4 md:px-5 py-4 shadow-2xl transition-all duration-300 max-w-[calc(100vw-2rem)] md:max-w-md",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        type === "success"
          ? "bg-emerald-900/90 text-white border border-emerald-700"
          : "bg-red-900/90 text-white border border-red-700"
      )}
    >
      {type === "success" ? (
        <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
      ) : (
        <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
