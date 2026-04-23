"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Scale, Users, CheckCircle, ShieldCheck, PieChart } from "lucide-react";
import { siteConfig } from "@/config/site-config";

// IMPORTAÇÕES DOS COMPONENTES REUTILIZÁVEIS
import { Navbar } from "@/components/sections/Navbar";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

const corporateFeatures = [
  { 
    icon: <Briefcase className="w-6 h-6 text-brand-gold" />, 
    title: "Governança Corporativa", 
    desc: "Estruturação legal para empresas em crescimento, startups e sucessão familiar." 
  },
  { 
    icon: <CheckCircle className="w-6 h-6 text-brand-gold" />, 
    title: "Compliance & LGPD", 
    desc: "Adequação de processos internos à legislação vigente, mitigando riscos de multas." 
  },
  { 
    icon: <TrendingUp className="w-6 h-6 text-brand-gold" />, 
    title: "Contratos B2B/B2C", 
    desc: "Segurança jurídica nas relações com fornecedores, parceiros e clientes finais." 
  },
  { 
    icon: <Users className="w-6 h-6 text-brand-gold" />, 
    title: "Prevenção Trabalhista", 
    desc: "Assessoria focada na redução de litígios através de auditoria e consultoria de RH." 
  }
];

export default function CorporateFunnel() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');

  return (
    <main className="min-h-screen bg-brand-navy transition-colors duration-300 font-sans relative overflow-hidden">
      
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-navy">
        
        {/* Malha de Fundo Corporativa */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[120px]"></div>
        </div>

        {/* IMAGEM HERO - Foco em ambiente corporativo/business */}
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[90%] z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[250px] border-l border-b border-brand-gold/10 shadow-2xl"
          >
            <img 
              src="/img/b2b.webp" 
              alt="Assessoria Jurídica Empresarial"
              className="w-full h-full object-cover brightness-[0.3] contrast-[1.1]"
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
                Parceria Estratégica e Blindagem Jurídica
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-light leading-[1.1] mb-6">
              O alicerce jurídico para a <br/>
              <span className="text-brand-gold italic">sua expansão.</span>
            </h1>
            
            <p className="text-brand-light/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-sans font-light">
              Mitigação de riscos e inteligência contratual para empresas que buscam escalar com segurança patrimonial e conformidade legal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20assessoria%20jurídica%20empresarial.`} 
                 className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105">
                <Briefcase className="w-5 h-5" />
                Falar com Especialista B2B
              </a>
            </div>

            {/* MÉTRICAS DE NEGÓCIOS */}
            <div className="flex gap-4 md:gap-8">
              {[
                { val: "Full", lab: "Service B2B" },
                { val: "-40%", lab: "Passivo Médio" },
                { val: "100%", lab: "Compliance" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/10 bg-brand-navy/60 backdrop-blur-md group hover:border-brand-gold transition-all duration-300 shadow-xl"
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
      <section className="py-24 relative z-20 bg-brand-navy">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-brand-gold/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
                  {f.icon}
                </div>
                <h3 className="text-brand-light font-bold mb-3 font-heading tracking-wide text-lg">{f.title}</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seções de suporte e fechamento */}
      <ProcessTimeline />
      <ContactForm />
      <Footer />
      <WhatsAppBtn />
    </main>
  );
}