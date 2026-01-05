import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import tecnoIsoLogo from "@/assets/tecnoiso-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "QUEM SOMOS", href: "#sobre" },
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "CONTATO", href: "#contato" },
  ];

  const handleScheduleClick = () => {
    window.open("https://tecnoiso-agenda.vercel.app/", "_blank");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[hsl(var(--header-bg))] header-blur shadow-[var(--shadow-elegant)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={tecnoIsoLogo} 
              alt="Tecnoiso Logo" 
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] font-medium text-sm transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleScheduleClick}
              className="bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white font-medium text-sm px-4 py-2"
            >
              AGENDAR
            </Button>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 border-l border-[hsl(var(--hero-text))]/20 pl-6">
              <a 
                href="https://www.instagram.com/tecnoiso/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/tecnoso-tecnologia-e-soluções-industriais-ltda/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-[hsl(var(--header-bg))] header-blur rounded-lg">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[hsl(var(--header-text))] hover:text-[hsl(var(--brand-red))] font-medium px-4 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  handleScheduleClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white font-medium mx-4"
              >
                AGENDAR
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;