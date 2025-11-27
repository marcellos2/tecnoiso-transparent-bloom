import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import tecnoIsoLogo from "@/assets/tecnoiso-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "#home", type: "anchor" },
    { label: "QUEM SOMOS", href: "#sobre", type: "anchor" },
    { label: "SERVIÇOS", href: "#servicos", type: "anchor" },
    { label: "CERTIFICAÇÕES", href: "#certificacoes", type: "anchor" },
    { label: "BLOG", href: "/blog", type: "route" },
    { label: "CONTATO", href: "#contato", type: "anchor" },
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
          <Link to="/" className="flex items-center">
            <img 
              src={tecnoIsoLogo} 
              alt="Tecnoiso Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${
                    isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                  } hover:text-[hsl(var(--brand-red))] font-medium transition-colors duration-300`}
                >
                  {item.label}
                </Link>
              ) : (
                isHomePage ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${
                      isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                    } hover:text-[hsl(var(--brand-red))] font-medium transition-colors duration-300`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={`/${item.href}`}
                    className={`${
                      isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                    } hover:text-[hsl(var(--brand-red))] font-medium transition-colors duration-300`}
                  >
                    {item.label}
                  </Link>
                )
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 border-l border-[hsl(var(--hero-text))]/20 pl-6">
              <a 
                href="https://www.instagram.com/tecnoiso/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                } hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110`}
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                } hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110`}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/tecnoso-tecnologia-e-soluções-industriais-ltda/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isScrolled ? 'text-[hsl(var(--header-text))]' : 'text-[hsl(var(--hero-text))]'
                } hover:text-[hsl(var(--brand-red))] transition-colors duration-300 hover:scale-110`}
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

          <div className="lg:hidden mt-4 py-4 bg-[hsl(var(--header-bg))] header-blur rounded-lg">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-[hsl(var(--header-text))] hover:text-[hsl(var(--brand-red))] font-medium px-4 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  isHomePage ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[hsl(var(--header-text))] hover:text-[hsl(var(--brand-red))] font-medium px-4 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={`/${item.href}`}
                      className="text-[hsl(var(--header-text))] hover:text-[hsl(var(--brand-red))] font-medium px-4 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )
              ))}
            </nav>
          </div>
      </div>
    </header>
  );
};

export default Header;