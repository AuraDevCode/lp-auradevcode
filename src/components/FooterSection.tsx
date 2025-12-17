import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const FooterSection = () => {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para <span className="text-gradient-aura">elevar</span> seu software?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Agende uma call estratégica gratuita. Em 30 minutos, vamos entender seu desafio 
              e mostrar como a Aura pode transformar sua visão em realidade.
            </p>
            <Button className="neon-button px-10 py-7 text-lg rounded-xl">
              Agendar call gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Sem compromisso. Sem vendas agressivas. Apenas valor.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aura-purple to-digital-cyan flex items-center justify-center">
                  <span className="text-xl font-bold text-background">A</span>
                </div>
                <span className="text-2xl font-bold">Aura Dev</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Software house premium. Transformamos complexidade em elegância digital.
              </p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Serviços</h4>
              <ul className="space-y-3 text-muted-foreground">
                {["Web Development", "Mobile Apps", "Cloud Architecture", "UI/UX Design"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@auradev.io</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+55 11 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>São Paulo, Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Aura Dev. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Crafted with <span className="text-primary">♥</span> and <span className="text-neon-green">clean code</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
