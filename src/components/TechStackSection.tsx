import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

const technologies = [
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Vue", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Kotlin", category: "Android" },
  { name: "Capacitor", category: "Mobile" },
  { name: "MySQL", category: "Database" },
  { name: "OpenAI / Gemini", category: "IA" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-mono text-primary">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologias que <span className="text-gradient-neon">usamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas que já estão em produção nos nossos projetos.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:glow-purple transition-all duration-300 cursor-default group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio teaser */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Sistemas, apps e automações em produção para empresas de Sergipe e de todo o Brasil.
          </p>
          <Link
            to={siteConfig.links.portfolio}
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Ver os projetos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
