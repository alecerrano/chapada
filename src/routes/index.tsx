import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-chapada.jpg";
import vilaImg from "@/assets/vila.jpg";
import valeLuaImg from "@/assets/vale-lua.jpg";
import cachoeiraImg from "@/assets/cachoeira.jpg";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Heart, Users, Mountain, 
  Sparkles, Crown, Ticket, Droplets, ArrowRight,
  Clock, Compass, Car, Calendar, Info
} from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { ArticleCard } from "@/components/portal/ArticleCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Chapada dos Veadeiros Online | Onde ficar, roteiros, pousadas e cachoeiras" },
      {
        name: "description",
        content:
          "Guia editorial para planejar sua viagem pela Chapada dos Veadeiros: onde ficar, pousadas, roteiros, cachoeiras, Alto Paraíso, São Jorge, Cavalcante e experiências.",
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
    tags: ["exemplo", "casal", "vista"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Chalés Caminho das Águas",
    location: "São Jorge",
    tags: ["exemplo", "natureza", "vila"],
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Refúgio Santa Bárbara",
    location: "Cavalcante",
    tags: ["exemplo", "autenticidade", "descanso"],
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

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/20 selection:text-primary">
      <PortalHeader />

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

      {/* Escolha sua base */}
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
              <Link key={base.name} to={base.to as any} className="group flex flex-col gap-6 overflow-hidden">
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

      {/* Planeje por perfil */}
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
                to={p.to as any}
                className="group flex flex-col items-center justify-center border border-background/10 py-12 transition-colors hover:bg-background hover:text-foreground"
              >
                <p.icon className="mb-4 h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pousadas em destaque */}
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
            * Hospedagens de exemplo para curadoria editorial.
          </p>
        </div>
      </section>

      {/* Roteiros Prontos */}
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

      {/* Cachoeiras e Paisagens */}
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

      {/* Guias para planejar melhor */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Guias para planejar melhor
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.slice(0, 6).map((post) => (
              <ArticleCard 
                key={post.slug}
                title={post.title}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Comercial */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium md:text-5xl mb-6 text-white">Sua pousada pode aparecer melhor para quem está planejando a Chapada.</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">O Chapada dos Veadeiros Online conecta hospedagens, experiências e serviços locais a viajantes que estão pesquisando onde ficar, o que fazer e como viver melhor a Chapada dos Veadeiros.</p>
          <Link to="/para-pousadas">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-8 py-7 font-bold uppercase tracking-widest">
              Quero destacar minha pousada
            </Button>
          </Link>
        </div>
      </section>

      {/* Sobre o projeto */}
      <section className="bg-background py-24 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-medium mb-6">Um guia criado para organizar a decisão de viagem.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O Chapada dos Veadeiros Online é um projeto da SOBI DIGITAL para reunir conteúdo editorial, curadoria de hospedagens, roteiros e informações úteis para quem deseja viver a Chapada com mais clareza, beleza e segurança.
          </p>
        </div>
      </section>

      <PortalFooter />
    </div>
  );
}
