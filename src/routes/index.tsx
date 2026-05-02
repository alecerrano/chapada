import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-chapada.jpg";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Chapada dos Veadeiros Online | Onde ficar, o que fazer e como viver melhor a Chapada" },
      {
        name: "description",
        content:
          "Guia editorial premium da Chapada dos Veadeiros. Descubra onde ficar, melhores pousadas, roteiros e experiências com curadoria SOBI DIGITAL.",
      },
    ],
  }),
});

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Onde Ficar", to: "/onde-ficar" },
    { name: "Pousadas", to: "/pousadas" },
    { name: "Roteiros", to: "/roteiros" },
    { name: "Cachoeiras", to: "/cachoeiras" },
    { name: "Alto Paraíso", to: "/alto-paraiso" },
    { name: "São Jorge", to: "/sao-jorge" },
    { name: "Cavalcante", to: "/cavalcante" },
    { name: "Experiências", to: "/experiencias" },
    { name: "Para Pousadas", to: "/para-pousadas" },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
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
                className="text-xs font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/planeje-sua-viagem">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border-foreground/10 px-6 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
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
          <div className="fixed inset-0 top-[72px] z-40 bg-background xl:hidden">
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

      {/* Hero Section */}
      <section className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Chapada dos Veadeiros Landscape"
            className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
            style={{ filter: "brightness(0.75)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/80">
              Guia Editorial Premium
            </span>
            <h1 className="font-display text-5xl font-medium leading-[1.1] text-white md:text-7xl lg:text-8xl">
              Chapada dos Veadeiros:<br />
              <span className="italic">escolha melhor</span> onde ficar, o que fazer e como viver o destino.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl font-light leading-relaxed">
              Guias, roteiros, pousadas, cachoeiras e experiências para planejar sua viagem com mais clareza, segurança e intenção.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/onde-ficar">
                <Button className="rounded-none bg-primary px-8 py-7 text-xs font-bold uppercase tracking-widest hover:bg-primary/90">
                  Ver onde ficar
                </Button>
              </Link>
              <Link to="/roteiros">
                <Button className="rounded-none bg-white px-8 py-7 text-xs font-bold uppercase tracking-widest text-black hover:bg-white/90">
                  Explorar roteiros
                </Button>
              </Link>
              <Link to="/pousadas">
                <Button
                  variant="outline"
                  className="rounded-none border-white/30 bg-white/10 px-8 py-7 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md hover:bg-white/20"
                >
                  Conhecer pousadas
                </Button>
              </Link>
            </div>

            {/* Hero Indicators */}
            <div className="mt-20 hidden flex-wrap gap-x-12 gap-y-4 border-t border-white/20 pt-8 lg:flex">
              {["Alto Paraíso", "São Jorge", "Cavalcante", "Cachoeiras", "Pousadas", "Roteiros"].map((tag) => (
                <div key={tag} className="group flex items-center gap-3 cursor-pointer">
                  <div className="h-[1px] w-6 bg-white/30 transition-all group-hover:w-10 group-hover:bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 transition-colors group-hover:text-white">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Quote Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="mx-auto max-w-3xl font-display text-2xl font-light italic leading-relaxed text-foreground/80 md:text-3xl lg:text-4xl">
            "A Chapada já tem desejo. O Chapada dos Veadeiros Online organiza a decisão."
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="h-12 w-[1px] bg-primary/30" />
             <p className="text-xs font-bold uppercase tracking-widest text-primary">
               Um guia editorial para escolher melhor
             </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Link to="/" className="flex flex-col">
                <span className="font-display text-xl font-black tracking-tighter uppercase leading-none">
                  Chapada dos Veadeiros
                </span>
                <span className="font-display text-base font-light tracking-[0.3em] uppercase leading-none text-primary">
                  Online
                </span>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Onde ficar, o que fazer e como viver melhor a Chapada. Curadoria editorial para quem busca beleza e intenção em cada jornada.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Destinos</h4>
                <Link to="/alto-paraiso" className="text-xs text-muted-foreground hover:text-primary">Alto Paraíso</Link>
                <Link to="/sao-jorge" className="text-xs text-muted-foreground hover:text-primary">São Jorge</Link>
                <Link to="/cavalcante" className="text-xs text-muted-foreground hover:text-primary">Cavalcante</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Conteúdo</h4>
                <Link to="/pousadas" className="text-xs text-muted-foreground hover:text-primary">Pousadas</Link>
                <Link to="/roteiros" className="text-xs text-muted-foreground hover:text-primary">Roteiros</Link>
                <Link to="/experiencias" className="text-xs text-muted-foreground hover:text-primary">Experiências</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Institucional</h4>
                <Link to="/sobre" className="text-xs text-muted-foreground hover:text-primary">Sobre</Link>
                <Link to="/para-pousadas" className="text-xs text-muted-foreground hover:text-primary">Para Pousadas</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
              © {new Date().getFullYear()} CHAPADA DOS VEADEIROS ONLINE. TODOS OS DIREITOS RESERVADOS.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Um projeto <span className="font-bold text-foreground/80">SOBI DIGITAL</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
