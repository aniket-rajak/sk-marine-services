import type { NavLink, Stat, BrandLogo } from "@/types";

export const siteConfig = {
  name: "Shree Krishna Marine Motor Servicing",
  shortName: "SK Marine",
  tagline: "Trusted Marine Motor Sales & Servicing Solutions",
  description:
    "Professional marine motor sales, repair, and servicing for Yamaha, Mercury, and Suzuki outboard motors. Based in Kolkata, serving all of India.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@shreekrishnamarine.com",
  address: "123 Marine Drive, Opposite Salt Lake Stadium, Kolkata, West Bengal 700091",
  hours: "Mon–Sat: 9:00 AM – 7:00 PM",
  foundedYear: 2010,
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.36!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzEyLjAiTiA4OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Sales & Service", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Art & Statues", href: "/art-statues" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Brands Supported", value: 8 },
  { label: "States Service Coverage", value: 10, suffix: "+" },
  { label: "Artworks Delivered", value: 200, suffix: "+" },
];

export const brandLogos: BrandLogo[] = [
  { name: "Yamaha", src: "https://static.cdnlogo.com/logos/y/68/yamaha-motor.svg", width: 160, height: 60 },
  { name: "Mercury", src: "https://static.cdnlogo.com/logos/m/66/mercury-outboards.svg", width: 160, height: 60 },
  { name: "Suzuki", src: "https://static.cdnlogo.com/logos/s/98/suzuki.svg", width: 160, height: 60 },
  { name: "Honda", src: "https://static.cdnlogo.com/logos/h/60/honda-marine.svg", width: 140, height: 60 },
  { name: "Tohatsu", src: "https://static.cdnlogo.com/logos/t/79/tohatsu-company.svg", width: 160, height: 60 },
  { name: "Johnson", src: "https://static.cdnlogo.com/logos/j/32/johnson-outboards.svg", width: 160, height: 60 },
];

export const serviceTypes = [
  "Marine Motor Repair",
  "Yamaha Outboard Service",
  "Mercury Outboard Service",
  "Suzuki Outboard Service",
  "Jet Ski Service",
  "Spare Parts",
  "Annual Maintenance",
  "Emergency Repair",
  "Other",
];
