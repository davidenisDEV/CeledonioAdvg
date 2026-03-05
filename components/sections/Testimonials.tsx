"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Depoimentos estratégicos focados nas dores reais dos clientes
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
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-brand-navy mb-4 font-heading leading-tight"
          >
            Avaliações de quem <span className="text-brand-gold italic">confiou em nosso trabalho</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-slate font-light"
          >
            Preservamos a identidade dos nossos clientes em respeito ao sigilo profissional, mas os resultados falam por si.
          </motion.p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-sm shadow-lg shadow-brand-navy/5 border border-brand-gold/10 relative group hover:border-brand-gold/40 transition-colors flex flex-col h-full"
            >
              {/* Ícone de Aspas Fundo */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-light -z-0 rotate-12 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-300" />
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-brand-slate text-sm leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-brand-light">
                <div className="w-10 h-10 rounded-sm bg-brand-navy flex items-center justify-center font-bold text-sm text-brand-gold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy font-heading">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-brand-slate uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chamada Discreta do Google */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center flex items-center justify-center gap-2"
        >
          <span className="text-sm text-brand-slate font-medium">Avaliado com 5 estrelas</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}