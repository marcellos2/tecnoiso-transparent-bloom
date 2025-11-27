import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Target, Users } from "lucide-react";
import labEquipment1 from "@/assets/lab-equipment-1.jpg";
import labEquipment2 from "@/assets/lab-equipment-2.jpg";
import labEquipment3 from "@/assets/lab-equipment-3.jpg";
import labEquipment4 from "@/assets/lab-equipment-4.jpg";

const AboutSection = () => {
  const [currentImages, setCurrentImages] = useState([0, 1, 2, 3]);
  const [isTransitioning, setIsTransitioning] = useState([false, false, false, false]);
  const [gridLayout, setGridLayout] = useState(0);
  const labImages = [labEquipment1, labEquipment2, labEquipment3, labEquipment4];
  
  // Diferentes layouts de grid
  const layouts = [
    // Layout 1: Original com altura aumentada
    [
      { col: "col-span-2", row: "h-72" },
      { col: "col-span-1", row: "h-72" },
      { col: "col-span-1", row: "h-40" },
      { col: "col-span-2", row: "h-40" }
    ],
    // Layout 2: Invertido com altura aumentada
    [
      { col: "col-span-1", row: "h-72" },
      { col: "col-span-2", row: "h-72" },
      { col: "col-span-2", row: "h-40" },
      { col: "col-span-1", row: "h-40" }
    ],
    // Layout 3: Vertical destaque com altura aumentada
    [
      { col: "col-span-1", row: "h-56" },
      { col: "col-span-2 row-span-2", row: "h-full" },
      { col: "col-span-1", row: "h-56" }
    ],
    // Layout 4: Mosaico com altura aumentada
    [
      { col: "col-span-2", row: "h-56" },
      { col: "col-span-1", row: "h-56" },
      { col: "col-span-1", row: "h-56" },
      { col: "col-span-2", row: "h-56" }
    ],
    // Layout 5: Assimétrico com altura aumentada
    [
      { col: "col-span-1", row: "h-48" },
      { col: "col-span-2", row: "h-64" },
      { col: "col-span-2", row: "h-48" },
      { col: "col-span-1", row: "h-64" }
    ]
  ];

  useEffect(() => {
    const changeRandomImage = () => {
      // Escolhe uma posição aleatória para trocar
      const randomPosition = Math.floor(Math.random() * 4);
      
      // Inicia a transição
      setIsTransitioning(prev => {
        const newState = [...prev];
        newState[randomPosition] = true;
        return newState;
      });

      // Após a animação de saída, troca a imagem
      setTimeout(() => {
        setCurrentImages(prev => {
          const newImages = [...prev];
          let newImageIndex;
          
          // Garante que a nova imagem seja diferente da atual
          do {
            newImageIndex = Math.floor(Math.random() * labImages.length);
          } while (newImageIndex === prev[randomPosition]);
          
          newImages[randomPosition] = newImageIndex;
          return newImages;
        });

        // Remove o estado de transição
        setTimeout(() => {
          setIsTransitioning(prev => {
            const newState = [...prev];
            newState[randomPosition] = false;
            return newState;
          });
        }, 50);
      }, 400);
    };

    // Troca aleatória a cada 3 segundos
    const interval = setInterval(changeRandomImage, 3000);

    return () => clearInterval(interval);
  }, [labImages.length]);

  // Efeito para mudar o layout aleatoriamente
  useEffect(() => {
    const changeLayout = () => {
      setGridLayout(prev => {
        let newLayout;
        do {
          newLayout = Math.floor(Math.random() * layouts.length);
        } while (newLayout === prev);
        return newLayout;
      });
    };

    // Muda o layout a cada 8 segundos
    const layoutInterval = setInterval(changeLayout, 8000);

    return () => clearInterval(layoutInterval);
  }, [layouts.length]);

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
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background com fumaça vermelha nítida cobrindo toda a seção */}
      <div className="absolute inset-0 bg-white"></div>
      <div 
        className="absolute inset-0 opacity-7 bg-no-repeat"
        style={{
       
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/ via-white/50 to-transparent"></div>
      
      <style>{`
        @keyframes fadeInZoom {
          from {
            opacity: 0;
            transform: scale(1.1) rotate(2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes fadeOutZoom {
          from {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          to {
            opacity: 0;
            transform: scale(0.95) rotate(-2deg);
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes morphLayout {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gentleZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .grid-container {
          animation: morphLayout 0.8s ease-in-out;
        }
        
        .image-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          animation: fadeInZoom 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-slide.transitioning {
          animation: fadeOutZoom 0.4s cubic-bezier(0.4, 0, 0.6, 1) forwards;
        }
        
        .image-container:hover .image-slide:not(.transitioning) {
          animation: gentleZoom 15s ease-in-out infinite;
        }
        
        .image-container:nth-child(1) {
          animation: subtleFloat 8s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .image-container:nth-child(2) {
          animation: subtleFloat 10s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .image-container:nth-child(3) {
          animation: subtleFloat 9s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .image-container:nth-child(4) {
          animation: subtleFloat 11s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="relative text-center lg:text-left">
              <div className="absolute -top-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-24 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-transparent rounded-full blur-xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Somos sua melhor escolha em 
                <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text"> calibração, certificação e serviços metrológicos.</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-up text-center lg:text-left">
              A Tecnoiso é referência no mercado nacional nos segmentos de calibração, manutenção, automação industrial e gerenciamento metrológico desde 2001.
              <br /><br />
              Foco na modernidade, inovação, agilidade e atualização constante.
              Equipe altamente qualificada e proatividade são alguns dos diferenciais do nosso capital humano presentes em todos os produtos fabricados.
              <br /><br />
              Presença nacional e atendimento individualizado é o que torna a Tecnoiso única.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-[hsl(var(--brand-red))]/5 hover:to-transparent transition-all duration-500 hover:shadow-[var(--shadow-red-soft)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[hsl(var(--brand-red))]/10 to-[hsl(var(--brand-red))]/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[hsl(var(--brand-red))]/20 group-hover:to-[hsl(var(--brand-red))]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-7 h-7 text-[hsl(var(--brand-red))] group-hover:drop-shadow-lg transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--brand-red))] transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements with Lab Equipment Images */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 grid-container">
              {layouts[gridLayout].map((layout, index) => {
                const imageData = [
                  { key: `main-${currentImages[0]}`, src: labImages[currentImages[0]], alt: "Equipamentos de laboratório de calibração", gradient: "from-[hsl(var(--brand-red))]/20 to-transparent" },
                  { key: `side-${currentImages[1]}`, src: labImages[currentImages[1]], alt: "Laboratório de metrologia", gradient: "from-[hsl(var(--brand-red))]/30 to-transparent" },
                  { key: `bottom-left-${currentImages[2]}`, src: labImages[currentImages[2]], alt: "Instrumentos de medição", gradient: "from-black/10 to-transparent" },
                  { key: `bottom-right-${currentImages[3]}`, src: labImages[currentImages[3]], alt: "Equipamentos de certificação", gradient: "from-[hsl(var(--brand-red))]/10 to-transparent" }
                ];

                if (index >= imageData.length) return null;

                return (
                  <div 
                    key={`container-${gridLayout}-${index}`}
                    className={`${layout.col} ${layout.row} rounded-2xl image-container shadow-lg hover:shadow-xl transition-all duration-500`}
                  >
                    <img 
                      key={imageData[index].key}
                      src={imageData[index].src}
                      alt={imageData[index].alt}
                      className={`image-slide ${isTransitioning[index] ? 'transitioning' : ''}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${imageData[index].gradient} rounded-2xl pointer-events-none`}></div>
                  </div>
                );
              })}
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-[hsl(var(--brand-red))]/20 rounded-xl rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;