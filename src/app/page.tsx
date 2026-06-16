import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { BrandsCarousel } from "@/components/sections/BrandsCarousel";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { ArtStatuePromo } from "@/components/sections/ArtStatuePromo";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <BrandsCarousel />
      <FeaturedServices />
      <ArtStatuePromo />
      <TestimonialsCarousel />
      <TrustSection />
      <CTASection />
    </>
  );
}
