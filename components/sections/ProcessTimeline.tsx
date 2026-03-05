"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="py-24 bg-brand-light border-y border-brand-gold/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy mb-4 font-heading">
            Como funciona o <span className="text-brand-gold italic">nosso trabalho</span>
          </h2>
          <p className="text-brand-slate font-light">Transparência e estratégia em cada etapa da sua defesa.</p>
        </div>

        <div className="relative">
          {/* Linha vertical central (Escondida no mobile, visível no desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/20 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Metade Vazia para alinhar */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Ícone Central */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-brand-navy rounded-full border-4 border-brand-light flex items-center justify-center z-10 shadow-lg">
                  {step.icon}
                </div>

                {/* Conteúdo */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-gold/10 hover:border-brand-gold/30 transition-colors">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 font-heading">{step.title}</h3>
                    <p className="text-sm text-brand-slate leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}