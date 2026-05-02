import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-chapada.jpg";
import cachoeiraImg from "@/assets/cachoeira.jpg";
import valeLuaImg from "@/assets/vale-lua.jpg";
import vilaImg from "@/assets/vila.jpg";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, MapPin, Heart, Users, Mountain, 
  Sparkles, Crown, Ticket, Droplets, ArrowRight,
  Clock, Compass, Tent, Car, Calendar, Info
} from "lucide-react";
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

const bases = [
  {
    name: "Alto Paraíso",
    description: "Para quem quer estrutura, restaurantes, variedade de pousadas e boa base para explorar diferentes regiões da Chapada.",
    image: vilaImg,
    to: "/alto-paraiso"
  },
  {
    name: "São Jorge",
    description: "Para quem quer ficar perto do Parque Nacional, viver uma vila charmosa e ter uma experiência mais rústica, alternativa e caminhável.",
    image: valeLuaImg,
    to: "/sao-jorge"
  },
  {
    name: "Cavalcante",
    description: "Para quem busca Santa Bárbara, natureza profunda, autenticidade e uma Chapada mais contemplativa.",
    image: cachoeiraImg,
    to: "/cavalcante"
  }
];

const perfis = [
  { name: "Primeira viagem", icon: Compass, to: "/roteiros" },
  { name: "Casal", icon: Heart, to: "/roteiros" },
  { name: "Família", icon: Users, to: "/roteiros" },
  { name: "Aventura", icon: Mountain, to: "/roteiros" },
  { name: "Bem-estar", icon: Sparkles, to: "/roteiros" },
  { name: "Luxo e charme", icon: Crown, to: "/roteiros" },
  { name: "Econômica", icon: Ticket, to: "/roteiros" },
  { name: "Cachoeiras", icon: Droplets, to: "/cachoeiras" },
];

