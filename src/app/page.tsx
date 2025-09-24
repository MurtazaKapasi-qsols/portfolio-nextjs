import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import WhoWeAreSection from "@/components/who-we-are-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import WhyDifferentSection from "@/components/why-different-section";
import CtaConsultingSection from "@/components/cta-consulting-section";
import FinalCtaSection from "@/components/final-cta-section";
import { Separator } from "@/components/ui/separator";
import PortfolioGrid from "@/components/cms/PortfolioGrid";
import TestimonialsSlide from "@/components/cms/TestimonialsSlide";

export default function Home() {
  return (
    <main>
      {/* Portfolio app ready for code review */}
      <HeroSection />
      <div className="h-[80px] text-center my-20">
        <Separator orientation="vertical" className=" mx-auto bg-black data-[orientation=vertical]:w-[2px]"/>
      </div>
      <PartnersSection />
      <WhoWeAreSection />
      <ServicesSection />
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <TestimonialsSlide />
      <PortfolioGrid limit={6} />
      <WhyDifferentSection />
      <CtaConsultingSection />
      <div className="h-[80px] text-center my-20">
        <Separator orientation="vertical" className=" mx-auto bg-black data-[orientation=vertical]:w-[2px]"/>
      </div>
      <FinalCtaSection />

    </main>
  );
}
