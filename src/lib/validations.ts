import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .regex(
      /^\+?[\d\s-]{10,15}$/,
      "Please enter a valid phone number (10-15 digits)"
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(200, "Email must be under 200 characters"),
  serviceType: z
    .string()
    .min(1, "Please select a service type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
