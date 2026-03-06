"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site-config";

const faqs = [
  {
    question: "Quanto tempo demora um processo de divórcio?",
    answer: "Um divórcio consensual (quando há acordo entre as partes) realizado em cartório pode ser finalizado em poucos dias. Já o litigioso, que depende de decisão judicial, pode levar meses. Nossa equipe trabalha com estratégias de negociação para resolver o conflito da forma mais ágil e menos desgastante possível."
  },
  {
    question: "Como é calculado o valor da pensão alimentícia?",
    answer: "Não existe um valor fixo de 30% como muitos pensam. A pensão é calculada com base no trinômio: necessidade de quem recebe, possibilidade de quem paga e proporcionalidade. Avaliamos o seu caso minuciosamente para garantir a fixação de um valor justo e adequado à realidade."
  },
  {
    question: "Fui intimado para depor na delegacia. Preciso de um advogado?",
    answer: "Sim, é fundamental. Comparecer à delegacia sem o acompanhamento de uma advogada criminalista é um risco altíssimo. Nossa presença garantirá que seus direitos constitucionais sejam respeitados desde o primeiro momento, evitando que você produza provas contra si mesmo."
  },
  {
    question: "Vocês atendem urgências e flagrantes fora do horário comercial?",
    answer: "Sim. Sabemos que emergências criminais não têm hora para acontecer. Atuamos com disponibilidade para garantir assistência técnica imediata em casos de prisão em flagrante ou cumprimento de mandados."
  },
  {
    question: "Como funcionam os honorários e os custos do processo?",
    answer: "Nossos honorários são estabelecidos de forma transparente e ética, seguindo rigorosamente a Tabela da Ordem dos Advogados do Brasil (OAB). O valor exato depende de uma análise prévia e detalhada da complexidade do seu caso, que será apresentada de forma clara durante a nossa primeira consultoria."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      
      {/* GRID FINO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* BOLHAS GIGANTES */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-brand-light mb-4 font-heading leading-tight"
          >
            Respostas para suas <span className="text-brand-gold italic">perguntas jurídicas</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/70 font-light"
          >
            Informação clara e objetiva para ajudar você a dar o primeiro passo com segurança.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transition-all hover:border-brand-gold/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold text-brand-light text-lg pr-8 font-heading group-hover:text-brand-gold transition-colors">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-brand-gold shrink-0 w-5 h-5 drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                ) : (
                  <Plus className="text-brand-gold shrink-0 w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-brand-light/70 leading-relaxed border-t border-white/10 pt-4 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION EM VIDRO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-brand-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-gold/5 blur-2xl"></div>
          
          <p className="text-brand-light font-medium mb-6 text-lg relative z-10">
            Ainda com dúvidas? Fale diretamente com a Dra. Celedonio.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Olá, Dra. Celedonio! Acessei o site e gostaria de tirar uma dúvida sobre o meu caso.`}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex items-center gap-3 bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar Atendimento
          </a>
        </motion.div>

      </div>
    </section>
  );
}