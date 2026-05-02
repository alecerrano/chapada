import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pousadas")({
  component: Pousadas,
});

function Pousadas() {
  const filtros = ["Alto Paraíso", "São Jorge", "Cavalcante", "Casal", "Família", "Luxo", "Chalé", "Vista", "Natureza"];
  
  const pousadas = [
    { name: "Pousada Vista do Cerrado", city: "Alto Paraíso", perfil: "Casal", tag: "Vista", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
    { name: "Chalé das Estrelas", city: "São Jorge", perfil: "Casal", tag: "Natureza", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800" },
    { name: "Eco Lodge Veadeiros", city: "Cavalcante", perfil: "Aventura", tag: "Sustentável", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800" },
    { name: "Reserva do Sol", city: "Alto Paraíso", perfil: "Família", tag: "Piscina", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">Pousadas na Chapada dos Veadeiros</h1>
          <p className="text-xl text-muted-foreground">Encontre hospedagens por cidade, estilo de viagem e tipo de experiência.</p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {filtros.map(f => (
            <Badge key={f} variant="outline" className="rounded-none px-4 py-2 border-border/50 text-[10px] uppercase tracking-widest cursor-pointer hover:bg-primary hover:text-white transition-colors">
              {f}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pousadas.map(p => (
            <div key={p.name} className="group border border-border bg-white overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  <MapPin className="h-3 w-3" /> {p.city}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{p.name}</h3>
                <div className="flex gap-2 mb-8">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">{p.perfil}</span>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">• {p.tag}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-none text-[10px] font-bold uppercase tracking-widest">Ver detalhes</Button>
                  <Button className="rounded-none text-[10px] font-bold uppercase tracking-widest">Consultar</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
