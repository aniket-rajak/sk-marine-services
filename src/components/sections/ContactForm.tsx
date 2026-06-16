"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { serviceTypes } from "@/data/site";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { useState } from "react";

interface ContactFormProps {
  preselectedService?: string;
}

export function ContactForm({ preselectedService }: ContactFormProps) {
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
    defaultValues: { serviceType: preselectedService || "" },
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
        setToast({ message: result.message || "Inquiry submitted successfully!", type: "success" });
        reset();
      } else {
        setToast({ message: result.error || "Something went wrong. Please try again.", type: "error" });
      }
    } catch {
      setToast({ message: "Network error. Please try again.", type: "error" });
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Your Name"
            placeholder="Enter your full name"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
        <Input
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Select
          label="Service Type"
          placeholder="Select a service"
          options={serviceTypes.map((st) => ({ value: st, label: st }))}
          error={errors.serviceType?.message}
          {...register("serviceType")}
        />
        <Textarea
          label="Your Message"
          placeholder="Describe your marine motor issue or service requirement..."
          error={errors.message?.message}
          {...register("message")}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
          icon={!isSubmitting ? <Send className="h-5 w-5" /> : undefined}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </motion.form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
