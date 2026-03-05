import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"; 
import { Stats } from "@/components/sections/Stats"; 
import { Testimonials } from "@/components/sections/Testimonials";  
import { FAQ } from "@/components/sections/FAQ"; 
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppBtn } from "@/components/floating/WhatsAppBtn";

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300 font-sans relative">
      <UrgencyBanner /> 
      
      <Navbar />
      <Hero />
      <Stats />
      <Services /> 
      <ProcessTimeline /> 
      <Testimonials /> 
      <FAQ />
      <ContactForm />
      <Footer />
      
      <WhatsAppBtn />
    </main>
  );
}