"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Shield, Check, Landmark } from "lucide-react";

const practiceAreas = [
  {
    id: "civil",
    title: "Direito Civil e de Família",
    icon: <Landmark className="w-10 h-10 text-brand-gold" />,
    description: "Conflitos familiares e patrimoniais exigem mais do que conhecimento técnico; exigem sensibilidade e firmeza. Nosso objetivo é curar a sua dor jurídica de forma ágil, protegendo o seu patrimônio e garantindo a paz de espírito para você e seus entes queridos.",
    topics: ["Divórcio (Consensual e Litigioso)", "Pensão Alimentícia (Fixação, Revisão e Exoneração)", "Inventário e Partilha de Bens", "Ações de Indenização"]
  },
  {
    id: "penal",
    title: "Direito Penal e Criminal",
    icon: <Shield className="w-10 h-10 text-brand-gold" />,
    description: "Quando a sua liberdade ou a de quem você ama está em jogo, não há espaço para hesitação. Atuamos de forma incisiva para resguardar todos os seus direitos constitucionais, oferecendo um escudo legal intransponível contra acusações.",
    topics: ["Acompanhamento em Delegacia (24h)", "Defesa em Tribunal do Júri", "Crimes Financeiros e Tributários", "Impetração de Habeas Corpus"]
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const card1RotateX = useTransform(scrollYProgress, [0, 1], [20, -10]);

  const card2Y = useTransform(scrollYProgress, [0, 1], [250, -50]);
  const card2RotateX = useTransform(scrollYProgress, [0, 1], [15, -5]);

  return (
    <section ref={sectionRef} id="atuacao" className="py-32 bg-brand-navy relative overflow-hidden" style={{ perspective: "1000px" }}>
      
      {/* GRID E BOLHAS (Otimizados para não travar o mobile) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 -left-10 md:-left-20 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-brand-gold/10 blur-[60px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-brand-blue/5 blur-[60px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* AQUI FALTAVA ESTA DIV CONTAINER! */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Título com Scroll Fade-up Tradicional */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-brand-gold"></span>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(212,175,55,0.5)]">Áreas de Atuação</span>
            <span className="h-px w-12 bg-brand-gold"></span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-heading text-brand-light mb-6 leading-tight">
            Defesa técnica, sigilosa e estratégica em todos os momentos do processo.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-brand-light/70 text-lg font-light leading-relaxed">
            Compreendemos a complexidade de cada caso. Nossa equipe está preparada para fornecer a clareza e a direção legal necessárias para a resolução do seu conflito.
          </motion.p>
        </div>

        {/* CARDS COM SCROLL MÁGICO 3D */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto" style={{ perspective: "1200px" }}>
          
          {/* Card 1 */}
          <motion.div 
            style={{ y: card1Y, rotateX: card1RotateX }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative group hover:bg-white/10 hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Scale className="w-32 h-32 text-brand-gold" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand-navy/50 backdrop-blur-md border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {practiceAreas[0].icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-light mb-4">{practiceAreas[0].title}</h3>
              <p className="text-brand-light/70 leading-relaxed mb-8 min-h-[100px]">{practiceAreas[0].description}</p>
              <div className="space-y-4">
                {practiceAreas[0].topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-gold mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    <span className="text-brand-light/90 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: card2Y, rotateX: card2RotateX }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative group hover:bg-white/10 hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden mt-0 lg:mt-24"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Scale className="w-32 h-32 text-brand-gold" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand-navy/50 backdrop-blur-md border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {practiceAreas[1].icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-light mb-4">{practiceAreas[1].title}</h3>
              <p className="text-brand-light/70 leading-relaxed mb-8 min-h-[100px]">{practiceAreas[1].description}</p>
              <div className="space-y-4">
                {practiceAreas[1].topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-gold mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    <span className="text-brand-light/90 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}