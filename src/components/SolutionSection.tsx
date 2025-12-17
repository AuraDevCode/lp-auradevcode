import { Zap, Shield, Rocket } from "lucide-react";

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
            Na Aura Dev, não entregamos apenas código. Entregamos 
            <span className="text-foreground font-medium"> soluções pensadas</span> que 
            transformam a forma como sua empresa opera.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Blindagem Total",
                description: "Arquitetura robusta, testes automatizados e segurança em cada linha de código.",
                color: "text-digital-cyan",
              },
              {
                icon: Zap,
                title: "Performance Extrema",
                description: "Otimização agressiva. Seu software voando em milissegundos.",
                color: "text-neon-green",
              },
              {
                icon: Rocket,
                title: "Escalabilidade Infinita",
                description: "De 100 a 1 milhão de usuários sem quebrar. Cloud-native por design.",
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
