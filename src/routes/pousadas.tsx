import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pousadas")({
  component: Pousadas,
});

function Pousadas() {
  const filtros = ["Alto Paraíso", "São Jorge", "Cavalcante", "Casal", "Família", "Luxo", "Chalé", "Vista", "Natureza"];
  
  const pousadas = [
    { name: "Pousada Vista do Cerrado", city: "Alto Paraíso", perfil: "Casal", tag: "Exemplo", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
    { name: "Chalé das Estrelas", city: "São Jorge", perfil: "Casal", tag: "Exemplo", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800" },
    { name: "Eco Lodge Veadeiros", city: "Cavalcante", perfil: "Aventura", tag: "Exemplo", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800" },
    { name: "Reserva do Sol", city: "Alto Paraíso", perfil: "Família", tag: "Exemplo", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <PortalHeader />
      <main className="pt-48 pb-32">
        <div className="mx-auto max-w-[90rem] px-8 lg:px-16">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-10 block">Hospedagens Selecionadas</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium mb-12 leading-[1.05] tracking-tighter italic">
              A Curadoria.
            </h1>
            <p className="text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Encontre hospedagens selecionadas por cidade, estilo de viagem e tipo de experiência. Onde a beleza e a intenção se encontram.
            </p>
          </div>

          <div className="mb-24 flex flex-wrap gap-4 border-b border-border pb-12">
            {filtros.map(f => (
              <Badge key={f} variant="outline" className="rounded-none px-8 py-3 border-border text-[9px] font-bold uppercase tracking-[0.3em] cursor-pointer hover:bg-foreground hover:text-background transition-all">
                {f}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {pousadas.map(p => (
              <div key={p.name} className="group flex flex-col transition-all">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-10">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-6">
                    <MapPin className="h-3 w-3" /> {p.city}
                    <div className="h-[1px] w-8 bg-border" />
                  </div>
                  <h3 className="font-display text-4xl font-medium tracking-tight mb-6 group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex gap-4 mb-12">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground">{p.perfil}</span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground border-l border-border pl-4">{p.tag}</span>
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-px bg-border border border-border">
                    <Button variant="ghost" className="rounded-none text-[9px] font-bold uppercase tracking-[0.3em] py-10 bg-white hover:bg-secondary transition-all">Detalhes</Button>
                    <Button className="rounded-none text-[9px] font-bold uppercase tracking-[0.3em] py-10 bg-foreground text-background hover:bg-primary transition-all">Disponibilidade</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 p-16 bg-secondary text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Aviso Editorial: As hospedagens listadas acima são exemplos selecionados para fins de demonstração da curadoria premium do portal.
            </p>
          </div>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
}
