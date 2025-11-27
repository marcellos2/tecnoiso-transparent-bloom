import { useState, useEffect } from "react";
import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [nextTestimonial, setNextTestimonial] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const testimonials = [
    {
      name: "Gilmar Tomasi",
      role: "Cliente",
      rating: 5,
      comment: "Quero externar meu contentamento 100% com o atendimento que recebi, presteza, seriedade e agilidade na entrega. Parabéns também pelo projeto social. Deus abençoe toda a equipe Tecnoiso.",
      date: "Há 1 ano"
    },
    {
      name: "Claudney Wilbert",
      role: "Cliente",
      rating: 5,
      comment: "Pensa numa empresa séria, comprometida com a qualidade dos seus serviços, comprometida com a qualidade de vida dos colaboradores e com o próprio papel na comunidade. Tecnoiso é o modelo de empresa que deve ser seguido!!!",
      date: "Há 4 anos"
    },
    {
      name: "Marcio Dal'Col",
      role: "Cliente",
      rating: 5,
      comment: "Excelente atendimento, entrega na data combinada, trabalho muito bem feito.",
      date: "Há 7 anos"
    },
    {
      name: "Aubville Desentupidora",
      role: "Empresa",
      rating: 5,
      comment: "Gostaria de parabenizar á toda equipe, pelo excelente atendimento e rapidez prestados a nossa empresa.",
      date: "Há 2 anos"
    },
    {
      name: "Maria Aparecida",
      role: "Cliente",
      rating: 5,
      comment: "Muito bem atendida. Solucionou meus problemas.",
      date: "Há 11 meses"
    },
    {
      name: "Janara Silva",
      role: "Cliente",
      rating: 5,
      comment: "Excelente atendimento e valores acessíveis.",
      date: "Há 1 ano"
    },
    {
      name: "André Lenz",
      role: "Cliente",
      rating: 5,
      comment: "Excelente empresa. Atendimento excepcional.",
      date: "Há 4 anos"
    },
    {
      name: "Ricardo da Cunha",
      role: "Cliente",
      rating: 5,
      comment: "Muito bom / excelente trabalho e atendimento.",
      date: "Há 5 anos"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Prepare next testimonial
      const next = (currentTestimonial + 1) % testimonials.length;
      setNextTestimonial(next);
      
      // Start transition
      setIsTransitioning(true);
      
      // Complete transition
      setTimeout(() => {
        setCurrentTestimonial(next);
        setIsTransitioning(false);
      }, 2500);
      
    }, 7000);

    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e comentário.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Obrigado pelo seu comentário!",
      description: "Sua avaliação será analisada e publicada em breve.",
    });

    setName("");
    setComment("");
  };

  const current = testimonials[currentTestimonial];
  const next = testimonials[nextTestimonial];

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-background to-[hsl(var(--brand-gray))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text">
              O que nossos clientes
            </span>
            <br />
            <span className="text-foreground">dizem sobre nós</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Avaliações reais de clientes que confiam na Tecnoiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Testimonials Display */}
          <div className="relative">
            <div className="relative min-h-[400px] bg-white rounded-2xl shadow-[var(--shadow-red-soft)] p-8 overflow-hidden">
              {/* Current Testimonial */}
              <div 
                className="absolute inset-8 flex flex-col transition-opacity duration-[2500ms] ease-in-out"
                style={{ opacity: isTransitioning ? 0 : 1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red))]/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-[hsl(var(--brand-red))]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{current.name}</h3>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(var(--brand-red))] text-[hsl(var(--brand-red))]" />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{current.comment}"
                </blockquote>

                <p className="text-sm text-muted-foreground">{current.date}</p>
              </div>

              {/* Next Testimonial */}
              <div 
                className="absolute inset-8 flex flex-col transition-opacity duration-[2500ms] ease-in-out"
                style={{ opacity: isTransitioning ? 1 : 0 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-[hsl(var(--brand-red))]/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-[hsl(var(--brand-red))]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{next.name}</h3>
                    <p className="text-sm text-muted-foreground">{next.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(next.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(var(--brand-red))] text-[hsl(var(--brand-red))]" />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{next.comment}"
                </blockquote>

                <p className="text-sm text-muted-foreground">{next.date}</p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))]"></div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setNextTestimonial(index);
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setIsTransitioning(false);
                    }, 2500);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-8 bg-[hsl(var(--brand-red))]' 
                      : 'w-2 bg-muted hover:bg-[hsl(var(--brand-red))]/50'
                  }`}
                  aria-label={`Ver avaliação ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="bg-white rounded-2xl shadow-[var(--shadow-red-soft)] p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Deixe sua avaliação
            </h3>
            <p className="text-muted-foreground mb-6">
              Compartilhe sua experiência com a Tecnoiso
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Seu nome *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-2">
                  Seu comentário *
                </label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Conte-nos sobre sua experiência com a Tecnoiso..."
                  className="w-full min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] hover:from-[hsl(var(--brand-red-dark))] hover:to-[hsl(var(--brand-red))] text-white font-semibold py-6"
              >
                Enviar Avaliação
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Sua avaliação será analisada antes de ser publicada
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
