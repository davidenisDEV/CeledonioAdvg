"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckCircle2, Users, Landmark, ShieldAlert } from "lucide-react";

const checklists = [
  {
    id: "familia",
    title: "Divórcio / Pensão",
    icon: <Users className="w-5 h-5" />,
    description: "Documentos essenciais para iniciar processos de Direito de Família de forma ágil.",
    items: [
      "Documento de Identificação (RG e CPF) de ambas as partes",
      "Certidão de Casamento (atualizada nos últimos 90 dias)",
      "Certidão de Nascimento dos filhos (se houver)",
      "Comprovante de Residência recente (água, luz ou telefone)",
      "Relação de bens adquiridos (matrículas de imóveis, CRLV de veículos)",
      "Comprovantes de renda (para cálculo de pensão alimentícia)",
      "Declaração de Imposto de Renda do último ano"
    ]
  },
  {
    id: "inventario",
    title: "Inventário / Herança",
    icon: <Landmark className="w-5 h-5" />,
    description: "Organize a documentação básica para proteger o patrimônio e evitar multas.",
    items: [
      "Certidão de Óbito do familiar",
      "Documentos pessoais do falecido (RG, CPF, Certidão de Casamento)",
      "Documentos de identificação de todos os herdeiros",
      "Testamento (se houver deixado)",
      "Matrículas atualizadas dos imóveis (emitidas há menos de 30 dias)",
      "Extratos bancários e documentos de veículos",
      "Certidões Negativas de Débitos Fiscais (Municipal, Estadual, Federal)"
    ]
  },
  {
    id: "criminal",
    title: "Defesa Criminal",
    icon: <ShieldAlert className="w-5 h-5" />,
    description: "Em casos criminais, a rapidez na documentação é vital para a sua liberdade.",
    items: [
      "Documento de Identificação Pessoal com foto",
      "Cópia do Boletim de Ocorrência (se já existir)",
      "Notificação ou Intimação Policial (se recebida)",
      "Lista de possíveis testemunhas (nomes completos e contatos)",
      "Comprovante de residência fixa",
      "Comprovante de ocupação lícita (carteira de trabalho, contracheque)",
      "Mídias ou provas de defesa preliminares (áudios, vídeos, prints)"
    ]
  }
];

export function DocumentChecklist() {
  const [activeTab, setActiveTab] = useState(checklists[0].id);

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
      
      {/* Estilização da Scrollbar Customizada (Glassmorphism) */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
      `}} />

      {/* GRID E BOLHAS DE FUNDO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-gold/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-brand-light mb-4 font-heading leading-tight"
          >
            Checklist de <span className="text-brand-gold italic">Documentos Básicos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/70 font-light"
          >
            Saiba exatamente o que precisa separar para acelerarmos a análise do seu caso.
          </motion.p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row">
          
          {/* Menu Lateral (Tabs) */}
          <div className="w-full md:w-1/3 bg-brand-navy/50 border-b md:border-b-0 md:border-r border-white/10 p-4 md:p-6 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible custom-scroll">
            {checklists.map((list) => (
              <button
                key={list.id}
                onClick={() => setActiveTab(list.id)}
                className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap md:whitespace-normal shrink-0 ${
                  activeTab === list.id 
                    ? "bg-brand-gold text-brand-navy shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.02]" 
                    : "text-brand-light/70 hover:bg-white/5 hover:text-brand-gold"
                }`}
              >
                {list.icon}
                {list.title}
              </button>
            ))}
          </div>

          {/* Área de Conteúdo (Checklist Scrollável) */}
          {/* Adicionamos h-[450px] e md:h-[500px] para forçar o limite e permitir o scroll interno */}
          <div className="w-full md:w-2/3 relative h-[450px] md:h-[500px] bg-[#0b102d]/40">
            <AnimatePresence mode="wait">
              {checklists.map((list) => (
                list.id === activeTab && (
                  <motion.div
                    key={list.id}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    // O overflow-y-auto e a classe custom-scroll fazem a mágica aqui!
                    className="absolute inset-0 p-6 md:p-10 overflow-y-auto custom-scroll"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-inner shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-brand-light leading-tight">{list.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-brand-light/70 text-sm mb-8 leading-relaxed">
                      {list.description}
                    </p>

                    <ul className="space-y-3 pb-6">
                      {list.items.map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (index * 0.05) }}
                          className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-gold/30 hover:bg-white/10 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]" />
                          <span className="text-sm text-brand-light/80 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}