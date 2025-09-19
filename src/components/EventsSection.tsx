import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight, Video } from "lucide-react";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const events = [
    {
      id: 1,
      title: "Workshop de Calibração Avançada",
      description: "Evento demonstrando técnicas modernas de calibração com equipamentos de alta precisão",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4",
      date: "2024 - São Paulo",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Palestra Normas ISO 17025",
      description: "Apresentação sobre implementação e manutenção de sistemas de qualidade em laboratórios",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_2mb.mp4",
      date: "2024 - Rio de Janeiro",
      category: "Palestra"
    },
    {
      id: 3,
      title: "Seminário Metrologia Industrial",
      description: "Discussão sobre as últimas tendências e tecnologias em metrologia para a indústria",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4",
      date: "2024 - Belo Horizonte",
      category: "Seminário"
    },
    {
      id: 4,
      title: "Treinamento Instrumentos de Medição",
      description: "Capacitação prática em uso e manutenção de instrumentos de precisão",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_2mb.mp4",
      date: "2024 - Curitiba",
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--muted))] relative overflow-hidden">
      {/* Decorative Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red-dark))]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-[hsl(var(--primary))]/10 to-[hsl(var(--brand-red))]/5 rounded-3xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[hsl(var(--brand-red))]/30 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--brand-red))] bg-clip-text text-transparent">
              Eventos &
            </span>
            <br />
            <span className="text-[hsl(var(--brand-red))]">Palestras Tecnoiso</span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Acompanhe nossos principais eventos, workshops e palestras sobre metrologia e qualidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-[hsl(var(--card))] rounded-3xl shadow-[var(--shadow-elegant)] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video/Image Area */}
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted-foreground))]/10 overflow-hidden">
                {showVideo ? (
                  <video 
                    src={events[currentEvent].videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={events[currentEvent].thumbnail}
                    alt={events[currentEvent].title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                )}
                
                {/* Video Toggle Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setShowVideo(!showVideo)}
                    className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  >
                    <Video size={20} />
                  </button>
                </div>
                
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="w-16 h-16 bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red-dark))] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-[var(--shadow-red)]"
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </button>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevEvent}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextEvent}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-red))]/10 text-[hsl(var(--brand-red))] rounded-full text-sm font-medium mb-3">
                    {events[currentEvent].category}
                  </span>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                    {events[currentEvent].date}
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
                  {events[currentEvent].title}
                </h3>
                
                <p className="text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed">
                  {events[currentEvent].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] hover:from-[hsl(var(--brand-red-dark))] hover:to-[hsl(var(--brand-red))] text-white">
                    Saiba Mais
                  </Button>
                  <Button variant="outline" className="border-[hsl(var(--brand-red))] text-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))] hover:text-white">
                    Ver Todos Eventos
                  </Button>
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
                    ? 'bg-[hsl(var(--brand-red))] scale-125' 
                    : 'bg-[hsl(var(--muted-foreground))]/30 hover:bg-[hsl(var(--muted-foreground))]/50'
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