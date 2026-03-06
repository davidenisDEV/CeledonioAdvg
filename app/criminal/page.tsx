"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, Clock, Gavel, ShieldCheck, Zap, Lock } from "lucide-react";
import { siteConfig } from "@/config/site-config";

// IMPORTAÇÕES DOS COMPONENTES
import { Navbar } from "@/components/sections/Navbar"; // 3. Unificação da Navbar
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const criminalFeatures = [
  { 
    icon: <Clock className="w-6 h-6 text-brand-gold" />, 
    title: "Plantão 24h", 
    desc: "Assistência imediata para prisões em flagrante e cumprimento de mandados." 
  },
  { 
    icon: <Gavel className="w-6 h-6 text-brand-gold" />, 
    title: "Tribunal do Júri", 
    desc: "Defesa técnica especializada e combativa em crimes contra a vida." 
  },
  { 
    icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />, 
    title: "Habeas Corpus", 
    desc: "Medidas urgentes e estratégicas para garantir sua liberdade." 
  },
  { 
    icon: <Zap className="w-6 h-6 text-brand-gold" />, 
    title: "Resposta Rápida", 
    desc: "Análise estratégica do inquérito nas primeiras horas críticas." 
  }
];

export default function CriminalFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative overflow-hidden">
      
      {/* 3. Unificação da Navbar */}
      <UrgencyBanner />
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-navy">
        
        {/* Fundo de Malha para manter o padrão Premium */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px]"></div>
        </div>

        {/* 1. IMAGEM HERO COM MÁSCARA ASSIMÉTRICA */}
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[90%] z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // 10. Micro-interação mais rápida
            className="relative w-full h-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[250px] border-l border-b border-red-900/30 shadow-2xl"
          >
            {/* Imagem Temática - algemas.webp */}
            <img 
              src="/img/algemas.webp" 
              alt="Defesa Criminal"
              className="w-full h-full object-cover brightness-[0.35] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/40 to-transparent lg:visible invisible" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 8. ALINHAMENTO À ESQUERDA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }} // 10. Tensão/Agilidade
            className="max-w-2xl pt-10"
          >
            {/* 5. GATILHO DE SIGILO ABSOLUTO */}
            <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-800/50 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(139,0,0,0.3)]">
              <Lock className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                Atendimento com Sigilo Absoluto e Discrição
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-light leading-[1.1] mb-6">
              A sua liberdade exige <br/>
              <span className="text-brand-gold italic">defesa técnica.</span>
            </h1>
            
            <p className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-sans font-light">
              Atuação incisiva em processos penais e acompanhamento em delegacias com foco em resguardar seus direitos imediatamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              {/* 2. REFINAMENTO DA PALETA (Carmesim Profundo) */}
              <a href={`https://wa.me/${whatsappNumber}?text=URGÊNCIA:%20Preciso%20falar%20com%20um%20advogado%20criminalista.`} 
                 className="bg-red-800 hover:bg-red-900 text-brand-light px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(139,0,0,0.4)] hover:scale-105 border border-red-700">
                <ShieldAlert className="w-5 h-5 text-brand-gold" />
                Acionar Plantão 24h
              </a>
            </div>

            {/* 6. PROVA SOCIAL ADAPTADA (Métricas Criminais) */}
            <div className="flex gap-4 md:gap-8">
              {[
                { val: "24/7", lab: "Plantão" },
                { val: "100%", lab: "Sigilo Garantido" },
                { val: "+150", lab: "Alvarás de Soltura" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-red-900/50 bg-brand-navy/60 backdrop-blur-md group hover:border-brand-gold transition-all duration-300 shadow-xl"
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

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-navy to-transparent z-30 pointer-events-none" />
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criminalFeatures.map((f, i) => (
              // 4. CARDS EM GLASSMORPHISM
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }} // Transição ágil
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-red-800/60 hover:bg-white/10 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {f.icon}
                </div>
                <h3 className="text-brand-light font-bold mb-3 font-heading tracking-wide text-lg">{f.title}</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <ContactForm />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}