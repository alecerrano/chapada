import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const PortalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Onde Ficar", to: "/onde-ficar" as any },
    { name: "Pousadas", to: "/pousadas" as any },
    { name: "Roteiros", to: "/roteiros" as any },
    { name: "Cachoeiras", to: "/cachoeiras" as any },
    { name: "Experiências", to: "/experiencias" as any },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 py-5 shadow-sm backdrop-blur-md" : "bg-transparent py-10"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-8 lg:px-16">
        <Link to="/" className="group flex flex-col">
          <span className={`font-display font-black tracking-tighter uppercase leading-none transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} ${!isScrolled && 'text-white'}`}>
            Chapada dos Veadeiros
          </span>
          <span className={`font-display text-sm font-light tracking-[0.4em] uppercase leading-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-accent'}`}>
            Online
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-primary ${isScrolled ? 'text-foreground/70' : 'text-white/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/planeje-sua-viagem" className="ml-4">
            <Button
              variant="outline"
              size="sm"
              className={`rounded-none px-8 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border-current ${isScrolled ? 'hover:bg-foreground hover:text-background' : 'text-white border-white/20 hover:bg-white hover:text-black'}`}
            >
              Planejar Viagem
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`xl:hidden transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background flex flex-col items-center justify-center">
          <button 
            className="absolute top-10 right-8"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="flex flex-col gap-10 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-3xl font-display font-medium text-foreground tracking-tight"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/planeje-sua-viagem" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-4 rounded-none px-12 py-8 text-xs font-bold uppercase tracking-[0.2em]">
                Planejar Viagem
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
