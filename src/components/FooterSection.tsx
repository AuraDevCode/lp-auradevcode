import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import auraLogo from "@/assets/aura-logo.png";
import { getWhatsappLink, siteConfig, whatsappMessages } from "@/config/site";

const whatsappLink = getWhatsappLink(whatsappMessages.scheduleCall);

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
              Tem um projeto em <span className="text-gradient-aura">mente</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Conte o que você precisa pelo WhatsApp. Respondemos em até 1 dia útil
              e, se fizer sentido, marcamos uma conversa sem custo.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="neon-button px-10 py-7 text-lg rounded-xl">
                Falar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Atendimento remoto em todo o Brasil.
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={auraLogo} 
                  alt={`${siteConfig.company.name} Logo`} 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-bold">{siteConfig.company.name}</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-2 italic font-medium text-gradient-aura">
                {siteConfig.company.tagline}
              </p>
              <p className="text-muted-foreground max-w-sm mb-6">
                {siteConfig.company.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Serviços</h4>
              <ul className="space-y-3 text-muted-foreground">
                {["Sistemas web sob medida", "Apps Android e web", "Automação com IA", "Integrações e APIs"].map((link) => (
                  <li key={link}>
                    <a href={siteConfig.links.sections.services} className="hover:text-primary transition-colors">{link}</a>
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
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{siteConfig.contact.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {siteConfig.company.copyrightYear} {siteConfig.company.name}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Feito com <span className="text-primary">♥</span> em <span className="text-neon-green">Aracaju/SE</span>
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default FooterSection;
