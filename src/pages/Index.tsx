import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TechStackSection from "@/components/TechStackSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <section id="servicos" className="scroll-mt-24">
          <ServicesSection />
        </section>
        <section id="diferenciais" className="scroll-mt-24">
          <DifferentialsSection />
        </section>
        <section id="tech" className="scroll-mt-24">
          <TechStackSection />
        </section>
        <section id="contato" className="scroll-mt-24">
          <FooterSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
