import { Globe, Smartphone, Bot, Plug, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sistemas web sob medida",
    description: "ERP, CRM, painéis e portais do cliente feitos para o seu processo, acessíveis de qualquer lugar.",
    tags: ["PHP", "Laravel", "React", "MySQL"],
    color: "digital-cyan",
  },
  {
    icon: Smartphone,
    title: "Apps Android e web",
    description: "Apps nativos em Kotlin ou híbridos com Capacitor, com publicação na Play Store inclusa.",
    tags: ["Kotlin", "Capacitor", "Play Store"],
    color: "neon-green",
  },
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Leitura de documentos (OCR), resumos, classificação, chatbots e agentes integrados ao seu sistema.",
    tags: ["OpenAI", "Gemini", "OCR"],
    color: "aura-purple",
  },
  {
    icon: Plug,
    title: "Integrações e APIs",
    description: "WhatsApp, pagamentos, Google Calendar, webhooks e APIs para conectar os sistemas que você já usa.",
    tags: ["WhatsApp", "Asaas", "Webhooks"],
    color: "primary",
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  "digital-cyan": {
    border: "group-hover:border-digital-cyan/50",
    bg: "bg-digital-cyan/10",
    text: "text-digital-cyan",
    glow: "group-hover:shadow-[0_0_50px_hsl(180_100%_50%/0.3)]",
  },
  "neon-green": {
    border: "group-hover:border-neon-green/50",
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    glow: "group-hover:shadow-[0_0_50px_hsl(110_100%_54%/0.3)]",
  },
  "aura-purple": {
    border: "group-hover:border-aura-purple/50",
    bg: "bg-aura-purple/10",
    text: "text-aura-purple",
    glow: "group-hover:shadow-[0_0_50px_hsl(271_76%_53%/0.3)]",
  },
  "primary": {
    border: "group-hover:border-primary/50",
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_50px_hsl(271_76%_53%/0.3)]",
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 relative cyber-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-digital-cyan/30 bg-digital-cyan/5 mb-6">
            <span className="text-sm font-mono text-digital-cyan">// Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Do <span className="text-gradient-neon">conceito</span> à{" "}
            <span className="text-gradient-aura">produção</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do primeiro rascunho ao sistema rodando, com suporte depois da entrega.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className={`aura-card group cursor-pointer ${colors.border} ${colors.glow} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
