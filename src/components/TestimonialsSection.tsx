import { useState, useEffect } from "react";
import { Star, User, Send, Check, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const testimonials = [
    {
      name: "Gilmar Tomasi",
      role: "Cliente",
      rating: 5,
      comment: "Quero externar meu contentamento 100% com o atendimento que recebi, presteza, seriedade e agilidade na entrega. Parabéns também pelo projeto social. Deus abençoe toda a equipe Tecnoiso.",
      date: "Há 1 ano",
      verified: true
    },
    {
      name: "Claudney Wilbert",
      role: "Cliente",
      rating: 5,
      comment: "Pensa numa empresa séria, comprometida com a qualidade dos seus serviços, comprometida com a qualidade de vida dos colaboradores e com o próprio papel na comunidade. Tecnoiso é o modelo de empresa que deve ser seguido!!!",
      date: "Há 4 anos",
      verified: true
    },
    {
      name: "Marcio Dal'Col",
      role: "Cliente",
      rating: 5,
      comment: "Excelente atendimento, entrega na data combinada, trabalho muito bem feito.",
      date: "Há 7 anos",
      verified: true
    },
    {
      name: "Aubville Desentupidora",
      role: "Empresa",
      rating: 5,
      comment: "Gostaria de parabenizar á toda equipe, pelo excelente atendimento e rapidez prestados a nossa empresa.",
      date: "Há 2 anos",
      verified: true
    },
    {
      name: "Maria Aparecida",
      role: "Cliente",
      rating: 5,
      comment: "Muito bem atendida. Solucionou meus problemas.",
      date: "Há 11 meses",
      verified: true
    },
    {
      name: "Janara Silva",
      role: "Cliente",
      rating: 5,
      comment: "Excelente atendimento e valores acessíveis.",
      date: "Há 1 ano",
      verified: true
    },
    {
      name: "André Lenz",
      role: "Cliente",
      rating: 5,
      comment: "Excelente empresa. Atendimento excepcional.",
      date: "Há 4 anos",
      verified: true
    },
    {
      name: "Ricardo da Cunha",
      role: "Cliente",
      rating: 5,
      comment: "Muito bom / excelente trabalho e atendimento.",
      date: "Há 5 anos",
      verified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 100) setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 500) setComment(e.target.value);
  };

  const handleSubmit = () => {
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!trimmedName || trimmedName.length < 2) return;
    if (!trimmedComment || trimmedComment.length < 5) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setName("");
      setComment("");
      setRating(5);
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1500);
  };

  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section id="avaliacoes" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-red))]/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Avaliações Verificadas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes{" "}
            <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text">
              dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de quem confia na Tecnoiso
          </p>

          {/* Stats inline */}
          <div className="flex justify-center gap-10 mt-8">
            <div className="text-center">
              <span className="text-2xl font-bold text-foreground">{testimonials.length}+</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Avaliações</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-foreground flex items-center justify-center gap-1">
                5.0 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </span>
              <span className="block text-xs text-muted-foreground mt-0.5">Nota Média</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-foreground">100%</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Satisfação</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Testimonial display - 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative bg-[hsl(var(--card))] rounded-2xl border border-border/50 p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
              {/* Quote accent */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[hsl(var(--brand-red))]/10" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium">
                    "{current.comment}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] flex items-center justify-center">
                      <User className="w-6 h-6 text-[hsl(var(--brand-white))]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-foreground">{current.name}</h4>
                        {current.verified && (
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-[hsl(var(--brand-white))]" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{current.role} · {current.date}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === currentIndex
                          ? "w-8 bg-[hsl(var(--brand-red))]"
                          : "w-1.5 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[hsl(var(--brand-red))]/50 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[hsl(var(--brand-red))]/50 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Form - 2 cols */}
          <div className="lg:col-span-2">
            <div className="relative bg-[hsl(var(--card))] rounded-2xl border border-border/50 p-8">
              {/* Success overlay */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[hsl(var(--card))]/95 backdrop-blur-sm rounded-2xl"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-8 h-8 text-[hsl(var(--brand-white))]" strokeWidth={3} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Enviado!</h3>
                      <p className="text-sm text-muted-foreground">Sua avaliação será analisada em breve</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-bold text-foreground mb-1">Deixe sua avaliação</h3>
              <p className="text-sm text-muted-foreground mb-6">Compartilhe sua experiência</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    maxLength={100}
                    placeholder="Nome completo"
                    className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[hsl(var(--brand-red))]/50 focus:ring-1 focus:ring-[hsl(var(--brand-red))]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Avaliação</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform duration-200 hover:scale-125"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= (hoveredStar || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-border"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Comentário</label>
                  <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    maxLength={500}
                    placeholder="Conte sua experiência com a Tecnoiso..."
                    rows={4}
                    className="w-full px-4 py-3 bg-[hsl(var(--muted))] border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[hsl(var(--brand-red))]/50 focus:ring-1 focus:ring-[hsl(var(--brand-red))]/20 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !name.trim() || !comment.trim()}
                  className="w-full py-3.5 bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] text-[hsl(var(--brand-white))] font-semibold rounded-xl transition-all duration-300 hover:shadow-[var(--shadow-red-soft)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[hsl(var(--brand-white))] border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Avaliação
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
