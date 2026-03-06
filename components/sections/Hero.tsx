"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function Hero() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
  const { t } = useLanguage(); 

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-navy">
      
      {/* --- EFEITO DE MALHA (GRID) PARA UNIFORMIDADE --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Malha Quadriculada */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Brilho Dourado de Fundo para Profundidade */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
      </div>

      {/* 1. IMAGEM HERO COM MÁSCARA ASSIMÉTRICA */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[90%] z-10">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[250px] border-l border-b border-brand-gold/20 shadow-2xl"
        >
          <img 
            src="/img/imagemhero.webp" 
            alt="Escritório Celedonio"
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
          />
          {/* Gradients de Integração */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/20 to-transparent lg:visible invisible" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* 2. CONTEÚDO TEXTUAL */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-4 py-2 rounded-full mb-8">
            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">Excelência & Resultados</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-light leading-[1.1] mb-6">
            {t.hero.title} <br/>
            <span className="text-brand-gold italic">Celedonio.</span>
          </h1>
          
          <p className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-sans font-light">
            Atendimento especializado para proteger seu patrimônio e sua liberdade com a estratégia que seu caso exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href={`https://wa.me/${whatsappNumber}`} className="bg-brand-gold hover:bg-yellow-600 text-brand-navy px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(150,119,64,0.3)] hover:scale-105">
              Avaliar meu caso <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3. PROVA SOCIAL (CÍRCULOS) */}
          <div className="flex gap-4 md:gap-8">
            {[
              { val: "+200", lab: "Casos" },
              { val: "95%", lab: "Sucesso" },
              { val: "10y", lab: "Experiência" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-brand-gold/20 bg-brand-navy/40 backdrop-blur-md group hover:border-brand-gold transition-all duration-500 shadow-xl"
              >
                <span className="text-brand-gold font-bold text-base md:text-lg">{stat.val}</span>
                <span className="text-[8px] md:text-[9px] text-brand-light/50 uppercase tracking-tighter text-center px-1 font-bold group-hover:text-brand-light transition-colors">
                  {stat.lab}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Transição Suave para a Seção de Baixo */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-navy to-transparent z-30 pointer-events-none" />
    </section>
  );
}