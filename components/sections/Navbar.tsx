"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale, Globe, ChevronDown } from "lucide-react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinkClasses = "text-xs font-bold text-brand-light hover:text-brand-gold transition-colors uppercase tracking-widest";
  const mobileLinkClasses = "text-sm font-bold text-brand-light border-b border-white/10 pb-4 hover:text-brand-gold transition-colors uppercase tracking-widest block";
  const subMenuMobileClasses = "text-xs font-bold text-brand-light/70 hover:text-brand-gold transition-colors uppercase tracking-widest block py-2 pl-4 border-l border-brand-gold/30";

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      (scrolled || isOpen) 
        ? "bg-brand-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
        : "bg-transparent border-transparent py-8"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group z-50" onClick={() => setIsOpen(false)}>
          <Scale className="w-8 h-8 text-brand-gold transition-transform group-hover:scale-110 duration-300" />
          <div className="flex flex-col">
            <span className="font-heading text-2xl leading-none text-brand-light tracking-wide">CELEDONIO</span>
            <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">Advocacia & Consultoria</span>
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {siteConfig.navigation.main.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClasses}>
                {item.label}
              </Link>
            ))}

            <div className="relative group py-4">
              <button className={cn(navLinkClasses, "flex items-center gap-1 cursor-pointer")}>
                Áreas de Atuação <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 mt-0 w-64 bg-brand-navy border border-brand-gold/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-xl">
                {siteConfig.navigation.practiceAreas.map((area) => (
                  <Link 
                    key={area.href} 
                    href={area.href} 
                    className="px-5 py-4 text-[10px] font-bold text-brand-light hover:bg-brand-gold hover:text-brand-navy transition-colors uppercase tracking-widest border-b border-white/5 last:border-0"
                  >
                    <span className="block">{area.label}</span>
                    {area.description && <span className="text-[8px] opacity-60 font-normal lowercase tracking-normal mt-1 block group-hover:text-brand-navy">{area.description}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-xs font-bold text-brand-light hover:text-brand-gold transition-colors tracking-widest">
              <Globe className="w-4 h-4 text-brand-gold" />
              {language}
            </button>
            <a href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg">
              {t.navbar.cta}
            </a>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button className="md:hidden p-2 text-brand-light z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7 text-brand-gold" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* NAVEGAÇÃO MOBILE (CORRIGIDA) */}
      <div className={cn(
        // CORREÇÃO: Utilizando bg-brand-navy sólido e ajustando a altura para preencher a tela
        "md:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-brand-gold/20 shadow-2xl transition-all duration-300 overflow-y-auto",
        isOpen ? "h-[calc(100dvh-70px)] opacity-100 visible" : "h-0 opacity-0 invisible"
      )}>
        <div className="p-6 flex flex-col gap-4 pb-24">
          {siteConfig.navigation.main.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={mobileLinkClasses}>
              {item.label}
            </Link>
          ))}

          <div className="border-b border-white/10 pb-4">
            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3 block">Áreas de Atuação</span>
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.practiceAreas.map((area) => (
                <Link key={area.href} href={area.href} onClick={() => setIsOpen(false)} className={subMenuMobileClasses}>
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
          
          <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="w-full py-4 text-sm font-bold text-brand-light border border-white/10 rounded-xl flex items-center justify-center gap-2 mt-2">
            <Globe className="w-4 h-4 text-brand-gold" /> IDIOMA ({language})
          </button>

          <a href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="w-full text-center bg-brand-gold text-brand-navy py-4 rounded-xl text-xs font-bold uppercase tracking-widest mb-8">
            {t.navbar.cta}
          </a>
        </div>
      </div>
    </header>
  );
}