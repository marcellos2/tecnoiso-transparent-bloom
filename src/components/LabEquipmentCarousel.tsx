import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import labEquipment1 from "@/assets/lab-equipment-1.jpg";
import labEquipment2 from "@/assets/lab-equipment-2.jpg";
import labEquipment3 from "@/assets/lab-equipment-3.jpg";
import labEquipment4 from "@/assets/lab-equipment-4.jpg";

const LabEquipmentCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const equipmentImages = [
    {
      id: 1,
      src: labEquipment1,
      title: "Equipamentos de Calibração",
      description: "Instrumentos de precisão para calibração de equipamentos industriais"
    },
    {
      id: 2,
      src: labEquipment2,
      title: "Laboratório de Metrologia",
      description: "Ambiente controlado com equipamentos de alta tecnologia"
    },
    {
      id: 3,
      src: labEquipment3,
      title: "Instrumentos de Medição",
      description: "Ferramentas especializadas para medições precisas"
    },
    {
      id: 4,
      src: labEquipment4,
      title: "Certificação de Qualidade",
      description: "Equipamentos para testes e certificação industrial"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % equipmentImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, equipmentImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % equipmentImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + equipmentImages.length) % equipmentImages.length);
  };

  const currentEquipment = equipmentImages[currentImage];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--brand-gray))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red))]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-[hsl(var(--brand-red))]/10 to-[hsl(var(--brand-red))]/5 rounded-3xl rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-[hsl(var(--brand-red))] bg-clip-text text-transparent">
              Nossos Equipamentos &
            </span>
            <br />
            <span className="text-[hsl(var(--brand-red))]">Laboratórios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa infraestrutura de ponta para calibração e certificação metrológica
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Area */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentEquipment.id}
                    src={currentEquipment.src}
                    alt={currentEquipment.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  key={currentEquipment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {currentEquipment.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {currentEquipment.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="underline hover:text-[hsl(var(--brand-red))] transition-colors"
                    >
                      {isPlaying ? "Pausar" : "Continuar"} apresentação
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {equipmentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-[hsl(var(--brand-red))] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabEquipmentCarousel;