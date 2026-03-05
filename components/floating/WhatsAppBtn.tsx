"use client";

import { useState } from "react";
import { X, Bot, Send, Scale } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

// Ícone Clássico do WhatsApp em SVG (Vetor exato)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function WhatsAppBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleServiceSelect = (selectedService: string) => {
    setService(selectedService);
    setStep(1);
  };

  const handleUrgencySelect = (selectedUrgency: string) => {
    setUrgency(selectedUrgency);
    setStep(2);
  };

  const handleSendToWhatsApp = () => {
    const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
    const message = `Olá, Dra. Júlia! Passei pela triagem do site.%0A%0A*Área:* ${service}%0A*Urgência:* ${urgency}%0A%0AGostaria de conversar sobre o meu caso.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setTimeout(() => { setStep(0); setService(""); setUrgency(""); }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Janela do Chatbot (Triagem) */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-96 bg-brand-light rounded-sm shadow-2xl border border-brand-gold/20 overflow-hidden animate-in slide-in-from-bottom-5">
          
          {/* Header do Chat */}
          <div className="bg-brand-navy p-4 flex items-center justify-between text-brand-light border-b border-brand-gold/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-bold font-heading text-lg leading-none text-brand-light">Atendimento Virtual</p>
                <p className="text-[10px] text-brand-light/70 uppercase tracking-widest mt-1">Celedonio Advocacia</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-light/70 hover:text-brand-gold transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Área de Mensagens */}
          <div className="p-4 h-[350px] overflow-y-auto bg-white flex flex-col gap-4">
            
            {/* Mensagem 1 do Bot */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-sm border border-brand-gold/20">
                <Bot className="w-4 h-4 text-brand-gold" />
              </div>
              <div className="bg-brand-light p-3 rounded-sm rounded-tl-none border border-brand-gold/10 text-sm text-brand-navy shadow-sm">
                Olá! Sou a assistente virtual da Dra. Júlia. Para agilizarmos seu atendimento, qual é a área do seu caso?
              </div>
            </div>

            {/* Opções Passo 0 */}
            {step === 0 && (
              <div className="flex flex-col gap-2 pl-10">
                {["Direito Penal (Urgência/Delegacia)", "Direito de Família (Divórcio/Pensão)", "Direito Cível (Indenizações/Outros)"].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => handleServiceSelect(opt)}
                    className="text-left text-sm p-3 rounded-sm border border-brand-gold/40 text-brand-navy hover:bg-brand-navy hover:text-brand-gold transition-colors font-medium shadow-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Resposta do Usuário 1 */}
            {step >= 1 && (
              <div className="flex gap-2 justify-end animate-in fade-in">
                <div className="bg-brand-navy p-3 rounded-sm rounded-tr-none text-sm text-brand-light shadow-sm">
                  {service}
                </div>
              </div>
            )}

            {/* Mensagem 2 do Bot */}
            {step >= 1 && (
              <div className="flex gap-2 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-sm border border-brand-gold/20">
                  <Bot className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="bg-brand-light p-3 rounded-sm rounded-tl-none border border-brand-gold/10 text-sm text-brand-navy shadow-sm">
                  Entendi. Qual é o seu nível de urgência para essa situação?
                </div>
              </div>
            )}

            {/* Opções Passo 1 */}
            {step === 1 && (
              <div className="flex flex-col gap-2 pl-10">
                {["Urgente (Para agora!)", "Para os próximos dias", "Apenas tirando dúvidas"].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => handleUrgencySelect(opt)}
                    className="text-left text-sm p-3 rounded-sm border border-brand-gold/40 text-brand-navy hover:bg-brand-navy hover:text-brand-gold transition-colors font-medium shadow-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Resposta do Usuário 2 */}
            {step >= 2 && (
              <div className="flex gap-2 justify-end animate-in fade-in">
                <div className="bg-brand-navy p-3 rounded-sm rounded-tr-none text-sm text-brand-light shadow-sm">
                  {urgency}
                </div>
              </div>
            )}

            {/* Mensagem 3 do Bot (Final) */}
            {step >= 2 && (
              <div className="flex gap-2 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-sm border border-brand-gold/20">
                  <Bot className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="bg-brand-light p-3 rounded-sm rounded-tl-none border border-brand-gold/10 text-sm text-brand-navy shadow-sm">
                  Perfeito. Vou transferir esse resumo direto para o WhatsApp da Dra. Júlia para iniciarmos o seu atendimento agora mesmo.
                </div>
              </div>
            )}
          </div>

          {/* Footer (Botão de Enviar Final) */}
          <div className="p-4 bg-brand-light border-t border-brand-gold/20">
            {step === 2 ? (
              <button 
                onClick={handleSendToWhatsApp}
                className="w-full flex justify-center items-center gap-3 bg-brand-gold hover:bg-yellow-600 text-brand-navy p-4 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg shadow-brand-gold/20"
              >
                Falar com a Dra. Júlia <Send className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-center text-xs text-brand-slate uppercase tracking-widest font-bold">
                Selecione uma opção para continuar
              </div>
            )}
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal (Trigger) com a Logo Clássica do WhatsApp e Cores da Marca */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2",
          isOpen 
            ? "bg-brand-light text-brand-navy border-brand-navy" 
            : "bg-brand-navy text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-navy"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
        
        {/* Ping de Notificação Elegante */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-navy border-2 border-brand-gold"></span>
          </span>
        )}
      </button>
    </div>
  );
}