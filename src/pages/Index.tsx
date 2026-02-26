import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import TrackingPixels from "@/components/TrackingPixels";

// Lazy load below-the-fold sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const PurposeSection = lazy(() => import("@/components/PurposeSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const EventsSection = lazy(() => import("@/components/EventsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CareersSection = lazy(() => import("@/components/CareersSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloatButton = lazy(() => import("@/components/WhatsAppFloatButton"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <TrackingPixels />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PurposeSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EventsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CareersSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppFloatButton />
      </Suspense>
    </div>
  );
};

export default Index;
