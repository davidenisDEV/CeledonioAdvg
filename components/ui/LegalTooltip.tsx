"use client";

import { ReactNode } from "react";

interface LegalTooltipProps {
  children: ReactNode;
  explanation: string;
}

export function LegalTooltip({ children, explanation }: LegalTooltipProps) {
  return (
    <span className="group relative inline-block cursor-help">
      {/* O texto original (ex: Habeas Corpus) com um sublinhado pontilhado dourado */}
      <span className="border-b border-dotted border-brand-gold text-brand-navy font-medium transition-colors group-hover:bg-brand-gold/10">
        {children}
      </span>
      
      {/* A caixinha que aparece (Tooltip) */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-navy text-brand-light text-xs rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center font-sans font-light border border-brand-gold/30 pointer-events-none">
        {explanation}
        {/* Setinha apontando pra baixo */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-navy"></span>
      </span>
    </span>
  );
}