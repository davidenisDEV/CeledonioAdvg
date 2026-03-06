"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scale, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { useLanguage } from "@/components/contexts/LanguageContext"; // <-- CAMINHO CORRIGIDO

export function Hero() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
  const { t } = useLanguage(); 

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-navy">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand-gold/15 rounded-full blur-[60px] md:blur-[150px] mix-blend-screen"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand-blue/15 rounded-full blur-[60px] md:blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8 relative">
            <div className="w-20 h-20 border border-brand-gold/30 rounded-full flex items-center justify-center bg-brand-navy/60 backdrop-blur-xl shadow-[0_0_30px_rgba(150,119,64,0.3)]">
              <Scale className="w-10 h-10 text-brand-gold" />
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading text-4xl md:text-6xl text-brand-light leading-tight mb-6">
            {t.hero.title}
            <span className="text-brand-gold italic relative inline-block">
              {t.hero.titleHighlight}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold/40 blur-[2px]"></span>
            </span>.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-2xl font-sans font-light leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de avaliar o meu caso.`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-600 text-brand-navy px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(150,119,64,0.4)] hover:scale-105">
              {t.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consultoria.`} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold hover:bg-white/10 px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-16 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-light/50">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            {t.hero.trust}
          </motion.div>

        </div>
      </div>
    </section>
  );
}