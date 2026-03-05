"use client";

import { MapPin, Phone, Instagram, Scale, Navigation, Mail } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
  
  // Link direto para abrir no app do Google Maps ou Waze no celular
  const mapsDirectLink = "https://maps.google.com/?q=Av.+Rui+Barbosa,+2527,+Joaquim+Távora,+Fortaleza,+CE";

  return (
    <footer className="bg-brand-navy text-brand-light/80 border-t border-brand-gold/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Decoração de Fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-gold/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Identidade e OAB (Ocupa 4 colunas) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-brand-gold" />
              <div className="flex flex-col">
                <span className="font-heading text-2xl leading-none text-brand-light tracking-wide">
                  CELEDONIO
                </span>
                <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase mt-1">
                  Advocacia & Consultoria
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-brand-light/70">
              Atendimento especializado, garantindo a proteção do seu patrimônio e da sua liberdade com ética, sigilo e agilidade.
            </p>

            <div className="p-4 rounded-sm border border-brand-gold/20 bg-brand-light/5 inline-block">
              <p className="text-xs font-bold text-brand-light uppercase tracking-widest mb-1">Responsável Técnica</p>
              <p className="text-sm font-heading text-brand-gold">Dra. Júlia Oliveira Celedônio Castro</p>
              <p className="text-xs mt-1">OAB/CE nº 56.936</p>
            </div>
          </div>

          {/* Coluna 2: Contatos e Redes (Ocupa 4 colunas) */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 font-heading">
              Canais de Atendimento
            </h3>
            
            <ul className="space-y-4">
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-sm bg-brand-light/5 flex items-center justify-center border border-brand-gold/10 group-hover:border-brand-gold/40">
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-sm">{siteConfig.business.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.business.email}`} className="flex items-center gap-3 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-sm bg-brand-light/5 flex items-center justify-center border border-brand-gold/10 group-hover:border-brand-gold/40">
                    <Mail className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-sm">{siteConfig.business.email}</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/juliaceledonio/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-sm bg-brand-light/5 flex items-center justify-center border border-brand-gold/10 group-hover:border-brand-gold/40">
                    <Instagram className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-sm">@juliaceledonio</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização e Mapa (Ocupa 4 colunas) */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6 flex flex-col h-full">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2 font-heading">
              Nossa Localização
            </h3>
            
            <p className="text-sm text-brand-light/70 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              Av. Rui Barbosa, 2527, Joaquim Távora, Fortaleza, CE - CEP 60115-222
            </p>

            <div className="relative w-full h-32 md:h-full min-h-[120px] rounded-sm overflow-hidden border border-brand-gold/20 group">
              <iframe 
                src="https://maps.google.com/maps?q=Av.+Rui+Barbosa,+2527,+Joaquim+Távora,+Fortaleza,+CE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
            
            <a href={mapsDirectLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2 bg-brand-light/5 hover:bg-brand-gold/10 border border-brand-gold/20 rounded-sm text-xs uppercase tracking-widest text-brand-gold transition-colors">
              <Navigation className="w-3 h-3" /> Abrir no GPS
            </a>
          </div>
        </div>

        {/* Disclaimer e Copyright */}
        <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-brand-light/50 max-w-3xl leading-relaxed text-center md:text-left">
            <strong>Aviso Legal:</strong> Este site tem caráter informativo. O contato inicial através de nossos canais é o primeiro passo para entendermos sua situação e analisarmos como podemos proteger seus direitos, não estabelecendo imediatamente ou automaticamente uma relação contratual.
          </p>
          
          <div className="flex flex-col items-center md:items-end gap-1 shrink-0">
            <p className="text-xs text-brand-light/60">
              © {currentYear} Celedonio Advocacia.
            </p>
            <a 
              href="https://github.com/davidenisDEV" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[10px] text-brand-light/30 hover:text-brand-gold transition-colors"
            >
              Developer by David
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}