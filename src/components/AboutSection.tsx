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
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-[hsl(var(--brand-gray))]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-transparent rounded-full blur-xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Somos sua melhor escolha em 
                <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text"> calibração, certificação e serviços metrológicos.</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-up">
              Com anos de experiência no mercado, a Tecnoiso oferece soluções completas 
              em metrologia, garantindo que seus equipamentos estejam sempre em conformidade 
              com os mais rigorosos padrões de qualidade e precisão.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-red-soft))] hover:to-transparent transition-all duration-300 hover:shadow-[var(--shadow-red-soft)]">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[hsl(var(--brand-red))]/10 to-[hsl(var(--brand-red))]/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[hsl(var(--brand-red))]/20 group-hover:to-[hsl(var(--brand-red))]/10 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-[hsl(var(--brand-red))] group-hover:drop-shadow-lg" />
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