import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Depende do escopo. Depois de uma conversa sem custo, você recebe uma proposta por escrito com o que será entregue, o prazo e o valor de cada etapa.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Uma landing page fica pronta em poucos dias. Um sistema ou app costuma ter a primeira versão em uso entre 4 e 12 semanas, com entregas semanais no caminho.",
  },
  {
    question: "Vocês publicam o app na Play Store?",
    answer:
      "Sim. Cuidamos da conta de desenvolvedor, da ficha da loja, da política de privacidade e do envio para revisão do Google.",
  },
  {
    question: "Vocês fazem manutenção depois da entrega?",
    answer:
      "Sim. Depois da publicação, oferecemos suporte e manutenção sob demanda ou por plano mensal, conforme o que fizer mais sentido para você.",
  },
  {
    question: "O código fica com quem?",
    answer:
      "Com você. Ao final do projeto, o código-fonte e os acessos são entregues ao cliente.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-digital-cyan/30 bg-digital-cyan/5 mb-6">
            <HelpCircle className="w-4 h-4 text-digital-cyan" />
            <span className="text-sm font-mono text-digital-cyan">Perguntas frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Antes de <span className="text-gradient-aura">começar</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
