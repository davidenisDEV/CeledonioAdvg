// src/config/site-config.ts

export const siteConfig = {
  business: {
    name: "Celedonio Advocacia & Consultoria",
    description: "Renovação, esperança e segurança jurídica. Representamos a transição para um futuro melhor na defesa dos seus direitos.",
    whatsapp: "+5585994195136", 
    email: "contato@celedonioadv.com.br", 
    address: "Fortaleza, CE", 
    mapsLink: "#",
  },
  
  navigation: {
    main: [
      { label: "Início", href: "/" },
      { label: "O Escritório", href: "/#sobre" },
    ],
    practiceAreas: [
      { label: "Direito Criminal", href: "/criminal", description: "Defesa técnica e estratégica em casos criminais." },
      { label: "Direito de Família", href: "/familia", description: "Resolução de conflitos familiares com acolhimento." },
      { label: "Direito Imobiliário", href: "/imobiliaria", description: "Segurança jurídica para seu patrimônio." },
      { label: "Assessoria B2B", href: "/assessoria-juridica", description: "Consultoria preventiva para empresas." },
    ]
  },

  // --- NOVAS SEÇÕES CENTRALIZADAS ---

  processSteps: [
    { iconName: "Lock", title: "1. Triagem Sigilosa", description: "Contato inicial 100% confidencial para entendermos a urgência e os detalhes da sua situação." },
    { iconName: "Search", title: "2. Análise Estratégica", description: "Estudo minucioso do caso e elaboração da melhor tese de defesa ou proteção patrimonial." },
    { iconName: "Scale", title: "3. Atuação Jurídica", description: "Entrada com as medidas legais cabíveis (processos, liminares, habeas corpus ou negociações extrajudiciais)." },
    { iconName: "CheckCircle", title: "4. Acompanhamento", description: "Você informado de cada passo até a resolução, com transparência e proximidade." }
  ],

  stats: [
    { iconName: "Scale", value: 3, suffix: "+", title: "Anos de Experiência", description: "Dedicação exclusiva e resolução de conflitos." },
    { iconName: "MapPin", value: 184, suffix: "", title: "Cidades Cobertas", description: "Atuação em todo o estado do Ceará." },
    { iconName: "ShieldCheck", value: 100, suffix: "%", title: "Sigilo Absoluto", description: "Ética e descrição total em todos processos." },
    { iconName: "Clock", value: 24, suffix: "h", title: "Disponibilidade", description: "Acompanhamento urgente em casos penais." }
  ],

  testimonials: [
    {
      name: "Cliente Anônimo",
      role: "Direito de Família",
      text: "O processo de divórcio e inventário era um peso enorme para mim. A equipe atuou com extrema sensibilidade e rapidez, resolvendo de forma amigável o que parecia impossível em poucos meses. O atendimento humanizado fez toda a diferença.",
      rating: 5,
      initials: "C. A."
    },
    {
      name: "Cliente Anônimo",
      role: "Direito Penal",
      text: "Em um dos momentos mais difíceis e desesperadores da minha vida, encontrei neste escritório um verdadeiro escudo. Atendimento imediato, clareza em cada passo do processo e uma defesa técnica impecável que garantiu a minha liberdade.",
      rating: 5,
      initials: "C. A."
    },
    {
      name: "Cliente Anônimo",
      role: "Direito Cível",
      text: "Sofri um grande prejuízo patrimonial e estava descrente com a justiça. O Dr. Celedonio e sua equipe foram estratégicos desde a primeira consultoria até a vitória na ação de indenização. Profissionais extremamente éticos e capacitados.",
      rating: 5,
      initials: "C. A."
    }
  ],

  // ----------------------------------

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