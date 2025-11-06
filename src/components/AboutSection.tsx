import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Target, Users } from "lucide-react";
import labEquipment1 from "@/assets/lab-equipment-1.jpg";
import labEquipment2 from "@/assets/lab-equipment-2.jpg";
import labEquipment3 from "@/assets/lab-equipment-3.jpg";
import labEquipment4 from "@/assets/lab-equipment-4.jpg";

const AboutSection = () => {
  const [currentImages, setCurrentImages] = useState([0, 1, 2, 3]);
  const [nextImages, setNextImages] = useState([0, 1, 2, 3]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const labImages = [labEquipment1, labEquipment2, labEquipment3, labEquipment4];

  useEffect(() => {
    const interval = setInterval(() => {
      // Prepare next images
      const shuffled = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
      setNextImages(shuffled);
      
      // Start transition
      setIsTransitioning(true);
      
      // Complete transition
      setTimeout(() => {
        setCurrentImages(shuffled);
        setIsTransitioning(false);
      }, 2000);
      
    }, 8000);

    return () => clearInterval(interval);
  }, []);
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
              A Tecnoiso é referência no mercado nacional nos segmentos de calibração, manutenção, automação industrial e gerenciamento metrológico desde 2001.
Foco na modernidade, inovação, agilidade e atualização constante.
Equipe altamente qualificada e proatividade são alguns dos diferenciais do nosso capital humano presentes em todos os produtos fabricados.
Presença nacional e atendimento individualizado é o que torna a Tecnoiso única.
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

          {/* Visual Elements with Lab Equipment Images */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {/* Main lab equipment showcase */}
              <div className="col-span-2 h-64 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red))]/5 rounded-lg relative overflow-hidden">
                <img 
                  src={labImages[currentImages[0]]}
                  alt="Equipamentos de laboratório de calibração"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0 : 0.9 }}
                />
                <img 
                  src={labImages[nextImages[0]]}
                  alt="Equipamentos de laboratório de calibração"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0.9 : 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-red))]/30 to-transparent"></div>
              </div>
              
              <div className="h-32 bg-[hsl(var(--brand-red))] rounded-lg relative overflow-hidden">
                <img 
                  src={labImages[currentImages[1]]}
                  alt="Laboratório de metrologia"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0 : 1 }}
                />
                <img 
                  src={labImages[nextImages[1]]}
                  alt="Laboratório de metrologia"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 1 : 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-red))]/40 to-transparent"></div>
              </div>
              
              <div className="h-32 bg-muted rounded-lg relative overflow-hidden">
                <img 
                  src={labImages[currentImages[2]]}
                  alt="Instrumentos de medição"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0 : 0.85 }}
                />
                <img 
                  src={labImages[nextImages[2]]}
                  alt="Instrumentos de medição"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0.85 : 0 }}
                />
              </div>
              
              <div className="col-span-2 h-32 bg-gradient-to-r from-muted to-[hsl(var(--brand-red))]/10 rounded-lg relative overflow-hidden">
                <img 
                  src={labImages[currentImages[3]]}
                  alt="Equipamentos de certificação"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0 : 0.75 }}
                />
                <img 
                  src={labImages[nextImages[3]]}
                  alt="Equipamentos de certificação"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out"
                  style={{ opacity: isTransitioning ? 0.75 : 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;