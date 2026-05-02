import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/roteiros")({
  component: Roteiros,
});

function Roteiros() {
  const roteiros = [
    "Roteiro de 3 dias", "Roteiro de 4 dias", "Roteiro de 5 dias",
    "Primeira viagem", "Viagem de casal", "Roteiro de cachoeiras",
    "Roteiro leve", "Roteiro premium"
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-16 text-center">Roteiros pela Chapada dos Veadeiros</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roteiros.map(r => (
            <div key={r} className="border border-border bg-white p-8 hover:border-primary transition-colors flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 text-primary mb-6" />
              <h3 className="font-display text-lg font-bold mb-6 leading-tight">{r}</h3>
              <Button variant="outline" className="rounded-none text-[10px] font-bold uppercase tracking-widest w-full">Ver roteiro</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
