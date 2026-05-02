import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Users, Map, Camera, Utensils, Compass, Crown } from "lucide-react";

export const Route = createFileRoute("/experiencias")({
  component: Experiencias,
});

function Experiencias() {
  const cats = [
    { n: "Bem-estar", i: Sparkles }, { n: "Retiros", i: Map },
    { n: "Yoga", i: Heart }, { n: "Gastronomia", i: Utensils },
    { n: "Pôr do sol", i: Camera }, { n: "Trilhas", i: Compass },
    { n: "Fotografia", i: Camera }, { n: "Experiências românticas", i: Heart },
    { n: "Viagem premium", i: Crown }
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-16">Experiências na Chapada dos Veadeiros</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cats.map(c => (
            <div key={c.n} className="border border-border p-10 flex flex-col items-center justify-center text-center hover:bg-primary/5 transition-colors cursor-pointer">
              <c.i className="h-8 w-8 text-primary mb-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{c.n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
