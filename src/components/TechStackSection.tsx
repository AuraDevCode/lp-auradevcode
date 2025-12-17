const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Tailwind", category: "Frontend" },
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
            Tecnologias que <span className="text-gradient-neon">dominamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas modernas para construir soluções de próxima geração.
          </p>
        </div>

        {/* Infinite scroll effect */}
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
            Mais de <span className="text-primary font-semibold">50 projetos</span> entregues para empresas que confiam na Aura
          </p>
          <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-500">
            {["ACME Corp", "TechStart", "DataFlow", "CloudNine", "NextGen"].map((company, index) => (
              <span key={index} className="text-lg font-bold tracking-wider text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
