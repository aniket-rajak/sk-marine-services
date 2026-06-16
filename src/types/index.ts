export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  features: string[];
  specifications?: { label: string; value: string }[];
  isPopular?: boolean;
  brand: string;
}

export type ProductCategory =
  | "yamaha"
  | "mercury"
  | "suzuki"
  | "spare-parts"
  | "accessories";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export type GalleryCategory =
  | "workshop"
  | "repairs"
  | "deliveries"
  | "jet-ski"
  | "spare-parts";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

export interface BrandLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface MaintenancePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ArtStatueCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export interface ArtStatuePortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  dimensions?: string;
  client?: string;
}

export interface ArtStatueService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ArtStatueProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}
