// src/pages/Index.tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatButton /> {/* ADICIONE ESTA LINHA */}
    </div>
  );
};

export default Index;