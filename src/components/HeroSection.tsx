import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--hero-text))] mb-6 leading-tight">
            Precisão,
            <br />
            confiabilidade e
            <br />
            excelência em
            <br />
            <span className="text-[hsl(var(--brand-red))]">metrologia.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[hsl(var(--hero-text))] mb-8 max-w-2xl opacity-90">
            Soluções completas em calibração, certificação e serviços metrológicos 
            para garantir a qualidade e conformidade dos seus equipamentos.
          </p>

          <Button 
            size="lg" 
            className="bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-[hsl(var(--brand-white))] px-8 py-6 text-lg font-semibold shadow-[var(--shadow-red)] transition-all duration-300 hover:scale-105"
          >
            CONHEÇA NOSSOS SERVIÇOS
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-[hsl(var(--brand-white))]/50 rounded-full">
          <div className="w-1 h-8 bg-[hsl(var(--brand-red))] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;