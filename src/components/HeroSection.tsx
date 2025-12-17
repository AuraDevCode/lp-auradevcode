import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import auraLogo from "@/assets/aura-logo.png";

const whatsappLink = "https://wa.me/5579996827342?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20um%20projeto%20com%20a%20Aura%20Dev.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-digital-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo animation */}
        <div className="mb-8 animate-fade-up">
          <img 
            src={auraLogo} 
            alt="Aura Dev Logo" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain animate-float"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary">Software House Premium</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">A </span>
          <span className="text-gradient-aura">Inteligência</span>
          <br />
          <span className="text-foreground">por trás do </span>
          <span className="text-gradient-neon">Código</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transformamos ideias complexas em soluções digitais elegantes. 
          <span className="text-digital-cyan font-medium"> Clean code</span>, 
          <span className="text-primary font-medium"> arquitetura escalável</span> e 
          <span className="text-neon-green font-medium"> design disruptivo</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="neon-button px-8 py-6 text-lg rounded-lg">
              Iniciar meu projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link to="/portfolio">
            <Button variant="outline" className="px-8 py-6 text-lg rounded-lg border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full">
              Ver portfólio
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "99%", label: "Uptime garantido" },
            { value: "24h", label: "Tempo de resposta" },
            { value: "5★", label: "Avaliação média" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-aura">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;