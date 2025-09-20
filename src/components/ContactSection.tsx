import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Dona Emma, 1541 - Floresta\nJoinville - SC, 89211-493",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(47) 3438-3175",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@tecnoiso.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda à Sexta\n07:42 às 17:30",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-[hsl(var(--brand-gray))] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[hsl(var(--brand-red))]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(var(--brand-red))]/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[hsl(var(--brand-red))]/20 to-transparent rounded-full blur-xl"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-transparent bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-light))] bg-clip-text">Contato</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em metrologia. 
            Entre em contato conosco e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 animate-scale-in">
          <Card className="border-0 shadow-[var(--shadow-red-soft)] backdrop-blur-sm bg-gradient-to-br from-card to-[hsl(var(--brand-red))]/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsl(var(--brand-red))]/5 to-transparent opacity-50"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail *
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone *
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Serviço de Interesse
                </label>
                <Input placeholder="Ex: Calibração de instrumentos de pressão" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Descreva suas necessidades e como podemos ajudá-lo..."
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] hover:from-[hsl(var(--brand-red-dark))] hover:to-[hsl(var(--brand-red))] text-[hsl(var(--brand-white))] font-semibold shadow-[var(--shadow-red)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--brand-red))]/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[hsl(var(--brand-red))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] relative">
              <div className="absolute top-4 left-4 z-10 bg-[hsl(var(--card))]/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">📍 Tecnoiso</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1234567890123!2d-48.83333333333333!3d-26.31666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafe1cfc4c4c1%3A0x1234567890abcdef!2sR.%20Dona%20Emma%2C%201541%20-%20Floresta%2C%20Joinville%20-%20SC%2C%2089211-493!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Tecnoiso"
                className="w-full hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=R.+Dona+Emma,+1541+-+Floresta,+Joinville+-+SC,+89211-493"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] text-white px-6 py-3 rounded-xl hover:from-[hsl(var(--brand-red-dark))] hover:to-[hsl(var(--brand-red))] transition-all duration-300 hover:scale-105 shadow-[var(--shadow-red)] hover:shadow-[var(--shadow-glow)] font-medium"
              >
                <MapPin className="w-5 h-5" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;