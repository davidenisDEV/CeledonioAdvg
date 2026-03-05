import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

// 1. Fonte para Textos (Corpo) - Montserrat
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

// 2. Fonte para Títulos (Headings) - Via Appia Local
const viaAppia = localFont({
  src: "../public/fonts/Via Appia.ttf", 
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: siteConfig.business.name,
  description: siteConfig.business.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-brand-navy", 
          montserrat.variable, 
          viaAppia.variable 
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Sites jurídicos passam mais credibilidade no modo claro
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}