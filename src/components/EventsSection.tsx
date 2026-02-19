import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const events = [
    {
      id: 1,
      title: "Workshop de Calibração Avançada",
      description: "Evento demonstrando técnicas modernas de calibração com equipamentos de alta precisão",
      mediaUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
      mediaType: "image",
      date: "2026 - São Paulo",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Palestra Normas ISO 17025",
      description: "Apresentação sobre implementação e manutenção de sistemas de qualidade em laboratórios",
      mediaUrl: "https://res.cloudinary.com/dvqhv29io/video/upload/video_1_xtfruk.mp4",
      mediaType: "video",
      date: "2026 - Rio de Janeiro",
      category: "Palestra"
    },
    {
      id: 3,
      title: "Seminário Metrologia Industrial",
      description: "Discussão sobre as últimas tendências e tecnologias em metrologia para a indústria",
      mediaUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
      mediaType: "image",
      date: "2026 - Belo Horizonte",
      category: "Seminário"
    },
    {
      id: 4,
      title: "Treinamento Instrumentos de Medição",
      description: "Capacitação prática em uso e manutenção de instrumentos de precisão",
      mediaUrl: "",
      mediaType: "",
      date: "2026 - Curitiba",
      category: "Treinamento"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, events.length]);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  const pauseCarousel = () => {
    setIsPlaying(false);
  };

  const resumeCarousel = () => {
    setIsPlaying(true);
  };

  const currentMedia = events[currentEvent];

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Decorative Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-red-500/5 rounded-3xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-red-500/30 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              Eventos &
            </span>
            <br />
            <span className="text-red-600">Palestras Tecnoiso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe nossos principais eventos, workshops e palestras sobre metrologia e qualidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Media Area */}
              <div 
                className="relative h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group"
                onMouseEnter={pauseCarousel}
                onMouseLeave={resumeCarousel}
              >
                {currentMedia.mediaType === "video" ? (
                  <video 
                    key={currentMedia.id}
                    src={currentMedia.mediaUrl}
                    className="w-full h-full object-cover transition-all duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : currentMedia.mediaType === "youtube" ? (
                  <iframe
                    key={currentMedia.id}
                    src={`https://www.youtube.com/embed/${currentMedia.mediaUrl}?autoplay=1&mute=1&loop=1&playlist=${currentMedia.mediaUrl}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img 
                    src={currentMedia.mediaUrl}
                    alt={currentMedia.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevEvent}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextEvent}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={20} />
                </button>




              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                    {currentMedia.category}
                  </span>
                  <p className="text-sm text-gray-500 mb-2">
                    {currentMedia.date}
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-all duration-500">
                  {currentMedia.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed transition-all duration-500">
                  {currentMedia.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-white">
                    Saiba Mais
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    Ver Todos Eventos
                  </Button>
                </div>

                {/* Pause/Resume Controls */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="underline hover:text-red-600 transition-colors"
                  >
                    {isPlaying ? "Pausar" : "Continuar"} apresentação
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Event Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentEvent 
                    ? 'bg-red-600 scale-125' 
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

export default EventsSection;