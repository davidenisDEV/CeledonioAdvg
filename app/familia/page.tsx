"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Scale, Heart, ShieldCheck, Landmark, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";

// IMPORTAÇÕES CORRETAS (Com chaves {})
import { DocumentChecklist } from "@/components/sections/DocumentChecklist";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const familyServices = [
  { title: "Divórcio Estratégico", desc: "Consensual ou litigioso, priorizando a partilha justa de bens e o equilíbrio emocional.", icon: <Heart className="text-brand-gold" /> },
  { title: "Pensão e Guarda", desc: "Garantia do bem-estar dos filhos com cálculos precisos de possibilidade e necessidade.", icon: <ShieldCheck className="text-brand-gold" /> },
  { title: "Inventários", desc: "Regularização de heranças com agilidade para evitar a desvalorização do patrimônio familiar.", icon: <Landmark className="text-brand-gold" /> },
  { title: "Planejamento Sucessório", desc: "Organização em vida para garantir a segurança das próximas gerações.", icon: <Briefcase className="text-brand-gold" /> }
];

export default function FamiliaFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative">
      
      {/* Header Simplificado */}
      <header className="w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10 py-5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-brand-gold" />
            <div className="flex flex-col">
              <span className="font-heading text-xl leading-none text-brand-light tracking-wide">CELEDONIO</span>
              <span className="font-sans text-[8px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">Direito de Família</span>
            </div>
          </Link>
          <a href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um atendimento na área de Família.`} target="_blank" rel="noreferrer" className="bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy text-brand-gold px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* Hero Família */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 w-20 h-20 bg-brand-gold/20 backdrop-blur-xl border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto">
            <Users className="w-10 h-10 text-brand-gold" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-brand-light mb-6 leading-tight">
            Proteção Patrimonial e <span className="text-brand-gold italic">Acolhimento Familiar</span>.
          </motion.h1>
          <p className="text-brand-light/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Resolvemos conflitos familiares com sensibilidade e rigor técnico, garantindo que o seu futuro e o dos seus filhos estejam seguros.
          </p>
        </div>
      </section>

      {/* Cards de Atuação Especializada */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {familyServices.map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-brand-gold/50 transition-all group">
                <div className="mb-4 p-3 bg-brand-navy border border-brand-gold/20 rounded-xl inline-block group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold text-brand-light mb-3">{s.title}</h3>
                <p className="text-brand-light/60 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DocumentChecklist />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}