"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Landmark, Shield, MessageCircle, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import emailjs from '@emailjs/browser';

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
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const formY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const formRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  const { register, trigger, watch, setValue, getValues, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: "", name: "", birthdate: "", city: "", phone: "", description: "", lgpd: false
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

  // Ação 1: Enviar para o WhatsApp
  const handleWhatsApp = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    const data = getValues();
    const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
    const message = `*SOLICITAÇÃO DE ANÁLISE DE CASO*%0A%0A*Área:* ${data.area}%0A*Nome:* ${data.name}%0A*Nascimento:* ${data.birthdate}%0A*Cidade:* ${data.city}%0A*Telefone:* ${data.phone}%0A%0A*Resumo da Situação:*%0A${data.description}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  // Ação 2: Enviar por E-mail (EmailJS)
  const handleEmail = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    setIsSending(true);
    const data = getValues();

    try {
      // ATENÇÃO: Substitua as chaves abaixo pelas suas chaves do EmailJS (https://www.emailjs.com/)
      // await emailjs.send(
      //   'SEU_SERVICE_ID', 
      //   'SEU_TEMPLATE_ID', 
      //   {
      //     area: data.area,
      //     name: data.name,
      //     phone: data.phone,
      //     city: data.city,
      //     description: data.description,
      //     to_email: siteConfig.business.email
      //   }, 
      //   'SUA_PUBLIC_KEY'
      // );
      
      // Simulador de tempo de envio para teste visual
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStep(4); // Vai para a tela de Sucesso
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Houve um erro ao enviar o e-mail. Por favor, tente o WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-brand-navy relative overflow-hidden" style={{ perspective: "1500px" }}>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-light mb-4 font-heading leading-tight">
            Solicite uma <span className="text-brand-gold italic">Análise do seu Caso</span>
          </h2>
          <p className="text-brand-light/70 font-light text-lg">
            Preencha o formulário abaixo de forma segura. Nossa equipe avaliará a situação e entrará em contato.
          </p>
        </div>

        <motion.div style={{ y: formY, rotateX: formRotateX, opacity: formOpacity }} className="bg-white/5 backdrop-blur-3xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10 relative">
          
          {step < 4 && (
            <div className="bg-white/5 border-b border-white/10 p-5 flex justify-between items-center relative z-10">
              <div className="absolute bottom-0 left-0 h-1 bg-brand-gold transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.8)]" style={{ width: `${(step / 3) * 100}%` }}></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${step >= i ? 'bg-brand-gold text-brand-navy shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-110' : 'bg-white/5 border border-white/10 text-brand-light/30'}`}>
                  {i}
                </div>
              ))}
            </div>
          )}

          <div className="p-8 md:p-14 relative z-10">
            <AnimatePresence mode="wait">
              
              {/* PASSO 1 e 2 MANTIDOS EXATAMENTE IGUAIS... */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold text-brand-light mb-8 font-heading">Qual a natureza do seu problema?</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <button type="button" onClick={() => setValue("area", "Família/Cível")} className={`p-8 rounded-2xl border transition-all flex flex-col items-start gap-5 ${selectedArea === "Família/Cível" ? "border-brand-gold bg-brand-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.02]" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-gold/40"}`}>
                      <div className={`p-4 rounded-xl ${selectedArea === "Família/Cível" ? "bg-brand-gold text-brand-navy shadow-lg" : "bg-white/10 text-brand-gold"}`}>
                        <Landmark className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="font-bold text-brand-light text-lg font-heading">Família / Cível</div>
                        <div className="text-sm text-brand-light/70 mt-2 leading-relaxed">Divórcio, pensão, inventário, indenizações.</div>
                      </div>
                    </button>

                    <button type="button" onClick={() => setValue("area", "Penal/Criminal")} className={`p-8 rounded-2xl border transition-all flex flex-col items-start gap-5 ${selectedArea === "Penal/Criminal" ? "border-brand-gold bg-brand-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.02]" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-gold/40"}`}>
                      <div className={`p-4 rounded-xl ${selectedArea === "Penal/Criminal" ? "bg-brand-gold text-brand-navy shadow-lg" : "bg-white/10 text-brand-gold"}`}>
                        <Shield className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="font-bold text-brand-light text-lg font-heading">Penal / Criminal</div>
                        <div className="text-sm text-brand-light/70 mt-2 leading-relaxed">Delegacia, defesa criminal, urgências.</div>
                      </div>
                    </button>
                  </div>
                  {errors.area && <p className="text-red-400 text-sm mt-4 font-medium">{errors.area.message}</p>}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold text-brand-light mb-8 font-heading">Seus Dados Pessoais</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-gold mb-2 uppercase tracking-widest">Nome Completo</label>
                      <input {...register("name")} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-brand-light focus:border-brand-gold focus:bg-white/10 outline-none transition-all placeholder:text-brand-light/20 text-lg" placeholder="Como devemos chamar você?" />
                      {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-gold mb-2 uppercase tracking-widest">Nascimento</label>
                        <input {...register("birthdate")} placeholder="DD/MM/AAAA" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-brand-light focus:border-brand-gold focus:bg-white/10 outline-none transition-all placeholder:text-brand-light/20 text-lg" />
                        {errors.birthdate && <p className="text-red-400 text-sm mt-2">{errors.birthdate.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-gold mb-2 uppercase tracking-widest">Telefone / WhatsApp</label>
                        <input {...register("phone")} placeholder="(00) 00000-0000" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-brand-light focus:border-brand-gold focus:bg-white/10 outline-none transition-all placeholder:text-brand-light/20 text-lg" />
                        {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-gold mb-2 uppercase tracking-widest">Sua Cidade / Estado</label>
                      <input {...register("city")} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-brand-light focus:border-brand-gold focus:bg-white/10 outline-none transition-all placeholder:text-brand-light/20 text-lg" placeholder="Ex: Fortaleza - CE" />
                      {errors.city && <p className="text-red-400 text-sm mt-2">{errors.city.message}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PASSO 3 ATUALIZADO */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold text-brand-light mb-8 font-heading">Sobre o seu caso</h3>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold text-brand-gold mb-2 uppercase tracking-widest">Descreva a situação</label>
                      <textarea {...register("description")} rows={5} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-brand-light focus:border-brand-gold focus:bg-white/10 outline-none transition-all resize-none placeholder:text-brand-light/20 text-lg" placeholder="Conte-nos de forma resumida o que aconteceu..."></textarea>
                      {errors.description && <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>}
                    </div>

                    <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
                      <input type="checkbox" id="lgpd" {...register("lgpd")} className="mt-1 w-5 h-5 accent-brand-gold rounded cursor-pointer" />
                      <label htmlFor="lgpd" className="text-sm text-brand-light/80 leading-relaxed cursor-pointer">
                        Concordo em fornecer meus dados para contato e entendo que serão tratados com <strong className="text-brand-gold">absoluto sigilo</strong>, respeitando as normas da Lei Geral de Proteção de Dados (LGPD).
                      </label>
                    </div>
                    {errors.lgpd && <p className="text-red-400 text-sm -mt-4">{errors.lgpd.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* PASSO 4: SUCESSO (NOVO) */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="w-24 h-24 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <CheckCircle2 className="w-12 h-12 text-brand-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-light mb-4 font-heading">Enviado com Sucesso!</h3>
                  <p className="text-brand-light/70 text-lg max-w-md mx-auto leading-relaxed">
                    A sua solicitação foi recebida com total sigilo. A Dra. Júlia e a nossa equipa entrarão em contato em breve.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>

            {/* BOTÕES ATUALIZADOS */}
            {step < 4 && (
              <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-white/10 gap-4">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="w-full md:w-auto justify-center text-brand-light/50 hover:text-brand-light transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-5 h-5" /> Voltar
                  </button>
                ) : <div className="hidden md:block"></div>}
                
                {step < 3 ? (
                  <button type="button" onClick={nextStep} className="w-full md:w-auto justify-center bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/50 text-brand-gold px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-3">
                    Próximo <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Botão de Enviar por E-mail (NOVO) */}
                    <button 
                      type="button" 
                      onClick={handleEmail}
                      disabled={isSending}
                      className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-brand-light px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all"
                    >
                      {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                      Enviar por E-mail
                    </button>
                    
                    {/* Botão de WhatsApp */}
                    <button 
                      type="button" 
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto flex justify-center items-center gap-3 bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}