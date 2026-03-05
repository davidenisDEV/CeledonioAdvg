"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-brand-light/95 backdrop-blur-md border-brand-gold/20 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5 md:py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO DA MARCA */}
        <Link href="/" className="flex items-center gap-3 group">
          <Scale className={cn(
            "w-8 h-8 transition-colors", 
            scrolled ? "text-brand-gold" : "text-brand-navy"
          )} />
          <div className="flex flex-col">
            <span className="font-heading text-2xl leading-none text-brand-navy tracking-wide">
              CELEDONIO
            </span>
            <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">
              Advocacia & Consultoria
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DE AÇÃO (CTA) DESKTOP */}
        <div className="hidden md:flex items-center">
          <a 
            href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-navy hover:bg-brand-gold text-brand-light px-7 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
          >
            Fale com um Advogado
          </a>
        </div>

        {/* CONTROLE MENU MOBILE */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENU MOBILE EXPANDIDO */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light border-b border-brand-gold/20 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-brand-navy border-b border-brand-navy/5 py-4 hover:text-brand-gold transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center mt-4 bg-brand-navy hover:bg-brand-gold text-brand-light px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Fale com um Advogado
            </a>
          </div>
        </div>
      )}
    </header>
  );
}