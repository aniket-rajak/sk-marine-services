import type { ProductData } from "@/types";

export const products: ProductData[] = [
  {
    id: "yamaha-f25",
    slug: "yamaha-f25",
    name: "Yamaha F25",
    category: "yamaha",
    description:
      "Lightweight and portable 25HP four-stroke outboard motor. Perfect for small fishing boats and dinghies.",
    image:
      "https://images.unsplash.com/photo-1564855660853-b412e755d4d8?w=800&h=600&fit=crop",
    features: [
      "25 HP, 4-stroke, 3-cylinder",
      "Electric start",
      "Lightweight design (56 kg)",
      "Fuel efficient",
      "Low noise operation",
      "5-year warranty",
    ],
    specifications: [
      { label: "Power", value: "25 HP" },
      { label: "Engine Type", value: "4-stroke, 3-cylinder" },
      { label: "Displacement", value: "498 cc" },
      { label: "Weight", value: "56 kg" },
      { label: "Starting", value: "Electric / Manual" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    brand: "Yamaha",
  },
  {
    id: "yamaha-f50",
    slug: "yamaha-f50",
    name: "Yamaha F50",
    category: "yamaha",
    description:
      "Reliable 50HP four-stroke outboard ideal for fishing boats, small commercial vessels, and recreational craft.",
    image:
      "https://images.unsplash.com/photo-1564855660853-b412e755d4d8?w=800&h=600&fit=crop",
    features: [
      "50 HP, 4-stroke, 4-cylinder",
      "EFI fuel system",
      "PrimeStart technology",
      "High output alternator",
      "Corrosion resistant",
      "5-year warranty",
    ],
    specifications: [
      { label: "Power", value: "50 HP" },
      { label: "Engine Type", value: "4-stroke, 4-cylinder" },
      { label: "Displacement", value: "996 cc" },
      { label: "Weight", value: "113 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    isPopular: true,
    brand: "Yamaha",
  },
  {
    id: "yamaha-f115",
    slug: "yamaha-f115",
    name: "Yamaha F115",
    category: "yamaha",
    description:
      "Powerful 115HP four-stroke outboard for larger fishing vessels, patrol boats, and commercial applications.",
    image:
      "https://images.unsplash.com/photo-1564855660853-b412e755d4d8?w=800&h=600&fit=crop",
    features: [
      "115 HP, 4-stroke, 4-cylinder",
      "Variable Tumble Induction",
      "Shift Dampener System",
      "Lightweight design (173 kg)",
      "Digital network capable",
      "5-year warranty",
    ],
    specifications: [
      { label: "Power", value: "115 HP" },
      { label: "Engine Type", value: "4-stroke, 4-cylinder" },
      { label: "Displacement", value: "1,745 cc" },
      { label: "Weight", value: "173 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    brand: "Yamaha",
  },
  {
    id: "mercury-40hp",
    slug: "mercury-40hp",
    name: "Mercury 40 HP EFI",
    category: "mercury",
    description:
      "Dependable 40HP four-stroke outboard with EFI for smooth performance in commercial and recreational use.",
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
    features: [
      "40 HP, 4-stroke, 3-cylinder",
      "Electronic Fuel Injection",
      "Quicksilver compatible",
      "Easy tilt & trim",
      "5-year corrosion warranty",
      "Quiet operation",
    ],
    specifications: [
      { label: "Power", value: "40 HP" },
      { label: "Engine Type", value: "4-stroke, 3-cylinder" },
      { label: "Displacement", value: "864 cc" },
      { label: "Weight", value: "86 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\"" },
    ],
    brand: "Mercury",
  },
  {
    id: "mercury-90hp",
    slug: "mercury-90hp",
    name: "Mercury 90 HP Command Thrust",
    category: "mercury",
    description:
      "Heavy-duty 90HP outboard with Command Thrust gearcase for enhanced performance on larger vessels.",
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
    features: [
      "90 HP, 4-stroke, 4-cylinder",
      "Command Thrust gearcase",
      "SmartCraft compatible",
      "Fuel injection",
      "Large alternator output",
      "5-year warranty",
    ],
    specifications: [
      { label: "Power", value: "90 HP" },
      { label: "Engine Type", value: "4-stroke, 4-cylinder" },
      { label: "Displacement", value: "1,997 cc" },
      { label: "Weight", value: "177 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    isPopular: true,
    brand: "Mercury",
  },
  {
    id: "mercury-150hp",
    slug: "mercury-150hp",
    name: "Mercury 150 HP FourStroke",
    category: "mercury",
    description:
      "High-performance 150HP outboard with advanced 4-stroke technology for demanding marine operations.",
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
    features: [
      "150 HP, 4-stroke, V6",
      "Advanced ECM control",
      "Adaptive Speed Control",
      "Dual-stage induction",
      "Premium corrosion protection",
      "5-year warranty",
    ],
    specifications: [
      { label: "Power", value: "150 HP" },
      { label: "Engine Type", value: "4-stroke, V6" },
      { label: "Displacement", value: "3,000 cc" },
      { label: "Weight", value: "217 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\" / 30\"" },
    ],
    brand: "Mercury",
  },
  {
    id: "suzuki-df20",
    slug: "suzuki-df20",
    name: "Suzuki DF20",
    category: "suzuki",
    description:
      "Lightweight and efficient 20HP outboard with Suzuki's advanced 4-stroke technology for small craft.",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
    features: [
      "20 HP, 4-stroke, 2-cylinder",
      "Lean Burn Control",
      "Easy start system",
      "Compact & lightweight",
      "Low vibration",
      "3-year warranty",
    ],
    specifications: [
      { label: "Power", value: "20 HP" },
      { label: "Engine Type", value: "4-stroke, 2-cylinder" },
      { label: "Displacement", value: "327 cc" },
      { label: "Weight", value: "49 kg" },
      { label: "Starting", value: "Manual / Electric" },
      { label: "Shaft Length", value: "15\" / 20\"" },
    ],
    brand: "Suzuki",
  },
  {
    id: "suzuki-df60",
    slug: "suzuki-df60",
    name: "Suzuki DF60",
    category: "suzuki",
    description:
      "Versatile 60HP outboard with Suzuki Precision Fuel Delivery for exceptional fuel economy and performance.",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
    features: [
      "60 HP, 4-stroke, 3-cylinder",
      "Precision Fuel Delivery",
      "Troll mode system",
      "Dual water intake",
      "Low noise level",
      "3-year warranty",
    ],
    specifications: [
      { label: "Power", value: "60 HP" },
      { label: "Engine Type", value: "4-stroke, 3-cylinder" },
      { label: "Displacement", value: "996 cc" },
      { label: "Weight", value: "112 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    isPopular: true,
    brand: "Suzuki",
  },
  {
    id: "suzuki-df140",
    slug: "suzuki-df140",
    name: "Suzuki DF140",
    category: "suzuki",
    description:
      "Powerful 140HP 4-stroke outboard designed for commercial fishing, patrol, and heavy-duty marine applications.",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
    features: [
      "140 HP, 4-stroke, 4-cylinder",
      "Suzuki Precision Delivery",
      "Multi-point fuel injection",
      "Dual overhead camshaft",
      "Self-diagnosis system",
      "3-year warranty",
    ],
    specifications: [
      { label: "Power", value: "140 HP" },
      { label: "Engine Type", value: "4-stroke, 4-cylinder" },
      { label: "Displacement", value: "2,004 cc" },
      { label: "Weight", value: "195 kg" },
      { label: "Starting", value: "Electric" },
      { label: "Shaft Length", value: "20\" / 25\"" },
    ],
    brand: "Suzuki",
  },
  {
    id: "propellers",
    slug: "propellers",
    name: "Marine Propellers",
    category: "spare-parts",
    description:
      "High-quality stainless steel and aluminium propellers for all major outboard brands. Various pitches available.",
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
    features: [
      "Stainless steel & aluminium",
      "Compatible with all brands",
      "Multiple pitch options",
      "Balanced & tuned",
      "Hub kit included",
      "1-year warranty",
    ],
    brand: "Various",
  },
  {
    id: "oil-filters",
    slug: "oil-filters",
    name: "Engine Oil & Filters",
    category: "spare-parts",
    description:
      "Genuine OEM oil filters, engine oil, gear oil, and lubricants for all marine outboard motors.",
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
    features: [
      "OEM quality filters",
      "Premium marine grade oil",
      "Gear oil & lubricants",
      "Fuel filters",
      "Bulk discounts available",
      "Pan-India delivery",
    ],
    brand: "Various",
  },
  {
    id: "battery-kits",
    slug: "battery-kits",
    name: "Marine Battery Kits",
    category: "accessories",
    description:
      "High-capacity marine batteries and installation kits for reliable starting and auxiliary power.",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
    features: [
      "High CCA marine batteries",
      "Dual battery systems",
      "Waterproof battery boxes",
      "Heavy-duty cables",
      "Installation included",
      "2-year warranty",
    ],
    brand: "Various",
  },
  {
    id: "control-systems",
    slug: "control-systems",
    name: "Remote Control Systems",
    category: "accessories",
    description:
      "Mechanical and electronic remote control systems, throttle assemblies, and steering components.",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
    features: [
      "Mechanical controls",
      "Digital throttle & shift",
      "Hydraulic steering",
      "Cable assemblies",
      "Control box mounting",
      "OEM compatible",
    ],
    brand: "Various",
  },
];

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "yamaha", label: "Yamaha" },
  { id: "mercury", label: "Mercury" },
  { id: "suzuki", label: "Suzuki" },
  { id: "spare-parts", label: "Spare Parts" },
  { id: "accessories", label: "Accessories" },
] as const;
