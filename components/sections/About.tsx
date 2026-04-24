"use client";

import { motion } from "framer-motion";
import { Scale, Award, BookOpen, CheckCircle2 } from "lucide-react";

// Estrutura de dados para facilitar a manutenção e escalabilidade do time
const team = [
  {
    id: "julia",
    name: "Dra. Júlia Celedônio",
    oab: "OAB/CE nº 56.936",
    image: "/img/julia.png",
    role: "Especialista em Dir. Penal, Empresarial e Família",
    description: "Foco em resoluções estratégicas, combinando o conhecimento profundo da lei com a agilidade que os casos modernos exigem, seja na mediação de conflitos familiares ou na defesa criminal incisiva. Atendimento 24h para emergências penais.",
    badges: [
      { icon: <Award className="w-5 h-5 text-brand-gold" />, text: "Penal, Empresarial e Família" },
      { icon: <BookOpen className="w-5 h-5 text-brand-gold" />, text: "Foco em resoluções estratégicas" }
    ]
  },
  {
    id: "andressa",
    name: "Dra. Andressa Celedônio",
    oab: "OAB/CE nº 25.272",
    image: "/img/andressa.png",
    role: "Especialista em Dir. Imobiliário e Consumidor",
    description: "Atendimento jurídico personalizado, com atuação pautada em técnica, responsabilidade e compromisso com cada caso. Seja na defesa de direitos do consumidor ou na mediação de conflitos imobiliários, nossa abordagem é sempre estratégica e focada em resultados concretos.",
    badges: [
      { icon: <CheckCircle2 className="w-5 h-5 text-brand-gold" />, text: "Imobiliário, Civil e Consumidor" },
      { icon: <CheckCircle2 className="w-5 h-5 text-brand-gold" />, text: "Foco em resoluções estratégicas" }
    ]
  }
];

export function About() {
  return (
    <section id="sobre" className="py-32 bg-brand-navy relative overflow-hidden border-y border-white/5">
      
      {/* GRID E LUZES DE FUNDO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-brand-gold"></span>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(212,175,55,0.5)]">O Escritório</span>
            <span className="h-px w-12 bg-brand-gold"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-light mb-6 font-heading leading-tight">
            Comprometimento e excelência na <span className="text-brand-gold italic drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">defesa dos seus direitos</span>.
          </h2>
          
          <p className="text-brand-light/70 leading-relaxed text-lg">
            Com uma atuação pautada pela ética e pelo rigor técnico, nosso escritório nasceu do desejo de oferecer um atendimento jurídico verdadeiramente humanizado. Entendemos que por trás de cada processo existe uma vida, uma família ou um patrimônio construído com muito esforço.
          </p>
        </motion.div>

        {/* Grid de Advogadas */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {team.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Imagem do Perfil */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/5] w-full group">
                <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10 transition-colors group-hover:bg-brand-navy/10"></div>
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/80 backdrop-blur-xl border border-brand-gold/40 p-5 rounded-2xl z-20 flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-brand-gold/30 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-light font-bold font-heading text-lg leading-none">{lawyer.name}</p>
                    <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">{lawyer.oab}</p>
                  </div>
                </div>
              </div>

              {/* Informações de Atuação */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-3">
                  {lawyer.role}
                </h3>
                <p className="text-brand-light/70 leading-relaxed text-md mb-6">
                  {lawyer.description}
                </p>
                
                {/* Badges */}
                <div className="flex flex-col gap-3">
                  {lawyer.badges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:border-brand-gold/30 transition-colors">
                      {badge.icon}
                      <span className="text-sm text-brand-light font-medium">{badge.text}</span>
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