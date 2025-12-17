import { Code2, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

const differentials = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código legível, testável e documentado. Padrões SOLID, design patterns e boas práticas em cada commit.",
    features: ["Code Review rigoroso", "Documentação completa", "Testes automatizados"],
    gradient: "from-digital-cyan to-aura-purple",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Arquitetura preparada para crescer. Microsserviços, containers e infraestrutura como código.",
    features: ["Auto-scaling", "Load balancing", "Zero downtime deploys"],
    gradient: "from-neon-green to-digital-cyan",
  },
  {
    icon: Sparkles,
    title: "Design Disruptivo",
    description: "Interfaces que marcam. Experiências memoráveis que diferenciam sua marca no mercado.",
    features: ["Motion design", "Micro-interações", "Acessibilidade A11y"],
    gradient: "from-aura-purple to-neon-green",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6">
            <span className="text-sm font-mono text-neon-green">{"<Diferenciais />"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que a <span className="text-gradient-aura">Aura</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três pilares que sustentam cada projeto que entregamos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${diff.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              <div className="relative bg-card rounded-2xl p-8 h-full border border-border group-hover:border-transparent transition-colors duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${diff.gradient} flex items-center justify-center mb-6`}>
                  <diff.icon className="w-8 h-8 text-background" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{diff.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{diff.description}</p>
                
                <ul className="space-y-3">
                  {diff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
