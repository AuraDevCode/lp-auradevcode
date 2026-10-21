import { ArrowUpRight, Calendar, HardHat, Wallet, CalendarClock, Lock, Trophy, GraduationCap, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import auraLogo from "@/assets/aura-logo.png";
import soulbronzeImage from "@/assets/soulbronze.png";
import laryssaAlvesImage from "@/assets/laryssa-alves.png";
import gatoacaiImage from "@/assets/gatoacai.png";
import { getWhatsappLink, siteConfig, whatsappMessages } from "@/config/site";

type ProjectLink = { label: string; href: string };

type Product = {
  title: string;
  status: string;
  platform: string;
  description: string;
  tags: string[];
  year: string;
  icon: LucideIcon;
  gradient: string;
  links: ProjectLink[];
};

const products: Product[] = [
  {
    title: "Minha Obra",
    status: "Publicado na Google Play",
    platform: "Android + Web",
    description:
      "Gestão de obras e reformas para quem está construindo: etapas, orçamentos, compras, gastos, mão de obra e fornecedores, com leitura de notas fiscais por OCR e modo offline.",
    tags: ["React", "Capacitor", "Node.js", "MySQL", "OCR"],
    year: "2025",
    icon: HardHat,
    gradient: "from-digital-cyan to-neon-green",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=br.com.auradevcode.obra" },
      { label: "Versão web", href: "https://obra.auradevcode.com.br/" },
    ],
  },
  {
    title: "Finora",
    status: "Em teste na Google Play",
    platform: "Android + Web",
    description:
      "Finanças pessoais e familiares: contas, cartões, parcelamentos, patrimônio e importação de extratos (PDF, OFX e CSV), com integração a assistentes de IA via MCP.",
    tags: ["React", "Capacitor", "Node.js", "MySQL", "IA"],
    year: "2026",
    icon: Wallet,
    gradient: "from-neon-green to-aura-purple",
    links: [{ label: "Versão web", href: "https://finora.auradevcode.com.br/" }],
  },
  {
    title: "Kalenda",
    status: "Em desenvolvimento",
    platform: "Web (SaaS)",
    description:
      "Agendamento para clínicas e profissionais de atendimento, com portal do cliente, anamnese, cobranças e integração com WhatsApp, Google Calendar e Asaas.",
    tags: ["Laravel", "Vue", "MySQL", "WhatsApp"],
    year: "2026",
    icon: CalendarClock,
    gradient: "from-aura-purple to-digital-cyan",
    links: [{ label: "Acessar", href: "https://kalenda.auradevcode.com.br/" }],
  },
  {
    title: "Vedra",
    status: "Em revisão na Google Play",
    platform: "Android nativo",
    description:
      "Bloqueio de apps com PIN ou digital, 100% offline, sem conta e sem coleta de dados. Privacidade desde a concepção.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
    year: "2026",
    icon: Lock,
    gradient: "from-digital-cyan to-aura-purple",
    links: [{ label: "Política de privacidade", href: "https://auradevcode.github.io/vedra-app/privacidade/" }],
  },
  {
    title: "AuraQuiz",
    status: "MVP no ar",
    platform: "Web + Android",
    description:
      "Quizzes no estilo game show: professores criam e aplicam, alunos respondem pelo celular.",
    tags: ["React", "TanStack", "PHP", "MySQL"],
    year: "2026",
    icon: Trophy,
    gradient: "from-neon-green to-digital-cyan",
    links: [{ label: "Acessar", href: "https://quiz.auradevcode.com.br/" }],
  },
  {
    title: "AuraEdu",
    status: "MVP no ar",
    platform: "Web",
    description:
      "Portal de cursos online com painel administrativo e área do aluno, com progresso e retomada da aula de onde parou.",
    tags: ["React", "PHP", "MySQL"],
    year: "2026",
    icon: GraduationCap,
    gradient: "from-aura-purple to-neon-green",
    links: [{ label: "Acessar", href: "https://edu.auradevcode.com.br/" }],
  },
  {
    title: "Simulador Fator R",
    status: "Ferramenta gratuita",
    platform: "Web",
    description:
      "Calcula impostos do Simples Nacional, o Fator R e o impacto da Reforma Tributária para prestadores de serviço.",
    tags: ["JavaScript", "HTML"],
    year: "2026",
    icon: Calculator,
    gradient: "from-digital-cyan to-neon-green",
    links: [], // TODO: publicar com SSL válido e adicionar o link
  },
];

const sites = [
  {
    title: "SoulBronze",
    description: "Landing page para empresa de bronzeamento, focada em conversão.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    image: soulbronzeImage,
    link: "https://www.soulbronze.com.br/",
  },
  {
    title: "Laryssa Alves",
    description: "Landing page para neuropsicopedagoga, com serviços, depoimentos e contato.",
    tags: ["React", "Tailwind CSS"],
    image: laryssaAlvesImage,
    link: "https://laryssaalves.auradevcode.com.br/",
  },
  {
    title: "Gato Açaí",
    description: "Landing page de delivery de açaí, com carrinho e pedidos pelo WhatsApp.",
    tags: ["React", "Tailwind CSS", "WhatsApp"],
    image: gatoacaiImage,
    link: "https://gatoacai.auradevcode.com.br/",
  },
];

const whatsappLink = getWhatsappLink(whatsappMessages.startProject);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden cyber-grid">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-digital-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-mono text-primary">// Projetos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Produtos e sites <span className="text-gradient-aura">no ar</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Apps publicados, sistemas em produção e projetos em andamento, com o status real de cada um.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Produtos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_hsl(271_76%_53%/0.2)] flex flex-col"
              >
                {/* Cover */}
                <div className={`relative h-40 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  <product.icon className="w-16 h-16 text-background/90" aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{product.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{product.platform}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-digital-cyan" />
                      <span>{product.year}</span>
                    </div>
                    <div className="flex flex-wrap justify-end gap-3">
                      {product.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
                        >
                          {link.label}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sites */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Sites e landing pages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sites.map((site) => (
              <a
                key={site.title}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={site.image}
                    alt={`Página inicial do site ${site.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{site.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{site.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
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
              Tem um projeto em <span className="text-gradient-neon">mente</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conte o que você precisa e respondemos em até 1 dia útil.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="neon-button px-8 py-6 text-lg rounded-lg">
                Falar no WhatsApp
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={auraLogo} alt={siteConfig.company.name} className="w-8 h-8 object-contain" />
              <span className="font-bold">{siteConfig.company.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {siteConfig.company.copyrightYear} {siteConfig.company.name}. {siteConfig.company.tagline}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
