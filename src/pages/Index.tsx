import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div data-scroll-reveal data-scroll-delay="100">
        <AboutSection />
      </div>
      <div data-scroll-reveal data-scroll-delay="200">
        <PurposeSection />
      </div>
      <div data-scroll-reveal data-scroll-delay="100">
        <ServicesSection />
      </div>
      <div data-scroll-reveal data-scroll-delay="200">
        <EventsSection />
      </div>
      <div data-scroll-reveal data-scroll-delay="200">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;