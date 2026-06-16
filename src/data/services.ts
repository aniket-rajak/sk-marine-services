import type { ServiceData, MaintenancePackage } from "@/types";

export const services: ServiceData[] = [
  {
    id: "marine-motor-repair",
    title: "Marine Motor Repair",
    description:
      "Comprehensive diagnostic and repair services for all major marine motor brands. Our experienced technicians handle everything from minor tune-ups to complete engine overhauls.",
    icon: "Wrench",
    features: [
      "Full engine diagnostics",
      "Electrical system repair",
      "Fuel system servicing",
      "Cooling system repair",
      "Gearbox and lower unit repair",
      "Compression testing",
    ],
    image:
      "https://images.unsplash.com/photo-1542227500-8e8f1d03f876?w=800&h=600&fit=crop",
  },
  {
    id: "yamaha-outboard-service",
    title: "Yamaha Outboard Service",
    description:
      "Authorized servicing for Yamaha outboard motors of all sizes. From 2.5HP to 300HP, we ensure your Yamaha engine performs at its peak.",
    icon: "Anchor",
    features: [
      "Factory-trained Yamaha technicians",
      "Genuine Yamaha parts",
      "Annual maintenance packages",
      "Performance upgrades",
      "Warranty repairs",
      "Winterization services",
    ],
    image:
      "https://images.unsplash.com/photo-1564855660853-b412e755d4d8?w=800&h=600&fit=crop",
  },
  {
    id: "mercury-outboard-service",
    title: "Mercury Outboard Service",
    description:
      "Expert maintenance and repair for Mercury Marine outboard engines. We service everything from Mercury 2.5HP to Verado 400HP.",
    icon: "Ship",
    features: [
      "Mercury certified diagnostics",
      "SmartCraft system service",
      "Mercury genuine parts",
      "Engine winterization",
      "Corrosion protection",
      "Performance optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
  },
  {
    id: "suzuki-outboard-service",
    title: "Suzuki Outboard Service",
    description:
      "Specialized service for Suzuki marine outboard motors. Our Suzuki-trained technicians keep your DF series engines running smoothly.",
    icon: "Zap",
    features: [
      "Suzuki DF series specialists",
      "Suzuki Precision Diagnosis",
      "Suzuki Genuine Parts",
      "Trim and tilt repair",
      "Fuel injection service",
      "Propeller selection & repair",
    ],
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?w=800&h=600&fit=crop",
  },
  {
    id: "jet-ski-service",
    title: "Jet Ski Servicing",
    description:
      "Complete servicing for personal watercraft including Yamaha WaveRunner, Sea-Doo, and Kawasaki Jet Ski models.",
    icon: "Waves",
    features: [
      "Engine diagnostics & repair",
      "Jet pump service",
      "Hull repair",
      "Electrical system",
      "Winter storage prep",
      "Pre-season tune-up",
    ],
    image:
      "https://images.unsplash.com/photo-1564855660853-b412e755d4d8?w=800&h=600&fit=crop",
  },
  {
    id: "spare-parts-supply",
    title: "Spare Parts Supply",
    description:
      "Genuine OEM and high-quality aftermarket spare parts for all major marine motor brands. Fast delivery across India.",
    icon: "Package",
    features: [
      "Genuine OEM parts",
      "Quality aftermarket options",
      "Fast pan-India delivery",
      "Propellers & impellers",
      "Filters & spark plugs",
      "Oil & lubricants",
    ],
    image:
      "https://images.unsplash.com/photo-1766431045548-80f04d8feef3?w=800&h=600&fit=crop",
  },
];

export const maintenancePackages: MaintenancePackage[] = [
  {
    id: "basic",
    name: "Basic Service",
    price: "₹2,999",
    description: "Essential maintenance for smaller outboard motors",
    features: [
      "Oil & filter change",
      "Spark plug inspection",
      "Lower unit oil check",
      "Grease fittings",
      "Visual inspection",
    ],
  },
  {
    id: "standard",
    name: "Standard Service",
    price: "₹5,999",
    description: "Comprehensive service for recreational boaters",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Fuel system cleaning",
      "Cooling system flush",
      "Water pump inspection",
      "Propeller inspection",
      "Battery test",
      "Compression test",
    ],
  },
  {
    id: "premium",
    name: "Premium Service",
    price: "₹9,999",
    description: "Full-service for commercial and demanding applications",
    features: [
      "Everything in Standard",
      "Full engine diagnostics",
      "Fuel injector service",
      "Thermostat replacement",
      "Anode replacement",
      "Timing adjustment",
      "Sea trial",
      "Detailed report",
    ],
  },
];

export const serviceProcessSteps = [
  {
    step: 1,
    title: "Inspection",
    description: "Thorough visual and mechanical inspection of your marine motor.",
  },
  {
    step: 2,
    title: "Diagnosis",
    description: "Advanced diagnostic tools pinpoint exact issues and performance gaps.",
  },
  {
    step: 3,
    title: "Repair",
    description: "Skilled technicians perform precise repairs using genuine parts.",
  },
  {
    step: 4,
    title: "Testing",
    description: "Comprehensive testing ensures everything performs to specification.",
  },
  {
    step: 5,
    title: "Delivery",
    description: "Your motor is returned clean, tested, and ready for the water.",
  },
];
