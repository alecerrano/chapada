import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-chapada.jpg";
import vilaImg from "@/assets/vila.jpg";
import valeLuaImg from "@/assets/vale-lua.jpg";
import cachoeiraImg from "@/assets/cachoeira.jpg";
import { Button } from "@/components/ui/button";
import { 
  Heart, Users, Mountain, 
  Sparkles, Crown, Ticket, Droplets, ArrowRight,
  Compass, Car, Calendar, Info
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
    description: "Estrutura completa, gastronomia diversa e o ponto central para exploração regional.",
    image: vilaImg,
    to: "/alto-paraiso"
  },
  {
    name: "São Jorge",
    description: "Charme rústico, porta de entrada do Parque Nacional e atmosfera pé no chão.",
    image: valeLuaImg,
    to: "/sao-jorge"
  },
  {
    name: "Cavalcante",
    description: "Cerrado profundo, cultura Kalunga e o caminho para a mística Santa Bárbara.",
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
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />

      {/* Hero Section */}
      <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Chapada dos Veadeiros"
            className="h-full w-full object-cover brightness-[0.6] transition-transform duration-[15s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        </div>

        <div className="relative z-10 w-full max-w-[90rem] px-8 lg:px-16">
          <div className="max-w-5xl">
            <span className="mb-8 inline-block text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Edição 2026 — Guia Editorial
            </span>
            <h1 className="font-display text-6xl font-medium leading-[1.05] text-white md:text-8xl lg:text-[10rem] tracking-tighter">
              A Chapada<br />
              <span className="italic font-light">Inspirada.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-xl text-white/80 md:text-2xl font-light leading-relaxed">
              Um guia curado para quem busca escolher melhor onde ficar, o que fazer e como viver o destino com intenção.
            </p>

            <div className="mt-16 flex flex-wrap gap-6">
              <Link to="/onde-ficar">
                <Button className="rounded-none bg-accent px-12 py-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all">
                  Onde Ficar
                </Button>
              </Link>
              <Link to="/roteiros">
                <Button variant="outline" className="rounded-none border-white/20 bg-white/5 px-12 py-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl hover:bg-white hover:text-black transition-all">
                  Explorar Roteiros
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 right-16 hidden lg:block">
           <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Scroll to explore</span>
              <div className="h-[1px] w-24 bg-white/20" />
           </div>
        </div>
      </section>

      {/* Institutional Quote */}
      <section className="bg-background py-32 lg:py-56 border-b border-border/50">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="max-w-4xl">
            <p className="font-display text-4xl font-light italic leading-tight text-foreground/90 md:text-6xl lg:text-7xl tracking-tight">
              "A Chapada já tem desejo. O Chapada dos Veadeiros Online organiza a decisão."
            </p>
            <div className="mt-16 flex items-center gap-6">
               <div className="h-[1px] w-12 bg-primary" />
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                 SOBI DIGITAL — Inteligência Editorial
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escolha sua base */}
      <section className="bg-background py-32 lg:py-48">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 block">Geografia e Base</span>
              <h2 className="font-display text-5xl font-medium leading-[1.1] md:text-7xl tracking-tighter">
                Onde ficar na Chapada?
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground font-light">
              Escolher bem sua base muda toda a experiência. Alto Paraíso, São Jorge e Cavalcante oferecem ritmos e acessos distintos.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {bases.map((base) => (
              <Link key={base.name} to={base.to as any} className="group flex flex-col gap-10">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={base.image}
                    alt={base.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-4xl font-medium tracking-tight">{base.name}</h3>
                    <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-3" />
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground font-light">{base.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Planeje por perfil */}
      <section className="bg-foreground py-32 text-background lg:py-48">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/40 mb-6 block">Curadoria por Perfil</span>
            <h2 className="font-display text-5xl font-medium md:text-7xl lg:text-8xl tracking-tighter italic">
              O que você quer viver?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px bg-background/10 md:grid-cols-4">
            {perfis.map((p) => (
              <Link
                key={p.name}
                to={p.to as any}
                className="group flex flex-col items-center justify-center p-16 transition-all hover:bg-background hover:text-foreground"
              >
                <p.icon className="mb-8 h-10 w-10 stroke-[1px] transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pousadas em destaque */}
      <section className="bg-background py-32 lg:py-48">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 block">Seleção SOBI</span>
              <h2 className="font-display text-5xl font-medium leading-[1.1] md:text-7xl tracking-tighter">
                Hospedagens Escolhidas
              </h2>
            </div>
            <Link to="/pousadas">
              <Button variant="link" className="p-0 text-[10px] font-bold uppercase tracking-[0.3em] text-primary hover:no-underline hover:text-accent transition-colors">
                Ver Curadoria Completa <ArrowRight className="ml-4 h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {pousadasDestaque.map((p) => (
              <div key={p.name} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-muted mb-10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">{p.location}</span>
                    <div className="h-[1px] w-8 bg-border" />
                  </div>
                  <h3 className="mb-6 font-display text-3xl font-medium tracking-tight group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tags.map(tag => (
                      <span key={tag} className="border border-border px-4 py-1.5 text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full rounded-none py-8 text-[10px] font-bold uppercase tracking-[0.2em] border-border hover:bg-foreground hover:text-background transition-all">
                    Explorar Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roteiros e Cachoeiras - Grid Minimalista */}
      <section className="bg-secondary py-32 lg:py-48">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-32">
             {/* Roteiros */}
             <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-8 block">Logística de Viagem</span>
                <h2 className="font-display text-5xl font-medium md:text-6xl tracking-tighter mb-16">Roteiros Prontos</h2>
                <div className="flex flex-col border-t border-border">
                  {roteiros.slice(0, 4).map((r) => (
                    <Link
                      key={r}
                      to="/roteiros"
                      className="group flex items-center justify-between py-10 border-b border-border transition-all hover:px-6"
                    >
                      <span className="text-xl font-display font-medium group-hover:text-primary transition-colors">{r}</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-3 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
             </div>
             
             {/* Cachoeiras */}
             <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-8 block">Natureza Icônica</span>
                <h2 className="font-display text-5xl font-medium md:text-6xl tracking-tighter mb-16">Cachoeiras</h2>
                <div className="grid grid-cols-2 gap-4">
                  {cachoeiras.slice(0, 4).map((c) => (
                    <Link key={c} to="/cachoeiras" className="group relative aspect-square overflow-hidden">
                       <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">Explore</span>
                          <h4 className="text-xl font-display font-medium text-white tracking-tight">{c}</h4>
                       </div>
                       <div className="h-full w-full bg-primary/20 transition-transform duration-1000 group-hover:scale-110" />
                    </Link>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-4 p-8 bg-background border border-border">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                    Avisos: Acesso, valores e regras variam. Confirme com fontes oficiais antes de sua jornada.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Guias Editoriais */}
      <section className="bg-background py-32 lg:py-56">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 block">Editorial</span>
            <h2 className="font-display text-5xl font-medium md:text-7xl lg:text-8xl tracking-tighter">
              Guia de Planejamento
            </h2>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-3">
            {blogPosts.slice(0, 6).map((post) => (
              <ArticleCard 
                key={post.slug}
                title={post.title}
                category={post.category}
                slug={post.slug}
                subtitle={post.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Comercial */}
      <section className="bg-primary text-primary-foreground py-32 lg:py-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8 block">Hospitalidade Local</span>
            <h2 className="font-display text-5xl font-medium leading-[1.05] md:text-8xl tracking-tighter mb-12 text-white">
              Sua pousada no <br /><span className="italic font-light">coração do cerrado.</span>
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-2xl font-light leading-relaxed">
              O Chapada dos Veadeiros Online conecta experiências de alto padrão a viajantes que buscam o extraordinário.
            </p>
            <Link to="/para-pousadas">
              <Button size="lg" className="bg-white text-black hover:bg-accent rounded-none px-16 py-10 text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
                Quero Destacar minha Pousada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre o projeto */}
      <section className="bg-background py-32 lg:py-48">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16 text-center">
           <div className="inline-flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-10 block">Sobre</span>
              <h2 className="font-display text-4xl font-medium mb-12 max-w-3xl tracking-tight leading-tight italic">
                Um guia editorial desenhado para organizar a decisão de viagem com clareza e beleza.
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed font-light text-lg">
                Um projeto SOBI DIGITAL focado em curadoria de hospedagens, roteiros e informações essenciais para o Planalto Central.
              </p>
           </div>
        </div>
      </section>

      <PortalFooter />
    </div>
  );
}
