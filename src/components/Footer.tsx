import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import tecnoIsoLogo from "@/assets/tecnoiso-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--brand-black))] text-[hsl(var(--brand-white))] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={tecnoIsoLogo} 
                alt="Tecnoiso Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em metrologia, calibração e certificação. 
              Garantindo precisão e qualidade para o seu negócio há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[hsl(var(--brand-red))] rounded-lg flex items-center justify-center hover:bg-[hsl(var(--brand-red))]/80 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[hsl(var(--brand-red))] rounded-lg flex items-center justify-center hover:bg-[hsl(var(--brand-red))]/80 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[hsl(var(--brand-red))] rounded-lg flex items-center justify-center hover:bg-[hsl(var(--brand-red))]/80 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[hsl(var(--brand-red))] transition-colors duration-300">
                  Calibração
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[hsl(var(--brand-red))] transition-colors duration-300">
                  Certificação
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[hsl(var(--brand-red))] transition-colors duration-300">
                  Manutenção
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[hsl(var(--brand-red))] transition-colors duration-300">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[hsl(var(--brand-red))] transition-colors duration-300">
                  Treinamentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--brand-red))] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Rua da Metrologia, 123<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  (11) 1234-5678
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  contato@tecnoiso.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tecnoiso. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-red))] text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-[hsl(var(--brand-red))] text-sm transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;