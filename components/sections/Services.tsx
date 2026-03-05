"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Check, Landmark } from "lucide-react";

const practiceAreas = [
  {
    id: "civil",
    title: "Direito Civil e de Família",
    icon: <Landmark className="w-10 h-10 text-brand-gold" />,
    description: "Conflitos familiares e patrimoniais exigem mais do que conhecimento técnico; exigem sensibilidade e firmeza. Nosso objetivo é curar a sua dor jurídica de forma ágil, protegendo o seu patrimônio e garantindo a paz de espírito para você e seus entes queridos.",
    topics: [
      "Divórcio (Consensual e Litigioso)",
      "Pensão Alimentícia (Fixação, Revisão e Exoneração)",
      "Inventário e Partilha de Bens",
      "Ações de Indenização (Danos Morais e Materiais)"
    ]
  },
  {
    id: "penal",
    title: "Direito Penal e Criminal",
    icon: <Shield className="w-10 h-10 text-brand-gold" />,
    description: "Quando a sua liberdade ou a de quem você ama está em jogo, não há espaço para hesitação. Atuamos de forma incisiva para resguardar todos os seus direitos constitucionais, oferecendo um escudo legal intransponível contra acusações.",
    topics: [
      "Acompanhamento em Delegacia (24h)",
      "Defesa em Tribunal do Júri",
      "Crimes Financeiros e Tributários",
      "Defesa em casos de Violência Doméstica",
      "Impetração de Habeas Corpus"
    ]
  }
];

export function Services() {
  return (
    <section id="atuacao" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-brand-gold"></span>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Áreas de Atuação</span>
            <span className="h-px w-12 bg-brand-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading text-brand-navy mb-6 leading-tight"
          >
            Defesa técnica, sigilosa e estratégica em todos os momentos do processo.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-slate text-lg font-light leading-relaxed"
          >
            Compreendemos a complexidade de cada caso. Nossa equipe está preparada para fornecer a clareza e a direção legal necessárias para a resolução do seu conflito.
          </motion.p>
        </div>

        {/* Blocos de Atuação */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-sm border border-brand-gold/20 p-10 shadow-xl shadow-brand-navy/5 relative group hover:border-brand-gold/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Scale className="w-32 h-32 text-brand-navy" />
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-navy rounded-sm flex items-center justify-center mb-8 shadow-md">
                  {area.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">
                  {area.title}
                </h3>
                
                <p className="text-brand-slate leading-relaxed mb-8 min-h-[100px]">
                  {area.description}
                </p>

                <div className="space-y-4">
                  {area.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-brand-gold" />
                      </div>
                      <span className="text-brand-navy font-medium">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}