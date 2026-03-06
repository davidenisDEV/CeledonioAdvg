"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
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
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      
      {/* GRID FINO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* BOLHAS DE LUZ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-brand-light mb-4 font-heading leading-tight"
          >
            Avaliações de quem <span className="text-brand-gold italic drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">confiou em nosso trabalho</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/70 font-light"
          >
            Preservamos a identidade dos nossos clientes em respeito ao sigilo profissional, mas os resultados falam por si.
          </motion.p>
        </div>

        {/* Grid de Depoimentos em Vidro */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 relative group hover:border-brand-gold/50 hover:bg-white/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Ícone de Aspas Fundo (Mais sutil no vidro) */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 -z-0 rotate-12 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-300" />
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" />
                ))}
              </div>
              
              <p className="text-brand-light/80 text-sm leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-brand-gold/30 flex items-center justify-center font-bold text-sm text-brand-gold shadow-inner">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-light font-heading">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-brand-gold uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}