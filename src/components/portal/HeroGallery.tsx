import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-chapada.jpg";
import valeLuaImg from "@/assets/vale-lua.jpg";
import cachoeiraImg from "@/assets/cachoeira.jpg";
import vilaImg from "@/assets/vila.jpg";

interface HeroSlide {
  image: string;
  edition: string;
  number: string;
  category: string;
  title: React.ReactNode;
  excerpt: string;
  ctaLabel: string;
  ctaTo: string;
  meta: { label: string; value: string }[];
}

const slides: HeroSlide[] = [
  {
    image: heroImg,
    edition: "Capítulo 01",
    number: "01 — 04",
    category: "O Destino",
    title: <>A Chapada<br /><span className="italic font-light">Inspirada.</span></>,
    excerpt: "Um guia editorial curado para quem busca viver o cerrado brasileiro com clareza, beleza e intenção.",
    ctaLabel: "Iniciar Jornada",
    ctaTo: "/onde-ficar",
    meta: [
      { label: "Bioma", value: "Cerrado" },
      { label: "Estado", value: "Goiás" },
      { label: "Patrimônio", value: "UNESCO" },
    ]
  },
  {
    image: cachoeiraImg,
    edition: "Capítulo 02",
    number: "02 — 04",
    category: "As Águas",
    title: <>Águas<br /><span className="italic font-light">Eternas.</span></>,
    excerpt: "Mais de 240 mil hectares pontuados por cachoeiras icônicas. Santa Bárbara, Vale da Lua e os segredos do Rio Preto.",
    ctaLabel: "Explorar Cachoeiras",
    ctaTo: "/cachoeiras",
    meta: [
      { label: "Cachoeiras", value: "+100" },
      { label: "Altitude", value: "1.200m" },
      { label: "Estação", value: "Seca/Cheia" },
    ]
  },
  {
    image: valeLuaImg,
    edition: "Capítulo 03",
    number: "03 — 04",
    category: "A Pedra",
    title: <>Quartzo &<br /><span className="italic font-light">Silêncio.</span></>,
    excerpt: "O solo cristalino do Planalto Central. Onde a geologia ancestral encontra a contemplação moderna.",
    ctaLabel: "Roteiros Editoriais",
    ctaTo: "/roteiros",
    meta: [
      { label: "Geologia", value: "Quartzito" },
      { label: "Era", value: "Pré-Cambriana" },
      { label: "Mineral", value: "Cristal" },
    ]
  },
  {
    image: vilaImg,
    edition: "Capítulo 04",
    number: "04 — 04",
    category: "As Vilas",
    title: <>Bases para<br /><span className="italic font-light">Habitar.</span></>,
    excerpt: "Alto Paraíso, São Jorge e Cavalcante. Três experiências de hospedagem distintas para diferentes ritmos de jornada.",
    ctaLabel: "Onde Ficar",
    ctaTo: "/onde-ficar",
    meta: [
      { label: "Bases", value: "Três Vilas" },
      { label: "Curadoria", value: "SOBI" },
      { label: "Hospedagens", value: "Editoriais" },
    ]
  }
];

export const HeroGallery = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index: number) => {
    if (index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 600);
  };

  const slide = slides[active];

  return (
    <section className="relative h-[100svh] min-h-[800px] w-full overflow-hidden bg-foreground">
      {/* Background images stacked with crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover brightness-[0.85]"
            style={{
              transform: i === active ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        </div>
      ))}

      {/* Top Edition Bar */}
      <div className="absolute top-32 inset-x-0 z-10 hidden lg:block">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="flex items-center justify-between border-t border-white/15 pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              {slide.edition}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
              Edição 2026 · SOBI DIGITAL
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
              {slide.number}
            </span>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[90rem] px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-end pb-32">
            {/* Editorial Block - left */}
            <div
              className={`lg:col-span-8 transition-all duration-700 ease-out ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                  {slide.category}
                </span>
                <div className="h-[1px] w-16 bg-accent/60" />
              </div>

              <h1 className="font-display text-6xl font-medium leading-[1] text-white md:text-8xl lg:text-[10rem] tracking-tighter">
                {slide.title}
              </h1>

              <p className="mt-12 max-w-xl text-xl text-white/80 md:text-2xl font-light leading-relaxed italic">
                {slide.excerpt}
              </p>

              <div className="mt-14 flex flex-wrap gap-4">
                <Link to={slide.ctaTo as any}>
                  <Button className="rounded-none bg-accent px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-black hover:bg-white transition-all duration-500">
                    {slide.ctaLabel}
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button
                    variant="outline"
                    className="rounded-none border-white/20 bg-white/5 px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Sobre o Guia
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right meta sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div
                className={`border-l border-white/15 pl-10 transition-all duration-700 delay-100 ${
                  isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block mb-12">
                  Ficha Editorial
                </span>
                <div className="flex flex-col gap-8">
                  {slide.meta.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-6">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                        {m.label}
                      </span>
                      <span className="font-display text-2xl font-light italic text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation - chapter selector */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`group relative py-8 text-left px-6 transition-all duration-500 hover:bg-white/5 ${
                  i === active ? "bg-white/5" : ""
                }`}
              >
                {/* Top progress bar */}
                <div className="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-700"
                  style={{ width: i === active ? "100%" : "0%" }}
                />
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.4em] transition-colors ${
                      i === active ? "text-accent" : "text-white/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <ArrowRight
                    className={`h-3 w-3 transition-all ${
                      i === active ? "text-accent translate-x-0 opacity-100" : "text-white/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
                <h4
                  className={`font-display text-xl lg:text-2xl font-medium transition-colors leading-tight ${
                    i === active ? "text-white" : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {s.category}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
