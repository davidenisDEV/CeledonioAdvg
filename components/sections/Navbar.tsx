"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale, Globe } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estilo base para os links para manter o DRY (Don't Repeat Yourself)
  const navLinkClasses = "text-xs font-bold text-brand-light hover:text-brand-gold transition-colors uppercase tracking-widest";
  const mobileLinkClasses = "text-sm font-bold text-brand-light border-b border-white/10 pb-4 hover:text-brand-gold transition-colors uppercase tracking-widest";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        scrolled 
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <Scale className="w-8 h-8 text-brand-gold transition-transform group-hover:scale-110 duration-300" />
          <div className="flex flex-col">
            <span className="font-heading text-2xl leading-none text-brand-light tracking-wide">
              CELEDONIO
            </span>
            <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">
              Advocacia & Consultoria
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
            <Link href="/criminal" className={navLinkClasses}>
              Criminal
            </Link>
            <Link href="/familia" className={navLinkClasses}>
              Família
            </Link>
            {/* Mantemos as âncoras apontando para a raiz "/" antes da hashtag */}
            <Link href="/#atuacao" className={navLinkClasses}>
              {t.navbar.services}
            </Link>
            <Link href="/#sobre" className={navLinkClasses}>
              {t.navbar.about}
            </Link>
          </nav>

          {/* ÁREA DE AÇÕES (Idioma e WhatsApp) */}
          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold text-brand-light hover:text-brand-gold transition-colors tracking-widest"
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              {language}
            </button>

            <a 
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              {t.navbar.cta}
            </a>
          </div>
        </div>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <button
          className="md:hidden p-2 text-brand-light hover:text-brand-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* NAVEGAÇÃO MOBILE */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b102d]/98 backdrop-blur-3xl border-b border-brand-gold/20 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              Home
            </Link>
            <Link href="/criminal" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              Direito Criminal
            </Link>
            <Link href="/familia" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              Direito de Família
            </Link>
            <Link href="/#atuacao" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              {t.navbar.services}
            </Link>
            <Link href="/#sobre" onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              {t.navbar.about}
            </Link>
            
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="flex items-center justify-center gap-2 w-full py-4 mt-2 text-sm font-bold text-brand-light border border-white/10 rounded-xl hover:bg-white/5 transition-colors tracking-widest"
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              ALTERAR IDIOMA ({language})
            </button>

            <a 
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-gold hover:bg-yellow-500 text-brand-navy px-6 py-4 mt-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
            >
              {t.navbar.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}