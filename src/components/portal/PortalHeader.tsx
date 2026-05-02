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
    { name: "Para Pousadas", to: "/para-pousadas" as any },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 py-4 shadow-sm backdrop-blur-md" : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex flex-col">
          <span className="font-display text-lg font-black tracking-tighter uppercase leading-none md:text-xl">
            Chapada dos Veadeiros
          </span>
          <span className="font-display text-sm font-light tracking-[0.3em] uppercase leading-none text-primary md:text-base">
            Online
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/planeje-sua-viagem" className="ml-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-foreground/10 px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
            >
              Planeje sua viagem
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background xl:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-lg font-display font-medium text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/planeje-sua-viagem" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-4 w-full rounded-none py-6 text-xs font-bold uppercase tracking-widest">
                Planeje sua viagem
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
