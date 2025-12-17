import { ArrowLeft, ArrowUpRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import auraLogo from "@/assets/aura-logo.png";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "Plataforma completa de gestão financeira com dashboards em tempo real, integração bancária e análise preditiva de investimentos.",
    tags: ["React", "Node.js", "MySQL", "AWS"],
    metrics: { users: "15K+", year: "2024" },
    gradient: "from-digital-cyan to-aura-purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web + Mobile",
    description: "Marketplace multi-vendor com app mobile, sistema de pagamentos integrado, gestão de estoque e logística automatizada.",
    tags: ["Next.js", "React Native", "PHP", "Stripe"],
    metrics: { users: "50K+", year: "2024" },
    gradient: "from-neon-green to-digital-cyan",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "HealthCare App",
    category: "Mobile App",
    description: "Aplicativo de telemedicina com agendamento, videochamadas, prontuário eletrônico e integração com convênios.",
    tags: ["Flutter", "Node.js", "MongoDB", "WebRTC"],
    metrics: { users: "30K+", year: "2023" },
    gradient: "from-aura-purple to-neon-green",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Logistics SaaS",
    category: "Cloud Architecture",
    description: "Sistema de gestão logística com rastreamento em tempo real, otimização de rotas e integração com transportadoras.",
    tags: ["React", "PHP", "MySQL", "Kubernetes"],
    metrics: { users: "8K+", year: "2024" },
    gradient: "from-digital-cyan to-neon-green",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "EdTech Platform",
    category: "Web Development",
    description: "Plataforma de ensino online com cursos ao vivo, gamificação, certificados e sistema de avaliação inteligente.",
    tags: ["Next.js", "Node.js", "MySQL", "AWS"],
    metrics: { users: "100K+", year: "2023" },
    gradient: "from-neon-green to-aura-purple",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Real Estate App",
    category: "Mobile App",
    description: "App imobiliário com tour virtual 360°, filtros avançados, chat com corretores e simulador de financiamento.",
    tags: ["React Native", "PHP", "MongoDB", "Three.js"],
    metrics: { users: "25K+", year: "2024" },
    gradient: "from-aura-purple to-digital-cyan",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={auraLogo} 
                alt="Aura Dev Logo" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold">Aura Dev</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden cyber-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-digital-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-mono text-primary">// Portfólio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Projetos que <span className="text-gradient-aura">transformaram</span> negócios
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos cases de sucesso que desenvolvemos com a nossa aura de inteligência.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_hsl(271_76%_53%/0.2)]"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-neon-green" />
                      <span>{project.metrics.users}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-digital-cyan" />
                      <span>{project.metrics.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quer ser o próximo <span className="text-gradient-neon">case de sucesso</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vamos conversar sobre como transformar sua ideia em realidade.
            </p>
            <Link to="/#contato">
              <Button className="neon-button px-8 py-6 text-lg rounded-lg">
                Iniciar meu projeto
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={auraLogo} alt="Aura Dev" className="w-8 h-8 object-contain" />
              <span className="font-bold">Aura Dev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Aura Dev. A inteligência por trás do código.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;