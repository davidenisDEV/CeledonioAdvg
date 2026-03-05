// src/config/site-config.ts (ou onde estiver o seu arquivo)

export const siteConfig = {
  business: {
    name: "Celedonio Advocacia & Consultoria",
    description: "Renovação, esperança e segurança jurídica. Representamos a transição para um futuro melhor na defesa dos seus direitos.",
    whatsapp: "+5585991466480", 
    email: "contato@celedonioadv.com.br", 
    address: "Fortaleza, CE", 
    mapsLink: "#",
  },

  hours: {
    open: 8, 
    close: 18, 
    timezone: "America/Fortaleza",
  },

  theme: {
    primaryColor: "#0B102D", // Navy
    secondaryColor: "#967740", // Gold
  },

  navItems: [
    { label: "Início", href: "#hero" },
    { label: "Áreas de Atuação", href: "#atuacao" },
    { label: "O Escritório", href: "#sobre" },
    { label: "Artigos", href: "#blog" },
    { label: "Contato", href: "#contact" },
  ],
}