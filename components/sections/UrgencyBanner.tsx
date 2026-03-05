"use client";

import { AlertCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function UrgencyBanner() {
  const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
  
  return (
    <div className="bg-red-900 text-white py-2 px-4 text-center relative z-[60] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 shadow-md">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <AlertCircle className="w-4 h-4 text-red-300" />
        <span>Urgência Criminal ou Flagrante? Atendimento Plantão 24h.</span>
      </div>
      
      <a 
        href={`https://wa.me/${whatsappNumber}?text=URGÊNCIA:%20Preciso%20de%20um%20advogado%20criminalista%20agora.`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-red-200 hover:text-white transition-colors bg-black/20 px-3 py-1 rounded-sm border border-red-800 hover:border-red-500"
      >
        Falar Agora <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}