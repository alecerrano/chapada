import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-chapada.jpg";
import cachoeiraImg from "@/assets/cachoeira.jpg";
import valeLuaImg from "@/assets/vale-lua.jpg";
import vilaImg from "@/assets/vila.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Chapada dos Veadeiros | Portal oficial de turismo" },
      {
        name: "description",
        content:
          "Descubra a Chapada dos Veadeiros: cachoeiras, trilhas, vilarejos e o coração do cerrado brasileiro. Seu guia completo para a viagem dos sonhos.",
      },
    ],
  }),
});

const destinos = [
  {
    titulo: "Cachoeiras",
    descricao: "Águas cristalinas, poços azuis e quedas espetaculares no coração do cerrado.",
    img: cachoeiraImg,
    icon: Sparkles,
  },
  {
    titulo: "Vale da Lua",
    descricao: "Formações rochosas esculpidas pelo rio São Miguel — uma paisagem lunar única.",
    img: valeLuaImg,
    icon: Mountain,
  },
  {
    titulo: "Vilarejos",
    descricao: "Alto Paraíso, São Jorge e Cavalcante: cultura, gastronomia e energia mística.",
    img: vilaImg,
    icon: Compass,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-foreground" />
            <span className="font-display text-xl font-bold tracking-tight text-primary-foreground">
              Chapadadosveadeiros<span className="text-accent">.online</span>
            </span>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
            <a href="#destinos" className="hover:text-accent transition-colors">Destinos</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Vista panorâmica da Chapada dos Veadeiros ao pôr do sol"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur">
            Patrimônio Natural da Humanidade
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
            Chapada dos Veadeiros
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            O coração do cerrado brasileiro: cachoeiras infinitas, trilhas mágicas e a energia
            do Planalto Central.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Explorar destinos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
            >
              Como chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            O que visitar
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Lugares que tocam a alma
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Selecionamos as experiências essenciais para sua jornada pela Chapada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinos.map((d) => (
            <Card
              key={d.titulo}
              className="group overflow-hidden border-border/50 p-0 transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.titulo}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/90 p-2.5 backdrop-blur">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{d.titulo}</h3>
                <p className="mt-2 text-muted-foreground">{d.descricao}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="relative overflow-hidden py-24"
        style={{ background: "var(--gradient-sunset)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Onde o cerrado encontra o céu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
            Localizada no norte de Goiás, a Chapada dos Veadeiros é um Parque Nacional
            tombado pela UNESCO, com mais de 240 mil hectares de cerrado preservado,
            quartzo cristalino e algumas das paisagens mais impressionantes do Brasil.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              ["240k+", "hectares preservados"],
              ["100+", "cachoeiras catalogadas"],
              ["1.200m", "altitude média"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl font-bold">{n}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="font-display text-lg font-bold">
            Chapadadosveadeiros<span className="text-primary">.online</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Portal de turismo da Chapada dos Veadeiros
          </p>
        </div>
      </footer>
    </div>
  );
}
