import { AlertTriangle, Clock, Code2, Palette } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Sistemas Lentos",
    description: "Seu software trava, demora para carregar e frustra seus usuários. Performance ruim = clientes perdidos.",
    color: "text-destructive",
    glowClass: "hover:border-destructive/50 hover:shadow-[0_0_40px_hsl(0_84%_60%/0.3)]",
  },
  {
    icon: Code2,
    title: "Código Legado",
    description: "Base de código antiga, difícil de manter e impossível de escalar. Cada nova feature é uma dor de cabeça.",
    color: "text-yellow-500",
    glowClass: "hover:border-yellow-500/50 hover:shadow-[0_0_40px_hsl(45_100%_50%/0.3)]",
  },
  {
    icon: Palette,
    title: "Design Amador",
    description: "Interface ultrapassada que não transmite profissionalismo. Sua marca merece muito mais.",
    color: "text-orange-500",
    glowClass: "hover:border-orange-500/50 hover:shadow-[0_0_40px_hsl(25_100%_50%/0.3)]",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-mono text-destructive">Problemas Comuns</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Seu software está <span className="text-destructive">te travando</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reconheça os sinais de que é hora de uma transformação digital real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`aura-card group cursor-default ${point.glowClass}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-5 border border-border group-hover:border-current transition-colors ${point.color}`}>
                <point.icon className={`w-7 h-7 ${point.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
