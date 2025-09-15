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
      content: "Rua da Metrologia, 123\nSão Paulo - SP, 01234-567",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 1234-5678\n(11) 98765-4321",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@tecnoiso.com.br\ncomercial@tecnoiso.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda à Sexta\n08:00 às 18:00",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-[hsl(var(--brand-red))]">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em metrologia. 
            Entre em contato conosco e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                className="w-full bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-[hsl(var(--brand-white))] font-semibold shadow-[var(--shadow-red)] transition-all duration-300 hover:scale-[1.02]"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
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

            {/* Map Placeholder */}
            <div className="h-64 bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[hsl(var(--brand-red))] mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Mapa da localização da Tecnoiso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;