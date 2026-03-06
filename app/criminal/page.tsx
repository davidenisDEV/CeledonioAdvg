"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, Scale, Clock, Gavel, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";

// IMPORTAÇÕES COM CHAVES {}
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const criminalFeatures = [
  { 
    icon: <Clock className="w-6 h-6 text-red-500" />, 
    title: "Plantão 24h", 
    desc: "Assistência imediata para prisões em flagrante e cumprimento de mandados." 
  },
  { 
    icon: <Gavel className="w-6 h-6 text-red-500" />, 
    title: "Tribunal do Júri", 
    desc: "Defesa técnica especializada em crimes dolosos contra a vida." 
  },
  { 
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />, // ÍCONE CORRIGIDO AQUI
    title: "Habeas Corpus", 
    desc: "Medidas urgentes para garantir o seu direito fundamental de liberdade." 
  },
  { 
    icon: <Zap className="w-6 h-6 text-red-500" />, 
    title: "Resposta Rápida", 
    desc: "Análise estratégica do inquérito policial nas primeiras horas." 
  }
];

export default function CriminalFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative">
      <UrgencyBanner />
      
      <header className="w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10 py-5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-brand-gold" />
            <div className="flex flex-col">
              <span className="font-heading text-xl leading-none text-brand-light tracking-wide">CELEDONIO</span>
              <span className="font-sans text-[8px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">Defesa Criminal</span>
            </div>
          </Link>
          <a href={`https://wa.me/${whatsappNumber}?text=URGÊNCIA:%20Preciso%20falar%20com%20um%20advogado%20criminalista.`} target="_blank" rel="noreferrer" className="bg-red-800 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-red-900/50">
            Plantão 24h
          </a>
        </div>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/10 rounded-full blur-[60px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 w-20 h-20 bg-red-900/20 backdrop-blur-xl border border-red-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            <ShieldAlert className="w-10 h-10 text-red-500" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-brand-light mb-6 leading-tight">
            A sua liberdade exige <span className="text-brand-gold italic">defesa técnica</span> imediata.
          </motion.h1>
          <p className="text-brand-light/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Atuação estratégica em processos penais e acompanhamento especializado em delegacias com foco em resguardar seus direitos constitucionais.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(150,119,64,0.4)]">
            Solicitar Defesa Agora <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-black/20 backdrop-blur-sm border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criminalFeatures.map((f, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all group backdrop-blur-md">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-brand-light font-bold mb-2 font-heading tracking-wide">{f.title}</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
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