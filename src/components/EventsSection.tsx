import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const events = [
    {
      id: 1,
      title: "Workshop de Calibração Avançada",
      description: "Evento demonstrando técnicas modernas de calibração com equipamentos de alta precisão. Ideal para profissionais que buscam atualização técnica e melhores práticas do setor.",
      mediaUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&crop=center",
      mediaType: "image" as const,
      date: "2026",
      location: "São Paulo, SP",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Palestra Normas ISO 17025",
      description: "Apresentação sobre implementação e manutenção de sistemas de qualidade em laboratórios, abordando os requisitos da norma e cases de sucesso.",
      mediaUrl: "https://res.cloudinary.com/dvqhv29io/video/upload/video_1_xtfruk.mp4",
      mediaType: "video" as const,
      date: "2026",
      location: "Rio de Janeiro, RJ",
      category: "Palestra"
    },
    {
      id: 3,
      title: "Seminário Metrologia Industrial",
      description: "Discussão sobre as últimas tendências e tecnologias em metrologia para a indústria, com participação de especialistas renomados do setor.",
      mediaUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop&crop=center",
      mediaType: "image" as const,
      date: "2026",
      location: "Belo Horizonte, MG",
      category: "Seminário"
    },
    {
      id: 4,
      title: "Treinamento Instrumentos de Medição",
      description: "Capacitação prática em uso e manutenção de instrumentos de precisão, com abordagem hands-on e certificação ao final do curso.",
      mediaUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&crop=center",
      mediaType: "image" as const,
      date: "2026",
      location: "Curitiba, PR",
      category: "Treinamento"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, events.length]);

  const current = events[currentEvent];

  return (
    <section className="py-24 bg-[hsl(var(--brand-black))] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[hsl(var(--brand-red))]/[0.08] to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[hsl(var(--brand-red))]/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-[hsl(var(--brand-red))] font-semibold text-sm tracking-widest uppercase mb-3 block">
              Agenda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-white))]">
              Eventos &{" "}
              <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text">
                Palestras
              </span>
            </h2>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-[hsl(var(--brand-white))]/60 hover:text-[hsl(var(--brand-white))] text-sm transition-colors self-start md:self-auto"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            {isPlaying ? "Pausar" : "Continuar"}
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Media - takes 3 cols */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-video bg-[hsl(var(--brand-black))]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {current.mediaType === "video" ? (
                  <video
                    src={current.mediaUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={current.mediaUrl}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 bg-[hsl(var(--brand-red))] text-[hsl(var(--brand-white))] text-xs font-bold uppercase tracking-wider rounded-full">
                {current.category}
              </span>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[hsl(var(--brand-black))] to-transparent" />
          </div>

          {/* Content - takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-4 text-[hsl(var(--brand-white))]/50 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {current.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {current.location}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-white))] mb-4 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-[hsl(var(--brand-white))]/60 leading-relaxed mb-8">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-red))] text-[hsl(var(--brand-white))] font-semibold rounded-xl hover:bg-[hsl(var(--brand-red-dark))] transition-colors duration-300"
              >
                Saiba Mais
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Event selector */}
            <div className="mt-8 flex flex-col gap-2">
              {events.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setCurrentEvent(index)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    index === currentEvent
                      ? "bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/30"
                      : "border border-transparent hover:bg-[hsl(var(--brand-white))]/5"
                  }`}
                >
                  <span className={`text-sm font-medium transition-colors ${
                    index === currentEvent
                      ? "text-[hsl(var(--brand-red))]"
                      : "text-[hsl(var(--brand-white))]/50 hover:text-[hsl(var(--brand-white))]/80"
                  }`}>
                    {event.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