const pousadasDestaque = [
  {
    name: "Pousada Vista do Cerrado",
    location: "Alto Paraíso",
    tags: ["casal", "vista", "silêncio"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Chalés Caminho das Águas",
    location: "São Jorge",
    tags: ["natureza", "trilhas", "vila"],
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Refúgio Santa Bárbara",
    location: "Cavalcante",
    tags: ["autenticidade", "cachoeiras", "descanso"],
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
  }
];

const roteiros = [
  "Roteiro de 3 dias", "Roteiro de 4 dias", "Roteiro de 5 dias",
  "Roteiro para casal", "Roteiro de cachoeiras", "Primeira viagem à Chapada"
];

const cachoeiras = [
  "Santa Bárbara", "Vale da Lua", "Catarata dos Couros", "Almécegas",
  "Loquinhas", "Rio Preto", "Segredo", "Macaquinhos"
];

const guias = [
  { title: "Onde ficar na Chapada dos Veadeiros", category: "Hospedagem" },
  { title: "Alto Paraíso ou São Jorge: qual escolher?", category: "Planejamento" },
  { title: "Roteiro de 3 dias na Chapada", category: "Roteiros" },
  { title: "Melhores cachoeiras da Chapada", category: "Turismo" },
  { title: "Quando ir para a Chapada dos Veadeiros", category: "Planejamento" },
  { title: "Precisa de carro na Chapada?", category: "Dicas" },
];

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
            <Link to="/planeje-sua-viagem">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border-foreground/10 px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
              >
                Planeje sua viagem
              </Button>
            </Link>
          </div>

          <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

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

      {/* Hero Section */}
      <section className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Chapada dos Veadeiros"
            className="h-full w-full object-cover brightness-75 transition-transform duration-[10s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
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

      {/* Institutional Quote */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="mx-auto max-w-4xl font-display text-2xl font-light italic leading-relaxed text-foreground/80 md:text-3xl lg:text-4xl">
            "A Chapada já tem desejo. O Chapada dos Veadeiros Online organiza a decisão."
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="h-12 w-[1px] bg-primary/30" />
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
               Um guia editorial para escolher melhor
             </p>
          </div>
        </div>
      </section>

      {/* Seção 2: Escolha sua base */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              Onde ficar na Chapada?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Chapada dos Veadeiros não é um destino de uma única base. Alto Paraíso, São Jorge e Cavalcante oferecem experiências diferentes — e escolher bem onde ficar muda toda a viagem.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {bases.map((base) => (
              <Link key={base.name} to={base.to} className="group flex flex-col gap-6 overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={base.image}
                    alt={base.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{base.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{base.description}</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Conhecer região <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/onde-ficar">
              <Button variant="outline" className="rounded-none border-foreground/10 px-12 py-7 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background">
                Comparar as regiões
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 3: Planeje por perfil */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
              Que tipo de Chapada você quer viver?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {perfis.map((p) => (
              <Link
                key={p.name}
                to={p.to}
                className="group flex flex-col items-center justify-center border border-background/10 py-12 transition-colors hover:bg-background hover:text-foreground"
              >
                <p.icon className="mb-4 h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Pousadas em destaque */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Hospedagens selecionadas
              </h2>
              <p className="mt-4 text-muted-foreground">
                Curadoria de pousadas, chalés, glampings e hospedagens para diferentes estilos de viagem pela Chapada dos Veadeiros.
              </p>
            </div>
            <Link to="/pousadas">
              <Button variant="link" className="p-0 text-xs font-bold uppercase tracking-widest text-primary">
                Ver todas <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {pousadasDestaque.map((p) => (
              <div key={p.name} className="group relative overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-primary">{p.location}</div>
                  <h3 className="mb-4 font-display text-2xl font-bold">{p.name}</h3>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="bg-secondary px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full rounded-none py-6 text-xs font-bold uppercase tracking-widest">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[10px] italic text-muted-foreground/60">
            * Nomes e hospedagens de exemplo para curadoria editorial.
          </p>
        </div>
      </section>

      {/* Seção 5: Roteiros Prontos */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Roteiros para diferentes tempos de viagem
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {roteiros.map((r) => (
              <Link
                key={r}
                to="/roteiros"
                className="group flex items-center justify-between border border-border bg-background p-8 transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">{r}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-2 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 6: Cachoeiras e Paisagens */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Cachoeiras e paisagens que definem a Chapada
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Das águas azul-turquesa de Santa Bárbara às pedras lunares do Vale da Lua. Conheça os ícones do cerrado.
              </p>
            </div>
            <Link to="/cachoeiras">
              <Button className="rounded-none bg-primary px-8 py-6 text-xs font-bold uppercase tracking-widest">
                Ver todas
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {cachoeiras.map((c) => (
              <div key={c} className="group relative aspect-square cursor-pointer overflow-hidden bg-muted">
                <div className="absolute inset-0 z-10 flex items-end p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white opacity-80 transition-opacity group-hover:opacity-100">
                    {c}
                  </span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="h-full w-full bg-primary/20 transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-2 rounded-lg bg-secondary p-4 text-[10px] text-muted-foreground md:justify-center">
            <Info className="h-4 w-4 flex-shrink-0" />
            <p>Informações de acesso, valores, horários e regras devem ser sempre confirmadas com fontes oficiais ou operadores locais antes da visita.</p>
          </div>
        </div>
      </section>

      {/* Seção 7: Guias para planejar melhor */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Guias para planejar melhor
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {guias.map((g) => (
              <Link key={g.title} to="/planeje-sua-viagem" className="group flex flex-col gap-6 bg-background p-10 shadow-sm transition-all hover:shadow-md">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">{g.category}</div>
                <h3 className="font-display text-2xl font-bold leading-tight transition-colors group-hover:text-primary">
                  {g.title}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                  Ler guia completo <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Link to="/" className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-tighter uppercase leading-none">
                  Chapada dos Veadeiros
                </span>
                <span className="font-display text-lg font-light tracking-[0.3em] uppercase leading-none text-primary">
                  Online
                </span>
              </Link>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Onde ficar, o que fazer e como viver melhor a Chapada. Curadoria editorial para quem busca beleza e intenção em cada jornada.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-12 md:grid-cols-3">
              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Destinos</h4>
                <div className="flex flex-col gap-4">
                  <Link to="/alto-paraiso" className="text-xs text-muted-foreground transition-colors hover:text-primary">Alto Paraíso</Link>
                  <Link to="/sao-jorge" className="text-xs text-muted-foreground transition-colors hover:text-primary">São Jorge</Link>
                  <Link to="/cavalcante" className="text-xs text-muted-foreground transition-colors hover:text-primary">Cavalcante</Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Conteúdo</h4>
                <div className="flex flex-col gap-4">
                  <Link to="/pousadas" className="text-xs text-muted-foreground transition-colors hover:text-primary">Pousadas</Link>
                  <Link to="/roteiros" className="text-xs text-muted-foreground transition-colors hover:text-primary">Roteiros</Link>
                  <Link to="/experiencias" className="text-xs text-muted-foreground transition-colors hover:text-primary">Experiências</Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Institucional</h4>
                <div className="flex flex-col gap-4">
                  <Link to="/sobre" className="text-xs text-muted-foreground transition-colors hover:text-primary">Sobre</Link>
                  <Link to="/para-pousadas" className="text-xs text-muted-foreground transition-colors hover:text-primary">Para Pousadas</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-border pt-12 md:flex-row">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
              © {new Date().getFullYear()} CHAPADA DOS VEADEIROS ONLINE. TODOS OS DIREITOS RESERVADOS.
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
              Um projeto <span className="font-bold text-foreground/80">SOBI DIGITAL</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
