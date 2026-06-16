import { ArtStatueHero } from "@/components/sections/art/ArtStatueHero";
import { ArtStatueCategories } from "@/components/sections/art/ArtStatueCategories";
import { ArtStatueServices } from "@/components/sections/art/ArtStatueServices";
import { ArtStatuePortfolio } from "@/components/sections/art/ArtStatuePortfolio";
import { ArtStatueProcess } from "@/components/sections/art/ArtStatueProcess";
import { ArtStatueStats } from "@/components/sections/art/ArtStatueStats";
import { ArtStatueCTA } from "@/components/sections/art/ArtStatueCTA";

export default function ArtStatuesPage() {
  return (
    <>
      <ArtStatueHero />
      <ArtStatueStats />
      <ArtStatueCategories />
      <ArtStatueServices />
      <ArtStatuePortfolio />
      <ArtStatueProcess />
      <ArtStatueCTA />
    </>
  );
}
