"use client";

import { useState, useEffect } from "react";
import { Accessibility, Type, Contrast, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // 100% é o tamanho padrão
  const [highContrast, setHighContrast] = useState(false);

  // Efeito para aplicar o aumento de fonte na raiz (HTML) do documento
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Efeito para aplicar o alto contraste através de filtros CSS
  useEffect(() => {
    if (highContrast) {
      document.documentElement.style.filter = "contrast(125%) saturate(120%)";
    } else {
      document.documentElement.style.filter = "none";
    }
  }, [highContrast]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 10, 130)); // Limite máximo de 130%
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 10, 90));  // Limite mínimo de 90%
  const resetFont = () => setFontSize(100);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      
      {/* Janela de Opções */}
      {isOpen && (
        <div className="mb-4 w-64 bg-brand-navy/95 backdrop-blur-2xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-brand-gold/30 overflow-hidden animate-in slide-in-from-bottom-5">
          
          <div className="bg-brand-navy p-3 flex items-center justify-between text-brand-light border-b border-brand-gold/20">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-gold">Acessibilidade</span>
            <button onClick={() => setIsOpen(false)} className="text-brand-light/60 hover:text-brand-gold transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 flex flex-col gap-4">
            {/* Controlo de Tamanho do Texto */}
            <div>
              <p className="text-xs text-brand-light/70 mb-2 flex items-center gap-2">
                <Type className="w-3 h-3 text-brand-gold" /> Tamanho do Texto
              </p>
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-1">
                <button onClick={decreaseFont} className="w-8 h-8 flex items-center justify-center text-brand-light hover:text-brand-gold hover:bg-white/10 rounded-md transition-colors font-bold">A-</button>
                <span className="text-xs text-brand-gold font-mono">{fontSize}%</span>
                <button onClick={increaseFont} className="w-8 h-8 flex items-center justify-center text-brand-light hover:text-brand-gold hover:bg-white/10 rounded-md transition-colors font-bold">A+</button>
              </div>
              {fontSize !== 100 && (
                <button onClick={resetFont} className="w-full mt-2 text-[10px] text-brand-light/50 hover:text-brand-gold underline decoration-dotted transition-colors text-center">
                  Repor padrão
                </button>
              )}
            </div>

            {/* Controlo de Alto Contraste */}
            <div className="border-t border-white/10 pt-4">
              <button 
                onClick={() => setHighContrast(!highContrast)}
                className={cn(
                  "w-full flex items-center justify-center gap-2 p-3 rounded-lg text-sm font-bold transition-colors border",
                  highContrast 
                    ? "bg-brand-gold text-brand-navy border-brand-gold" 
                    : "bg-white/5 text-brand-light border-white/10 hover:border-brand-gold/50"
                )}
              >
                <Contrast className="w-4 h-4" /> 
                {highContrast ? "Alto Contraste: ON" : "Alto Contraste: OFF"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botão Principal Flutuante (Discreto) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border",
          isOpen 
            ? "bg-brand-gold text-brand-navy border-brand-gold" 
            : "bg-brand-navy/80 backdrop-blur-md text-brand-gold border-brand-gold/30 hover:border-brand-gold hover:bg-brand-navy"
        )}
        title="Opções de Acessibilidade"
      >
        <Accessibility className="w-6 h-6" />
      </button>
    </div>
  );
}