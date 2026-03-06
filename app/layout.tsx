import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/components/contexts/LanguageContext"; // <-- CAMINHO CORRIGIDO

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

const viaAppia = localFont({
  src: "../public/fonts/Via Appia.ttf", 
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: siteConfig.business.name,
  description: siteConfig.business.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased text-brand-navy", montserrat.variable, viaAppia.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}