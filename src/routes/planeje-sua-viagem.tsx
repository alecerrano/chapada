import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Car, MapPin, Luggage, DollarSign, CloudRain, AlertCircle, Info } from "lucide-react";

export const Route = createFileRoute("/planeje-sua-viagem")({
  component: Planeje,
});

function Planeje() {
  const blocos = [
    { n: "Quando ir", i: Clock }, { n: "Como chegar", i: Car },
    { n: "Quantos dias ficar", i: MapPin }, { n: "Precisa de carro?", i: Car },
    { n: "O que levar", i: Luggage }, { n: "Quanto custa", i: DollarSign },
    { n: "Seca ou chuva", i: CloudRain }, { n: "Primeira viagem", i: AlertCircle },
    { n: "Erros comuns", i: Info }
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-16 text-center">Planeje sua viagem</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blocos.map(b => (
            <div key={b.n} className="border border-border p-12 bg-white flex items-center gap-6 hover:border-primary transition-colors cursor-pointer">
              <b.i className="h-8 w-8 text-primary shrink-0" />
              <span className="text-lg font-display font-bold leading-tight">{b.n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
