export const siteConfig = {
  company: {
    name: "Aura Dev",
    tagline: "A inteligência por trás do código",
    description: "Sistemas web, apps e automação com IA. Do levantamento à publicação.",
    copyrightYear: "2026",
  },
  contact: {
    email: "contato.auradev@gmail.com",
    phoneDisplay: "+55 79 99686-7342", // TODO: confirmar número comercial
    whatsappNumber: "5579996867342", // TODO: confirmar número comercial
    location: "Aracaju, Sergipe, Brasil",
  },
  social: {
    instagram: "https://instagram.com/auradev.io",
  },
  links: {
    website: "https://auradevcode.com.br",
    portfolio: "/portfolio",
    sections: {
      services: "/#servicos",
      process: "/#como-trabalhamos",
      faq: "/#perguntas",
      contact: "/#contato",
    },
  },
} as const;

export const getWhatsappLink = (message: string) => {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const whatsappMessages = {
  startProject: `Olá, gostaria de conversar sobre um projeto com a ${siteConfig.company.name}.`,
  scheduleCall: `Olá, gostaria de falar com a ${siteConfig.company.name} sobre um projeto.`,
} as const;
