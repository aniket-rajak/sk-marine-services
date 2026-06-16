import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageTransition } from "@/components/ui/PageTransition";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Marine Motor Sales & Servicing Kolkata`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "SK Marine provides professional marine motor sales, repair, and servicing in Kolkata, plus expert fiber statue crafting, sculptures, and custom artworks for government and private clients.",
  keywords: [
    "marine motor service Kolkata",
    "Yamaha outboard service Kolkata",
    "Mercury marine repair Kolkata",
    "Suzuki outboard service Kolkata",
    "jet ski service Kolkata",
    "marine motor repair",
    "outboard motor servicing",
    "Shree Krishna Marine",
    "fiber statue Kolkata",
    "fiber sculpture India",
    "animal statue manufacturer",
    "custom fiber artwork",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shreekrishnamarine.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "SK Marine: marine motor sales & servicing in Kolkata, plus expert fiber statue crafting and sculpture services.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Professional marine motor sales, repair, and servicing for Yamaha, Mercury, and Suzuki outboard motors.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: "https://images.unsplash.com/photo-1702365202240-ecf532732c76?w=1200&h=630&fit=crop",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address,
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              priceRange: "₹₹",
              areaServed: "India",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://shreekrishnamarine.com",
              description:
                "Professional marine motor sales, repair, and servicing for Yamaha, Mercury, and Suzuki outboard motors in Kolkata.",
              founder: {
                "@type": "Person",
                name: "Dibyendu Sarkar",
              },
              foundingDate: "2010",
              knowsAbout: [
                "Marine Motor Repair",
                "Yamaha Outboard Service",
                "Mercury Outboard Service",
                "Suzuki Outboard Service",
                "Jet Ski Servicing",
                "Spare Parts Supply",
                "Fiber Statue Crafting",
                "Custom Sculpture Design",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <Loader />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
