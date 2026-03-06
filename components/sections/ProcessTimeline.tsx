"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Search, Scale, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Lock className="w-6 h-6 text-brand-gold" />,
    title: "1. Triagem Sigilosa",
    description: "Contato inicial 100% confidencial para entendermos a urgência e os detalhes da sua situação."
  },
  {
    icon: <Search className="w-6 h-6 text-brand-gold" />,
    title: "2. Análise Estratégica",
    description: "Estudo minucioso do caso e elaboração da melhor tese de defesa ou proteção patrimonial."
  },
  {
    icon: <Scale className="w-6 h-6 text-brand-gold" />,
    title: "3. Atuação Jurídica",
    description: "Entrada com as medidas legais cabíveis (processos, liminares, habeas corpus ou negociações extrajudiciais)."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-gold" />,
    title: "4. Acompanhamento",
    description: "Você informado de cada passo até a resolução, com transparência e proximidade."
  }
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-brand-navy relative overflow-hidden border-y border-white/5" style={{ perspective: "1000px" }}>
      
      {/* GRID FINO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* BOLHAS DE LUZ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-light mb-4 font-heading">
            Como funciona o <span className="text-brand-gold italic drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">nosso trabalho</span>
          </h2>
          <p className="text-brand-light/70 font-light">Transparência e estratégia em cada etapa da sua defesa.</p>
        </div>

        <div className="relative">
          {/* Linha vertical central (brilhante) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent -translate-x-1/2 shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>

          <div className="space-y-20 md:space-y-0 relative z-10">
            {steps.map((step, index) => {
              // Valores progressivos para criar o efeito Parallax 3D para cada item baseado no index
              // Itens pares inclinam para um lado, ímpares para o outro
              const yRange = useTransform(scrollYProgress, [0, 1], [100 + (index * 40), -50 - (index * 20)]);
              const rotateRange = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 15 : -15, 0]);
              const opacityRange = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 1, 1]);

              return (
                <motion.div 
                  key={index}
                  style={{ y: yRange, rotateX: rotateRange, opacity: opacityRange }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Ícone Central em Glassmorphism */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-brand-navy/80 backdrop-blur-md rounded-full border border-brand-gold/40 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    {step.icon}
                  </div>

                  {/* Card em Vidro */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} py-8 md:py-12`}>
                    <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 hover:border-brand-gold/40 hover:bg-white/10 transition-colors duration-500">
                      <h3 className="text-2xl font-bold text-brand-light mb-3 font-heading">{step.title}</h3>
                      <p className="text-base text-brand-light/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}