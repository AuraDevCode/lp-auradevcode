import { Zap, Shield, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background aura effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-purple/10 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">A Solução</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Uma <span className="text-gradient-aura">aura de inteligência</span>
            <br />envolvendo seu software
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Na {siteConfig.company.name}, o sistema nasce do seu processo, não de um modelo pronto.
            Entendemos como sua empresa funciona e entregamos
            <span className="text-foreground font-medium"> software que as pessoas usam de verdade</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Seguro e bem feito",
                description: "Revisão de código, testes nas partes críticas e dados protegidos conforme a LGPD.",
                color: "text-digital-cyan",
              },
              {
                icon: Zap,
                title: "Rápido de usar",
                description: "Telas simples, que funcionam bem no celular e no computador, inclusive offline quando faz sentido.",
                color: "text-neon-green",
              },
              {
                icon: Rocket,
                title: "Pronto para crescer",
                description: "Arquitetura organizada para receber novas funções sem refazer tudo do zero.",
                color: "text-primary",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-card border border-border mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:border-glow-purple animate-glow-pulse`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
