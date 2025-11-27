import { useState, useEffect, useRef } from "react";
import { Star, User, MessageCircle, Send, Check, TrendingUp, Quote, Shield } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

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

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim()) return;

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

  const current = testimonials[currentIndex];

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-4">
            <Shield className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-700 font-semibold">Avaliações Verificadas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-red-600 to-red-500 bg-clip-text">
              O que nossos clientes
            </span>
            <br />
            <span className="text-gray-900">dizem sobre nós</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiências reais de quem confia na Tecnoiso
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent">
                {testimonials.length}+
              </div>
              <div className="text-sm text-gray-600 mt-1">Avaliações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent flex items-center justify-center gap-1">
                5.0 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-sm text-gray-600 mt-1">Nota Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-gray-600 mt-1">Satisfação</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Testimonials Display */}
          <div className="relative animate-fade-in">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) scale(${isHovered ? 1.02 : 1})`,
                boxShadow: isHovered ? '0 20px 60px -15px rgba(220, 38, 38, 0.3)' : '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Top Red Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              
              {/* Shimmer Effect */}
              {isHovered && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    style={{ animation: 'shimmer 2s infinite' }}
                  ></div>
                </div>
              )}

              {/* Content */}
              <div className="p-8 relative">
                <div key={currentIndex} className="animate-scale-in">
                  {/* Quote Icon */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center opacity-50 rotate-12">
                    <Quote className="w-8 h-8 text-red-600" />
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-6 relative">
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-0.5 transition-transform duration-300 group-hover:scale-110">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <User className="w-8 h-8 text-red-600" />
                        </div>
                      </div>
                      {current.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{current.name}</h3>
                      <p className="text-gray-600 text-sm">{current.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400 transition-all duration-300"
                        style={{
                          animation: `bounce 0.6s ease-in-out ${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{current.comment}"
                  </blockquote>

                  {/* Date */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{current.date}</span>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-all duration-300 group">
                        <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-12 bg-gradient-to-r from-red-600 to-red-500' 
                      : 'w-2 bg-gray-300 hover:bg-red-400'
                  }`}
                  aria-label={`Ver avaliação ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-in">
            {/* Success Message Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl animate-scale-in">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enviado com sucesso!</h3>
                  <p className="text-gray-600">Sua avaliação será analisada em breve</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Deixe sua avaliação</h3>
                <p className="text-gray-600">Compartilhe sua experiência conosco</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu nome *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Rating Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Como você avalia nosso serviço?
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(star)}
                      className="transition-all duration-300 transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 transition-all duration-300 ${
                          star <= (hoveredStar || rating)
                            ? 'fill-yellow-400 text-yellow-400 scale-110'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {rating === 5 && "Excelente! ⭐"}
                  {rating === 4 && "Muito bom! 👍"}
                  {rating === 3 && "Bom 👌"}
                  {rating === 2 && "Pode melhorar"}
                  {rating === 1 && "Precisa melhorar"}
                </p>
              </div>

              {/* Comment Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu comentário *
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Conte-nos sobre sua experiência com a Tecnoiso..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="relative w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 active:scale-98"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Avaliação
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Sua avaliação será analisada antes da publicação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;