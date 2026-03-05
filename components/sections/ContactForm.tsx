"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Landmark, Shield, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site-config";

// Schema de Validação
const formSchema = z.object({
  area: z.string().min(1, { message: "Selecione a área do seu caso." }),
  name: z.string().min(2, { message: "Digite seu nome completo." }),
  birthdate: z.string().min(8, { message: "Digite sua data de nascimento." }),
  city: z.string().min(2, { message: "Digite sua cidade." }),
  phone: z.string().min(10, { message: "Digite um telefone válido." }),
  description: z.string().min(10, { message: "Descreva um pouco do seu caso." }),
  lgpd: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos de sigilo para avançar.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [step, setStep] = useState(1);
  
  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: "",
      name: "",
      birthdate: "",
      city: "",
      phone: "",
      description: "",
      lgpd: false
    }
  });

  const selectedArea = watch("area");

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["area"];
    if (step === 2) fieldsToValidate = ["name", "birthdate", "city", "phone"];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  // Envio direto para o WhatsApp formatado
  const onSubmit = (data: FormData) => {
    const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
    
    const message = `*SOLICITAÇÃO DE ANÁLISE DE CASO*%0A%0A`
      + `*Área:* ${data.area}%0A`
      + `*Nome:* ${data.name}%0A`
      + `*Nascimento:* ${data.birthdate}%0A`
      + `*Cidade:* ${data.city}%0A`
      + `*Telefone:* ${data.phone}%0A%0A`
      + `*Resumo da Situação:*%0A${data.description}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy relative overflow-hidden">
      
      {/* Decoração de Fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-light mb-4 font-heading">
            Solicite uma <span className="text-brand-gold italic">Análise do seu Caso</span>
          </h2>
          <p className="text-brand-light/70 font-light">
            Preencha o formulário abaixo de forma segura. Nossa equipe avaliará a situação e entrará em contato.
          </p>
        </div>

        <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-brand-gold/20">
          
          {/* Indicador de Progresso */}
          <div className="bg-brand-light border-b border-brand-gold/10 p-4 flex justify-between items-center relative">
            <div className="absolute bottom-0 left-0 h-1 bg-brand-gold transition-all duration-500 ease-in-out" style={{ width: `${(step / 3) * 100}%` }}></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors ${step >= i ? 'bg-brand-navy text-brand-gold' : 'bg-slate-200 text-slate-400'}`}>
                {i}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              
              {/* PASSO 1: ÁREA DE ATUAÇÃO */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-brand-navy mb-6 font-heading">Qual a natureza do seu problema?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    <button type="button" onClick={() => setValue("area", "Família/Cível")} className={`p-6 rounded-sm border-2 text-left transition-all flex flex-col items-start gap-4 ${selectedArea === "Família/Cível" ? "border-brand-gold bg-brand-gold/5" : "border-slate-100 hover:border-brand-gold/50"}`}>
                      <div className={`p-3 rounded-sm ${selectedArea === "Família/Cível" ? "bg-brand-navy" : "bg-slate-100"}`}>
                        <Landmark className={`w-6 h-6 ${selectedArea === "Família/Cível" ? "text-brand-gold" : "text-slate-500"}`} />
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy font-heading">Família / Cível</div>
                        <div className="text-sm text-brand-slate mt-1">Divórcio, pensão, inventário, indenizações.</div>
                      </div>
                    </button>

                    <button type="button" onClick={() => setValue("area", "Penal/Criminal")} className={`p-6 rounded-sm border-2 text-left transition-all flex flex-col items-start gap-4 ${selectedArea === "Penal/Criminal" ? "border-brand-gold bg-brand-gold/5" : "border-slate-100 hover:border-brand-gold/50"}`}>
                      <div className={`p-3 rounded-sm ${selectedArea === "Penal/Criminal" ? "bg-brand-navy" : "bg-slate-100"}`}>
                        <Shield className={`w-6 h-6 ${selectedArea === "Penal/Criminal" ? "text-brand-gold" : "text-slate-500"}`} />
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy font-heading">Penal / Criminal</div>
                        <div className="text-sm text-brand-slate mt-1">Delegacia, defesa criminal, urgências.</div>
                      </div>
                    </button>

                  </div>
                  {errors.area && <p className="text-red-500 text-sm mt-3">{errors.area.message}</p>}
                </motion.div>
              )}

              {/* PASSO 2: DADOS PESSOAIS */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-brand-navy mb-6 font-heading">Seus Dados Pessoais</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-1">Nome Completo</label>
                      <input {...register("name")} className="w-full p-3 rounded-sm border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="Como devemos chamar você?" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-brand-navy mb-1">Data de Nascimento</label>
                        <input {...register("birthdate")} placeholder="DD/MM/AAAA" className="w-full p-3 rounded-sm border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                        {errors.birthdate && <p className="text-red-500 text-xs mt-1">{errors.birthdate.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-navy mb-1">Telefone / WhatsApp</label>
                        <input {...register("phone")} placeholder="(00) 00000-0000" className="w-full p-3 rounded-sm border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-1">Sua Cidade / Estado</label>
                      <input {...register("city")} className="w-full p-3 rounded-sm border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="Ex: Fortaleza - CE" />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PASSO 3: RESUMO E LGPD */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-brand-navy mb-6 font-heading">Sobre o seu caso</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-1">Descreva brevemente sua situação</label>
                      <textarea {...register("description")} rows={4} className="w-full p-3 rounded-sm border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none" placeholder="Conte-nos de forma resumida o que aconteceu e como podemos ajudar..."></textarea>
                      {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    <div className="flex items-start gap-3 bg-brand-light p-4 rounded-sm border border-brand-gold/20">
                      <input type="checkbox" id="lgpd" {...register("lgpd")} className="mt-1 w-4 h-4 accent-brand-gold" />
                      <label htmlFor="lgpd" className="text-xs text-brand-slate leading-relaxed">
                        Concordo em fornecer meus dados para contato e entendo que serão tratados com <strong>absoluto sigilo</strong>, respeitando as normas da Lei Geral de Proteção de Dados (LGPD) e o Estatuto da OAB.
                      </label>
                    </div>
                    {errors.lgpd && <p className="text-red-500 text-xs">{errors.lgpd.message}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÕES DE NAVEGAÇÃO */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="text-brand-slate hover:text-brand-navy transition-colors flex items-center gap-1 font-bold text-sm uppercase tracking-widest">
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
              ) : <div></div>}
              
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="bg-brand-navy hover:bg-blue-950 text-brand-gold px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                  Próximo <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-lg hover:shadow-brand-gold/20">
                  <MessageCircle className="w-5 h-5" /> Avançar para Atendimento
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}