"use client";

import { motion } from "framer-motion";
import { Building, Key, ShieldCheck, FileSignature, Landmark, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

import { Navbar } from "@/components/sections/Navbar";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const realEstateFeatures = [
  { 
    icon: <Building className="w-6 h-6 text-brand-gold" />, 
    title: "Due Diligence Imobiliária", 
    desc: "Análise prévia rigorosa de riscos para compra, venda ou leilões de imóveis." 
  },
  { 
    icon: <FileSignature className="w-6 h-6 text-brand-gold" />, 
    title: "Contratos Complexos", 
    desc: "Elaboração e revisão de contratos de locação, permuta e compra e venda." 
  },
  { 
    icon: <Landmark className="w-6 h-6 text-brand-gold" />, 
    title: "Regularização de Imóveis", 
    desc: "Ações de usucapião, adjudicação compulsória e retificação de área." 
  },
  { 
    icon: <Key className="w-6 h-6 text-brand-gold" />, 
    title: "Blindagem Patrimonial", 
    desc: "Estruturação de holdings familiares e planejamento sucessório." 
  }
];

export default function RealEstateFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative overflow-hidden">
      
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-navy">
        
        {/* Fundo de Malha - Substituindo o vermelho pelo dourado suave/neutro */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[90%] z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[250px] border-l border-b border-brand-gold/20 shadow-2xl"
          >
            {/* Sugestão: Imagem de arquitetura de alto padrão ou chaves */}
            <img 
              src="/img/imobiliario.webp" 
              alt="Direito Imobiliário e Patrimonial"
              className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent lg:visible invisible" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 z-20 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl pt-10"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                Segurança Jurídica para seus Negócios
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-light leading-[1.1] mb-6">
              Proteja seu patrimônio <br/>
              com <span className="text-brand-gold italic">inteligência.</span>
            </h1>
            
            <p className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-sans font-light">
              Do planejamento de investimentos à regularização de propriedades, garantimos que suas transações imobiliárias ocorram sem riscos ocultos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              {/* Botão focado em consultoria e não em plantão */}
              <a href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20imobiliária.`} 
                 className="bg-brand-gold hover:bg-brand-gold/80 text-brand-navy px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105">
                <Building className="w-5 h-5" />
                Agendar Consultoria
              </a>
            </div>

            <div className="flex gap-4 md:gap-8">
              {[
                { val: "100%", lab: "Análise de Risco" },
                { val: "+500", lab: "Contratos Revisados" },
                { val: "ROI", lab: "Proteção de Capital" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-brand-gold/30 bg-brand-navy/60 backdrop-blur-md group hover:border-brand-gold transition-all duration-300 shadow-xl"
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
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realEstateFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-brand-gold/60 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
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