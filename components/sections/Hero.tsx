"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scale, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Hero() {
  // Limpando o número do WhatsApp para o link
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-navy">
      
      {/* 🌟 EFEITOS DE FUNDO (Elegantes e Sutis) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 border border-brand-gold/30 rounded-full flex items-center justify-center bg-brand-navy shadow-[0_0_30px_rgba(150,119,64,0.15)]">
              <Scale className="w-10 h-10 text-brand-gold" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl text-brand-light leading-tight mb-6"
          >
            A transição segura para um futuro melhor na <span className="text-brand-gold italic">defesa dos seus direitos</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-2xl font-sans font-light leading-relaxed"
          >
            Atendimento especializado para pessoas físicas, garantindo a proteção do seu patrimônio e da sua liberdade com ética e agilidade.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Botão Principal */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de avaliar o meu caso com a Celedonio Advocacia.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-600 text-brand-navy px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-gold/20"
            >
              Avaliar meu Caso <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* Botão Secundário */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consultoria com a equipe.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-transparent border-2 border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 px-8 py-3.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              Agendar Consultoria
            </a>
          </motion.div>

          {/* Destaque de Confiança */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-slate"
          >
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            Sigilo e discrição absolutos garantidos
          </motion.div>

        </div>
      </div>
    </section>
  );
}