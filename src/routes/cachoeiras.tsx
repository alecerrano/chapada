import { createFileRoute, Link } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-12">Cachoeiras da Chapada dos Veadeiros</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cachoeiras.map(c => (
            <div key={c.name} className="border border-border p-8 hover:border-primary transition-colors">
              <h3 className="font-display text-xl font-bold mb-4">{c.name}</h3>
              <div className="space-y-2 mb-8">
                <p className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> {c.local}
                </p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Esforço: {c.esforco}</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Perfil: {c.perfil}</p>
              </div>
              <Button variant="link" className="p-0 text-xs font-bold uppercase tracking-widest text-primary">
                Ver guia <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-start gap-4 p-8 bg-secondary border border-border">
          <Info className="h-5 w-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            Valores, horários, regras de acesso e necessidade de guia podem mudar. Antes de visitar, confirme com fontes oficiais, guias locais ou responsáveis pela atração.
          </p>
        </div>
      </div>
    </div>
  );
}
