import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { About } from "@/components/sections/About"; 
import { Services } from "@/components/sections/Services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Stats } from "@/components/sections/Stats"; 
import { Testimonials } from "@/components/sections/Testimonials";  
import { DocumentChecklist } from "@/components/sections/DocumentChecklist";
import { FAQ } from "@/components/sections/FAQ"; 
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";
import { AccessibilityPanel } from "@/components/floating/AccessibilityPanel";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300 font-sans relative">
      <UrgencyBanner />
      
      <Navbar />
      <Hero />
      <Stats />
      <About /> 
      <Services /> 
      <ProcessTimeline /> 
      <Testimonials /> 
      <DocumentChecklist />
      <FAQ />
      <ContactForm />
      <Footer />
      
      <AccessibilityPanel />
      <WhatsAppBtn />
    </main>
  );
}