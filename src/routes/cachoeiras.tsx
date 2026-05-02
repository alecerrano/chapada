import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Info } from "lucide-react";

export const Route = createFileRoute("/cachoeiras")({
  component: Cachoeiras,
});

function Cachoeiras() {
  const cachoeiras = [
    { name: "Santa Bárbara", local: "Cavalcante", esforco: "Médio", perfil: "Iconográfica" },
    { name: "Vale da Lua", local: "São Jorge", esforco: "Leve", perfil: "Contemplativa" },
    { name: "Catarata dos Couros", local: "Alto Paraíso", esforco: "Médio", perfil: "Aventura" },
    { name: "Almécegas I e II", local: "Alto Paraíso", esforco: "Leve/Médio", perfil: "Família" },
    { name: "Loquinhas", local: "Alto Paraíso", esforco: "Leve", perfil: "Família" },
    { name: "Rio Preto", local: "São Jorge", esforco: "Médio", perfil: "Parque Nacional" },
    { name: "Segredo", local: "São Jorge", esforco: "Médio", perfil: "Trilha" },
    { name: "Macaquinhos", local: "Alto Paraíso", esforco: "Alto", perfil: "Natureza selvagem" },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />
      <main className="pt-48 pb-32">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-10 block">Patrimônio Natural</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium mb-12 leading-[1.05] tracking-tighter">
              Cachoeiras e <br /><span className="italic font-light">Abismos de Água.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              O cerrado revela seus segredos através de quedas monumentais. Nossa seleção das águas que definem o Planalto Central.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {cachoeiras.map(c => (
              <div key={c.name} className="group bg-background p-12 transition-all hover:bg-secondary">
                <div className="mb-10 text-[9px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                   {c.local} <div className="h-[1px] w-6 bg-border" />
                </div>
                <h3 className="font-display text-3xl font-medium mb-8 tracking-tight">{c.name}</h3>
                <div className="space-y-3 mb-12">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60">Esforço: <span className="text-foreground">{c.esforco}</span></p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60">Perfil: <span className="text-foreground">{c.perfil}</span></p>
                </div>
                <Button variant="link" className="p-0 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-foreground transition-colors">
                  Ver Guia do Local <ArrowRight className="ml-4 h-3 w-3 transition-transform group-hover:translate-x-2" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-32 flex flex-col md:flex-row items-center gap-10 p-16 bg-secondary border border-border">
            <Info className="h-8 w-8 text-primary shrink-0 opacity-50" />
            <p className="text-sm text-muted-foreground leading-relaxed italic font-light">
              Nota Editorial: As informações de acesso, valores, horários e regras são dinâmicas e podem mudar sem aviso prévio. Antes de sua jornada, sempre confirme detalhes com fontes oficiais, guias locais ou responsáveis pela atração.
            </p>
          </div>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
}
