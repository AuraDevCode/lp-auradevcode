import Navbar from "@/components/Navbar";
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
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="diferenciais">
          <DifferentialsSection />
        </section>
        <section id="tech">
          <TechStackSection />
        </section>
        <section id="contato">
          <FooterSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
