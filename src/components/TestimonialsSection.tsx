import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Gilmar Tomasi",
      comment: "Quero externar meu contentamento 100% com o atendimento que recebi, presteza, seriedade e agilidade na entrega. Parabéns também pelo projeto social.",
    },
    {
      name: "Claudney Wilbert",
      comment: "Pensa numa empresa séria, comprometida com a qualidade dos seus serviços, comprometida com a qualidade de vida dos colaboradores.",
    },
    {
      name: "Marcio Dal'Col",
      comment: "Excelente atendimento, entrega na data combinada, trabalho muito bem feito.",
    },
    {
      name: "Aubville Desentupidora",
      comment: "Gostaria de parabenizar á toda equipe, pelo excelente atendimento e rapidez prestados a nossa empresa.",
    },
    {
      name: "Maria Aparecida",
      comment: "Muito bem atendida. Solucionou meus problemas.",
    },
    {
      name: "Janara Silva",
      comment: "Excelente atendimento e valores acessíveis.",
    },
    {
      name: "André Lenz",
      comment: "Excelente empresa. Atendimento excepcional.",
    },
    {
      name: "Ricardo da Cunha",
      comment: "Muito bom / excelente trabalho e atendimento.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="avaliacoes" className="py-20 bg-[hsl(var(--deep-navy))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
            Depoimentos
          </h2>
          <div className="w-12 h-0.5 bg-[hsl(var(--brand-red))] mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-[hsl(var(--brand-red))] opacity-50 mb-6" />
            
            {/* Content */}
            <div 
              key={currentIndex} 
              className="animate-fade-in"
              style={{ animation: 'fadeIn 0.5s ease-out' }}
            >
              <blockquote className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-8">
                "{current.comment}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--brand-red))]/20 flex items-center justify-center">
                  <span className="text-[hsl(var(--brand-red))] font-medium text-sm">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white/70 font-medium">{current.name}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-4">
              <button
                onClick={goToPrevious}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[hsl(var(--brand-red))] w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
