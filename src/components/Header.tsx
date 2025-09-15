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
    { label: "CERTIFICAÇÕES", href: "#certificacoes" },
    { label: "CONTATO", href: "#contato" },
  ];

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
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={tecnoIsoLogo} 
              alt="Tecnoiso Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[hsl(var(--hero-text))] hover:text-[hsl(var(--brand-red))]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;