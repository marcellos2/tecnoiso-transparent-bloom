import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Target, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Certificação",
      description: "Laboratório acreditado com padrões internacionais de qualidade"
    },
    {
      icon: CheckCircle,
      title: "Precisão",
      description: "Equipamentos de última geração para máxima precisão nas medições"
    },
    {
      icon: Target,
      title: "Confiabilidade",
      description: "Processos rigorosos que garantem resultados consistentes e confiáveis"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Equipe especializada com anos de experiência em metrologia"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Somos sua melhor escolha em 
              <span className="text-[hsl(var(--brand-red))]"> calibração, certificação e serviços metrológicos.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com anos de experiência no mercado, a Tecnoiso oferece soluções completas 
              em metrologia, garantindo que seus equipamentos estejam sempre em conformidade 
              com os mais rigorosos padrões de qualidade e precisão.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--brand-red))]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[hsl(var(--brand-red))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {/* Circuit pattern inspired visual */}
              <div className="col-span-2 h-64 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red))]/5 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="hsl(var(--brand-red))" />
                        <path d="M10 5 L10 15 M5 10 L15 10" stroke="hsl(var(--brand-red))" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#circuit)" />
                  </svg>
                </div>
              </div>
              
              <div className="h-32 bg-[hsl(var(--brand-red))] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              <div className="h-32 bg-muted rounded-lg"></div>
              
              <div className="col-span-2 h-32 bg-gradient-to-r from-muted to-[hsl(var(--brand-red))]/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;