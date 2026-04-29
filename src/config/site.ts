export const siteConfig = {
  company: {
    name: "Aura Dev",
    tagline: "A inteligência por trás do código",
    description: "Software house premium. Transformamos complexidade em elegância digital.",
    copyrightYear: "2026",
  },
  contact: {
    email: "contato.auradev@gmail.com",
    phoneDisplay: "+55 79 99686-7342",
    whatsappNumber: "5579996867342",
    location: "Aracaju, Sergipe, Brasil",
  },
  social: {
    instagram: "https://instagram.com/auradev.io",
  },
  links: {
    website: "https://auradev.io",
    portfolio: "/portfolio",
    sections: {
      services: "/#servicos",
      differentials: "/#diferenciais",
      contact: "/#contato",
    },
  },
} as const;

export const getWhatsappLink = (message: string) => {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const whatsappMessages = {
  startProject: `Olá, gostaria de iniciar um projeto com a ${siteConfig.company.name}.`,
  scheduleCall: `Olá, gostaria de agendar uma call estratégica com a ${siteConfig.company.name}.`,
} as const;
