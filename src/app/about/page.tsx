import { CompanyStory } from "@/components/sections/CompanyStory";
import { TechnicianProfile } from "@/components/sections/TechnicianProfile";
import { MissionVision } from "@/components/sections/MissionVision";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { StatsBar } from "@/components/sections/StatsBar";

export default function AboutPage() {
  return (
    <>
      <section className="gradient-navy pt-28 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About{" "}
            <span className="text-gradient">Shree Krishna Marine</span>
          </h1>
          <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto">
            Learn about our journey, expertise, and commitment to marine motor excellence.
          </p>
        </div>
      </section>
      <CompanyStory />
      <StatsBar />
      <TechnicianProfile />
      <MissionVision />
      <ExperienceTimeline />
      <TrustSection />
      <CTASection />
    </>
  );
}
