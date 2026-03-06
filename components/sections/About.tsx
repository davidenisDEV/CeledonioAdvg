"use client";

import { motion } from "framer-motion";
import { Scale, Award, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-32 bg-brand-navy relative overflow-hidden border-y border-white/5">
      
      {/* GRID E LUZES DE FUNDO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/5] max-w-md mx-auto group">
              
              <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10 transition-colors group-hover:bg-brand-navy/10"></div>
              
              {/* IMAGEM TEMPORÁRIA (Substitua depois por uma foto real da Dra. Júlia) */}
              <img
                src="/img/julia.png"
                alt="Dra. Júlia Celedônio"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/80 backdrop-blur-xl border border-brand-gold/40 p-5 rounded-2xl z-20 flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-brand-light font-bold font-heading text-lg leading-none">Dra. Júlia Celedônio</p>
                  <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">OAB/CE nº 56.936</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(212,175,55,0.5)]">A Especialista</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-light mb-6 font-heading leading-tight">
              Comprometimento e excelência na <span className="text-brand-gold italic drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">defesa dos seus direitos</span>.
            </h2>
            
            <p className="text-brand-light/70 leading-relaxed mb-6 text-lg">
              Com uma atuação pautada pela ética e pelo rigor técnico, nosso escritório nasceu do desejo de oferecer um atendimento jurídico verdadeiramente humanizado. Entendemos que por trás de cada processo existe uma vida, uma família ou um patrimônio construído com muito esforço.
            </p>
            
            <p className="text-brand-light/70 leading-relaxed mb-10 text-lg">
              A Dra. Júlia Celedônio lidera a equipe com foco em resoluções estratégicas, combinando o conhecimento profundo da lei com a agilidade que os casos modernos exigem, seja na mediação de conflitos familiares ou na defesa criminal incisiva.
            </p>

            {/* Badges de Valores (Glassmorphism) */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-brand-gold/40 transition-colors">
                <Award className="w-8 h-8 text-brand-gold drop-shadow-md" />
                <span className="text-sm text-brand-light font-medium">Estratégia Personalizada</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-brand-gold/40 transition-colors">
                <BookOpen className="w-8 h-8 text-brand-gold drop-shadow-md" />
                <span className="text-sm text-brand-light font-medium">Atualização Constante</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}