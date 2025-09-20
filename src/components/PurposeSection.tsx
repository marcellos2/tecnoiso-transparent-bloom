const PurposeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--background))] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--brand-red))]/10 via-[hsl(var(--primary))]/5 to-transparent rounded-bl-[12rem] transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[hsl(var(--brand-red))]/8 to-[hsl(var(--primary))]/3 rounded-tr-[10rem] transform -rotate-12"></div>
        
        <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-[hsl(var(--brand-red))]/20 rounded-3xl transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[hsl(var(--primary))]/10 to-transparent rounded-2xl transform -rotate-12"></div>
        
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[hsl(var(--brand-red))] rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[hsl(var(--primary))] rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-[hsl(var(--brand-red))]/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-[hsl(var(--brand-red))] text-3xl md:text-4xl block mb-2">Propósito</span>
                <span className="bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--muted-foreground))] bg-clip-text text-transparent">
                  Transformar o segmento de manufatura através de
                </span>
              </h2>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full"></div>
                  <span className="text-xl md:text-2xl font-bold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                    TECNOLOGIA
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full"></div>
                  <span className="text-xl md:text-2xl font-bold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                    INOVAÇÃO
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full"></div>
                  <span className="text-xl md:text-2xl font-bold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                    DESENVOLVIMENTO
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                da nossa equipe, inspirando nossos clientes a criar soluções tecnológicas de ponta.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[hsl(var(--card))] p-6 rounded-2xl shadow-md hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <h4 className="font-bold text-[hsl(var(--foreground))] mb-2">Anos de Experiência</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Em metrologia e qualidade</p>
              </div>

              <div className="bg-[hsl(var(--card))] p-6 rounded-2xl shadow-md hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3mi+</span>
                </div>
                <h4 className="font-bold text-[hsl(var(--foreground))] mb-2">Clientes Atendidos</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Em todo o território nacional</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--muted))] shadow-[var(--shadow-elegant)]">
                
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--brand-red))]/5 rounded-t-3xl">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-[hsl(var(--brand-red))]/20 rounded-2xl"></div>
                  <div className="absolute top-6 right-6 w-12 h-12 border-2 border-[hsl(var(--primary))]/30 rounded-xl"></div>
                  <div className="absolute bottom-4 left-1/3 w-20 h-20 bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--muted))] rounded-full shadow-lg"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-[hsl(var(--muted))] to-[hsl(var(--card))] rounded-b-3xl">
                  <div className="absolute inset-4 opacity-30">
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`rounded-sm ${
                            i % 3 === 0 
                              ? 'bg-[hsl(var(--brand-red))]/40' 
                              : i % 5 === 0 
                                ? 'bg-[hsl(var(--primary))]/40' 
                                : 'bg-[hsl(var(--muted-foreground))]/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] rounded-3xl shadow-[var(--shadow-red)] flex items-center justify-center animate-scale-in">
                  <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] rounded-2xl shadow-[var(--shadow-red)] transform rotate-12 animate-fade-in"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-[hsl(var(--primary))] rounded-xl transform -rotate-12 animate-fade-in"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;