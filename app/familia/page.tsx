"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HeartHandshake, Baby, Home, ScrollText, ChevronDown, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

// IMPORTAÇÕES DOS COMPONENTES
import { Navbar } from "@/components/sections/Navbar";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const familyFeatures = [
  { 
    icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />, 
    title: "Divórcio Humanizado", 
    desc: "Conduzimos divórcios consensuais e litigiosos com foco em reduzir desgastes emocionais e proteger seus bens." 
  },
  { 
    icon: <Baby className="w-6 h-6 text-brand-gold" />, 
    title: "Guarda e Pensão", 
    desc: "Garantimos os direitos dos seus filhos, atuando na fixação, revisão ou exoneração de pensão alimentícia." 
  },
  { 
    icon: <Home className="w-6 h-6 text-brand-gold" />, 
    title: "Partilha de Bens", 
    desc: "Análise minuciosa do regime de bens para garantir uma divisão justa e a blindagem do seu patrimônio." 
  },
  { 
    icon: <ScrollText className="w-6 h-6 text-brand-gold" />, 
    title: "Inventário", 
    desc: "Agilidade na sucessão patrimonial, seja extrajudicial ou judicial, preservando a harmonia familiar." 
  }
];

const faqs = [
  {
    question: "Quanto tempo demora um processo de divórcio?",
    answer: "Se for consensual (amigável) e sem filhos menores, pode ser feito em cartório em poucos dias. Processos litigiosos na justiça podem levar meses ou anos, por isso sempre buscamos a via do acordo."
  },
  {
    question: "Como é definida a guarda dos filhos?",
    answer: "A regra geral no Brasil é a guarda compartilhada, onde as decisões são tomadas em conjunto, mas a criança tem uma residência base. O juiz sempre avaliará o melhor interesse da criança."
  },
  {
    question: "Posso rever o valor da pensão alimentícia?",
    answer: "Sim. A pensão pode ser revisada a qualquer momento se houver mudança na necessidade de quem recebe ou na capacidade financeira de quem paga (ação revisional)."
  }
];

// 10. COMPONENTE FAQ INTERNO COM ANIMAÇÃO
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-gold/20 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left focus:outline-none group">
        <span className="text-brand-light font-heading text-lg group-hover:text-brand-gold transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pb-6 text-brand-light/70 leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FamiliaFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative overflow-hidden">
      
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-navy">
        
        {/* 1. PALETA DE ACOLHIMENTO (Brilho dourado suave em vez de vermelho) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px]"></div>
        </div>

        {/* 2. IMAGEM HERO COM MÁSCARA ASSIMÉTRICA */}
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[90%] z-10">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} // 9. Movimento mais curto e suave
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // 9. Animação Fluida e Calma
            className="relative w-full h-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[250px] border-l border-b border-brand-gold/20 shadow-2xl"
          >
            {/* Imagem Temática - pensao.webp */}
            <img 
              src="/img/pensao.webp" 
              alt="Direito de Família"
              className="w-full h-full object-cover brightness-[0.55] sepia-[0.2] contrast-[1.1]" // Filtro mais quente e acolhedor
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/30 to-transparent lg:visible invisible" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="max-w-2xl pt-10"
          >
            {/* 5. GATILHO DE RESOLUÇÃO HUMANIZADA */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md">
              <HeartHandshake className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                Advocacia Humanizada e Focada em Acordos
              </span>
            </div>

            {/* 6. COPY FOCADA EM PAZ DE ESPÍRITO */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-light leading-[1.1] mb-6">
              Protegendo seu patrimônio e a <br/>
              <span className="text-brand-gold italic">paz da sua família.</span>
            </h1>
            
            <p className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-sans font-light">
              Atendimento empático e sigiloso para resolver conflitos familiares com agilidade, preservando relações e garantindo seus direitos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href={`https://wa.me/${whatsappNumber}?text=Olá,%20preciso%20de%20uma%20orientação%20em%20Direito%20de%20Família.`} 
                 className="bg-brand-gold hover:bg-yellow-600 text-brand-navy px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105">
                Agendar Reunião Sigilosa <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 8. PROVA SOCIAL ADAPTADA (Família) */}
            <div className="flex gap-4 md:gap-8">
              {[
                { val: "100%", lab: "Sigilo" },
                { val: "+300", lab: "Acordos" },
                { val: "10y", lab: "Experiência" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-brand-gold/20 bg-brand-navy/40 backdrop-blur-md group hover:border-brand-gold transition-all duration-500 shadow-xl"
                >
                  <span className="text-brand-gold font-bold text-base md:text-lg">{stat.val}</span>
                  <span className="text-[8px] md:text-[9px] text-brand-light/60 uppercase tracking-tighter text-center px-1 font-bold group-hover:text-brand-light transition-colors">
                    {stat.lab}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent z-30 pointer-events-none" />
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 relative z-20 overflow-hidden">
        
        {/* GRID DE FUNDO SUAVE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          {/* Brilho sutil no centro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-brand-light mb-4">Como podemos <span className="text-brand-gold italic">te ajudar?</span></h2>
            <p className="text-brand-light/60 font-light">Especialistas em direito preventivo e contencioso familiar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }} 
                className="bg-brand-navy/60 backdrop-blur-xl p-8 rounded-3xl border border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-500 group shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="text-brand-light font-bold mb-3 font-heading tracking-wide text-lg">{f.title}</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 10. SEÇÃO DE FAQ (Perguntas Frequentes) --- */}
      <section className="py-32 bg-brand-navy relative z-20 overflow-hidden">
        
        {/* GRID DE FUNDO SUAVE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)]"></div>
          {/* Brilho azul marinho/dourado no fundo do FAQ */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-brand-light mb-4">Dúvidas <span className="text-brand-gold italic">Frequentes</span></h2>
            <p className="text-brand-light/60 font-light">Informação clara para tranquilizar você neste momento.</p>
          </div>
          
          <div className="bg-brand-navy/80 backdrop-blur-2xl rounded-3xl border border-brand-gold/20 p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}