"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, MapPin, Scale, Clock } from "lucide-react";

// Componente inteligente que faz a contagem animada
function AnimatedNumber({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const statsData = [
  {
    icon: <Scale className="w-8 h-8 text-brand-gold" />,
    value: 3,
    suffix: "+",
    title: "Anos de Experiência",
    description: "Dedicação exclusiva e resolução de conflitos."
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    value: 184,
    suffix: "",
    title: "Cidades Cobertas",
    description: "Atuação em todo o estado do Ceará."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
    value: 100,
    suffix: "%",
    title: "Sigilo Absoluto",
    description: "Ética e descrição total em todos os processos."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-gold" />,
    value: 24,
    suffix: "h",
    title: "Disponibilidade",
    description: "Acompanhamento urgente em casos penais."
  }
];

export function Stats() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden border-y border-brand-gold/20">
      
      {/* Brilho de Fundo Elegante */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Coluna de Texto Esquerda */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-light font-heading leading-tight mb-6">
              Uma trajetória marcada pela <span className="text-brand-gold italic">excelência e resultados</span>.
            </h2>
            <p className="text-brand-light/70 font-light leading-relaxed">
              Nosso compromisso não é apenas com números, mas com a transformação real na vida de cada cliente que confia em nosso trabalho.
            </p>
          </motion.div>

          {/* Grid de Contadores Direita */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-sm bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-colors"
              >
                <div className="p-3 bg-brand-navy border border-brand-gold/20 rounded-sm shadow-lg">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-light font-heading mb-1">
                    <AnimatedNumber from={0} to={stat.value} suffix={stat.suffix} duration={2.5} />
                  </h3>
                  <h4 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-brand-light/60 leading-snug">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}