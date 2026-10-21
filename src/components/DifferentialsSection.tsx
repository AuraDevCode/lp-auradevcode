import { MessagesSquare, FileText, CalendarCheck, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Conversa e levantamento",
    description: "Entendemos o seu processo, quem vai usar o sistema e o que precisa ficar pronto primeiro.",
    features: ["Reunião sem custo", "Mapeamento do processo", "Prioridades definidas"],
    gradient: "from-digital-cyan to-aura-purple",
  },
  {
    icon: FileText,
    title: "Proposta com escopo e prazo",
    description: "Você recebe por escrito o que será entregue, em quanto tempo e por quanto.",
    features: ["Escopo claro", "Prazo por etapa", "Sem surpresas no valor"],
    gradient: "from-neon-green to-digital-cyan",
  },
  {
    icon: CalendarCheck,
    title: "Entregas semanais",
    description: "A cada semana você vê o sistema evoluindo e pode ajustar o rumo cedo.",
    features: ["Versão de teste online", "Ajustes contínuos", "Comunicação direta"],
    gradient: "from-aura-purple to-neon-green",
  },
  {
    icon: Rocket,
    title: "Publicação e suporte",
    description: "Colocamos no ar ou na loja e acompanhamos o uso depois da entrega.",
    features: ["Deploy e Play Store", "Treinamento da equipe", "Manutenção sob demanda"],
    gradient: "from-digital-cyan to-neon-green",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6">
            <span className="text-sm font-mono text-neon-green">{"<ComoTrabalhamos />"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient-aura">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quatro etapas, do primeiro contato ao sistema em uso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

              <div className="relative bg-card rounded-2xl p-7 h-full border border-border group-hover:border-transparent transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                    <step.icon className="w-7 h-7 text-background" />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/40 font-mono">{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
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
