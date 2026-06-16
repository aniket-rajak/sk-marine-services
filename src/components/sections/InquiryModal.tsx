"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { serviceTypes } from "@/data/site";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { useState } from "react";
import type { ProductData } from "@/types";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductData | null;
}

export function InquiryModal({ isOpen, onClose, product }: InquiryModalProps) {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      serviceType: `Inquiry: ${product?.name || ""}`,
      message: product
        ? `I'm interested in the ${product.name}. Please provide more details.`
        : "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setToast({ message: "Inquiry sent successfully! We'll contact you shortly.", type: "success" });
        reset();
        setTimeout(onClose, 1500);
      } else {
        setToast({ message: result.error || "Something went wrong.", type: "error" });
      }
    } catch {
      setToast({ message: "Network error. Please try again.", type: "error" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/70 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-navy-900 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-navy-700 shadow-2xl mx-2 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-navy-700">
              <div>
                <h3 className="text-xl font-bold text-white">Inquire About</h3>
                <p className="text-gold-500 font-medium text-sm">{product.name}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-navy-400 hover:text-white hover:bg-navy-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Name" placeholder="Your name" error={errors.name?.message} {...register("name")} />
                <Input label="Phone" type="tel" placeholder="+91 98765 43210" error={errors.phone?.message} {...register("phone")} />
              </div>
              <Input label="Email" type="email" placeholder="your@email.com" error={errors.email?.message} {...register("email")} />
              <Select
                label="Service Type"
                placeholder="Select"
                options={serviceTypes.map((st) => ({ value: st, label: st }))}
                error={errors.serviceType?.message}
                {...register("serviceType")}
              />
              <Textarea label="Message" placeholder="Your message..." error={errors.message?.message} {...register("message")} />
              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting} icon={!isSubmitting ? <Send className="h-5 w-5" /> : undefined}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>

          {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
